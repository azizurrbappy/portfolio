import React from 'react';
import Hero from './Hero';
import AboutMe from '../About/AboutMe';
import Services from '../Services/Services';
import Resume from '../Resume/Resume';
import Testimonial from '../Testimonial/Testimonial';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import FadeIn from '../../components/FadeIn';

const Home = () => {
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>
      <section id="about">
        <FadeIn delay={0.2}>
          <AboutMe />
        </FadeIn>
      </section>
      <section id="service">
        <FadeIn delay={0.2}>
          <Services />
        </FadeIn>
      </section>
      <FadeIn delay={0.2}>
        <Resume />
      </FadeIn>
      {/* <Testimonial></Testimonial> */}
      <section id="portfolio">
        <FadeIn delay={0.2}>
          <Portfolio />
        </FadeIn>
      </section>
      <section id="contact">
        <FadeIn delay={0.2}>
          <Contact />
        </FadeIn>
      </section>
    </>
  );
};

export default Home;
