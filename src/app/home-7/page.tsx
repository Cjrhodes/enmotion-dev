import React from "react";
import { rajdhani } from "../fonts";
import HeaderSection4 from "@/components/header/HeaderSection4";
import { Metadata } from "next";
import SidePanelSection from "@/components/side-panel/SidePanelSection";
import HomeSection7 from "@/components/home/HomeSection7";
import FooterSection6 from "@/components/footer/FooterSection6";
import AllPopupSection from "@/components/popup/AllPopupSection";
import BlogModal from "@/components/modal/BlogModal";
import BlogModalLandscape from "@/components/modal/BlogModalLandscape";
import Lightbox from "@/components/modal/Lightbox";
export const metadata: Metadata = {
  title: "Porichiti Home Page 7",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`home-7 ${rajdhani.className}`}>
      <HeaderSection4 />
      <SidePanelSection />
      <HomeSection7 />
      <AllPopupSection />
      <FooterSection6 />
      <BlogModal />
      <BlogModalLandscape />
      <Lightbox />
    </main>
  );
};

export default page;
