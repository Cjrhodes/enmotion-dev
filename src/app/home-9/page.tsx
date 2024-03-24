import { Metadata } from "next";
import React from "react";
import { rajdhani } from "../fonts";
import HeaderSection5 from "@/components/header/HeaderSection5";
import RightSidebarSection from "@/components/side-panel/RightSidebarSection";
import SidePanelSection from "@/components/side-panel/SidePanelSection";
import HomeSection9 from "@/components/home/HomeSection9";
import AboutSection7 from "@/components/about/AboutSection7";
import VideoSection4 from "@/components/video/VideoSection4";
import ServiceSection6 from "@/components/service/ServiceSection6";
import CounterSection from "@/components/counter/CounterSection";
import PortfolioSection4 from "@/components/portfolio/PortfolioSection4";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NewsSection from "@/components/blog/NewsSection";
import BrandSlider2 from "@/components/slider/BrandSlider2";
import FooterSection5 from "@/components/footer/FooterSection5";
import Lightbox from "@/components/modal/Lightbox";
import ContactSection3 from "@/components/contact/ContactSection3";
import VideoModal from "@/components/modal/VideoModal";
import BlogModalLandscape from "@/components/modal/BlogModalLandscape";

export const metadata: Metadata = {
  title: "Porichiti Home Page 9",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`homepage-9-main ${rajdhani.className}`}>
      <HeaderSection5 logo="img/logo-3.png" />
      <RightSidebarSection logo="img/logo-3.png" />
      <SidePanelSection />
      <HomeSection9 />
      <AboutSection7 />
      <VideoSection4 />
      <ServiceSection6 />
      <CounterSection
        style="pc-review-section homepage-9-counter-section"
        darkTheme
        bgImg="img/counter4_bg.jpg"
      />
      <PortfolioSection4 />
      <TestimonialSlider style="main-clr4" />
      <ContactSection3
        style="homepage-9-contact-section pc-contact-area pt-120"
        headingStyle=""
        img="img/contact_img.png"
        btnStyle="def-btn def-btn-4 btn-hover"
      />
      <NewsSection style="main-clr4" />
      <BrandSlider2 style="homepage-9-brand-seciton" />
      <FooterSection5
        logo="img/logo-3.png"
        shapeStyle="d-none"
        style="main-clr4"
      />
      <Lightbox />
      <VideoModal videoUrl="https://www.youtube.com/embed/BHwNzSQ6Yoc?si=Wgqt1McxDJ9bgP7V" />
      <BlogModalLandscape />
    </main>
  );
};

export default page;
