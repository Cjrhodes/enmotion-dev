"use client";
import React from "react";
import CountUp from "react-countup";
import AboutTextSlider from "../slider/AboutTextSlider";
import { motion } from "framer-motion";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
const AboutSection3 = () => {
  return (
    <section id="About">
      <div className="about-8 about-10">
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
                    <CustomGsapTextSplit children="about me" />
                  </h2>
                </motion.div>

                <CustomGsapTextSplitLine className="title-anim">
                I am a Master's Degree holder in Psychology in Physical Activity & Sports from I.E.F.E, Quito-Ecuador, with an extensive background as a professional soccer player and a diverse range of coaching certifications, including IFPA, NFPT, Crossfit, and TRX, among others. My journey has transitioned from competing at high levels to empowering individuals across all ages with a focus on nurturing community leaders and promoting healthier lifestyles. Through tailored training programs, I aim to enhance human performance and instill a deep-seated understanding of physical and mental well-being.
                </CustomGsapTextSplitLine>
                <CustomGsapTextSplitLine className="title-anim">
                My experience extends beyond the field into contributing to service foundations like the National Community Service and CLDH, where I apply my expertise to support those in need. I specialize in a wide array of training methodologies, including Functional Fitness, Combat Sports, Sport Psychology, and Sports Nutrition, employing a holistic approach that encompasses not only physical training but also cognitive and emotional development. My coaching philosophy centers on creating competitive programs that motivate and encourage a commitment to health and personal well-being.
                </CustomGsapTextSplitLine>
                <CustomGsapTextSplitLine>
                Now based in Miami, FL, working with the Cabeda Soccer Academy and other projects, I am passionately committed to guiding individuals toward achieving their fullest potential and leading healthier, more fulfilling lives. Whether it’s coaching young athletes, facilitating team-building activities, or assisting seniors in navigating a healthier lifestyle, my mission is to inspire and lead by example, fostering a culture of health, strength, and community leadership.
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
                  <a href="#" className="def-btn btn-hover def-btn-10">
                    <span className="dot"></span>
                    <span className="txt">
                      Read More <i className="fa-regular fa-arrow-up-right"></i>
                    </span>
                  </a>
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
                <span className="svg-wrap">
                  <svg viewBox="0 0 100 100" width="100" height="100">
                    <defs>
                      <path
                        id="circle"
                        d="
                        M 50, 50
                        m -40, 0
                        a 40,40 0 1,1 80,0
                        a 40,40 0 1,1 -80,0"
                      />
                    </defs>
                    <text>
                      <textPath xlinkHref="#circle" startOffset="0%">
                        FITNESS AND STRENGTH POWER. FITNESS AND STRENGTH POWER.
                      </textPath>
                    </text>
                  </svg>
                  <span className="counter">
                    <CountUp
                      start={1}
                      end={65}
                      duration={5}
                      formattingFn={(value) => `${value}K`}
                    />
                  </span>
                </span>
                <div className="img-wrap">
                  <div className="image-animation">
                    <motion.img
                      src="img/about-img-10.png"
                      className="image-animatio-img"
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
