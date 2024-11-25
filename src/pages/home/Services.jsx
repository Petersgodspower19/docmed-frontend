import React from 'react';
import { PiHospitalFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import ServiceButton from './ServiceButton';
import { GrStatusGood } from "react-icons/gr";
import doc2 from "./img/doc2.jpg";

function Services() {
  return (
    <>
     <div className='flex items-center w-full flex-col md:flex-row'>
      <div className='flex flex-col  items-start gap-2 text-start bg-lightBlue text-white p-[2rem]'>
        <PiHospitalFill color='#fff' size={40} />
        <h1 className='text-2xl font-semibold'>Hospitality</h1>
        <p>Clinical excellence must be the priority for any health care service provider</p>
        <ServiceButton>Apply for a Bed</ServiceButton>
      </div>
      <div className='flex flex-col items-start gap-2 text-start bg-darkBlue text-white p-[2rem]'>
        <IoCall color='#fff' size={40} />
        <h1 className='text-2xl font-semibold'>Emergency Care</h1>
        <p>Clinical excellence must be the priority for any health care service provider</p>
        <ServiceButton>+2639299203020</ServiceButton>
      </div>
      <div className='flex flex-col items-start gap-2 text-start bg-lightBlue text-white p-[2rem]'>
        <MdMedicalServices color='#fff' size={40} />
        <h1 className='text-2xl font-semibold'>Emergency Care</h1>
        <p>Clinical excellence must be the priority for any health care service provider</p>
        <ServiceButton>Book An Appointment</ServiceButton>
      </div>
    </div>

      <div className='flex items-center justify-center gap-10 mt-10 flex-wrap mb-10'>
        <div className='w-full md:w-[500px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg'>
          <img src={doc2} alt="Doctor providing care" className='w-full h-full object-cover' />
        </div>

        {/* Text Section */}
        <div className='max-w-lg p-[10px] '>
          <h1 className='font-semibold text-3xl mb-5 text-darkBlue'>Best Care For Your Health</h1>
          <p className='text-grey mb-5'>
            At our facility, we prioritize your well-being by providing world-class healthcare services,
            cutting-edge technology, and a team of dedicated professionals.
          </p>

          
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <GrStatusGood color='#87ceeb' size={20} />
              <p className='text-grey'>State-of-the-art medical equipment.</p>
            </div>
            <div className='flex items-center gap-2'>
              <GrStatusGood color='#87ceeb' size={20} />
              <p className='text-grey'>Highly trained and compassionate staff.</p>
            </div>
            <div className='flex items-center gap-2'>
              <GrStatusGood color='#87ceeb' size={20} />
              <p className='text-grey'>Affordable and reliable healthcare solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
