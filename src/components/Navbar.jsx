import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 h-20">
      <div className="flex items-center w-[740px]">
        <h2 className="font-bold text-xl">dribble</h2>
        <ul className="flex flex-1 justify-between ml-8 text-[14px] text-gray-600 font-bold">
          <li>Inspiration</li>
          <li>Find Work</li>
          <li>Learn Design</li>
          <li>Go Pro</li>
          <li>Marketplace</li>
          <li>Hire Designers</li>
        </ul>
      </div>
      <div className="flex items-center justify-evenly w-[28%] text-gray-600">
        {/* <form className="flex bg-white border border-black rounded-3xl flex-1 h-12 items-center j"> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          className="w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {/* <input type="text" name="search" id="search" placeholder="enter keyword" />
        </form> */}
        <h3>Sign in / Sign up</h3>
        <button className="bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md hover:bg-pink-400">
          Start a free project
        </button>
      </div>
    </nav>
  );
}
