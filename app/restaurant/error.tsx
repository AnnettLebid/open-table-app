"use client";

import Image from "next/image";
import ErrorImg from "../../public/icons/error.png";

const error = () => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      <Image src={ErrorImg} alt="error" className="w-56 mb-8 mx-auto" />
      <div className="bg-white px-9 py-14 shadow rounded justify-center text-center">
        <h3 className="text-3xl font-bold ">Ooops, something went wrong</h3>
        <p className="text-reg font-bold">An error occurred</p>
      </div>
    </div>
  );
};

export default error;
