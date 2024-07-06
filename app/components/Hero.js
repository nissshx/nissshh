import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-gray-600 border-b-1">
      <div className="flex flex-col  justify-center">
        <h2 className="text-xl font-light ">HELLO, I'M</h2>
        <h1 className="text-4xl font-bold  mb-2">
          Nishant<br />
          Kumar
        </h1>
        <h3 className="text-2xl font-semibold mb-2">Student @</h3>
        <p className="text-sm">Lovely Professional University , India</p>
      </div>
      <div className="relative w-1/2">
        <div className="absolute  top-0 left-0 w-24 h-24 opacity-30 bg-red-500 rounded-full"></div>
        <img 
          src="https://i.postimg.cc/Qd9B9Fn9/pic.png" 
          alt="nishant" 
          className="w-full h-auto grayscale "
        />
      </div>
    </div>
  );
};

export default Header;