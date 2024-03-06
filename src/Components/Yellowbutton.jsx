import React from "react";

const Yellowbutton = ({data,className}) => {
  return (
    <button className={`p-2 bg-[#E3B748] text-black m-1 rounded-2xl ${className}`}>
      {data}
    </button>
  );
};

export default Yellowbutton;
