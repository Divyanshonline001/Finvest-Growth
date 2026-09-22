import React from 'react';

function Education() {
  return ( 
    <div className='container py-4 py-md-5'>
      <div className='row align-items-center g-4'>
        <div className='col-lg-6 col-12 text-center'>
          <img src='media/education.svg' alt='Market Education' style={{ maxWidth: '90%', height: 'auto' }} />
        </div>
        <div className='col-lg-6 col-12 ps-lg-4'>
          <h2 className='home-section-title mb-3'>
            Free and Open Market Education.
          </h2>
          <p className='text-muted mb-4' style={{ fontSize: '15.5px' }}>
            Democratizing financial intelligence through in-depth, structured, and completely open courseware.
          </p>

          <div className='home-education-card'>
            <h5 className='fw-bold mb-2' style={{ color: '#1e293b' }}>
              Finvest Varsity
            </h5>
            <p className='text-muted mb-3' style={{ fontSize: '14px', lineHeight: '1.6' }}>
              The most comprehensive online stock market education resource in India, covering everything from fundamental analysis to option Greeks and quantitative algorithms.
            </p>
            <a href="https://zerodha.com/varsity/" target="_blank" rel="noreferrer" className='home-action-link'>
              <span>Explore Varsity Modules</span>
              <i className='fa fa-arrow-right'></i>
            </a>
          </div>

          <div className='home-education-card'>
            <h5 className='fw-bold mb-2' style={{ color: '#1e293b' }}>
              TradingQ&A Community
            </h5>
            <p className='text-muted mb-3' style={{ fontSize: '14px', lineHeight: '1.6' }}>
              India’s most active community of retail traders and seasoned market veterans discussing real-time market trends, strategy development, and regulatory questions.
            </p>
            <a href="https://tradingqna.com" target="_blank" rel="noreferrer" className='home-action-link'>
              <span>Join the Community Discussion</span>
              <i className='fa fa-arrow-right'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Education;