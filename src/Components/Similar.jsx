import React from 'react'
import { NavLink } from 'react-router-dom';

const Similar = (props) => {
  return (
    <>
      <section id='header' className='py-5'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-6'>
              <h2 className='mb-3'>{props.name} <span className='brand-name'>{props.brandNname}</span></h2>
              <p className='mb-3'>{props.des}</p>
              <NavLink to={props.BtnLink} className='get-started'>{props.ButName} </NavLink>
            </div>
            <div className='col-md-6'>
              <img src={props.img} alt='Your Description' className='img-fluid animated-image' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Similar
