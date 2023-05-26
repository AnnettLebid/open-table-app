import React from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";

const Reserve = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar/>
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://resizer.otstatic.com/v2/photos/xlarge/1/29860720.jpg"
                  alt=""
                  className="w-32 h-18 rounded"
                />
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold"> Cafe Du Berry</h1>
                <div className="flex mt-3">
                  <p className="mr-6">Tuesday, 22, 2023</p>
                  <p className="mr-6">7:30 PM</p>
                  <p className="mr-6">3 People</p>
                  Cafe Du Berry
                </div>
              </div>
            </div>
            {/* HEADER END*/}
            {/* FORM */}
            <div className="mt-10 flex flex-wrap justify-between w-[41.25rem]">
              <input
                type="text"
                className="border rounded p-3 mb-4 w-80"
                placeholder="First name"
              />
              <input
                type="text"
                className="border rounded p-3 mb-4 w-80"
                placeholder="Last name"
              />
              <input
                type="text"
                className="border rounded p-3 mb-4 w-80"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="border rounded p-3 mb-4 w-80"
                placeholder="Email"
              />
              <input
                type="text"
                className="border rounded p-3 mb-4 w-80"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="border rounded p-3 mb-4 w-80"
                placeholder="Requests (optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete reservation
              </button>
              <p className="mt-2">
                By clicking “Complete reservation” you agree to the OpenTable
                Terms of Use and Privacy Policy. Message & data rates may apply.
                You can opt out of receiving text messages at any time in your
                account settings or by replying STOP.
              </p>
            </div>

            {/* FORM end*/}
          </div>
        </div>
      </main>
    </main>
  );
};

export default Reserve;
