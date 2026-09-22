import React from 'react';
import { Link } from 'react-router-dom';

function LeftSection({ imageUrl, productName, productDescription, tryDemoText, demoLink, learnMoreText, learnMoreLink, googlePlay, appStore }) {
  const isExternalDemo = demoLink && (demoLink.startsWith('http://') || demoLink.startsWith('https://'));
  const isExternalLearn = learnMoreLink && (learnMoreLink.startsWith('http://') || learnMoreLink.startsWith('https://'));

  return (
    <div className='container py-4 my-3'>
      <div className='row align-items-center g-4'>
        <div className='col-lg-7 col-12 text-center'>
          <img src={imageUrl} alt={productName} className='img-fluid' style={{ maxHeight: '380px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }} />
        </div>
        <div className='col-lg-5 col-12 p-3 p-md-4'>
          <h2 className='fw-bold text-dark mb-3' style={{ fontSize: 'clamp(22px, 4vw, 1.85rem)' }}>{productName}</h2>
          <p className='text-secondary' style={{ fontSize: 'clamp(14.5px, 2vw, 1.05rem)', lineHeight: '1.75' }}>{productDescription}</p>
          
          <div className='d-flex flex-wrap align-items-center gap-3 gap-md-4 my-3'>
            {tryDemoText && demoLink && (
              isExternalDemo ? (
                <a href={demoLink} className='text-primary fw-semibold text-decoration-none'>
                  {tryDemoText} <i className="fa fa-long-arrow-right ms-1"></i>
                </a>
              ) : (
                <Link to={demoLink} className='text-primary fw-semibold text-decoration-none'>
                  {tryDemoText} <i className="fa fa-long-arrow-right ms-1"></i>
                </Link>
              )
            )}

            {learnMoreText && learnMoreLink && (
              isExternalLearn ? (
                <a href={learnMoreLink} className='text-primary fw-semibold text-decoration-none'>
                  {learnMoreText} <i className="fa fa-long-arrow-right ms-1"></i>
                </a>
              ) : (
                <Link to={learnMoreLink} className='text-primary fw-semibold text-decoration-none'>
                  {learnMoreText} <i className="fa fa-long-arrow-right ms-1"></i>
                </Link>
              )
            )}
          </div>

          {(googlePlay || appStore) && (
            <div className='d-flex flex-wrap align-items-center gap-3 mt-4'>
              {googlePlay && (
                <a href={googlePlay} target='_blank' rel='noreferrer'>
                  <img src='media/googlePlayBadge.svg' alt='Google Play' style={{ height: '38px', maxWidth: '150px' }} />
                </a>
              )}
              {appStore && (
                <a href={appStore} target='_blank' rel='noreferrer'>
                  <img src='media/appstoreBadge.svg' alt='App Store' style={{ height: '38px', maxWidth: '150px' }} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;