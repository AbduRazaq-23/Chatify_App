import React from "react";
import { MdMessage, MdOutlineCall } from "react-icons/md";
import { LuMessageCircleHeart } from "react-icons/lu";
import { RiUserCommunityLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-28 fixed bottom-0 bg-gray-900 p-5">
      <ul className="flex justify-between items-center h-full text-gray-200">
        <Link to="/messages">
          <li className="flex flex-col items-center">
            <MdMessage size={30} />
            <span>Messages</span>
          </li>
        </Link>
        <Link to="/updates">
          <li className="flex flex-col items-center">
            <LuMessageCircleHeart size={30} />
            <span>Updates</span>
          </li>
        </Link>
        <Link to="/communites">
          <li className="flex flex-col items-center">
            <RiUserCommunityLine size={30} />
            <span>Communities</span>
          </li>
        </Link>
        <Link to="/calls">
          <li className="flex flex-col items-center">
            <MdOutlineCall size={30} />
            <span>Calls</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
