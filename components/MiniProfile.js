import React from "react";
import profile from "../assets/profile.jpg";

const MiniProfile = () => {
  return (
    <div className="flex justify-between mt-8 ">
      <div className="flex items-center">
        <div className="w-14 h-14">
          <img src={profile.src} alt="" className="rounded-full" />
        </div>

        <p className="pl-3 text-sm font-semibold">Joe Doe</p>
      </div>
      <button className="text-xs font-semibold text-[#0095f6]">Sign In</button>
    </div>
  );
};

export default MiniProfile;
