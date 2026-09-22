import React from 'react';
import { Link } from 'react-router-dom';

function RightSection({ imageUrl, productName, productDescription, learnMoreText, learnMoreLink }) {
  const isExternal = learnMoreLink && (learnMoreLink.startsWith('http://') || learnMoreLink.startsWith('https://'));

  return (
    <div className='container py-4 my-3'>
      <div className='row align-items-center g-4'>
        <div className='col-lg-5 col-12 p-3 p-md-4 order-lg-1 order-2'>
          <h2 className='fw-bold text-dark mb-3' style={{ fontSize: 'clamp(22px, 4vw, 1.85rem)' }}>{productName}</h2>
          <p className='text-secondary' style={{ fontSize: 'clamp(14.5px, 2vw, 1.05rem)', lineHeight: '1.75' }}>{productDescription}</p>
          
          {learnMoreText && learnMoreLink && (
            <div className='mt-3'>
              {isExternal ? (
                <a href={learnMoreLink} className='text-primary fw-semibold text-decoration-none'>
                  {learnMoreText} <i className="fa fa-long-arrow-right ms-1"></i>
                </a>
              ) : (
                <Link to={learnMoreLink} className='text-primary fw-semibold text-decoration-none'>
                  {learnMoreText} <i className="fa fa-long-arrow-right ms-1"></i>
                </Link>
              )}
            </div>
          )}
        </div>

        <div className='col-lg-7 col-12 text-center order-lg-2 order-1'>
          <img src={imageUrl} alt={productName} className='img-fluid' style={{ maxHeight: '380px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;