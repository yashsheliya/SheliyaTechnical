import React from 'react';
import Card from './Card';
import Sdata from '../Data/Sdata'
const Service = () => {
  return (
    <>
      <section id="services" className="py-5">
        <div className="container">
          <div className='page-heading'>
            <h1 className='text-center mb-5'>Our Services</h1>
          </div>
          <div className="row">
            {
              Sdata.map((val, index)=>{
                return <Card 
                key={index}
                img={val.image}
                title={val.heading}
                des={val.description}
                btnLink={val.buttonLink}
                />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Service;
