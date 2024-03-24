import React from "react";
import { rajdhani } from "../fonts";
import { Metadata } from "next";
import SidePanelSection from "@/components/side-panel/SidePanelSection";
import BlogModalLandscape from "@/components/modal/BlogModalLandscape";
import HeaderSection3 from "@/components/header/HeaderSection3";
import HomeSection8 from "@/components/home/HomeSection8";
import SkillSection2 from "@/components/skills/SkillSection2";
import CounterSection from "@/components/counter/CounterSection";
import PortfolioSection3 from "@/components/portfolio/PortfolioSection3";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NewsSection from "@/components/blog/NewsSection";
import BrandSlider2 from "@/components/slider/BrandSlider2";
import ContactSection4 from "@/components/contact/ContactSection4";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import FooterSection5 from "@/components/footer/FooterSection5";
import SidebarSection from "@/components/side-panel/SidebarSection";
export const metadata: Metadata = {
  title: "Porichiti Home Page 8",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`homepage-8 ${rajdhani.className}`}>
      <HeaderSection3
        style="main-clr3"
        logo="img/logo-5.png"
        btnStyle="def-btnrd"
      />
      <SidebarSection logo="img/logo-5-dark.png" contactHashlink />
      <SidePanelSection />
      <HomeSection8 />
      <SkillSection2 />
      <BlogModalLandscape />
      <CounterSection
        style="counter-section-2"
        bgImg="img/counter_bg.png"
        darkTheme
      />
      <PortfolioSection3
        style="homepage-8-portfolio"
        headingStyle="homepage-8-header"
        btnStyle="homepage-8-btns def-btnrd"
      />
      <TestimonialSlider style="" />
      <NewsSection style="homepage-8-news-section" />
      <BrandSlider2 style="homepage-8-brand-section" />
      <ContactSection4 style="homepage-8-contact-section" />
      <NewsletterSection
        style="homepage-8-newsletter-section"
        btnStyle="def-btn btn-hover def-btnrd"
      />
      <FooterSection5
        style="main-clr3 pt-100"
        logo="img/logo-5.png"
        shapeStyle="clr-main3"
      />
    </main>
  );
};

export default page;
