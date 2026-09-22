import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
  const topics = [
    {
      icon: 'fa-plus-circle',
      title: 'Account Opening',
      links: [
        'Getting started & online KYC documentation',
        'Resident individual account opening process',
        'NRI and Non-individual corporate accounts',
        'Charges & fee schedule for onboarding'
      ]
    },
    {
      icon: 'fa-user-o',
      title: 'Your Finvest Account',
      links: [
        'Login credentials, 2FA & biometric access',
        'Nominee registration and modification',
        'Updating bank account & contact details',
        'Activating commodity & currency segments'
      ]
    },
    {
      icon: 'fa-bar-chart',
      title: 'Trading & Markets',
      links: [
        'Trading FAQs & order types (CNC, MIS, GTT)',
        'Kite web & mobile platform navigation',
        'Margins, leverage & risk management policies',
        'Corporate actions (Bonus, Split, Rights, Buyback)'
      ]
    },
    {
      icon: 'fa-credit-card',
      title: 'Funds & Banking',
      links: [
        'Adding funds via UPI, Netbanking & IMPS',
        'Instant withdrawal processing cycles',
        'Mandates, eNACH & auto-debit setup',
        'Failed transactions & bank settlement timeline'
      ]
    },
    {
      icon: 'fa-file-text-o',
      title: 'Console & Reports',
      links: [
        'Tax P&L report for ITR filing',
        'Tradebook & contract notes download',
        'Portfolio analytics & sector exposure',
        'Dividend credits & TDS statements'
      ]
    },
    {
      icon: 'fa-leaf',
      title: 'Coin & Mutual Funds',
      links: [
        'Starting direct mutual fund SIPs (0% comm)',
        'Managing existing investments & redemptions',
        'ELSS tax-saving funds and lock-in period',
        'Sovereign Gold Bonds (SGB) and T-Bills'
      ]
    }
  ];

  return (
    <div className='container py-5'>
      <div className='text-center mb-5'>
        <h2 className='fw-bold text-dark mb-2' style={{ fontSize: 'clamp(22px, 4vw, 30px)' }}>
          Select a topic to create or track a ticket
        </h2>
        <p className='text-muted' style={{ fontSize: '15px' }}>
          Browse our structured knowledge base or get in touch with our operations team.
        </p>
      </div>

      <div className='row g-4'>
        {topics.map((topic, idx) => (
          <div className='col-lg-4 col-md-6 col-12' key={idx}>
            <div className='p-4 bg-white rounded-4 border shadow-sm h-100'>
              <h5 className='fw-bold text-dark mb-3 d-flex align-items-center gap-2'>
                <i className={`fa ${topic.icon} text-primary`}></i>
                <span>{topic.title}</span>
              </h5>
              <ul className='list-unstyled mb-0 ps-1' style={{ lineHeight: '2', fontSize: '14px' }}>
                {topic.links.map((link, lIdx) => (
                  <li key={lIdx} className='mb-1'>
                    <Link to="/support" className='text-secondary text-decoration-none' style={{ transition: 'color 0.15s ease' }}>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;