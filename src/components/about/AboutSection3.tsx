import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="About" className="about-section py-5" style={{ backgroundColor: '#222222' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10">
            <h2 className="text-center mb-5 text-white">About Us</h2>
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-1 order-2">
                <div className="about-text text-white">
                  <h3>Our Mission</h3>
                  <p>
                    At En Motion, performance is at the heart of everything we do. Our tailored personal training sessions are meticulously designed to help each client surpass their fitness aspirations.
                  </p>
                  <p>
                    This commitment to performance drives every interaction at our facility, ensuring that your personal training experience is nothing short of exceptional.
                  </p>
                  <p>
                    Step into En Motion for a training session and experience the transformation with our customized programs, crafted to propel you towards elite fitness.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 order-lg-2 order-1">
                <div className="image-container d-flex justify-content-lg-end justify-content-center pr-lg-5">
                  <Image
                    src="/img/kickboxtraining.jpeg"
                    alt="About Image"
                    width={500} // Increased width
                    height={600} // Increased height
                    className="img-fluid mb-5"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center mt-5">
              <div className="col-lg-5 order-lg-1 order-2">
                <div className="about-text text-white">
                  <h3>Our Community</h3>
                  <p>
                    En Motion is more than a gym; it’s a sanctuary where individuals converge, drawing strength from each other to reach new heights. Our community thrives on mutual support and shared goals, fostering a motivating environment that champions personal growth.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 order-lg-2 order-1">
                <div className="image-container d-flex justify-content-lg-end justify-content-center pr-lg-5">
                  <Image
                    
                    src="/img/trainingshot.jpg"
                    alt="Community Image"
                    width={500} // Increased width
                    height={600} // Increased height
                    className="img-fluid mb-5"
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
