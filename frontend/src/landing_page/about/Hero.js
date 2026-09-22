import React from 'react';

function Hero() {
  return (
    <div className='container py-5'>
      <div className='row justify-content-center text-center py-4 my-2'>
        <div className='col-lg-9 col-12'>
          <span className="badge bg-light text-primary border px-3 py-2 rounded-pill mb-3" style={{ fontSize: '13px', fontWeight: '600' }}>
            About Finvest Growth
          </span>
          <h1 className='fw-bold mb-3' style={{ color: '#1a202c', fontSize: 'clamp(24px, 5vw, 2.4rem)', lineHeight: '1.3' }}>
            We set out to redefine modern investing in India.
          </h1>
          <p className='text-muted mx-auto' style={{ fontSize: 'clamp(15px, 2.5vw, 1.15rem)', maxWidth: '750px', lineHeight: '1.6' }}>
            Democratizing institutional-grade trading tools, intelligent technology, and transparent wealth building for retail investors.
          </p>
        </div>
      </div>

      {/* Metric Cards */}
      <div className='row g-3 g-md-4 my-2 text-center'>
        <div className='col-lg-3 col-6'>
          <div className='p-3 h-100 bg-light rounded-3 border'>
            <h3 className='fw-bold text-primary mb-1' style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>₹0</h3>
            <p className='text-muted small mb-0'>Free Equity Delivery & Direct MF</p>
          </div>
        </div>
        <div className='col-lg-3 col-6'>
          <div className='p-3 h-100 bg-light rounded-3 border'>
            <h3 className='fw-bold text-primary mb-1' style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>₹20</h3>
            <p className='text-muted small mb-0'>Flat Intraday & F&O Brokerage</p>
          </div>
        </div>
        <div className='col-lg-3 col-6'>
          <div className='p-3 h-100 bg-light rounded-3 border'>
            <h3 className='fw-bold text-primary mb-1' style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>&lt; 50ms</h3>
            <p className='text-muted small mb-0'>Ultra-Fast Order Execution</p>
          </div>
        </div>
        <div className='col-lg-3 col-6'>
          <div className='p-3 h-100 bg-light rounded-3 border'>
            <h3 className='fw-bold text-primary mb-1' style={{ fontSize: 'clamp(20px, 4vw, 28px)' }}>256-Bit</h3>
            <p className='text-muted small mb-0'>Bank-Grade Data Security</p>
          </div>
        </div>
      </div>

      <div className='row py-4 py-md-5 mt-4 border-top text-muted'
        style={{ lineHeight: '1.85', fontSize: '1.05rem' }}>
        <div className='col-lg-6 col-12 p-3 p-md-4'>
          <h4 className='text-dark fw-bold mb-3'>Our Mission & Journey</h4>
          <p>
            Finvest Growth was founded with a singular purpose: to dismantle the barriers that modern traders and retail investors face in India — high commissions, opaque charges, cluttered user interfaces, and sluggish execution engines.
          </p>
          <p>
            By engineering our own high-speed execution pipeline, interactive charts, and real-time portfolio analytics, Finvest Growth transforms complex financial markets into an intuitive, accessible experience for both beginners and seasoned traders.
          </p>
          <p>
            Today, Finvest Growth empowers active retail traders and disciplined long-term investors across India with transparent zero-brokerage delivery, transparent margin facilities, and lightning-fast digital onboarding.
          </p>
        </div>
        <div className='col-lg-6 col-12 p-3 p-md-4'>
          <h4 className='text-dark fw-bold mb-3'>Technology & Open Education</h4>
          <p>
            Technology and financial literacy are at the heart of everything we build. Through Finvest Varsity and integrated data analytics, we equip investors with structured knowledge to make informed, data-driven decisions.
          </p>
          <p>
            Our infrastructure is engineered for resilience, bank-grade encryption, and sub-second order fulfillment, fully integrated with SEBI-regulated exchanges (NSE, BSE, MCX) and depositories (CDSL/NSDL).
          </p>
          <p>
            Whether you are compounding capital through sovereign bonds, building an equity portfolio, or utilizing algorithmic strategies, Finvest Growth is built to help your wealth grow with confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;