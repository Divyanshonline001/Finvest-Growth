import React from 'react';
import { Link } from 'react-router-dom';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function ProductPage() {
  return (
    <>
      <Hero />
      
      {/* 1. Flagship Web Terminal */}
      <LeftSection
        imageUrl='media/kite.png'
        productName='Finvest Web Terminal'
        productDescription='Our ultra-fast flagship trading terminal featuring streaming market depth, multi-layout charting, instantaneous one-click buy/sell windows, and intuitive order management. Engineered for frictionless trading across web and mobile.'
        tryDemoText='Launch Live Terminal'
        demoLink='http://localhost:3001'
        learnMoreText='Brokerage Charges'
        learnMoreLink='/pricing'
        googlePlay='https://play.google.com'
        appStore='https://www.apple.com/app-store/'
      />

      {/* 2. Portfolio & Reporting Console */}
      <RightSection
        imageUrl='media/console.png'
        productName='Finvest Console'
        productDescription='The centralized analytics and reporting dashboard for your Finvest Growth account. Gain deep clarity on your asset allocation, live positions, capital gains, tax P&L statements, and automated ledger visualisations.'
        learnMoreText='Access Console'
        learnMoreLink='/login'
      />

      {/* 3. Direct Mutual Funds & IPOs */}
      <LeftSection
        imageUrl='media/coin.png'
        productName='Finvest Direct Mutual Funds & IPOs'
        productDescription='Invest in 2,000+ zero-commission direct mutual funds with automated SIP schedules and instant UPI mandate support. Apply for upcoming mainline and SME IPOs with Demat delivery and zero paperwork.'
        tryDemoText='Start Investing'
        demoLink='/signup'
        learnMoreText='Pricing Schedule'
        learnMoreLink='/pricing'
        googlePlay='https://play.google.com'
        appStore='https://www.apple.com/app-store/'
      />

      {/* 4. Algorithmic Trading API */}
      <RightSection
        imageUrl='media/kiteconnect.png'
        productName='Finvest Connect API'
        productDescription='Institutional-grade developer APIs for algorithmic trading. Stream tick-by-tick real-time websocket data, automate strategy execution, and build custom fintech workflows using modern SDKs for Python, Node.js, and REST endpoints.'
        learnMoreText='Developer Guidelines'
        learnMoreLink='/terms'
      />

      {/* 5. Finvest Varsity Education */}
      <LeftSection
        imageUrl='media/varsity.png'
        productName='Finvest Varsity'
        productDescription='A comprehensive, open financial knowledgebase covering stock market fundamentals, technical indicators, Options strategies, and risk discipline. Bite-sized interactive modules curated to make you a confident investor.'
        tryDemoText='Explore Curriculum'
        demoLink='/about'
        learnMoreText='Risk Disclosures'
        learnMoreLink='/risk-disclosure'
        googlePlay='https://play.google.com'
        appStore='https://www.apple.com/app-store/'
      />

      <div className='text-center py-5 border-top'>
        <p className='fs-5 text-secondary mb-4'>
          Curious about our high-throughput technology stack? Discover the{' '}
          <Link to='/about' className='text-primary fw-semibold text-decoration-none'>
            Finvest Engineering <i className='fa fa-long-arrow-right ms-1'></i>
          </Link>{' '}
          principles.
        </p>
        <Link to="/signup" className='btn btn-primary px-4 py-2 fw-semibold rounded-3' style={{ fontSize: '1.05rem' }}>
          Open a Finvest Account
        </Link>
      </div>
    </>
  );
}

export default ProductPage;