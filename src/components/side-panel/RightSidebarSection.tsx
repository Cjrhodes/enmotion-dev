"use client";
import { toggleRightSidebarClose } from "@/redux/features/rightSidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import Navigation2 from "../header/Navigation2";
import { sidebarData } from "@/data/Data";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
type Props = {
  logo: string;
};
const RightSidebarSection = ({ logo }: Props) => {
  const dispatch = useAppDispatch();
  const isRightSidebarOpen = useAppSelector(
    (state) => state.rightSidebar.isRightSidebarOpen
  );
  const closeRightSidebar = () => {
    dispatch(toggleRightSidebarClose());
  };
  const openLightbox = (src: string) => {
    dispatch(toggleLightboxOpen(src));
  };
  return (
    <>
      <div
        className={`pc-sidebar-info-wrapper side-info ${
          isRightSidebarOpen ? "info-open" : ""
        }`}
      >
        <div className="pc-sidebar-info-inner">
          <div className="row mb-30">
            <div className="col-6">
              <Link href="/" className="pc-sidebar-logo">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-6 text-end">
              <button
                className="pc-sidebar-close side-info-close"
                onClick={closeRightSidebar}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <Navigation2 style="mobile-nav" mobile={true} />
          <div className="pc-sidebar-about mb-30">
            <h4 className="pc-sidebar-about-title">About Me</h4>
            <p className="pc-sidebar-short-desc">
              I'm a professional photographer. I have been photographing for
              marriege ceremony, Birthday party, Anniversery and any Occation in
              professional way since 2009. My achievement of photo focusing is
              Photographer of the latest year in whole country.
            </p>
            <div className="sidebar-photography-imgs mt-20">
              {sidebarData.map((item) => (
                <a
                  role="button"
                  onClick={() => openLightbox(item.img)}
                  key={item.id}
                >
                  <img src={item.img} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="pc-sidebar-contact">
            <h4 className="pc-sidebar-contact-title mb-15">Get In Touch Me</h4>
            <span className="pc-sidebar-contact-meta">
              <i className="fa-solid fa-location-dot"></i> 75 Arlington St.
              Suite 500 Boston, MA 02116, USA
            </span>
            <a href="tel:+889867778796" className="pc-sidebar-contact-meta">
              <i className="fa-solid fa-phone-flip"></i> +8898 6777 8796
            </a>
            <a
              href="mailto:example@gmail.com"
              className="pc-sidebar-contact-meta"
            >
              <i className="fa-solid fa-envelope"></i> example@gmail.com
            </a>
            <div className="pc-sidebar-social mt-20">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas-overlay ${
          isRightSidebarOpen ? "overlay-open" : ""
        }`}
        role="button"
        onClick={closeRightSidebar}
      ></div>
    </>
  );
};

export default RightSidebarSection;
