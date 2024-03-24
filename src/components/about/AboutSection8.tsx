"use client";
import React from "react";
import AboutTextSlider2 from "../slider/AboutTextSlider2";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";

const AboutSection8 = () => {
  return (
    <div className="pc-about5-area pt-120 pb-80" id="About">
      <div className="pc-aobut-right5-shape">
        <img src="img/about5-shape.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-xl-6 col-lg-6 order-1 order-lg-0"
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="pc-service-info-right mb-40">
              <h4 className="pc-about4-title text-white mb-25">
                <CustomGsapTextSplit>About Me</CustomGsapTextSplit>
              </h4>
              <CustomGsapTextSplit>
                <span className="pc-about-subtitle text-white">
                  I'm Abu Bakkar and Software Developer
                </span>
              </CustomGsapTextSplit>

              <CustomGsapTextSplitLine className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco.
              </CustomGsapTextSplitLine>

              <div className="pc-about-5-informations">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="pc-ab-info5-line-wrap mt-15">
                      <span className="pc-ab-info5-line">
                        <strong>Birthday:</strong> 24.08.1996
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>City:</strong> Honululu
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Study:</strong> MBA
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Website:</strong>{" "}
                        <a href="https://example.com/">example.com</a>
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+88078767943">+88078767943</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="pc-ab-info5-line-wrap mt-15">
                      <span className="pc-ab-info5-line">
                        <strong>Age:</strong> 25
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Hobby:</strong> Coding
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Degree:</strong> BSc in CSE
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Facebook:</strong>{" "}
                        <a href="https://fb.com/eliane">fb.com/eliane</a>
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Instagram:</strong>{" "}
                        <a href="https://instagram/eliane">
                          instagram.com/eliane
                        </a>
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Linkedin:</strong>{" "}
                        <a href="https://linkedin/eliane">
                          linkedin.com/eliane
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pc-about-info-inner-button mt-35">
                <a href="#" className="def-btn def-btn-5 btn-hover">
                  <span className="dot"></span>{" "}
                  <span className="txt">
                    Learn More <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-xl-6 col-lg-6 order-0 order-lg-1"
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="pc-about-right5-img ml-40 pl-40 mb-40">
              <div className="pc-about-right5-experience-wrapper">
                <AboutTextSlider2 />
              </div>
              <div className="pc-about-right5-image text-lg-end">
                <img src="img/about5.jpg" alt="img" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection8;
