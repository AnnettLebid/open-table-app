import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <div className="text-left text-lg py-3 m-auto flex justify-center">
        {/* SEZRCH BAR */}
        <input
          type="text"
          className="rounded text-lg mr-3 p-2 w-[450px]"
          placeholder="State, city or town"
        />
        <button className="bg-red-600 px-9 py-2 text-white rounded">
          Let's Go
        </button>
        {/* SEZRCH BAR */}
      </div>
    </div>
  );
};

export default Header;
