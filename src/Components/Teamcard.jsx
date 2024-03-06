import React from "react";
import Image from "next/image";
import profile from "../../public/profile.svg";

const Teamcard = ({selected}) => {
  return (
    <div className={`flex gap-2 p-2 px-6 items-center ${selected ? "bg-[#E3B748] rounded-lg ":""}`}>
      <Image src={profile} />
      <div className="flex flex-col gap-1 text-white">
        <p>Danial Def</p>
        <p>301 Cases</p>
      </div>
    </div>
  );
};

export default Teamcard;
