import React from 'react'
import departments from '../../departments'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Depts() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    
    <div className='mb-10'>
        <h1 className='text-center text-3xl font-semibold text-black'>Our Departments</h1>
        <Slider {...settings}>
    {departments.map((dept, index) => (
      <div key={index} className="flex flex-col justify-center  md:w-[350px] items-center text-center
       p-4 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg w-[280px] mx-auto">
        <img src={dept.image} alt={dept.name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-semibold mb-2">{dept.name}</h2>
        <p className="text-grey">{dept.text}</p>
      </div>
    ))}
  </Slider>
    </div>
  )
}

export default Depts
