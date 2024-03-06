import React from "react";
import MyAccordion from "./Accordian";
const FAQ = () => {
  return (
    <div className="py-16 flex gap-8 px-36">
      <div className="flex flex-col gap-4 text-left text-white">
        <p className="text-4xl text-white text-left">FAQ</p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4 text-left text-white mt-10">
        <p className="text-xl text-white text-left">
          Do I need a personal injury report?
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </p>
        <MyAccordion accordianTitle={"How much is my case worth?"}/>
        <MyAccordion accordianTitle={"What should I do right after car accidect"}/>
        <MyAccordion accordianTitle={"How much is my case worth?"}/>
      </div>
    </div>
  );
};

export default FAQ;
