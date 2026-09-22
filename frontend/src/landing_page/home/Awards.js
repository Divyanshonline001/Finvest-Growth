import React from 'react';

function Awards() {
  return (
    <div className='container py-4 py-md-5'>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-12 p-3 p-md-4 text-center'>
          <img src='media/largestBroker.svg' alt='Recognized Market Leadership' style={{ maxWidth: '90%', height: 'auto' }} />
        </div>
        <div className='col-lg-6 col-12 p-3 p-md-4'>
          <h2 className='home-section-title mb-3'>
            India’s Premier Retail Investment Ecosystem.
          </h2>
          <p className='text-muted mb-4' style={{ fontSize: '15.5px', lineHeight: '1.65' }}>
            Over 2.5+ million active investors and traders contribute to over 15% of all retail order volumes in India daily by trading and investing in:
          </p>
          <div className='row g-3 mb-4'>
            <div className='col-sm-6 col-12'>
              <div className='home-instrument-item'>
                <i className='fa fa-check-circle'></i>
                <span>Futures & Options (Algo-ready)</span>
              </div>
              <div className='home-instrument-item'>
                <i className='fa fa-check-circle'></i>
                <span>Commodity & Energy Derivatives</span>
              </div>
              <div className='home-instrument-item'>
                <i className='fa fa-check-circle'></i>
                <span>Currency Pairs & Hedging</span>
              </div>
            </div>
            <div className='col-sm-6 col-12'>
              <div className='home-instrument-item'>
                <i className='fa fa-check-circle'></i>
                <span>Zero-Brokerage Stocks & IPOs</span>
              </div>
              <div className='home-instrument-item'>
                <i className='fa fa-check-circle'></i>
                <span>Direct Mutual Funds (0% Comm)</span>
              </div>
              <div className='home-instrument-item'>
                <i className='fa fa-check-circle'></i>
                <span>Govt. Bonds, T-Bills & SGBs</span>
              </div>
            </div>
          </div>
          <div className='pt-2'>
            <p className='text-uppercase text-muted small fw-semibold mb-2' style={{ letterSpacing: '0.5px' }}>
              Recognized & featured across national media:
            </p>
            <img src='media/pressLogos.png' alt='Media Coverage' style={{ width: '92%', opacity: '0.88' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;