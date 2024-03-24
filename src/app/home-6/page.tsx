import { Metadata } from "next";
import React from "react";
import { rajdhani } from "../fonts";
import HeaderSection3 from "@/components/header/HeaderSection3";
import SidePanelSection from "@/components/side-panel/SidePanelSection";
import HomeSection6 from "@/components/home/HomeSection6";
import AboutSection6 from "@/components/about/AboutSection6";
import SkillSection from "@/components/skills/SkillSection";
import ServiceSection5 from "@/components/service/ServiceSection5";
import CounterSection from "@/components/counter/CounterSection";
import PortfolioSection3 from "@/components/portfolio/PortfolioSection3";
import TestimonialSection5 from "@/components/testimonials/TestimonialSection5";
import ContactSection3 from "@/components/contact/ContactSection3";
import BlogSection5 from "@/components/blog/BlogSection5";
import NewsletterSection from "@/components/newsletter/NewsletterSection";
import FooterSection5 from "@/components/footer/FooterSection5";
import Lightbox from "@/components/modal/Lightbox";
import BlogModal from "@/components/modal/BlogModal";
import SidebarSection from "@/components/side-panel/SidebarSection";
export const metadata: Metadata = {
  title: "Porichiti Home Page 6",
  description: "Developed by Azizur Rahman",
};
const page = () => {
  return (
    <main className={`home-6 ${rajdhani.className}`}>
      <HeaderSection3
        style="navigation-2"
        logo="img/logo-2.png"
        btnStyle="def-btn-2"
      />
      <SidePanelSection />
      <HomeSection6 />
      <AboutSection6 />
      <SkillSection
        style="progressbar-sec-2"
        circleColor="#f8b216"
        textColor="#222"
      />
      <ServiceSection5 style="" />
      <CounterSection style="review-sec-2" darkTheme={false} />
      <PortfolioSection3
        style="portfolio-sec-2"
        headingStyle="section-heading-2"
      />
      <TestimonialSection5 style="testimonial-2" />
      <ContactSection3
        style="contact_us contact_us-2"
        headingStyle="section-heading-2"
        img="img/contact-img-2.png"
        btnStyle="def-btn-2"
      />
      <BlogSection5
        showShape={false}
        style="newsfeed-sec-2"
        headingStyle="section-heading-2"
      />
      <NewsletterSection style="newsletter-2" btnStyle="def-btn def-btn-2" />
      <FooterSection5
        style="footer-2 pt-100"
        logo="img/logo-3.png"
        shapeStyle="d-none"
      />
      <Lightbox />
      <BlogModal />
      <SidebarSection logo="img/logo-2.png" contactHashlink />
    </main>
  );
};

export default page;
