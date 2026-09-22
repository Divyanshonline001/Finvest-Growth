import React from 'react';

function TermsPage() {
  return (
    <div className="container py-4 py-md-5" style={{ maxWidth: '920px' }}>
      <div className="text-center mb-4 mb-md-5">
        <span className="badge bg-light text-primary border px-3 py-2 rounded-pill mb-3" style={{ fontSize: '13px' }}>
          Legal & Compliance
        </span>
        <h1 className="fw-bold mb-3" style={{ color: '#222', fontSize: 'clamp(24px, 4.5vw, 32px)' }}>Terms & Conditions</h1>
        <p className="text-muted" style={{ fontSize: '15px' }}>
          Please review the operating terms and client agreement governing trading and investment accounts on Finvest Growth.
        </p>
      </div>

      <div className="card border-0 shadow-sm p-3 p-md-5 mb-4" style={{ borderRadius: '12px', backgroundColor: '#ffffff' }}>
        <h4 className="fw-semibold mb-3 text-dark">1. Client Agreement & Demat Services</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          By opening an account or utilizing the Finvest Growth trading platform, web dashboard, and mobile applications, you agree to be bound by SEBI regulations, Exchange bye-laws (NSE, BSE, MCX), and depository rules (CDSL/NSDL). The client represents that all information supplied during KYC onboarding is true and verified.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">2. Account Security & Credentials</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          You are solely responsible for maintaining the confidentiality of your login credentials, two-factor authentication (TOTP/OTP), and transaction PIN. Finvest Growth will never request your password or OTP via phone, email, or chat. Any instructions received through your authenticated credentials shall be treated as authorized by you.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">3. Order Execution & Margin Facilities</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          All orders are routed electronically to the respective stock exchanges. Execution depends on market liquidity and prevailing prices. Finvest Growth reserves the right to square off intraday or margin positions if account equity falls below exchange-mandated thresholds or during scheduled market closes.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">4. Brokerage, Taxes & Regulatory Fees</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          Brokerage charges are levied in accordance with the published pricing schedule. Statutory levies including STT/CTT, Exchange Turnover Fees, SEBI turnover charges, Stamp Duty, and GST are recovered on actuals as per Government and Exchange circulars.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">5. Dormancy & Account Closure</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          Accounts with no trading activity across 12 consecutive months may be flagged as dormant as required by SEBI guidelines. Re-activation can be completed via biometric or OTP-based re-KYC. Clients may request account closure at any time with zero outstanding dues or open positions.
        </p>
      </div>
    </div>
  );
}

export default TermsPage;
