import React from 'react';
import { Link } from 'react-router-dom';

function OpenAcount() {
  return (
    <div className='container'>
      <div className='home-open-account-section'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-12'>
            <h2 className='home-section-title mb-3'>
              Open Your Finvest Growth Account Today
            </h2>
            <p className='text-muted mb-4' style={{ fontSize: 'clamp(14.5px, 2vw, 17px)', lineHeight: '1.6', maxWidth: '620px', margin: '0 auto' }}>
              State-of-the-art trading platforms, ₹0 brokerage on delivery investments, and flat ₹20 for active derivatives. Start building your portfolio in minutes.
            </p>
            <div className='mb-4'>
              <Link to="/signup" className='home-btn-primary'>
                <span>Sign up for free</span>
                <i className='fa fa-arrow-right'></i>
              </Link>
            </div>
            <div className='home-trust-pills'>
              <div className='home-trust-pill'>
                <i className='fa fa-check'></i>
                <span>SEBI Regulated</span>
              </div>
              <div className='home-trust-pill'>
                <i className='fa fa-shield'></i>
                <span>256-Bit Bank Grade Encryption</span>
              </div>
              <div className='home-trust-pill'>
                <i className='fa fa-clock-o'></i>
                <span>100% Paperless Process</span>
              </div>
              <div className='home-trust-pill'>
                <i className='fa fa-gift'></i>
                <span>Zero AMC First Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAcount;