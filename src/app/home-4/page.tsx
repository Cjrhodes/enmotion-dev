import React from "react";
import { Metadata } from "next";
import HeaderSection2 from "@/components/header/HeaderSection2";
import SidePanelSection from "@/components/side-panel/SidePanelSection";
import HomeSection4 from "@/components/home/HomeSection4";
import ServiceSection3 from "@/components/service/ServiceSection3";
import AboutSection4 from "@/components/about/AboutSection4";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import TestimonialSection4 from "@/components/testimonials/TestimonialSection4";
import FeatureSection from "@/components/featured/FeatureSection";
import FaqSection from "@/components/faq/FaqSection";
import BlogSection4 from "@/components/blog/BlogSection4";
import ContactSection2 from "@/components/contact/ContactSection2";
import FooterSection4 from "@/components/footer/FooterSection4";
import RightSidebarSection from "@/components/side-panel/RightSidebarSection";
import SearchModal from "@/components/modal/SearchModal";
import VideoModal from "@/components/modal/VideoModal";
import BlogModalLandscape from "@/components/modal/BlogModalLandscape";
import Lightbox from "@/components/modal/Lightbox";
import { spaceGrotesk } from "../fonts";

export const metadata: Metadata = {
  title: "Porichiti Home Page 4",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`home-11 accountant-home ${spaceGrotesk.className}`}>
      <HeaderSection2 />
      <SearchModal />
      <SidePanelSection />
      <RightSidebarSection logo="img/logo-11.png" />
      <HomeSection4 />
      <div id="mainContent">
        <ServiceSection3 />
        <AboutSection4 />
        <CaseStudySection />
        <TestimonialSection4 />
        <FeatureSection />
        <FaqSection />
        <BlogSection4 />
        <ContactSection2 />
      </div>
      <FooterSection4 />
      <VideoModal videoUrl="https://www.youtube.com/embed/EsOkxSjUEI0?si=mBYpTHEbviiaA0wS" />
      <BlogModalLandscape />
      <Lightbox />
    </main>
  );
};

export default page;
