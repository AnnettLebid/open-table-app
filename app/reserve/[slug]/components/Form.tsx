import React from 'react'

const Form = () => {
  return (
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
  )
}

export default Form