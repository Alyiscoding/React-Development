import React from "react";
import { FaStar } from "react-icons/fa"; // To show star icons

const ReviewCard = ({ name, profession, heading, description, stars, rating, image }) => {
  return (
    <div className="w-full max-w-[582px] border border-gray-300 rounded-lg bg-white shadow-lg flex flex-col p-6 mx-auto text-center">
      {/* Top Text: Heading */}
      <h3 className="text-2xl font-semibold text-black mb-4">{heading}</h3>

      {/* Review Description */}
      <p className="text-black text-lg mb-4">{description}</p>

      {/* Customer Info and Rating Inline */}
      <div className="flex items-center justify-between mt-auto">
        {/* Left: Image, Name, and Profession */}
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div className="text-left">
            <h4 className="text-lg font-bold text-black">{name}</h4>
            <p className="text-sm text-gray-600">{profession}</p>
          </div>
        </div>

        {/* Right: Rating */}
        <div className="flex items-center">
          <div className="flex ml-2">

          {/* we can adjust these stars accordging to requirement i am setting it to 1 */}
            {[...Array(1)].map((_, index) => (
              <FaStar
                key={index}
                className={`${
                  index < stars ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-3 text-xl font-semibold text-black-500">
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
