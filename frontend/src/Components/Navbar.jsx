import React from "react";
import { HiDotsVertical } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-3 w-full h-32 bg-gray-900 p-5 ">
      <ul className="flex justify-between  text-gray-200 font-semibold text-2xl">
        <li>Chatify</li>
        <li>
          <HiDotsVertical />
        </li>
      </ul>
      <div className="flex justify-center">
        <input
          className="text-gray-200 bg-gray-700 rounded-full p-2 w-full md:w-[60%] "
          type="text"
          placeholder="search"
        />
      </div>
    </div>
  );
};

export default Navbar;
