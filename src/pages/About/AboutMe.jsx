import React from 'react';
import Bappy from '../../assets/bappy.png';
import { Info } from 'lucide-react';

const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200"
      >
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="bg-background-light dark:bg-background-dark container mx-auto p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="w-full">
                <img
                  alt="azizur-rahman-bappy"
                  className="w-full h-auto object-cover rounded-lg"
                  src={Bappy}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Info className="text-primary"></Info>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    About Me
                  </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                  I Can Develop Any Website You Want
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Proficient in React.js, Next.js, and Node.js I build scalable,
                  high-performance applications. Skilled in Prisma, Socket.IO,
                  and Kubernetes, with expertise in MongoDB, and CI/CD
                  pipelines, I deliver innovative real-time systems and
                  impactful solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-orange-50 dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-gray-700">
                      <span className="material-icons text-primary text-3xl">
                        verified
                      </span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">15+</p>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Complete Project
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-orange-50 dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-gray-700">
                      <span className="material-icons text-primary text-3xl">
                        schedule
                      </span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">1+</p>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Year of experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-primary">
                      check_box
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      High Performance Application
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-primary">
                      check_box
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Build Scalable Application
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-primary">
                      check_box
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Error Free
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-primary">
                      check_box
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Seo Friendly
                    </span>
                  </div>
                </div>
                <a
                  className="inline-block bg-primary text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300"
                  href="#"
                >
                  Download My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
