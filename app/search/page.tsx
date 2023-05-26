import React from "react";

const Search = () => {
  return (
    <div>
      {/* HEADER */}
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
      <div className="flex py-4 m-auto w-2/3 justify-between items-start ">
        {/* SEARCH SIDE BAR */}
        <div className="w-1/5">
          <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            <p className="font-light text-reg">Toronto</p>
            <p className="font-light text-reg">Ottawa</p>
            <p className="font-light text-reg">Montreal</p>
            <p className="font-light text-reg">Hamilton</p>
            <p className="font-light text-reg">Kingston</p>
            <p className="font-light text-reg">Niagara</p>
          </div>
          <div className="border-b pb-4 mt-3">
            <h1 className="mb-2">Cuisine</h1>
            <p className="font-light text-reg">Mexican</p>
            <p className="font-light text-reg">Italian</p>
            <p className="font-light text-reg">Mediterrian</p>
            <p className="font-light text-reg">Chinese</p>
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2 ">Price</h1>
            <div className="flex">
              <button className="border w-full text-reg font-light rounded-l p-2">
                $
              </button>
              <button className="border-r border-t border-b w-full text-reg font-light p-2">
                $$
              </button>
              <button className="border-r border-t border-b w-full text-reg font-light rounded-r p-2">
                $$$
              </button>
            </div>
          </div>
        </div>
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {/* RESTAURANT CARD */}
          <div className="border-b flex pb-5">
            <img
              src="https://resizer.otstatic.com/v2/photos/xlarge/1/27878767.jpg"
              alt=""
              className="w-44 rounded"
            />
            <div className="pl-5">
              <h2 className="text-3xl">Cafe Du Berry</h2>
              <div className="flex items-start">
                <div className="flex mb-2">*****</div>
                <p className="text-sm ml-2">Awesome</p>
              </div>
              <div className="mb-9">
                <div className="font-light flex text-reg">
                  <p className="mr-4">$$$</p>
                  <p className="mr-4">Mexican</p>
                  <p className="mr-4">Ottawa</p>
                </div>
              </div>
              <div className="text-red-600">
                <a href="">View more information</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
