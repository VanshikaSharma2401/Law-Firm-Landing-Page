import React from "react";
import Image from "next/image";
import header from "../../public/header.svg";
import Button from "./Button";
import logo from "../../public/logo.svg";

const Header = () => {
  return (
    <div className="py-6 bg-[#111111] flex justify-around items-center">
      <div className="flex gap-1 items-center text-white">
        <Image src={header} width={8} height={8} className="w-8 h-8" />
        <p>IGSTUDIO</p>
      </div>
      <div className="flex gap-8 text-white">
        <a href="#">Home</a>
        <a href="#">Attorneys</a>
        <a href="#">Practice Areas</a>
        <a href="#">About Us</a>
      </div>
      <Button />
    </div>
  );
};

export default Header;
