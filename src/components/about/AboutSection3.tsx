"use client"
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="About" className="about-section py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-5 text-white">About Us</h2>
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-1 order-2">
                <div className="about-text text-white">
                  <h3>Our Mission</h3>
                  <p>
                    At En Motion, performance is at the forefront of everything we do. Our one-on-one personal training is custom-designed to help clients demolish their fitness goals.
                  </p>
                  <p>
                    This performance-driven philosophy underlies all of our one-on-one training sessions.
                  </p>
                  <p>
                    When you train one-on-one at En Motion, you receive a fully customized regimen to equip you with the tools for elite performance.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 order-lg-2 order-1">
                <div className="image-container d-flex justify-content-lg-end justify-content-center pr-lg-5">
                  <Image src="/img/miguel.png" alt="About Image" width={250} height={300} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
