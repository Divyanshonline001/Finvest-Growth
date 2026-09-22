import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
  return (
    <div className='container py-4 py-md-5'>
      <div className='row align-items-center g-4'>
        <div className='col-lg-6 col-12 pe-lg-4'>
          <h2 className='home-section-title mb-4'>
            Trust Built on Performance, Not Gimmicks.
          </h2>
          
          <div className='home-feature-card'>
            <h5><i className='fa fa-heart'></i> Client-First Philosophy</h5>
            <p>
              Over ₹6.5 lakh crores in client assets entrusted with Finvest Growth. Our transparent operational standards keep client safety and capital preservation paramount.
            </p>
          </div>

          <div className='home-feature-card'>
            <h5><i className='fa fa-ban'></i> Distraction-Free Workspace</h5>
            <p>
              Zero dark patterns, zero high-frequency push notifications, and strictly zero gamification traps. Just clean, professional tools built for disciplined market participants.
            </p>
          </div>

          <div className='home-feature-card'>
            <h5><i className='fa fa-cubes'></i> Comprehensive Market Tools</h5>
            <p>
              Not just a trading terminal, but an integrated financial universe. Deep integrations across algorithmic engines, tax-loss harvesting, and institutional research tools.
            </p>
          </div>

          <div className='home-feature-card'>
            <h5><i className='fa fa-sliders'></i> Intelligent Risk Controls</h5>
            <p>
              Proprietary risk-mitigation features including Smart Nudges, automated Trailing Stop-Loss alerts, and an instant Emergency Kill Switch to protect your capital.
            </p>
          </div>
        </div>

        <div className='col-lg-6 col-12 p-4 text-center'>
          <div className='p-3 bg-white rounded-4 border shadow-sm mb-4'>
            <img src='media/ecosystem.png' alt='Finvest Growth Ecosystem' style={{ width: '100%', borderRadius: '8px' }} />
          </div>
          <div className='d-flex flex-wrap justify-content-center gap-4'>
            <Link to="/product" className='home-action-link'>
              <span>Explore Platform Suite</span>
              <i className='fa fa-arrow-right'></i>
            </Link>
            <a href="http://localhost:3001" className='home-action-link'>
              <span>Launch Finvest Terminal</span>
              <i className='fa fa-arrow-right'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;