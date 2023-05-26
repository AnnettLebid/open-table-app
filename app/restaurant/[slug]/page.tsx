import React from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Header from "./components/Header";

const RestaurantDetails = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />     
        <Header />        
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESTAURANT NAV BAR */}
            <nav className="flex text-reg border-b pb-2">
              <Link href="/restaurant/111" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/111/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* RESTAURANT NAV BAR */}
            {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milestones Grill</h1>
            </div>
            {/* TITLE */}
            {/* RATING */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 Reviews</p>
              </div>
            </div>
            {/* RATING */}
            {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">Some description</p>
            </div>
            {/* DESCRIPTION */}
            {/* IMAGES */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
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
            {/* IMAGES */}
            {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-bottom p-5">
                What 100 peope are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">MJ</h2>
                      </div>
                      <p className="text-center">Michael Jordan</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-lg font-light">
                        Best staff, drinks and nachos on the strip, every EDC i
                        gotta get my fix. Wish there was one in dallas :)
                      </p>
                    </div>
                  </div>
                </div>

                {/* REVIEW CARD */}
              </div>

              {/* REVIEWS */}
            </div>
          </div>
          {/* RESERVATION CARD PORTION */}
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7text-lg">Make a reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party Size</label>
                <select name="" className="py-3 border-b font-light" id="">
                  <option value="">1 person</option>
                  <option value="">2 person</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 border-b font-light w-28"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" className="py-3 border-b font-light" id="">
                    <option value="">7:30</option>
                    <option value="">9:30</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a Time
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
};

export default RestaurantDetails;
