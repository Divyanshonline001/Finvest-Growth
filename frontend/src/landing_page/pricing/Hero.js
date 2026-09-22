import React from 'react';

function Hero() {
  return (
    <div className='container py-4 py-md-5'>
      <div className='row py-4 border-bottom text-center justify-content-center'>
        <div className='col-lg-8 col-12'>
          <span className="badge bg-light text-primary border px-3 py-2 rounded-pill mb-3" style={{ fontSize: '13px', fontWeight: '600' }}>
            Transparent Tariffs
          </span>
          <h1 className='fw-bold mb-2' style={{ color: '#1a202c', fontSize: 'clamp(28px, 5vw, 40px)' }}>Charges & Pricing</h1>
          <p className='text-muted fs-5'>Simple, upfront list of all charges, brokerage and statutory taxes.</p>
        </div>
      </div>

      <div className='row g-4 mt-3 text-center'>
        <div className='col-lg-4 col-md-6 col-12'>
          <div className='p-4 h-100 bg-white rounded-4 border shadow-sm d-flex flex-column align-items-center justify-content-center'>
            <img src='media/pricingEquity.svg' alt='Free equity delivery' style={{ height: "110px", width: "auto", objectFit: "contain", marginBottom: "20px" }} />
            <h2 className='fs-4 fw-bold text-dark mb-3'>Free equity delivery</h2>
            <p className='text-muted small mb-0' style={{ lineHeight: '1.65' }}>
              All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage for long-term investments.
            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
          <div className='p-4 h-100 bg-white rounded-4 border shadow-sm d-flex flex-column align-items-center justify-content-center'>
            <img src='media/intradayTrades.svg' alt='Intraday and F&O trades' style={{ height: "110px", width: "auto", objectFit: "contain", marginBottom: "20px" }} />
            <h2 className='fs-4 fw-bold text-dark mb-3'>Intraday and F&O trades</h2>
            <p className='text-muted small mb-0' style={{ lineHeight: '1.65' }}>
              Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12 mx-auto'>
          <div className='p-4 h-100 bg-white rounded-4 border shadow-sm d-flex flex-column align-items-center justify-content-center'>
            <img src='media/pricingEquity.svg' alt='Free direct MF' style={{ height: "110px", width: "auto", objectFit: "contain", marginBottom: "20px" }} />
            <h2 className='fs-4 fw-bold text-dark mb-3'>Free direct MF</h2>
            <p className='text-muted small mb-0' style={{ lineHeight: '1.65' }}>
              All direct mutual fund investments are completely free — ₹0 commissions and zero depository participant (DP) charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;