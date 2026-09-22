import React from 'react';

function RiskDisclosurePage() {
  return (
    <div className="container py-4 py-md-5" style={{ maxWidth: '920px' }}>
      <div className="text-center mb-4 mb-md-5">
        <span className="badge bg-danger-subtle text-danger border border-danger-subtle px-3 py-2 rounded-pill mb-3" style={{ fontSize: '13px', fontWeight: '600' }}>
          Regulatory Advisory
        </span>
        <h1 className="fw-bold mb-3" style={{ color: '#222', fontSize: 'clamp(24px, 4.5vw, 32px)' }}>Risk Disclosure on Derivatives & Securities</h1>
        <p className="text-muted" style={{ fontSize: '15px' }}>
          Standard risk disclosure document for trading in equities, equity derivatives, currencies, and commodities.
        </p>
      </div>

      <div className="alert alert-warning border-0 p-4 mb-4 shadow-sm" style={{ borderRadius: '12px', backgroundColor: '#fff8e6', borderLeft: '5px solid #f59e0b' }}>
        <h5 className="fw-bold text-dark mb-2">
          <i className="fa fa-exclamation-triangle text-warning me-2"></i>
          SEBI Study on Derivatives (Futures & Options) Trading
        </h5>
        <ul className="mb-0 text-secondary" style={{ fontSize: '14px', lineHeight: '1.7' }}>
          <li><strong>9 out of 10 individual traders</strong> in equity Futures and Options segment incurred net losses.</li>
          <li>On an average, loss makers registered net trading loss close to <strong>₹50,000</strong> each.</li>
          <li>Over and above the net trading losses, loss makers expended an additional <strong>28% of net trading losses</strong> as transaction costs.</li>
          <li>Those making net trading profits incurred between <strong>15% to 50%</strong> of such profits as transaction costs.</li>
        </ul>
      </div>

      <div className="card border-0 shadow-sm p-4 p-md-5 mb-4" style={{ borderRadius: '12px', backgroundColor: '#ffffff' }}>
        <h4 className="fw-semibold mb-3 text-dark">1. Capital Market Risk & Price Volatility</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          Investments in equities, exchange traded funds, and mutual funds are subject to market risks. Stock values can fluctuate rapidly due to macroeconomic conditions, interest rate fluctuations, corporate performance, and geopolitical events. Past performance is never a guarantee of future returns.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">2. Leverage & Margin Exposure</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          Trading with leverage multiplies potential gains but equally multiplies potential losses. A relatively small adverse price movement can lead to substantial loss of your invested capital. You may be required to deposit additional margin funds on short notice; failure to do so may result in liquidation of open positions at prevailing market rates.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">3. Electronic Trading & Technological Failures</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          Electronic order placement relies on internet connectivity, network bandwidth, and third-party telecom infrastructure. In the event of system outages or hardware failure, orders may be delayed, erroneously submitted, or cancelled. Finvest Growth offers fallback call-and-trade desks to mitigate critical disruptions.
        </p>

        <hr className="my-4" style={{ borderColor: '#eef2f6' }} />

        <h4 className="fw-semibold mb-3 text-dark">4. Caution Regarding Unauthorized Tips & Guarantees</h4>
        <p className="text-secondary" style={{ lineHeight: '1.7', fontSize: '14.5px' }}>
          Finvest Growth is an execution-only discount broker and does NOT provide stock tips, guaranteed return schemes, or portfolio management advisory. Beware of fraudsters claiming affiliation with Finvest Growth on social media channels (Telegram, WhatsApp). Always verify official communications.
        </p>
      </div>
    </div>
  );
}

export default RiskDisclosurePage;
