"use client";
import React from "react";
import { motion } from "framer-motion";

import { useAppDispatch } from "@/redux/hooks";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";

const FooterSection3 = () => {
  const dispatch = useAppDispatch();
  const openContactModal = () => {
    dispatch(toggleContactModalOpen);
  };
  return (
    <section>
      <footer className="footer-8">
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
                   
                      <span className="footer-10-subtitle">Follow Us:</span>
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
    
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection3;
