import React from "react";
import { Metadata } from "next";

import HomeSection3 from "@/components/home/HomeSection3";
import TrainingSection from "@/components/service/TrainingSection";
import AboutSection3 from "@/components/about/AboutSection3";
import TrainingProgram from "@/components/program/TrainingProgram";
import ScheduleSection from "@/components/schedule/ScheduleSection";
import VideoSection3 from "@/components/video/VideoSection3";
import PackageSection from "@/components/package/PackageSection";
import GallerySection from "@/components/gallery/GallerySection";
import TestimonialSection3 from "@/components/testimonials/TestimonialSection3";
import BlogSection3 from "@/components/blog/BlogSection3";
import IgPostSection from "@/components/social/IgPostSection";
import FooterSection3 from "@/components/footer/FooterSection3";
import SearchModal from "@/components/modal/SearchModal";
import SidebarSection from "@/components/side-panel/SidebarSection";
import VideoModal from "@/components/modal/VideoModal";
import IgPostModal from "@/components/modal/IgPostModal";
import ContactFormModal from "@/components/modal/ContactFormModal";
import BlogModalLandscape from "@/components/modal/BlogModalLandscape";
import HeroSlider from "@/components/hero/HeroSlider";
import Lightbox from "@/components/modal/Lightbox";
import { spaceGrotesk } from "../fonts";

export const metadata: Metadata = {
  title: "Porichiti Home Page 3",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`home-11 trainer-home ${spaceGrotesk.className}`}>
   
      <SidebarSection logo="img/enmotion.png" />
      <HeroSlider />
      <div id="mainContent">
        <TrainingSection />
        <AboutSection3 />
        <TrainingProgram />
        <ScheduleSection />
        <VideoSection3 />
        <PackageSection />
        <GallerySection />
        <TestimonialSection3 />
        <BlogSection3 />
        <IgPostSection />
      </div>
      <FooterSection3 />
      <SearchModal />
      <VideoModal videoUrl="https://www.youtube.com/embed/HQfF5XRVXjU?si=XSXDdLejat-4-Vav" />
      <IgPostModal />
      <ContactFormModal />
      <BlogModalLandscape />
      <Lightbox />
    </main>
  );
};

export default page;
