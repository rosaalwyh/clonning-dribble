import React from "react";

export default function Main() {
  return (
    <div className="relative h-[480px]">
      <div className="absolute z-20 flex h-full flex-col items-start justify-center space-y-4 ml-12 text-white font-bold w-[800px]">
        <h2 className="text-6xl">Discover the world's top designers & creatives</h2>
        <p>
          Dribble is the leading destination to find & showcase creative work and home to the
          world's best design professionals.
        </p>
        <button className="bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md hover:bg-pink-300">
          Sign up
        </button>
      </div>
      <div className="bg-black absolute opacity-70 w-full h-full"></div>
      <img
        src="https://images.unsplash.com/photo-1654495064583-9ccc0f3bccb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        alt="img"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
