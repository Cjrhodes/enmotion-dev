"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { motion } from "framer-motion";
const DoctorVideoContent = () => {
  return (
    <>
      <CustomGsapTextSplit>
        <span className="pc-price-subtitle">The Best Package</span>
      </CustomGsapTextSplit>

      <h2 className="pc-price-title">
        <CustomGsapTextSplit>Make An Appointment Package</CustomGsapTextSplit>
      </h2>
      <CustomGsapTextSplit>
        <span className="pc-pricing-rate">
          From <span className="pc-pricing-text">$20.00</span> Per Month
        </span>
      </CustomGsapTextSplit>
      <motion.div
        className="pc-price-button mt-25"
        initial={{
          y: 60,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
      >
        <a href="#" className="def-btn def-btn-6 btn-hover">
          <span className="dot"></span>{" "}
          <span className="txt">
            All Deals <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </a>
      </motion.div>
    </>
  );
};

export default DoctorVideoContent;
