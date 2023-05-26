import React from "react";

const Images = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">5 photos</h1>
      <div className="flex flex-wrap">
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://images.otstatic.com/prod1/48962340/1/small.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://resizer.otstatic.com/v2/photos/xlarge/25342251.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/24672868.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://resizer.otstatic.com/v2/photos/xlarge/25346331.jpg"
          alt=""
        />
        <img
          className="w-56 h-44 mr-1 mb-1"
          src="https://resizer.otstatic.com/v2/photos/xlarge/25775165.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
