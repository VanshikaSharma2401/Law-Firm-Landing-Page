import React from "react";

const Introduction = () => {
  return (
    <div className="text-white flex min-h-[300px] max-w-[800px] gap-10 m-auto  justify-around items-center text-center p-6">
      <p className="text-4xl text-left">Let’s Introduce Ourself</p>
      <div className="border-[1px] border-right border-gray-500 min-h-[150px]"></div>
      <div className="flex flex-col gap-2">
        <p className="text-left text-lg">Criminal Lawyer</p>
        <p className="text-left">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
