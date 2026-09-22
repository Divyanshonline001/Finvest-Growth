import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='container border-bottom mb-4 mb-md-5'>
      <div className='text-center py-4 py-md-5'>
        <span className="badge bg-light text-primary border px-3 py-2 rounded-pill mb-3" style={{ fontSize: '13px', fontWeight: '600' }}>
          Platform & Tech Suite
        </span>
        <h1 className='fw-bold mb-3' style={{ color: '#1a202c', fontSize: 'clamp(26px, 5vw, 2.5rem)' }}>
          Finvest Growth Technology Suite
        </h1>
        <h3 className='text-muted fs-5 mx-auto' style={{ maxWidth: '650px', lineHeight: '1.6', fontSize: 'clamp(15px, 2.5vw, 1.25rem)' }}>
          Sleek, modern, and ultra-low latency trading platforms built for active market participants and disciplined wealth compounders.
        </h3>
        <p className='mt-4 mb-2'>
          Explore our <Link to='/pricing' style={{ textDecoration: 'none', fontWeight: '500' }}>transparent pricing & zero-brokerage model <i className="fa fa-long-arrow-right ms-1"></i></Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;