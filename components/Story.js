import React from "react";

const Story = ({ username, avatar }) => {
  return (
    <div>
      <img
        src={avatar}
        alt=""
        className="rounded-full p-[1.5px] border-[3px] border-red-500"
      />
      <p className="text-xs w-[60px] truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
