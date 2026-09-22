import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return ( 
    <div className='container pt-5 pb-3'>
      <div className='row text-center justify-content-center'>
        <div className='col-lg-10 col-12'>
          <h1 className='home-hero-title'>
            Invest in Everything. <br className='d-none d-md-inline' />Grow with Confidence.
          </h1>
          <p className='home-hero-subtitle'>
            Online platform to invest in direct equities, algorithmic F&O, zero-commission mutual funds, ETFs, and sovereign bonds — built for disciplined wealth creation.
          </p>
          <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 mb-3'>
            <Link to="/signup" className='home-btn-primary'>
              <span>Sign up for free</span>
              <i className='fa fa-arrow-right'></i>
            </Link>
          </div>
          <p className='text-muted small mb-4'>
            Zero account maintenance fee for 1st year • 100% paperless onboarding in 5 mins
          </p>
          <div className='home-hero-image-wrapper mt-3'>
            <img src='media/Finvest Market Overview Dashboard(1).png' alt='Finvest Growth Trading Platform Preview' />
          </div>
        </div>
      </div>
    </div>
   );
}

export default Hero;