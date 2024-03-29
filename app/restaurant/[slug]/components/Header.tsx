import React from "react";

const Header = ({ title }: { title: string }) => {
  const renderTitle = () => {
    const titleArr = title.split("-");
    titleArr[titleArr.length - 1] = `(${titleArr[titleArr.length - 1]})`;
    return titleArr.join(" ");
  };

  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-5xl md:text-7xl text-white capitalize text-shadow text-center">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
};

export default Header;
