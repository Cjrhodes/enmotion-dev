import { Metadata } from "next";
import React from "react";
import { rajdhani } from "../fonts";
import HeaderSection5 from "@/components/header/HeaderSection5";
import RightSidebarSection from "@/components/side-panel/RightSidebarSection";
import SidePanelSection from "@/components/side-panel/SidePanelSection";
import HomeSection11 from "@/components/home/HomeSection11";
import AboutSection9 from "@/components/about/AboutSection9";
import VideoSection6 from "@/components/video/VideoSection6";
import ServiceSection6 from "@/components/service/ServiceSection6";
import ProjectSection from "@/components/project/ProjectSection";
import TestimonialSlider2 from "@/components/slider/TestimonialSlider2";
import VideoSection5 from "@/components/video/VideoSection5";
import BrandSection2 from "@/components/brand/BrandSection2";
import ContactSection3 from "@/components/contact/ContactSection3";
import NewsSection from "@/components/blog/NewsSection";
import FooterSection5 from "@/components/footer/FooterSection5";
import Lightbox from "@/components/modal/Lightbox";
import BlogModalLandscape from "@/components/modal/BlogModalLandscape";
import VideoModal from "@/components/modal/VideoModal";
export const metadata: Metadata = {
  title: "Porichiti Home Page 11",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`homepage-11-main ${rajdhani.className}`}>
      <HeaderSection5 logo="img/logo-11.png" />
      <RightSidebarSection logo="img/logo-11.png" />
      <SidePanelSection />
      <HomeSection11 />
      <AboutSection9 />
      <VideoSection6 />
      <ServiceSection6 style="homepage-11-service-section" />
      <ProjectSection
        style="homepage-11-project-section"
        btnStyle="main-clr6"
      />
      <TestimonialSlider2 style="homepage-11-testimonial-section" />
      <VideoSection5 style="homepage-11-video-section" />
      <BrandSection2 />
      <ContactSection3
        style="homepage-11-contact-section pc-contact-area pt-120"
        img="img/contact_img.png"
        headingStyle=""
        btnStyle="def-btn-6 btn-hover"
      />
      <NewsSection style="main-clr6" />
      <FooterSection5
        style="main-clr6"
        logo="img/logo-11.png"
        shapeStyle="d-none"
      />
      <Lightbox />
      <BlogModalLandscape />
      <VideoModal videoUrl="https://www.youtube.com/embed/ACf-MHzTumM?si=niH03-vZRPdgwJrr" />
    </main>
  );
};

export default page;
