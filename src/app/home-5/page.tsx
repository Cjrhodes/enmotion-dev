import React from "react";
import { Metadata } from "next";
import HeaderSection3 from "@/components/header/HeaderSection3";
import SidePanelSection from "@/components/side-panel/SidePanelSection";
import HomeSection5 from "@/components/home/HomeSection5";
import AboutSection5 from "@/components/about/AboutSection5";
import SkillSection from "@/components/skills/SkillSection";
import ServiceSection4 from "@/components/service/ServiceSection4";
import CounterSection from "@/components/counter/CounterSection";
import PortfolioSection3 from "@/components/portfolio/PortfolioSection3";
import TestimonialSection5 from "@/components/testimonials/TestimonialSection5";
import ContactSection3 from "@/components/contact/ContactSection3";
import BlogSection5 from "@/components/blog/BlogSection5";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import FooterSection5 from "@/components/footer/FooterSection5";
import Lightbox from "@/components/modal/Lightbox";
import BlogModal from "@/components/modal/BlogModal";
import { rajdhani } from "../fonts";
import SidebarSection from "@/components/side-panel/SidebarSection";

export const metadata: Metadata = {
  title: "Porichiti Home Page 5",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`homepage-5 ${rajdhani.className}`}>
      <HeaderSection3 style="" logo="img/logo.png" btnStyle="" />
      <SidePanelSection />
      <HomeSection5 />
      <AboutSection5 />
      <SkillSection style="" circleColor="#4cb950" textColor="#fff" />
      <ServiceSection4 />
      <CounterSection style="" darkTheme={true} />
      <PortfolioSection3 style="" headingStyle="" btnStyle="" />
      <TestimonialSection5 style="" showShape />
      <ContactSection3
        style="contact_us"
        headingStyle=""
        img="img/img-7.png"
        btnStyle=""
      />
      <BlogSection5 showShape={true} style="" headingStyle="" />
      <NewsletterSection style="" btnStyle="def-btn" />
      <FooterSection5 style="pt-100" logo="img/logo.png" />
      <SidebarSection logo="img/logo-dark.png" contactHashlink />
      <Lightbox />
      <BlogModal />
    </main>
  );
};

export default page;
