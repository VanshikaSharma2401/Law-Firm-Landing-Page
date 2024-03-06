import React from "react";
import { whyChooseUsData } from "@/Constants/Constant";
import WhyChooseCrad from "./WhyChooseCrad";

const WhatsaysClient = () => {
  return (
    <div className="py-8 flex flex-col gap-8 px-36">
      <div className="flex flex-col gap-1 text-left justify-start items-start">
        <p className="text-4xl text-white text-center">What says our</p>
        <p className="text-4xl text-white text-center">happy Clients</p>
      </div>
      <div className="flex gap-6">
        {whyChooseUsData.map((data) => (
          <WhyChooseCrad key={data.id} cardData={data} isReadMore={false} />
        ))}
      </div>
    </div>
  );
};

export default WhatsaysClient;
