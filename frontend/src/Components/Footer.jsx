import React from "react";
import { MdMessage, MdOutlineCall } from "react-icons/md";
import { LuMessageCircleHeart } from "react-icons/lu";
import { RiUserCommunityLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full h-28 fixed bottom-0 bg-gray-900 p-5">
      <ul className="flex justify-between items-center h-full text-gray-200">
        <li className="flex flex-col items-center">
          <MdMessage size={30} />
          <span>Messages</span>
        </li>
        <li className="flex flex-col items-center">
          <LuMessageCircleHeart size={30} />
          <span>Updates</span>
        </li>
        <li className="flex flex-col items-center">
          <RiUserCommunityLine size={30} />
          <span>Communities</span>
        </li>
        <li className="flex flex-col items-center">
          <MdOutlineCall size={30} />
          <span>Calls</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
