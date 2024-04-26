import React, { useState } from 'react';

const Contact = () => {
  const [data,setData]=useState (
    {
      firstName:'',
      lastName:'',
      phoneNumber:'',
      email:'',
      message:''
    }
  );
  const InputEvent =(event) =>{
    const {name,value}= event.target
    setData((preVel)=>{
      return{
        ...preVel,
        [name]:value
      }
    })
  }
  const fromSubmit =(eve)=>{
    eve.preventDefault();
    alert(`My First Name Is ${data.firstName}. My Last Name Is ${data.lastName}. My Phone Number Is ${data.phoneNumber}. My Email Is ${data.email}. My Message Is ${data.message}.`)
  }
    return (
        <>
            <section id='header' className='py-5 '>
                <div className="container ">
                    <div className='page-heading '>
                        <h1 className='text-center mb-5'>Contact Us</h1>
                    </div>
                    <form onSubmit={fromSubmit} className='form-floating'>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="firstName" 
                                name="firstName"
                                value={data.fname}
                                onChange={InputEvent}
                                required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="lastName" 
                                name="lastName"
                                value={data.lname}
                                onChange={InputEvent}
                                required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input 
                                type="tel" 
                                className="form-control" 
                                id="phoneNumber" 
                                name="phoneNumber"
                                value={data.phono}
                                onChange={InputEvent}
                                required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                className="form-control" 
                                id="message" 
                                name="message"
                                value={data.message}
                                onChange={InputEvent}
                                rows="5" 
                                required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn-submit" >Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;
