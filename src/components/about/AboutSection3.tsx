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
                Holding a Master's Degree in Psychology in Physical Activity & Sports and with a notable history as a professional soccer player, Miguel has shifted from competing on the field to coaching, with a deep commitment to enhancing the health and wellness of individuals and communities. [His/Her/Their] broad expertise encompasses a range of certifications, including IFPA and NFPT Personal Trainer, Crossfit, and specialized training in functional fitness and soccer. [Name] excels in guiding individuals of all ages towards realizing their physical potential, employing a personalized approach that caters to the unique needs of each client.
                </CustomGsapTextSplitLine>
                <CustomGsapTextSplitLine>
                Driven by a mission to inspire and facilitate lasting change, Miguel demonstrates that with dedication and the right support, personal wellness and peak performance are attainable objectives for everyone. Through [his/her/their] programs at En Motion, [Name] is not just a coach but a transformative figure, leading by example and empowering clients to take charge of their health and well-being.
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
