import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='container py-5 my-5'>
      <div className='row text-center justify-content-center'>
        <div className='col-12 col-md-6'>
          <h1 className='fs-2 fw-bold text-dark mb-2'>
            404 - Page Not Found
          </h1>
          <p className='text-muted'>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className='btn btn-primary px-4 py-2 mt-3 fw-semibold' style={{ width: "auto", minWidth: "160px" }}>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;