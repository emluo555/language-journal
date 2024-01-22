import React from "react";

const DiaryInput = () => {
  return (
    <div className="flex-grow relative bg-sky-500 p-2 rounded">
      <textarea
        placeholder="Enter here"
        className="flex-grow h-full p-2 w-full bg-sky-100 rounded resize-none outline-none"
      />
      <button className="flex absolute bottom-4 right-4 bg-sky-700 text-white p-2 rounded w-28 h-8 items-center justify-center hover:scale-105 transition-transform">
        Submit
      </button>
    </div>
  );
};

export default DiaryInput;
