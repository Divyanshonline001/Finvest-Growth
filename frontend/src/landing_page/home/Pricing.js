import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <div className='container py-5 my-2'>
      <div className='row align-items-center g-4'>
        <div className='col-lg-5 col-12 pe-lg-4'>
          <h2 className='home-section-title mb-3'>
            Honest, Zero-Hidden-Cost Pricing.
          </h2>
          <p className='text-muted mb-4' style={{ fontSize: '15.5px', lineHeight: '1.65' }}>
            We pioneered fair, transparent discount broking in India. No account setup fees, no software access deductions, and absolutely zero hidden platform markups.
          </p>
          <Link to="/pricing" className='home-action-link'>
            <span>See complete tariff & tax calculator</span>
            <i className='fa fa-arrow-right'></i>
          </Link>
        </div>
        
        <div className='col-lg-7 col-12'>
          <div className='row g-3'>
            <div className='col-sm-6 col-12'>
              <div className='home-pricing-box'>
                <span className='home-pricing-tag'>Forever Free</span>
                <div className='home-pricing-num'>₹0</div>
                <p className='home-pricing-label'>
                  <strong>Free Equity Delivery</strong><br />
                  & Direct Mutual Funds with zero commission
                </p>
              </div>
            </div>
            <div className='col-sm-6 col-12'>
              <div className='home-pricing-box'>
                <span className='home-pricing-tag' style={{ background: '#e8f0fe', color: '#1a73e8' }}>Flat Rate</span>
                <div className='home-pricing-num'>₹20</div>
                <p className='home-pricing-label'>
                  <strong>Intraday & F&O Trades</strong><br />
                  Flat ₹20 or 0.03% (whichever is lower) per order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;