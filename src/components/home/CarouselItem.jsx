import React from "react";

const CarouselItem = ({ image, title }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* carousel image */}
      <img
        className="w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full object-cover object-center"
        src={image}
        alt={title}
      />

      {/* carousel title */}
      <span className="py-5 text-xl font-semibold text-gray-400">{title}</span>
    </div>
  );
};

export default CarouselItem;
