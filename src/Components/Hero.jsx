import React from "react";
import HeroLayout from "../../public/HeroLayout.svg";
import Image from "next/image";
import Yellowbutton from "./Yellowbutton";

const Hero = () => {
  return (
    <div className="bg-[#111111] min-h-[600px] flex items-center justify-center">
      <div className="flex justify-center items-center gap-6">
        <div className="flex flex-col text-white gap-10 max-w-[500px]">
          <p className="text-6xl">You don’t have to Fight them Alone.</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className="rounded-lg bg-gray-500 w-[80%] flex justify-between px-1">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-gray-500 "
            />
            <Yellowbutton data={"Lets Talk"}/>
          </div>
        </div>
        <div>
          <Image src={HeroLayout} width={8} height={8} className="w-[430px] h-[430px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
