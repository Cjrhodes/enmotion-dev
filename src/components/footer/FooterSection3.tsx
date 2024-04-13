"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { useAppDispatch } from "@/redux/hooks";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import SubscribeForm from "../form/SubscribeForm";
const FooterSection3 = () => {
  const dispatch = useAppDispatch();
  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
  };
  return (
    <section>
      <footer className="footer-8 footer-9 footer-10">
        <div className="container">
          <div className="footer-top">
            <div className="row justify-content-between gx-0 gy-lg-0 gy-1">
              
           
                <button
                  className="def-btn btn-hover def-btn-8"
                  onClick={openContactModal}
                >
                  <span className="dot"></span>
                  <span className="txt">
                    Get Started Here{" "}
                    <i className="fa-light fa-arrow-up-right"></i>
                  </span>
                </button>
           <span className="footer-10-subtitle"></span>
              <div className="col-lg-6">
                <div className="row gx-5 gy-4 gy-sm-0">
                  <motion.div
                    className="col-12"
                    initial={{
                      y: -50,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  >
                   
                  </motion.div>
                  <motion.div
                    className="col-sm-6 col-12"
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  >
                    <div className="footer-menu title-anim">
                      <ul className="footer-menu-list mb-30">
                        <li>
                
                        </li>
                      </ul>
                      <div className="footer-9-logo">
                        <img src="img/enmotion.png" alt="logo" />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="col-sm-4 col-6"
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  >
                    <div className="footer-menu title-anim">
                      <ul className="footer-menu-list mb-40">
                        <li>
                          <a
                            href="tel:+786925-8086"
                            className="foot-link title-anim"                          >
                            + (786) 925-8086
                          </a>
                        </li>
                        <li>
                          <a
                            href="miguelricaurte@hotmail.com"
                            className="foot-link title-anim"                          >
                            miguelricaurte@hotmail.com
                          </a>
                        </li>
                      </ul>
                      <span className="footer-10-subtitle">Follow Me:</span>
                      <div className="footer-10-social">
                        <a href="https://www.facebook.com/profile.php?id=61558229676688" className="title-anim">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/enmotionfit"  className="title-anim">
                          <i className="fa-brands fa-x"></i>
                        </a>
                        <a href="https://www.instagram.com/enmotionfit/?hl=en" className="title-anim">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
      
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="col-sm-4 col-6"
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  >
                    <div className="footer-menu title-anim">
                      <ul className="footer-menu-list">
                        <li>
                          <a href="#" className="foot-link title-anim">
                            About Me
                          </a>
                        </li>
                        <li>
                          <a href="#" className="foot-link title-anim">
                            Class Schedule
                          </a>
                        </li>
                        <li>
                          <a href="#" className="foot-link title-anim">
                            My Services
                          </a>
                        </li>
                
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6 col-sm-4 col-12">
                <motion.div
                  className="footer-9-logo"
                  initial={{
                    x: -80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                >
                  <p>© {new Date().getFullYear()} All Rights Reserved</p>
                </motion.div>
              </div>
              <motion.div
                className="col-lg-6 col-sm-8 col-12"
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <div className="footer-9-link d-flex justify-content-center justify-content-sm-end">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Sitemap</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection3;
