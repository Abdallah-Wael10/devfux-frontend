"use client";
import { getAuthToken } from "@/app/utils/page";
import React, { useState, useEffect } from "react";
import Nav2 from "@/app/component/nav2/page";
import Card from "@/app/component/card2/page";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "@/app/component/loading/page";

const Project = () => {
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [data, setData] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newExtraImageFile, setNewExtraImageFile] = useState(null);
  const [newProject, setNewProject] = useState({
    title: "",
    status: "Available on Google",
    mainImage: null,
    extraImages: [],
  });

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      router.push("/admin/login");
    }

    fetch(`${baseUrl}/api/project`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, [router,baseUrl]);

  const fetchProjects = () => {
    const token = getAuthToken();

    try {
      setLoading(true);
      fetch(`${baseUrl}/api/project`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error:", error));
    } catch (error) {
        console.error(error);
  
    } finally{
      setLoading(false);
    }
  };

  const handleDelete = async (projectId) => {
    const token = getAuthToken();
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}/api/project/${projectId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          setData(data.filter((project) => project._id !== projectId));
        } else {
          alert("Error deleting project");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while deleting the project");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setSelectedImage(null);
    setNewExtraImageFile(null);
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const projectId = editingProject._id;
    try {
      if (selectedImage && newExtraImageFile) {
        const replaceFormData = new FormData();
        replaceFormData.append("oldImagePath", selectedImage);
        replaceFormData.append("newImage", newExtraImageFile);
        const token = getAuthToken();
        setLoading(true);

        const replaceResponse = await fetch(
          `${baseUrl}/api/project/${projectId}/image`,
          {
            method: "PATCH",
            body: replaceFormData,
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );

        if (!replaceResponse.ok) {
          throw new Error("Failed to replace image");
        }
      } 

      const updateFormData = new FormData();
      updateFormData.append("title", editingProject.title);
      updateFormData.append("status", editingProject.status);

      if (editingProject.mainImageFile) {
        updateFormData.append("mainImage", editingProject.mainImageFile);
      }

      if (editingProject.extraImagesFiles) {
        Array.from(editingProject.extraImagesFiles).forEach((file) => {
          updateFormData.append("extraImages", file);
        });
      }
      const token = getAuthToken();
      const updateResponse = await fetch(
        `${baseUrl}/api/project/${projectId}`,
        {
          method: "PATCH",
          body: updateFormData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!updateResponse.ok) {
        throw new Error("Failed to update project");
      }

      fetchProjects();
      setShowEditModal(false);
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating the project");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = () => {
    setShowCreateModal(true);
    setNewProject({
      title: "",
      status: "Available on Google",
      mainImage: null,
      extraImages: [],
    });
  };

  const handleFileChange = (e, isMainImage = false) => {
    const files = Array.from(e.target.files);
    if (isMainImage) {
      setNewProject({
        ...newProject,
        mainImage: files[0],
      });
    } else {
      setNewProject({
        ...newProject,
        extraImages: [...newProject.extraImages, ...files],
      });
    }
  };

  const removeImage = (index, isMainImage = false) => {
    if (isMainImage) {
      setNewProject({ ...newProject, mainImage: null });
    } else {
      const updatedImages = [...newProject.extraImages];
      updatedImages.splice(index, 1);
      setNewProject({ ...newProject, extraImages: updatedImages });
    }
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    const token = getAuthToken();
    const formData = new FormData();
    formData.append("title", newProject.title);
    formData.append("status", newProject.status);
    
    if (newProject.mainImage) {
      formData.append("mainImage", newProject.mainImage);
    }
    
    if (newProject.extraImages.length > 0) {
      newProject.extraImages.forEach((file) => {
        formData.append("extraImages", file);
      });
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/project`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchProjects();
        setShowCreateModal(false);
      } else {
        alert("Error creating project");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the project");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
    
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="w-full h-[120px] flex justify-center relative bg-white shadow-lg">
        <Nav2 />
      </div>

      <div className="container mx-auto px-4 py-6">
        <button
          onClick={handleCreateProject}
          className="mb-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create New Project
        </button>
      </div>

      {showCreateModal && (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg text-black p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Create New Project</h2>
            <form onSubmit={handleCreateSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block mb-2">Title</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2">Status</label>
                  <select
                    value={newProject.status}
                    onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
                    className="w-full p-2 border rounded"
                  >
                    <option value="Available on Google">Available on Google</option>
                    <option value="Available on Behance">Available on Behance</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Main Image</label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, true)}
                    className="w-full p-2 border rounded"
                    accept="image/*"
                    required
                  />
                  {newProject.mainImage && (
                    <div className="mt-2 relative">
                      <Image
                        src={URL.createObjectURL(newProject.mainImage)}
                        alt="Main preview"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(null, true)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                      >
                        Remove
                      </button>
                      <p className="mt-1 text-sm">{newProject.mainImage.name}</p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-2">Extra Images</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => handleFileChange(e)}
                    className="w-full p-2 border rounded"
                    accept="image/*"
                  />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {newProject.extraImages.map((file, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={`Extra preview ${index}`}
                          width={100}
                          height={100}
                          className="w-full h-24 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded text-xs"
                        >
                          Remove
                        </button>
                        <p className="text-xs mt-1 truncate">{file.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Create Project
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditModal && editingProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg text-black p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Edit Project</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block mb-2">Title</label>
                  <input
                    type="text"
                    value={editingProject.title}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block mb-2">Status</label>
                  <select
                    value={editingProject.status}
                    onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value })}
                    className="w-full p-2 border rounded"
                  >
                    <option value="Available on Google">Available on Google</option>
                    <option value="Available on Behance">Available on Behance</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Current Main Image</label>
                  <Image
                    src={`${baseUrl}/${editingProject.mainImage.replace("\\", "/")}`}
                    alt="Main"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <input
                    type="file"
                    onChange={(e) => setEditingProject({ 
                      ...editingProject, 
                      mainImageFile: e.target.files[0] 
                    })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <label className="block mb-2">Current Extra Images</label>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {editingProject.extraImages.map((img, index) => (
                      <div
                        key={index}
                        className="relative cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                        <Image
                          src={`${baseUrl}/${img.replace("\\", "/")}`}
                          alt={`Extra ${index}`}
                          width={100}
                          height={100}
                          className={`w-full h-24 object-cover ${
                            selectedImage === img ? 'border-2 border-blue-500' : ''
                          }`}
                        />
                        {selectedImage === img && (
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setNewExtraImageFile(e.target.files[0])}
                            className="mt-2 w-full text-sm"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => setEditingProject({ 
                      ...editingProject, 
                      extraImagesFiles: e.target.files 
                    })}
                    className="mt-2"
                  />
                  
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-[30px] pt-[20px] container h-max pb-5 justify-center bg-white flex flex-wrap gap-[74px]">
        {data.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            title={item.title}
            status={item.status}
            mainImage={`${baseUrl}/${item.mainImage.replace("\\", "/")}`}
            onDelete={() => handleDelete(item._id)}
            onEdit={() => handleEdit(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;