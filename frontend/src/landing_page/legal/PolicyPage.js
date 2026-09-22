import React from 'react';

function PolicyPage() {
  return (
    <div className="container py-4 py-md-5" style={{ maxWidth: '920px' }}>
      <div className="text-center mb-4 mb-md-5">
        <span className="badge bg-light text-primary border px-3 py-2 rounded-pill mb-3" style={{ fontSize: '13px' }}>
          Data Privacy & Security
        </span>
        <h1 className="fw-bold mb-3" style={{ color: '#222', fontSize: 'clamp(24px, 4.5vw, 32px)' }}>Privacy & Security Policy</h1>
        <p className="text-muted" style={{ fontSize: '15px' }}>
          Learn how Finvest Growth safeguards your financial data, identity records, and trading information.
        </p>
      </div>

      <div className="card border-0 shadow-sm p-3 p-md-5 mb-4" style={{ borderRadius: '12px', backgroundColor: '#ffffff' }}>
        <h4 className="fw-semibold mb-3 text-dark">1. Collection of Information</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          Under SEBI and PMLA statutory obligations, we collect personal identifying data including your PAN, Aadhaar (via masked DigiLocker/UIDAI verification), bank account information, contact coordinates, and financial status for KYC verification and regulatory compliance.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">2. Bank-Grade Security Standards</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          All data in transit is encrypted using TLS 1.3 with 256-bit AES encryption. Sensitive fields such as authentication tokens and personal identifiers are hashed and stored securely in ISO-certified data centers with automated threat detection and penetration audits.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">3. Information Sharing & Disclosure</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          We do not sell, rent, or trade your personal data to advertisers or commercial third parties. Data is shared strictly with regulatory authorities, stock exchanges (NSE/BSE/MCX), depositories (CDSL/NSDL), and licensed payment gateways (such as Razorpay) solely for trade settlement and fund transfers.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">4. Cookies & Usage Analytics</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          Our applications use essential session tokens and cookies to maintain authenticated access, prevent fraud, and ensure rapid dashboard response times. You may manage cookie preferences through browser settings at any time.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">5. User Data Rights & Grievance Redressal</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          You have the right to inspect your registered personal records and request corrections. In compliance with data privacy mandates, you may write to our Data Protection Officer at privacy@finvestgrowth.com for any privacy grievances.
        </p>
      </div>
    </div>
  );
}

export default PolicyPage;
