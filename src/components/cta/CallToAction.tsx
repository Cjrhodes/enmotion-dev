import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section text-center py-5 bg-dark text-white" style={{ backgroundImage: 'url(/img/powerliftgirl.jpeg)', backgroundSize: 'cover', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
      <div className="container">
        <h2>Ready to Transform Your Fitness Journey?</h2>
        <p className="lead py-2">Join us today and start your path to a healthier and stronger you with our expert coaching.</p>
        <a href="/signup" className="btn btn-primary btn-lg cta-btn">Sign Up Now</a>
      </div>
    </section>
  );
};

export default CTASection;
