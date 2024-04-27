import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='my-bg text-center py-3'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>© {currentYear} SheliyaTechnical. All Rights Reserved | Terms And Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
