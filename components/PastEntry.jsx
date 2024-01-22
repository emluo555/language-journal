import React from "react";

const PastEntry = ({ content }) => {
  return (
    <button className="flex bg-white w-full min-h-10 rounded items-center px-2 overflow-auto">
      {content}
    </button>
  );
};

export default PastEntry;
