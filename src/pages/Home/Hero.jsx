import React from 'react';

const Hero = () => {
  return (
    <main className="flex-grow flex flex-col justify-center px-4 sm:px-6 lg:px-8 h-[calc(100vh - 50vh)] check">
      <div className="container mx-auto text-left">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-stone-900 dark:text-white max-w-3xl">
          Creative Design and Web{' '}
          <span className="text-primary">Solutions</span>
        </h1>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400 max-w-xl">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus.
        </p>
        <a
          className="mt-10 inline-block bg-primary text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:bg-orange-600 transition-colors text-lg"
          href="#"
        >
          Download My CV
        </a>
      </div>
    </main>
  );
};

export default Hero;
