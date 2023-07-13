"use client";

import Image from "next/image";
import ErrorImg from "../../public/icons/error.png";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col">
      <Image src={ErrorImg} alt="error" className="w-56 mb-8 mx-auto" />
      <div className="bg-white px-9 py-14 shadow rounded justify-center text-center">
        <h3 className="text-reg font-bold">
          Ooops, we cannot find this restaurant
        </h3>
      </div>
    </div>
  );
};

export default Error;
