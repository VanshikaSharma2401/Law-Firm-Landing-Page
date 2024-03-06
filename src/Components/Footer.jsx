import React from "react";
import header from "../../public/header.svg";
import Image from "next/image";
import Instagram from "../../public/instagram.svg";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import pinterest from "../../public/Pinterest.svg";
const Footer = () => {
  return (
    <div className="bg-[#171717] mx-36 flex flex-col p-6 mt-26">
      <div className=" flex justify-between   mt-10 text-white p-15">
        <div className="flex gap-10 ">
          <div className="flex gap-1 items-center text-white">
            <Image src={header} width={8} height={8} className="w-8 h-8" />
            <p>IGSTUDIO</p>
          </div>
        </div>
        <div className="flex gap-12 text-md font-medium text-white">
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas </p>
          <p>About Us</p>
        </div>
        <div className="flex gap-10 text-white">
          <Image src={Instagram} width={8} height={8} className="w-6 h-6" />
          <Image src={facebook} width={8} height={8} className="w-6 h-6" />
          <Image src={twitter} width={8} height={8} className="w-6 h-6" />
          <Image src={pinterest} width={8} height={8} className="w-6 h-6" />
        </div>
      </div>
      <div className="flex gap-8 text-white m-auto py-10">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
