import React from "react";
import doc1 from "./img/doc1.jpg";
import doc2 from "./img/doc2.jpg";
import doc3 from "./img/doc3.jpg";
import doc4 from "./img/doc4.jpg";
import doc5 from "./img/doc5.jpg";

const doctors = [
  { name: "Peters Godspower", img: doc1 },
  { name: "Peters Godspower", img: doc2 },
  { name: "Peters Godspower", img: doc3 },
  { name: "Peters Godspower", img: doc4 },
  { name: "Peters Godspower", img: doc5 },
];

function Doctors() {
  return (
    <div className="py-10 bg-gray-50">
      <h1 className="text-center text-3xl font-semibold mb-8 text-gray-800">
        Expert Doctors
      </h1>
      <div className="flex  doctors justify-center items-center  gap-6 px-8">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex doctor flex-col rounded-t-lg items-start h-[350px] md:w-[350px] bg-white hover:bg-lightBlue hover:text-white  shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-full rounded-t-lg h-[250px]"
            />
            <div className=" p-[15px] text-start">
            <h2 className="text-xl font-medium">{doctor.name}</h2>
            <p className="text-sm text-gray-600">Specialist in Cardiology</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
