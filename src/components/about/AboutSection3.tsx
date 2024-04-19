"use client";
import React from "react";

import AboutTextSlider from "../slider/AboutTextSlider";
import { motion } from "framer-motion";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
const AboutSection3 = () => {
  return (
    <section id="About">
      <div className="about-8 about-10" >
        <div className="container">
          <div className="row align-items-center justify-content-between row-gap-lg-0 row-gap-5">
            <div className="col-lg-6">
              <div className="about-txt-10">
                <motion.div
                  className="section-heading-8 section-heading-10"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  viewport={{ once: true }}
                >
                  <h2 className="title-anim">
                    <CustomGsapTextSplit children="About us" />
                  </h2>
                </motion.div>

                
                <CustomGsapTextSplitLine className="title-anim">                
                At En Motion, performance is at the forefront of everything we do. Our one-on-one personal training is custom-designed to help clients demolish their fitness goals - whether they are athletes looking to take their game to the next level, individuals recovering from injuries, or those simply wanting to build strength and endurance to power through life's challenges. We are dedicated to unlocking the untapped potential in every client.
                </CustomGsapTextSplitLine>
                <CustomGsapTextSplitLine>
                This performance-driven philosophy underlies all of our one-on-one training sessions. Each workout program is meticulously crafted not just to prepare our clients, but to ensure they operate at peak levels when it matters most. Our expert trainers cultivate an environment of unwavering support while continually pushing clients to surpass their limits. We focus on systematically enhancing physical capabilities, endurance, and resilience so clients can go the distance.
                </CustomGsapTextSplitLine>
                <CustomGsapTextSplitLine>
                When you train one-on-one at En Motion, you receive a fully customized regimen to equip you with the tools for elite performance. We understand that every client is on a unique fitness journey. That's why our trainers are wholeheartedly committed to fueling each individual's health and fitness goals. Our mission is to prime our clients for conquering any obstacle they face - whether that's a competitive event, rehabilitation after an injury, or simply the unpredictable demands of daily life.
                </CustomGsapTextSplitLine>
                <motion.div
                  className="btn-box fade_bottom"
                  initial={{
                    y: -60,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                >
     
                </motion.div>
                <span className="name-vector">En Motion </span>
              </div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="about-img-10"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                }}
              >
               
                <div className="img-wrap">
                  <div className="image-animation">
                    <motion.img
                      src="img/miguel.png"
                      className="image-animation-img"
                      alt="image"
                      initial={{
                        scale: 1.2,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <AboutTextSlider />
    </section>
  );
};

export default AboutSection3;
