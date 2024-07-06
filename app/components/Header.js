import React from 'react';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiPhoneForwarded } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white underline decoration-gray-300 decoration-2 underline-offset-4">
      <div className="flex flex-col">
        <span className="text-lg font-semibold">nissshh. portfolio</span>
        <div className="flex items-baseline">
          <span className="text-sm mr-1">2024</span>
          <span className="text-xs">©</span>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-6 text-3xl font-thin text-slate-700">
          <MdOutlineAlternateEmail/>
          <FiPhoneForwarded/>
          <RiGithubLine/>
         <TiSocialLinkedinCircular/>
        </ul>
      </nav>
      <hr className="border-gray-500"/>
    </header>
  );
};

export default Header;