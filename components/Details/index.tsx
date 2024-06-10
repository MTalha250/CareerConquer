import React from "react";

const Details = () => {
  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg border sticky top-32 h-fit">
      <h1 className="text-3xl font-bold mb-4">Web Dev Job</h1>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        malesuada, justo nec lacinia venenatis.
      </p>
      <div className="mb-4">
        <span className="font-bold">Location:</span> City, Country
      </div>
      <div className="mb-4">
        <span className="font-bold">State:</span> State
      </div>
      <div className="mb-4">
        <span className="font-bold">Address:</span> 123 Main Street
      </div>
      <div className="mb-4">
        <span className="font-bold">Mobile Number:</span> +123 456 7890
      </div>
      <button className="mt-4 bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700">
        Apply Now
      </button>
    </div>
  );
};

export default Details;
