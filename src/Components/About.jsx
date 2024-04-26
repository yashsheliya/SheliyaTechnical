import React from 'react'
import Similar from './Similar'
import AboutImage from './images/AboutUsPage.svg';

const About = () => {
  return (
    <>
      <Similar 
      name="Welcome To About Page"
      brandNname="SheliyaTechnical"
      des="Your Description Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      img={AboutImage}
      BtnLink="/contact"
      ButName="Contect Now"
      />
    </>
  )
}

export default About
