import React from 'react';

const Category = () => {
  return (
    <div className="bg-[#2c3440] p-4 flex flex-col md:flex-row items-start md:items-center justify-between text-white container max-w-5xl mx-auto mt-5 gap-4">
      {/* Dropdown Section */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="font-semibold text-gray-400">Browse By:</span>
        <select className="bg-[#1c232b] text-gray-400 rounded-md p-2 ">
          <option className="bg-[#1c232b]">Year</option>
          <option className="bg-[#1c232b]">2022</option>
          <option className="bg-[#1c232b]">2023</option>
          <option className="bg-[#1c232b]">2024</option>
        </select>
        <select className="bg-[#1c232b] text-gray-400 rounded-md p-2 ">
          <option>Rating</option>
        </select>
        <select className="bg-[#1c232b] text-gray-400 rounded-md p-2 ">
          <option>Genre</option>
        </select>
        <select className="bg-[#1c232b] text-gray-400 rounded-md p-2 ">
          <option>Service</option>
        </select>
        <select className="bg-[#1c232b] text-gray-400 rounded-md p-2 ">
          <option>Other</option>
        </select>
      </div>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <span className="font-semibold text-gray-400">Find Film:</span>
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#1c232b] text-white rounded-md p-2 w-full md:w-64 outline-none"
        />
      </div>
    </div>
  );
};

export default Category;
