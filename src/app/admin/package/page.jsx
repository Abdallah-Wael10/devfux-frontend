"use client";
import { getAuthToken } from "@/app/utils/page";
import React, { useState, useEffect } from 'react';
import Nav2 from '@/app/component/nav2/page';
import { useRouter } from "next/navigation"; 
import Package from '@/app/component/package2/page';
import Loading from "@/app/component/loading/page";

const Package_Admin = () => {
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [packages, setPackages] = useState([]);
  const [editingPackage, setEditingPackage] = useState(null);

  // Initial empty form state
  const initialFormState = {
    name: '',
    price_EGP: '',
    price_USD: '',
    feature1: '',
    feature2: '',
    feature3: '',
    feature4: '',
    feature5: '',
    feature6: '',
    feature7: '',
    feature8: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      router.push("/admin/login");
    }
    fetch(`${baseUrl}/api/package`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => res.json())
    .then((data) => setPackages(data))
    .catch((error) => console.error("Error:", error));
    }, [router,packages,baseUrl]);

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingPackage ? 'PATCH' : 'POST';
    const url = editingPackage 
      ? `${baseUrl}/api/package/${editingPackage._id}`
      : `${baseUrl}/api/package`;

    try {
      setLoading(true);
      const token = getAuthToken();
      const response = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        if (editingPackage) {
          setPackages(packages.map(pkg => 
            pkg._id === result._id ? result : pkg
          ));
        } else {
          setPackages([...packages, result]);
        }
        setFormData(initialFormState);
        setEditingPackage(null);
      } else {
        alert('Failed to save package.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (packageId) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;

    try {
      setLoading(true);
      const token = getAuthToken();
      const response = await fetch(`${baseUrl}/api/package/${packageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setPackages(packages.filter(pkg => pkg._id !== packageId));
      } else {
        alert('Failed to delete package.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting.');
    } finally{
      setLoading(false);
    }
  };

  const handleEdit = (pkg) => {
    setEditingPackage(pkg);
    setFormData({
      name: pkg.name,
      price_EGP: pkg.price_EGP,
      price_USD: pkg.price_USD,
      feature1: pkg.feature1,
      feature2: pkg.feature2,
      feature3: pkg.feature3,
      feature4: pkg.feature4,
      feature5: pkg.feature5,
      feature6: pkg.feature6,
      feature7: pkg.feature7,
      feature8: pkg.feature8,
    });
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setEditingPackage(null);
  };
  if (loading) {
    return <Loading />;
    
  }

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="w-full h-[120px] flex justify-center relative bg-white shadow-lg">
        <Nav2 />
      </div>

      {/* Form */}
      <div className="flex justify-center mt-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl text-black bg-white shadow-lg rounded-lg p-6 md:p-12"
        >
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            {editingPackage ? 'Edit Package' : 'Create Package'}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2 font-medium">Package Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-2 font-medium">Price USD</label>
              <input
                type="number"
                name="price_USD"
                value={formData.price_USD}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-2 font-medium">Price EGP</label>
              <input
                type="number"
                name="price_EGP"
                value={formData.price_EGP}
                onChange={handleChange}
                className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {[...Array(8)].map((_, index) => {
              const featureKey = `feature${index + 1}`;
              return (
                <div key={featureKey} className="flex flex-col">
                  <label className="text-gray-600 mb-2 font-medium">
                    Feature {index + 1}
                  </label>
                  <input
                    type="text"
                    name={featureKey}
                    value={formData[featureKey]}
                    onChange={handleChange}
                    className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {editingPackage ? 'Update Package' : 'Create Package'}
            </button>
            {editingPackage && (
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Packages List */}
      <div className='w-full h-max pb-5 flex flex-wrap  justify-center gap-[60px] mt-[60px]'>
        {packages.map((pkg) => (
          <div key={pkg._id} className="relative group max-770:flex max-770:w-full max-770:justify-center max-770:items-center ">
            <Package
              priceUSD={pkg.price_USD}
              priceEGP={pkg.price_EGP}
              name={pkg.name}
              fet1={pkg.feature1}
              fet2={pkg.feature2}
              fet3={pkg.feature3}
              fet4={pkg.feature4}
              fet5={pkg.feature5}
              fet6={pkg.feature6}
              fet7={pkg.feature7}
              fet8={pkg.feature8}
            />
            <div className="absolute top-2 left-2  flex gap-2 ">
              <button
                onClick={() => handleEdit(pkg)}
                className="bg-purple-500 text-white px-3 py-1 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200
                         hover:bg-purple-600 shadow-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(pkg._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-full 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200
                         hover:bg-red-600 shadow-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package_Admin;