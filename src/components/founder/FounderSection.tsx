import React from 'react';
import Image from 'next/image';

const FounderSection = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h3 className="text-white">Meet the Founder</h3>
          <Image src="/img/founder.jpg" alt="Founder" className="img-fluid rounded-circle" width={250} height={300} />
          <h2 className= "mt-3 text-white ">Miguel Ricaurte</h2>
          <p className="mt-3 text-white">
            With over a decade of immersion in the world of combat sports and self-defense, our founder brings a unique blend of expertise to help individuals achieve their fitness goals while developing invaluable skills for personal protection.
          </p>
          <p className="text-white">
            Transitioning from a competitor to a coach, now holding numerous high-performance certifications, our founder ensures that clients receive comprehensive training in a safe and controlled environment. Their extensive knowledge of Functional Master Training allows for personalized programs that cater to individual needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
