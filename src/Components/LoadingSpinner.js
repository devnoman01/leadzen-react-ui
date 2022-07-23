import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-[#FB3E3E]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
