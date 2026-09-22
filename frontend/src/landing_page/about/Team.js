import React from 'react';

function Team() {
  return (
    <div className='container py-4 py-md-5'>
      <div className='row pb-4 border-top pt-4 pt-md-5 text-center'>
        <div className='col-12'>
          <span className="badge bg-light text-primary border px-3 py-2 rounded-pill mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
            Leadership & Vision
          </span>
          <h2 className='fw-bold text-dark mb-2' style={{ fontSize: 'clamp(24px, 4.5vw, 32px)' }}>People Behind Finvest Growth</h2>
          <p className='text-muted mx-auto' style={{ maxWidth: '600px', fontSize: '15px' }}>
            Meet the architects and principles driving our modern fintech platform.
          </p>
        </div>
      </div>

      <div className='row justify-content-center align-items-center g-4 my-2'>
        <div className='col-lg-4 col-md-5 col-12 text-center'>
          <div className='p-4 bg-white rounded-4 shadow-sm border'>
            <div
              className='d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm'
              style={{
                width: '140px',
                height: '140px',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                color: '#ffffff',
                fontSize: '44px',
                fontWeight: '700',
                letterSpacing: '1px'
              }}
            >
              DR
            </div>
            <h4 className='fw-bold text-dark mb-1'>Divyansh</h4>
            <p className='text-primary fw-semibold small mb-3'>Founder & Chief Architect</p>
            <p className='text-muted small' style={{ lineHeight: '1.6' }}>
              Spearheading product architecture, execution systems, and technology innovations at Finvest Growth.
            </p>
            <div className='d-flex justify-content-center gap-3 mt-3'>
              <a href='https://twitter.com' target='_blank' rel='noreferrer' className='text-secondary' style={{ fontSize: '18px' }} aria-label="Twitter">
                <i className='fa fa-twitter'></i>
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer' className='text-secondary' style={{ fontSize: '18px' }} aria-label="LinkedIn">
                <i className='fa fa-linkedin'></i>
              </a>
              <a href='https://github.com' target='_blank' rel='noreferrer' className='text-secondary' style={{ fontSize: '18px' }} aria-label="GitHub">
                <i className='fa fa-github'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='col-lg-7 col-md-7 col-12 p-3 p-md-4 text-muted' style={{ lineHeight: '1.85', fontSize: '1.05rem' }}>
          <h4 className='text-dark fw-bold mb-3'>Building the Future of Retail Wealth</h4>
          <p>
            Divyansh founded Finvest Growth with a conviction that retail traders and investors deserve institutional-caliber speed and intuitive tools without excessive commission overheads.
          </p>
          <p>
            With deep expertise across full-stack systems, financial data streams, and modern user interfaces, he leads the engineering roadmap behind Finvest Growth’s web terminal, algorithmic capabilities, and automated reporting systems.
          </p>
          <div className='row g-3 mt-2'>
            <div className='col-sm-6 col-12'>
              <div className='p-3 bg-light rounded-3 border-start border-primary border-3'>
                <h6 className='fw-bold text-dark mb-1'>Radical Transparency</h6>
                <p className='text-muted small mb-0'>Zero hidden commissions or unexpected markups on trades.</p>
              </div>
            </div>
            <div className='col-sm-6 col-12'>
              <div className='p-3 bg-light rounded-3 border-start border-primary border-3'>
                <h6 className='fw-bold text-dark mb-1'>Speed & Reliability</h6>
                <p className='text-muted small mb-0'>Low-latency matching infrastructure designed for peak volatility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;