import React from 'react';
import Similar from './Similar'
import HomeImage from './images/Webinar-bro.svg';


const Home = () => {
  return (
    <>
      <Similar
        name="Grow Your Business With"
        brandNname="SheliyaTechnical"
        des="Your Description Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        img={HomeImage}
        BtnLink="/service"
        ButName="Get Started"
      />
    </>
  );
}

export default Home;
