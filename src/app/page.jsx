"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import Nav from "./component/nav/page";
import mobile from "./homeimages/mobile.svg"
import cloud from "./homeimages/cloud.svg"
import screen from "./homeimages/screen.svg"
import Link from "next/link";
import first from "./homeimages/first.svg"
import sec from "./homeimages/sec.svg"
import third from "./homeimages/third.svg"
import logo from "./homeimages/logo.svg"
import team from "./homeimages/team.svg"
import left from "./homeimages/left.svg"
import right from "./homeimages/right.svg"
import plan from "./homeimages/plan.svg"
import test from "./homeimages/test.svg"
import design from "./homeimages/design.svg"
import dev from "./homeimages/dev.svg"
import lanch from "./homeimages/lanch.svg"
import Card from "./component/card/page";
import Package from "./component/package/page";
import Form from "./component/form/page";
import Footer from "./component/footer/page";
//compants for statges
import Plan from "./component/plan/page";
import Design from "./component/desgin/page";
import Dev from "./component/dev/page";
import Test from "./component/testC/page";
import Lanch from "./component/lanch/page";
import Loading from "./component/loading/page";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState("plan");
  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  const renderComponent = () => {
    switch (activeComponent) {
      case "plan":
        return <Plan />;
      case "design":
        return <Design />;
      case "dev":
        return <Dev />;
      case "test":
        return <Test />;
      case "lanch":
        return <Lanch />;
      default:
        return <Plan />;
    }
  };
  const [data , setDataa] = useState([]);
  useEffect(() => {
try {
  setLoading(true);
  fetch(`${baseUrl}/api/project`)
  .then((res) => res.json())
  .then((data) => setDataa(data))
  .catch((error) => console.error("Error:", error));
} catch (error) {
   console.error("Error:", error);
} finally {
  setLoading(false);
}
  }, [baseUrl]); 
  
  
  
        const [packages , setData] = useState([]);
        useEffect(() => {
        try {
          fetch(`${baseUrl}/api/package`)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((error) => console.error("Error:", error));
        } catch (error) {
           console.error("Error:", error);
          
        }
       
        }, [baseUrl]);
  
  if (loading) {
    return <Loading />;
  }
  
  return (
    <div className="">
      <main className="w-full h-[850px]   bg-white">
        <section className="bg-[url('/homeimages/topleft.svg')] bg-no-repeat w-full h-[823px]">
          <div  className="w-full h-[80px] flex justify-center"   >
            <Nav />
          </div>
          <header className="w-full h-[750px]  flex"  >
          <div className=" w-[30%] h-[400px] mt-7	flex flex-col items-center pt-[30px] max-460:w-full max-770:w-[93%] max-770:h-max max-1440:w-[51%] ">
              <div className="bg-[url('/homeimages/welcome.svg')] bg-no-repeat  text-white w-[60%] h-[235px] flex pl-[35px] flex-col gap-[9px] pt-[80px] max-1025:w-full  ">
              <h1 className="text-white text-3xl		font-black"> Welcome 👋🏼</h1>
              <span className="text-white text-sm	 font-medium">You Now in DevFux Studio</span>
              </div>
                    <div className="w-full h-[100px] text-center flex flex-col gap-[10px] mt-[30px]">
                      <h1 className="text-2xl	 text-white">Need A Website or Mobile App ?</h1>
                        <p className="text-white text-sm	 font-medium">  Get Your Business Online In No Time , Just contact our sales
                  team & launch your website or mobile App in less than 2 - 4
                  weeks!</p>
                    </div>
                  
          </div>
          <div className=" flex mt-[28px] items-end  mb-[50px] max-460:hidden	">
                        <Image className="w-[439px] h-[358px]" src={mobile}  alt="icon"/>
                    </div>
                    <div className="flex w-[41%] h-[677px] mt-6	flex-wrap justify-center max-460:hidden max-770:hidden">
                      <Image className=" hover:animate-pulse	w-[298px] h-[126px]"  src={cloud} alt="icon"/>
                      <Image className="mt-24  hover:animate-pulse	w-[298px] h-[126px]" src={cloud} alt="icon"/>
                      <Image className="w-[415px] h-[415px]"src={screen} alt="icon"/>
                    </div>
          </header>
        </section>
      </main>
      <section className="w-full h-max pb-5 bg-white max-460:h-[1660px] max-770:h-max max-770:pb-3 	 ">
          <h1 className="text-[36px] font-black w-full h-[50px] text-center text-black">Ou<span className="text-[rgba(151,141,239,1)] 	">r Serv</span>ice</h1>
          <div className=" w-full h-[700px]  mt-7 flex gap-10  justify-center items-center max-460:flex-wrap max-770:flex-wrap max-770:h-max max-770:pb-5 max-1025:h-max max-1025:w-[98%] ">
          <div className="w-[21%] h-max pb-5 bg-white rounded-[25px] shadow-[8px_7px_38px_whitesmoke] text-center gap-[55px] flex items-center pt-[40px] flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[rgba(151,141,239,0.5)] max-460:w-[90%] max-770:w-[55%] max-770:h-max max-770:pb-5 max-1025:w-[42%] max-1440:w-[36%]">
  <h1 className="text-[21px] font-extrabold text-[rgba(151,141,239,1)] w-full h-[31px]">UX UI Design</h1>
  <div className="w-full flex justify-center">
    <Image src={first} className="w-[130px] h-[100px]" alt="icon" />
  </div>
  <p className="text-[16px] font-medium text-[rgba(57,53,94,1)] w-full h-[94px]">
    We never forget Goals in every step along our process and we insist to provide an outstanding UI/UX design.
  </p>
  <Link  className="bg-[rgba(151,141,239,1)] text-white w-[80%] h-[45px] flex justify-center items-center rounded-[15px] text-[16px] font-semibold" href="/pages/Service_page">
    Read More
  </Link>
</div>

              <div className="w-[21%] h-[494px] bg-white rounded-[25px] shadow-[2px_2px_18px_whitesmoke] text-center gap-[55px] flex items-center pt-[40px] flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[rgba(151,141,239,0.5)] max-460:w-[90%] max-770:w-[55%] max-770:h-max max-770:pb-5 max-1025:w-[42%] max-1440:w-[36%]">
                <h1 className="text-[21px] font-extrabold text-[rgba(151,141,239,1)] w-full h-[31px]">Website Development</h1>
                <div className="w-full flex justify-center"><Image src={sec} className="w-[130px] h-[100px]" alt="icon"/></div>
                <p className="text-[16px] font-medium text-[rgba(57,53,94,1)] w-full h-[94px]">Our team of experts delivers a top-notch quality web development tailored to your needs with the simplest solutions for the most complex problems.</p>
                <Link className="bg-[rgba(151,141,239,1)] text-white w-[80%] h-[45px] flex justify-center items-center rounded-[15px] text-[16px] font-semibold" href="/pages/Service_page">Read More</Link>
              </div>
              <div className="w-[21%] h-[494px] bg-white rounded-[25px] shadow-[2px_2px_18px_whitesmoke] text-center gap-[55px] flex items-center pt-[40px] flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[rgba(151,141,239,0.5)] max-460:w-[90%] max-770:w-[55%] max-770:h-max max-770:pb-5 max-1025:w-[42%] max-1440:w-[36%]">
                <h1 className="text-[21px] font-extrabold text-[rgba(151,141,239,1)] w-full h-[31px]">Mobile App Development</h1>
                <div className="w-full flex justify-center"><Image src={third} className="w-[130px] h-[100px]" alt="icon"/></div>
                <p className="text-[16px] font-medium text-[rgba(57,53,94,1)] w-full h-[94px]">Our team in DevFux takes your mobile app development from an idea that pops into your mind to a top-notch mobile app. We offer iOS and Android app development services  </p>
                <Link className="bg-[rgba(151,141,239,1)] text-white w-[80%] h-[45px] flex justify-center items-center rounded-[15px] text-[16px] font-semibold" href="/pages/Service_page">Read More</Link>
              </div>
          </div>
      </section>
      <section className="w-full h-[480px]  flex gap-[100px] bg-white max-460:flex-wrap max-460:h-[750px] max-460:gap-0 max-770:flex-wrap max-770:h-max max-770:pb-5 max-770:gap-1">
      <div className="w-[31%] text-center flex flex-col gap-[19px] justify-center items-center h-[480px] pl-[20px] max-460:w-full max-460:pl-0 max-460:h-[280px] max-770:w-full max-770:h-max max-770:pb-5 max-1025:w-1/2 max-1440:pl-2">
        <h1 className="text-[36px] font-black text-black w-full h-[59px] ">About D<span className="text-[rgba(151,141,239,1)]">evF</span>ux </h1>
        <p className="w-full h-[60px] text-[16px] font-semibold text-black">DevFux is an Egyptian based company specialized in Website and Mobile Application for Design & Development</p>
        <p className="w-full h-[60px] text-[16px] font-semibold text-black">We provide quality services in website and mobile application Your goal is your comfort, rest assured our services will fulfill your Requirements.</p>
      </div>
      <div className="flex flex-col justify-end items-center w-[23%] h-[480px] gap-5 max-460:hidden max-770:hidden max-1025:hidden ">
        <Image src={logo} alt="icon" className="w-[80px] h-[95px]" />
        <h1 className="w-full h-[60px] text-[16px] font-semibold text-black text-center text-[rgba(156, 156, 156, 1)]">Development The Future of User Experience</h1>
      </div>
      <div className="flex flex-col text-center justify-center w-[30%] h-[480px] max-460:w-full max-770:w-full max-770:h-max max-1025:w-1/2 ">
        <h1 className="text-[28px] font-medium w-full h-[50px] text-black text-[rgba(115, 115, 115, 1)]">We are <span className="text-[rgba(151,141,239,1)]">DevFux</span></h1>
        <Image className="w-full h-[222px]    transform transition-transform duration-300 hover:scale-105 max-770:pl-6 " src={team} alt="icon"/>
      </div>
      </section>
      <section className="w-full h-[1050px] bg-white max-460:hidden max-770:hidden ">
          <div className="flex text-center ">
            <Image src={left} alt="icon" className="w-[20%] h-[276px]"/>
                  <div className="flex flex-col items-center w-[60%] gap-[12px]">
                    <button className="w-[18%] mt-[15px] h-[43px] bg-[#978DEF] text-white flex justify-center items-center rounded-[12px] max-460:w-[55%] max-770:w-[50%]">Website</button>
                    <span className="text-[64px] font-black text-[#978DEF] w-full h-[90px] flex justify-center">5</span>
                    <h1 className="w-full h-[50px] font-black text-[36px] text-black">Sta<span className="text-[#978DEF]">ges Of Web</span>site Proc<span className="text-[#978DEF]">ess</span></h1> 
                    <p className="text-[14px] font-normal	text-[#696969]">we lay down a strategy to ensure that you get a website that suits your business these include</p>
                  </div>
              <Image src={right} alt="icon" className="w-[20%] h-[276px]"/>
          </div>
          <div className="w-full bg-white flex gap-[80px] h-[182px] justify-center items-center">
  <button
    onClick={() => setActiveComponent("plan")}
    className="transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[12%] h-[150px] bg-[#9F9ACB] flex flex-col justify-center items-center gap-[13px] rounded-[20px] text-white text-[16px] font-bold"
  >
    <Image src={plan} alt="icon" className="w-full h-[82px] transition-opacity duration-300 ease-in-out hover:opacity-90" />
    <h1 className="transition-colors duration-300 ease-in-out hover:text-[#EDEDFD]">Planning</h1>
  </button>
  <button
    onClick={() => setActiveComponent("design")}
    className="transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[12%] h-[150px] bg-[#9F9ACB] flex flex-col justify-center items-center gap-[13px] rounded-[20px] text-white text-[16px] font-bold"
  >
    <Image src={design} alt="icon" className="w-full h-[82px] transition-opacity duration-300 ease-in-out hover:opacity-90" />
    <h1 className="transition-colors duration-300 ease-in-out hover:text-[#EDEDFD]">Design</h1>
  </button>
  <button
    onClick={() => setActiveComponent("dev")}
    className="transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[12%] h-[150px] bg-[#9F9ACB] flex flex-col justify-center items-center gap-[13px] rounded-[20px] text-white text-[16px] font-bold"
  >
    <Image src={dev} alt="icon" className="w-full h-[82px] transition-opacity duration-300 ease-in-out hover:opacity-90" />
    <h1 className="transition-colors duration-300 ease-in-out hover:text-[#EDEDFD]">Development</h1>
  </button>
  <button
    onClick={() => setActiveComponent("test")}
    className="transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[12%] h-[150px] bg-[#9F9ACB] flex flex-col justify-center items-center gap-[13px] rounded-[20px] text-white text-[16px] font-bold"
  >
    <Image src={test} alt="icon" className="w-full h-[82px] transition-opacity duration-300 ease-in-out hover:opacity-90" />
    <h1 className="transition-colors duration-300 ease-in-out hover:text-[#EDEDFD]">Testing</h1>
  </button>
  <button
    onClick={() => setActiveComponent("lanch")}
    className="transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[rgba(151,141,239,0.5)] active:scale-95 w-[12%] h-[150px] bg-[#9F9ACB] flex flex-col justify-center items-center gap-[13px] rounded-[20px] text-white text-[16px] font-bold"
  >
    <Image src={lanch} alt="icon" className="w-full h-[82px] transition-opacity duration-300 ease-in-out hover:opacity-90" />
    <h1 className="transition-colors duration-300 ease-in-out hover:text-[#EDEDFD]">Launching</h1>
  </button>
</div>

            <div className="w-full h-[580px] bg-white">
            {renderComponent()}
            </div>
      </section>
          <section className="w-full h-max pb-5 bg-white  max-770:h-max max-770:pb-5 ">
            <div className="w-full h-[60px] flex flex-col text-center">
              <h1 className="w-full h-[30px] text-[26px] text-[#737373] font-medium">Our Work</h1>
              <span className="text-[36px] text-[#978DEF] font-bold w-full h-[30px]">Portfolio</span>
            </div>
                <div className="mt-[41px] pl-[30px] pt-[20px] w-full h-max pb-5 justify-center bg-white flex flex-wrap gap-[74px]  max-460:p-0 max-770:h-max max-770:pb-5 max-770:gap-5">
                {data.slice(0, 6).map((item) => (
  <Card
    key={item._id}
    title={item.title}
    status={item.status}
    mainImage={`${baseUrl}/${item.mainImage.replace("\\", "/")}`} 
  />
))}          
                </div>
                    <div className="w-full flex justify-center items-center h-[100px] mt-5">
                    <Link href="/pages/Portfolio" className="bg-[#978DEF] text-white h-[50px] w-[14%] rounded-[12px] flex justify-center items-center text-[16px] font-bold max-460:w-[46%] ">View All</Link>
                    </div>
          </section>
              <section className="w-full h-max pb-5 bg-white max-460:h-max max-460:pb-6 ">
                <div className="w-full h-[100px] bg-white flex flex-col gap-[5px] text-center max-460:h-max max-460:-pb-5">
                  <h1 className="w-full h-[54px] text-[36px] text-[#978DEF] font-bold max-460:h-max max-460:pb-5 max-460:text-[29px]">PRICING & PACKAGES</h1>
                  <p className="w-full h-[36px] text-[24px] font-normal text-[#737373] max-460:h-max max-460:pb-5  ">Discover our flexible pricing plans and packages to fit your needs</p>
                </div>
                <div className=" w-full h-max pb-5 pt-[40px] gap-[50px] flex-wrap bg-white flex justify-center max-460:h-max max-460:pb-3">
                {packages.map((e)=>(
                  <Package
                  key={e._id}
                  priceUSD={e.price_USD}
                  priceEGP={e.price_EGP}
                  name={e.name}
                  fet1={e.feature1}
                  fet2={e.feature2}
                  fet3={e.feature3}
                  fet4={e.feature4}
                  fet5={e.feature5}
                  fet6={e.feature6}
                  fet7={e.feature7}
                  fet8={e.feature8}
                  />
                  ))}   
                </div>
                <div className="w-full flex justify-center items-center h-[100px] mt-5">
                    <Link href="/pages/package_page" className="bg-[#978DEF] text-white h-[50px] w-[14%] rounded-[12px] flex justify-center items-center text-[16px] font-bold max-460:w-[30%] max-770:w-[40%] ">View All</Link>
                    </div>
              </section>
                    <section className="w-full h-[1200px] flex justify-center  bg-white max-460:h-max max-460:pb-7">
                      <Form/>
                    </section>
                    <footer className="w-full">
                      <Footer/>
                    </footer>
    </div>
  );
}
