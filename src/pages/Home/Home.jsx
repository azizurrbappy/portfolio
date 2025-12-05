import React from 'react';
import Hero from './Hero';
import AboutMe from '../About/AboutMe';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Testimonial from '../Testimonial/Testimonial';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Services></Services>
      <Resume></Resume>
      {/* <Testimonial></Testimonial> */}
      <Portfolio></Portfolio>
      <Contact></Contact> ``
    </>
  );
};

export default Home;
