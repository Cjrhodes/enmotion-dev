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
                With over a decade of immersion in the world of combat sports and self-defense, I bring a unique blend of expertise to help individuals achieve their fitness goals while developing invaluable skills for personal protection. My journey began with a passion for kickboxing, where I honed my skills in striking techniques, footwork, and mental fortitude. This experience instilled in me the importance of discipline and the ability to defend oneself in various situations.

                </CustomGsapTextSplitLine>
                <CustomGsapTextSplitLine>
                Transitioning from a competitor to a coach, I now hold numerous high-performance certifications, including IFPA Certified Personal Trainer, NFPT Certified Personal Trainer, SFP Certified Trainer, Crossfit Coach, Cross Country Coach, Power Lifting Coach, and UFC Coach Certified. Additionally, I am a TRX Coach and CPR Certified, ensuring that my clients receive comprehensive training in a safe and controlled environment. My extensive knowledge of Functional Master Training allows me to design personalized programs that cater to individual needs, whether you're seeking self-defense skills, general fitness, or specialized athletic training.
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
