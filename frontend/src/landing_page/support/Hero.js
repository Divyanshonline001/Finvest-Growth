import React from 'react';

function Hero() {
  return (
    <section className="bg-light border-bottom py-4 py-md-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
          <div>
            <span className="badge bg-white text-primary border px-3 py-2 rounded-pill mb-2" style={{ fontSize: '13px', fontWeight: '600' }}>
              Help Center & Support
            </span>
            <h1 className="fw-bold text-dark mb-0" style={{ fontSize: 'clamp(24px, 4.5vw, 34px)' }}>
              Support Portal
            </h1>
          </div>
          <a href="https://support.zerodha.com" target="_blank" rel="noreferrer" className="text-primary fw-semibold text-decoration-none small">
            Track Support Tickets <i className="fa fa-external-link ms-1"></i>
          </a>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="input-group shadow-sm mb-3">
              <span className="input-group-text bg-white border-end-0 text-muted ps-3">
                <i className="fa fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 py-3"
                placeholder="Eg. how do I activate F&O, deposit funds, or reset password..."
                aria-label="Search help articles"
                style={{ fontSize: '15px' }}
              />
            </div>

            <div className="d-flex flex-wrap align-items-center gap-2 small text-muted">
              <span className="fw-semibold">Popular topics:</span>
              <a href="/pricing" className="badge bg-white text-secondary border text-decoration-none py-2 px-3">Brokerage charges</a>
              <a href="/about" className="badge bg-white text-secondary border text-decoration-none py-2 px-3">Account opening</a>
              <a href="http://localhost:3001" className="badge bg-white text-secondary border text-decoration-none py-2 px-3">Trading terminal</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;