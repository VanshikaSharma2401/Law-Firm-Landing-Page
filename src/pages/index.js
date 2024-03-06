import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Introduction from "@/Components/Introduction";
import Whychooseus from "@/Components/Whychooseus";
import PracticeArea from "@/Components/PracticeArea";
import WhatsaysClient from "@/Components/WhatsaysClient";
import Ourteam from "@/Components/Ourteam";
import FAQ from "@/Components/FAQ";
import Subscribe from "@/Components/Subscribe";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Introduction/>
      <Whychooseus/>
      <PracticeArea/>
      <WhatsaysClient/>
      <Ourteam/>
      <FAQ/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
