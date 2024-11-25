import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import rev1 from "./img/review1.jpg";
import rev2 from "./img/review2.jpg";
import rev3 from "./img/review3.jpg";

const reviews = [
  {
    rev: "The doctors and staff are extremely professional and kind. They provide exceptional care and always prioritize the patient's comfort.",
    bgImage: rev1,
  },
  {
    rev: "I had a great experience with the hospital's diagnostic services. The staff was attentive, and the results were provided promptly.",
    bgImage: rev2,
  },
  {
    rev: "The facilities are top-notch, and the environment is very clean. I felt safe and well-cared for throughout my treatment.",
    bgImage: rev3,
  },
];

function Reviews() {
  const [currentBackground, setCurrentBackground] = useState(reviews[0].bgImage);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentBackground(reviews[index].bgImage);
    },
  };

  return (
    <div
      className="p-8 transition-all duration-500 bg-center bg-cover"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <h1 className="text-center text-3xl font-semibold text-white mb-8">
        What Our Patients Say
      </h1>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-80 rounded-md shadow-md"
          >
            <p className="text-lg italic text-gray-800">{review.rev}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Reviews;
