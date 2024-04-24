import React from "react";
import HeaderSection from "@/components/header/HeaderSection";
import AboutSection3 from "@/components/about/AboutSection3";
import FooterSection3 from "@/components/footer/FooterSection3";
import SidebarSection from "@/components/side-panel/SidebarSection";
import ContactFormModal from "@/components/modal/ContactFormModal";
import HeroSlider from "@/components/hero/HeroSlider";
import { trainingProgramData } from "@/data/Data";
import TrainingProgram from "../components/program/TrainingProgram";
import { spaceGrotesk } from "./fonts";
import FounderSection from "@/components/founder/FounderSection";
import CTASection from "@/components/cta/CallToAction";
import DecoLineSection from "@/components/about/decoline/DecolineSection";
import PricingComponent from "@/components/pricing/PricingComponent";

export const metadata = {
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
        <DecoLineSection />   
        <TrainingProgram trainingPrograms={trainingProgramData} />
      
        <DecoLineSection />
        <FounderSection />
        <DecoLineSection />   
       
        

        <FooterSection3 />

      </div>
      <ContactFormModal />
    </main>
  );
}
