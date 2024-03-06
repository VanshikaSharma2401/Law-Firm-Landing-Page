import React from "react";
import { Grid } from "@mui/material";
import Bussiness from "../../public/Bussiness.svg";
import Bussiness2 from "../../public/Bussiness2.svg";
import Elderabuse from "../../public/Elderabuse.svg";
import Landloredabuse from "../../public/LandloreDisputes.svg";
import Partnership from "../../public/Partnership.svg";
import Realstates from "../../public/RealState.svg";
import Image from "next/image";
const PracticeArea = () => {
  return (
    <div className="py-6 mx-36 flex flex-col">
      <p className="text-center text-white text-4xl py-8">Area of Practices</p>
    <Grid container spacing={2} className="">
      {/* Row 1 */}
      <Grid item xs={12} sm={9}>
        {/* Replace the image component with your actual image */}
        <Image
          src={Bussiness}
          className="w-full h-full rounded-xl object-contain"
          width={4}
          height={4}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* Replace the image component with your actual image */}
        <Image
          src={Partnership}
          className="w-full h-full rounded-xl  object-cover"
          width={4}
          height={4}
        />
      </Grid>

      {/* Row 2 */}
      <Grid item xs={12} sm={3}>
        {/* Replace the image component with your actual image */}
        <Image
          src={Partnership}
          className="w-full h-full rounded-xl  object-cover"
          width={4}
          height={4}
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        {/* Replace the image component with your actual image */}
        <Image
          src={Bussiness}
          className="w-full h-full rounded-xl object-contain"
          width={4}
          height={4}
        />
      </Grid>
      

      {/* Row 3 */}
      <Grid item xs={12} sm={9}>
        {/* Replace the image component with your actual image */}
        <Image
          src={Bussiness}
          className="w-full h-full rounded-xl object-contain"
          width={4}
          height={4}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* Replace the image component with your actual image */}
        <Image
          src={Partnership}
          className="w-full h-full rounded-xl0 object-cover"
          width={4}
          height={4}
        />
      </Grid>
    </Grid>
    </div>

  );
};

export default PracticeArea;

{
  /* <div className="py-6 mx-36 flex flex-col">
      <div className="flex gap-2 ">
        <Image
          src={Bussiness}
          className="w-full h-full rounded-xl object-cover "
          width={4}
          height={4}
          objectFit="cover"
        />
        <Image
          src={Partnership}
          className=" w-full h-[340px] rounded-xl object-cover"
          width={4}
          height={4}
          objectFit="cover"
        />
      </div>
      <div className="flex gap-2">
        <Image
          src={Realstates}
          className="w-full h-[340px] rounded-xl"
          width={4}
          height={4}
        />
        <Image
          src={Bussiness2}
          className="w-full h-full rounded-xl"
          width={4}
          height={4}
        />
      </div>
      <div className="flex gap-2">
        <Image
          src={Landloredabuse}
          className="w-full h-full rounded-xl"
          width={4}
          height={4}
        />
        <Image
          src={Elderabuse}
          className="w-full h-[340px] rounded-xl"
          width={4}
          height={4}
        />
      </div>
    </div> */
}
