import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
  const ecosystemItems = [
    {
      logo: 'media/smallcaseLogo.png',
      alt: 'Smallcase',
      style: { maxHeight: '42px', objectFit: 'contain' },
      title: 'Thematic Baskets',
      description: 'Invest in curated baskets of stocks and ETFs designed around modern macroeconomic themes by SEBI-registered professionals.'
    },
    {
      logo: 'media/streakLogo.png',
      alt: 'Streak',
      style: { maxHeight: '38px', objectFit: 'contain' },
      title: 'Algo & Strategy Builder',
      description: 'Systematic algorithmic trading engine that lets you create, backtest, and execute trading strategies without writing any code.'
    },
    {
      logo: 'media/sensibullLogo.svg',
      alt: 'Sensibull',
      style: { maxHeight: '36px', objectFit: 'contain' },
      title: 'Options Strategy Suite',
      description: 'Powerful derivative platform featuring Options Greeks, payoff diagrams, implied volatility scanners, and simulated paper trading.'
    },
    {
      logo: 'media/zerodhaFundhouse.png',
      alt: 'Finvest Index Funds',
      style: { maxHeight: '36px', objectFit: 'contain' },
      title: 'Passive Index Wealth',
      description: 'Transparent, ultra-low-cost index mutual funds and smart asset allocation products designed for disciplined compounding.'
    },
    {
      logo: 'media/tijori.svg',
      alt: 'Tijori',
      style: { maxHeight: '36px', objectFit: 'contain' },
      title: 'Fundamental Analytics',
      description: 'Comprehensive financial breakdown, sector tracking, supply chain dependencies, and operational metrics for listed companies.'
    },
    {
      logo: 'media/dittoLogo.png',
      alt: 'Ditto',
      style: { maxHeight: '34px', objectFit: 'contain' },
      title: 'Curated Insurance Advisory',
      description: 'Bite-sized, unbiased life and health insurance advisory with transparent policy comparisons and zero spam calls.'
    }
  ];

  return (
    <div className='container py-4 py-md-5 my-2'>
      <div className='row text-center justify-content-center mb-4'>
        <div className='col-lg-8 col-12'>
          <span className="badge bg-light text-primary border px-3 py-2 rounded-pill mb-3" style={{ fontSize: '13px', fontWeight: '600' }}>
            Integrated Ecosystem
          </span>
          <h2 className='fw-bold text-dark mb-2' style={{ fontSize: 'clamp(24px, 4.5vw, 2.2rem)' }}>
            The Finvest Ecosystem
          </h2>
          <p className='text-muted' style={{ fontSize: 'clamp(14.5px, 2vw, 1.05rem)' }}>
            Extend your trading and investment experience even further with our seamless partner integrations.
          </p>
        </div>
      </div>

      <div className='row g-4 justify-content-center'>
        {ecosystemItems.map((item, idx) => (
          <div className='col-lg-4 col-md-6 col-12' key={idx}>
            <div className='p-4 h-100 bg-white rounded-4 border shadow-sm text-center d-flex flex-column align-items-center justify-content-center transition-all'
              style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
              <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='mb-3'>
                <img src={item.logo} alt={item.alt} style={item.style} />
              </div>
              <h5 className='fw-bold text-dark mb-2' style={{ fontSize: '1.1rem' }}>{item.title}</h5>
              <p className='text-secondary small mb-0' style={{ lineHeight: '1.65' }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mt-5 pt-3'>
        <Link to="/signup" className='btn btn-primary px-4 py-2 fw-semibold rounded-3' style={{ fontSize: '1.05rem' }}>
          Open a Finvest Account
        </Link>
      </div>
    </div>
  );
}

export default Universe;