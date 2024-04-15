"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { useAppDispatch } from "@/redux/hooks";

const HeroSlider: React.FC = () => {
  const dispatch = useAppDispatch(); // Move the hook call inside the component

  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
  };

  return (
    <>
      <div className="hero-slider-area">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          speed={1500}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="hero-slider"
        >
          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/girl-kickboxing1.png
                )`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text two">
                      <h1>Empower Your Defense</h1>
                      <p>
                        Learn practical self-defense with En Motion. Our courses
                        boost confidence and prepare you for any situation,
                        enhancing safety and awareness.
                      </p>
                      <div className="slider-btn">
                        <Link
                          href="#"
                          className="default-btn"
                          onClick={openContactModal}
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* Social Wrap */}
        <div className="social-wrap">
          <ul>
            <li className="follow-us">Follow Us:</li>
            <li>
              <a href="https://twitter.com/enmotionfit" target="_blank">
                <i className="fa-brands fa-x"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/enmotionfit/?hl=en"
                target="_blank"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61558229676688"
                target="_blank"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;