import React from 'react';
import { FaHouse } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdMail } from "react-icons/io";



function Contact() {

  function handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your message was sent and we would give you feedback",
      confirmButtonColor: "#318CE7",
    });
  }
  return (
    <div className="text-black mt-[50px] p-[4rem]">
      <div className="flex items-center justify-center gap-[4rem] flex-col md:flex-row mt-[30px]">
        <form className="md:w-[450px] w-full" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-2xl mb-[20px]">Get in touch</h1>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter your name" required
              className="input w-full md:w-[48%] py-[5px] px-[10px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email" required
              className="input w-full md:w-[48%] py-[5px] px-[10px] border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Your message" required
            className="w-full h-[200px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <button
            type="submit"
            className="bg-inherit button mt-3"
          >
            Submit
          </button>
        </form>

        <div className='flex flex-col items-start gap-4'>
          <div className='flex items-start gap-1'>
           <FaHouse color='#4d4d4d' size={30} />
           <article className='flex flex-col gap-[2px]'>
           <h1 className='font-semibold text-grey text-lg'>Buttonwod California</h1>
           <p className='text-[15px] font-light'>Rosemead, CA 91770</p>
           </article>
          </div>

          <div className='flex items-start gap-1'>
           <MdOutlinePhoneAndroid color='#4d4d4d' size={30} />
           <article className='flex flex-col gap-[2px]'>
           <h1 className='font-semibold text-grey text-lg'>+3837339802028</h1>
           <p className='text-[15px] font-light'>Mon to Fri 9am to 6pm</p>
           </article>
          </div>

          <div className='flex items-start gap-1'>
           <IoMdMail color='#4d4d4d' size={30} />
           <article className='flex flex-col gap-[2px]'>
           <h1 className='font-semibold text-grey text-lg'>petersgodspower@gmail.com</h1>
           <p className='text-[15px] font-light'>send us your query anytime</p>
           </article>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
