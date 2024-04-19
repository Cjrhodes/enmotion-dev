import React from "react";
import { Metadata } from "next";
import TrainingSection from "@/components/service/TrainingSection";
import HeaderSection from "@/components/header/HeaderSection";
import AboutSection3 from "@/components/about/AboutSection3";
import FooterSection3 from "@/components/footer/FooterSection3";
import SidebarSection from "@/components/side-panel/SidebarSection";
import ContactFormModal from "@/components/modal/ContactFormModal";
import HeroSlider from "@/components/hero/HeroSlider";
import TrainingProgram from "@/components/program/TrainingProgram";
import PricingSection from "@/components/package/PricingSection";
import Lightbox from "@/components/modal/Lightbox";

import { spaceGrotesk } from "./fonts";

export const metadata: Metadata = {
  title: "En Motion",
  description: "Developed by Chris Rhodes",
};
export default function Home() {
  return (

<main className={`home-11 trainer-home ${spaceGrotesk.className}`}>   
   <SidebarSection logo="img/enmotion.png" />
 
   <div id="mainContent">
   <HeaderSection contactModal={true} />
   <HeroSlider />
     <AboutSection3 />
     <TrainingProgram />

 

   </div>
   <FooterSection3 />
  <ContactFormModal />

 </main>

  );
}
