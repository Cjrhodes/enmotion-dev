"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const HeroSlider: React.FC = () => {
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
                backgroundImage: `url(/img/girlpushup.jpeg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text one">
                    <h1>Discover Your Peak Potential</h1>
<p>En Motion offers personalized training to reach your health goals. Our certified trainers craft custom workouts for effective, motivating sessions.</p>


                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/girl-kickboxing.jpeg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text two">
                    <h1>Empower Your Defense</h1>
                    <p>Learn practical self-defense with En Motion. Our courses boost confidence and prepare you for any situation, enhancing safety and awareness.</p>


                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/powerliftgirl.jpeg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text three">
                    <h1>Boost Team Wellness and Productivity</h1>
<p>En Motion's corporate wellness boosts health and productivity with classes for all levels, fostering a vibrant workplace culture.</p>



                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
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
              <a href="https://www.instagram.com/enmotionfit/?hl=en" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61558229676688" target="_blank">
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
