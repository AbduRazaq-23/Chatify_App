import React, { useState } from "react";

const Messages = () => {
  const [val, setValue] = useState(6);
  return (
    <>
      <div className="top-32 flex items-center w-full bg-gray-800 p-2  text-gray-200">
        <div className="mr-2">
          <img src="" alt="image" className="rounded-full" />
        </div>
        <div className="w-full">
          <div className=" flex justify-between">
            <h1 className="font-semibold text-2xl">03322178822</h1>
            <span>time</span>
          </div>
          <div>
            <p className="text-gray-400 font-light">
              Lorem ipsum dolor, sit amet
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
