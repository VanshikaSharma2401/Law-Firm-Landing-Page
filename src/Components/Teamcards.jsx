import React from "react";
import Teamcard from "./Teamcard";

const Teamcards = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-16">
        <Teamcard />
        <Teamcard selected={true}/>
        <Teamcard />
      </div>
      <div className="flex gap-16">
        <Teamcard />
        <Teamcard />
        <Teamcard />
      </div>
      </div>
  );
};

export default Teamcards;
