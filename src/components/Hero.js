import React from 'react';

const Hero = () => {
  return (
    <div className="container-fluid p-0" id="hero">
      <div className="row flex-lg-row align-items-center gx-5 px-5">
        <div className="col-lg-8 col-sm-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-light">Designer clothes.<br />Free 2-day shipping.</h1>
        </div>
        <div className="col-lg-4 col-sm-6">
          <img className="img-fluid" src="./assets/hero_image.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;