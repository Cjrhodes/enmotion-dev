import React from "react";
import { Metadata } from "next";
import SidePanelSection from "@/components/side-panel/SidePanelSection";
import HomeSection2 from "@/components/home/HomeSection2";
import AboutSection2 from "@/components/about/AboutSection2";
import ServiceSection2 from "@/components/service/ServiceSection2";
import PortfolioSection2 from "@/components/portfolio/PortfolioSection2";
import VideoSection2 from "@/components/video/VideoSection2";
import AwardSection from "@/components/award/AwardSection";
import TestimonialSection2 from "@/components/testimonials/TestimonialSection2";
import BlogSection2 from "@/components/blog/BlogSection2";
import ContactSection from "@/components/contact/ContactSection";
import FooterSection2 from "@/components/footer/FooterSection2";
import HeaderSection from "@/components/header/HeaderSection";
import VideoModal from "@/components/modal/VideoModal";
import SidebarSection from "@/components/side-panel/SidebarSection";
import BlogModal from "@/components/modal/BlogModal";
import { kanit } from "../fonts";

export const metadata: Metadata = {
  title: "Porichiti Home Page 2",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`home-8 content-writer-home ${kanit.className}`}>
      <HeaderSection contactModal={false} />
      <SidePanelSection />
      <HomeSection2 />
      <div id="mainContent">
        <AboutSection2 />
        <ServiceSection2 />
        <PortfolioSection2 />
        <VideoSection2 />
        <AwardSection />
        <TestimonialSection2 />
        <BlogSection2 />
        <ContactSection />
      </div>
      <FooterSection2 />
      <SidebarSection logo="img/logo-8-black.png" />
      <VideoModal videoUrl="https://www.youtube.com/embed/OJF3Egdzdyc?si=Mc5SXC68ZTjQAb57" />
      <BlogModal />
    </main>
  );
};

export default page;
