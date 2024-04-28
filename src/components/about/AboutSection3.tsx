import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="About" className="about-section py-5" style={{ backgroundColor: '#222222' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-5 text-white">About Us</h2>
            <div className="row align-items-center mb-5">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="about-text text-white">
                  <h3>Our Mission</h3>
                  <p>
                    At En Motion, we are driven by a passion for performance and a commitment to helping each client surpass their fitness aspirations. Our tailored personal training sessions are meticulously crafted to unlock your full potential, propelling you towards elite fitness.
                  </p>
                  <p>
                    This unwavering focus on performance infuses every aspect of our facility, ensuring an exceptional training experience tailored to your unique needs and goals.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0 order-lg-2 order-1">
                <div className="image-container d-flex justify-content-lg-center pr-lg-5">
                  <Image
                    src="/img/trx.jpg"
                    alt="About Image"
                    width={200}
                    height={200}
                    className="img-fluid rounded"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-1 order-2">
                <div className="about-text text-white">
                  <h3>Our Community</h3>
                  <p>
                    En Motion is more than a gym; it's a sanctuary where individuals converge, drawing strength from each other to reach new heights. Our community thrives on mutual support and shared goals, fostering a motivating environment that champions personal growth and accountability.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 mt-4 mt-lg-0 order-lg-2 order-1">
                <div className="image-container d-flex justify-content-lg-end justify-content-center pr-lg-5">
                  <Image
                    src="/img/left-hook.jpg"
                    alt="Community Image"
                    width={200}
                    height={150}
                    className="img-fluid rounded"
                    priority
                    loading="eager"
                  />
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