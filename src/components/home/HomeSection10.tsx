"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";

const HomeSection10 = () => {
  return (
    <section id="Home">
      <div className="banner main-clr5" data-bgcolor="#061319">
        <div className="container">
          <div className="pc-banner-wrapp-clr">
            <div className="row justify-content-between align-items-center">
              <motion.div
                className="col-lg-5 d-none d-lg-block"
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <div className="pc-banner-img pr-50">
                  <img src="img/banner-img-5.png" alt="img" />
                </div>
              </motion.div>
              <motion.div
                className="col-lg-7 col-md-10"
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <div className="banner-text-sec banner-4-padding">
                  <div className="banner-text-area">
                    <div className="text-anim">
                      <CustomGsapTextSplit>
                        <p className="wellcome ">Abu Bakkar</p>
                      </CustomGsapTextSplit>
                    </div>
                    <h1 className="banner-heading">
                      <CustomGsapTextSplit>
                        <span className="pc-title-left">
                          I'm a Freelance & Software{" "}
                        </span>
                        <br /> <span className="pc-title-right">Developer</span>
                      </CustomGsapTextSplit>
                    </h1>
                    <CustomGsapTextSplitLine className="banner-description title-anim">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis non a tempora! sit omnis distinctio? dfsff
                      dfsafsf amr ilsore karoem
                    </CustomGsapTextSplitLine>
                    <div className="banner-btn">
                      <a href="#" className="def-btn def-btn-5 btn-hover">
                        <span className="dot"></span>{" "}
                        <span className="txt">Download CV</span>{" "}
                        <i className="fa-solid fa-download"></i>
                      </a>
                      <a href="#" className="about-btn">
                        About Me
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection10;
