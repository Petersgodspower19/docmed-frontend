import React from 'react';
import { IoMdClose } from "react-icons/io";

function AppointmentForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white p-6 rounded-md w-[90%] max-w-md relative">
        <IoMdClose size={35} color='#000'
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="date"
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="time"
            className="border p-2 rounded w-full"
            required
          />
          <textarea
            placeholder="Describe your illness"
            className="border p-2 rounded w-full h-24 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className='bg-darkBlue text-white w-full p-[5px] rounded-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
