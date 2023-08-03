import React from 'react';

const Hero = () => {
  return (
    <div className="container-fluid col-xxl-8 p-0" id="hero">
      <div className="row flex-lg-row align-items-center gx-5 px-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-light">Designer clothes. Free 2-day shipping.</h1>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-success btn-lg px-4 me-md-2">Sign Up</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Log In</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="./assets/hero_image.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;