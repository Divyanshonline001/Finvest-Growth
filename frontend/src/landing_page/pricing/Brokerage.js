import React from 'react';

function Brokerage() {
  return (
    <div className='container py-4 my-2'>
      <div className='row border-top pt-4 g-4'>
        <div className='col-lg-8 col-12 p-3 p-md-4'>
          <h4 className='fw-bold text-dark mb-3'>
            <a href='https://zerodha.com/brokerage-calculator/' target='_blank' rel='noreferrer' className='text-primary text-decoration-none'>
              Brokerage Calculator <i className="fa fa-external-link ms-1 small"></i>
            </a>
          </h4>
          <p className='text-muted small mb-3'>
            Transparent cost breakdowns calculated in real time:
          </p>
          <ul className='text-muted ps-3' style={{ lineHeight: "2.1", fontSize: "14px" }}>
            <li>Calculate your total brokerage and applicable regulatory taxes for buying and selling stocks.</li>
            <li>Estimate brokerage, STT, and transaction charges for intraday trades.</li>
            <li>Calculate the complete cost and margin requirements for futures contracts.</li>
            <li>Estimate brokerage and exchange charges for options trading.</li>
            <li>Calculate charges for currency derivatives and cross-currency forex pairs.</li>
            <li>Estimate brokerage and commodity transaction taxes (CTT) for MCX trades.</li>
            <li>Compute exact breakeven points after deducting all clearing and statutory charges.</li>
          </ul>
        </div>

        <div className='col-lg-4 col-12 p-3 p-md-4'>
          <div className='p-4 bg-light rounded-4 border'>
            <h5 className='fw-bold text-dark mb-3'>Regulatory & Statutory Charges</h5>
            <ul className='list-unstyled mb-0' style={{ fontSize: '13.5px', lineHeight: '2' }}>
              <li className='d-flex justify-content-between border-bottom pb-2 mb-2'>
                <span className='text-muted'>STT/CTT:</span>
                <span className='fw-semibold text-dark'>0.1% on delivery</span>
              </li>
              <li className='d-flex justify-content-between border-bottom pb-2 mb-2'>
                <span className='text-muted'>Transaction Charges:</span>
                <span className='fw-semibold text-dark'>NSE: 0.00297%</span>
              </li>
              <li className='d-flex justify-content-between border-bottom pb-2 mb-2'>
                <span className='text-muted'>GST:</span>
                <span className='fw-semibold text-dark'>18% on brokerage & charges</span>
              </li>
              <li className='d-flex justify-content-between border-bottom pb-2 mb-2'>
                <span className='text-muted'>SEBI Charges:</span>
                <span className='fw-semibold text-dark'>₹10 / crore</span>
              </li>
              <li className='d-flex justify-content-between'>
                <span className='text-muted'>Stamp Duty:</span>
                <span className='fw-semibold text-dark'>0.015% or ₹1500 / cr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage; 