import React from 'react'
import Nav from '@/app/component/nav/page'
import Footer from '@/app/component/footer/page'
import Form from '@/app/component/form/page'
import Image from 'next/image'
import imagee from "./image/cc.svg"
const ContactUs = () => {
  return (
    <div className='bg-white'>
       <div  className="w-full h-[200px] flex justify-center"   >
            <Nav />
          </div>
          <div className='w-full bg-white h-max pb-5 flex max-460:flex-wrap max-770:flex-wrap max-1025:flex-wrap max-460:flex-col max-1440:flex-nowrap '>
            <div className='w-[55%] pl-6 h-max pb-5 bg-white flex max-460:w-full max-460:justify-center  max-770:w-full max-770:justify-center max-1025:w-full max-1025:justify-center'>
            <Form />
            </div>
            <div className='w-1/2 h-max pb-5 bg-white flex   justify-center max-460:w-full max-770:w-full max-1025:w-full'>
            <Image src={imagee} alt='icom' className='w-[70%] h-[500px]'/>
            </div>
          </div>




          <Footer/>
    </div>
  )
}

export default ContactUs
