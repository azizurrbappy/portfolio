import React from 'react';
import Bappy from '../../assets/bappy.png';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="container mx-auto flex items-center justify-between max-md:flex-col-reverse h-[calc(100vh-20vh)] px-4 lg:px-0 max-md:mt-20">
      <div className="text-left">
        <p className="text-3xl mb-2 text-primary dark:text-primary max-w-xl font-semibold">
          Hey, I'm
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-stone-900 dark:text-white max-w-3xl">
          Azizur Rahman Bappy
        </h1>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400 max-w-xl">
          🚀 Turning ideas into Stunning Websites 💻 <br />
          Available for projects and collaborations 🌟
        </p>
        <Link
          className="mt-10 inline-block bg-primary text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:bg-orange-600 transition-colors text-lg"
          to="#"
        >
          Download My CV
        </Link>
      </div>

      <div className="max-md:mb-10">
        <img className="w-3xl" src={Bappy} alt="azizur-rahman-bappy" />
      </div>
    </section>
  );
};

export default Hero;
