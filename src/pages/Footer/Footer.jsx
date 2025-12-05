import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="relative flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                Azizur Rahman
                <span className="relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 bg-primary rounded-full"></span>
                  <span className="relative z-10 text-white">B</span>
                </span>
                appy
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Proficient in React.js, Next.js, and Node.js I build scalable,
              high-performance applications. Skilled in Prisma, Socket.IO, and
              Kubernetes, with expertise in MongoDB, and CI/CD pipelines, I
              deliver innovative real-time systems and impactful solutions.
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">
              azizurr.bappy@gmail.com
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Explore Link
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a className="hover:text-primary" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Resume
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              My Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a className="hover:text-primary" href="#">
                  Frontend Development
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Backend Development
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Fullstack Development
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Mobile Hybrid App Development
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Prototype Development
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  API Development
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Follow me
            </h3>
            <div className="flex space-x-3">
              <a
                target="_black"
                className="text-white rounded-md flex items-center justify-center hover:opacity-90"
                href="https://www.facebook.com/mebappy10"
              >
                <img
                  alt="Facebook icon"
                  className="w-10 h-10 rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/021/495/985/non_2x/facebook-social-media-logo-icon-free-png.png"
                />
              </a>
              <a
                target="_black"
                className="text-white rounded-md flex items-center justify-center hover:opacity-90"
                href="https://github.com/azizurrbappy"
              >
                <img
                  alt="Facebook icon"
                  className="w-10 h-10 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
              <a
                target="_black"
                className="text-white rounded-md flex items-center justify-center hover:opacity-90"
                href="https://www.linkedin.com/in/azizurrbappy/"
              >
                <img
                  alt="Facebook icon"
                  className="w-10 h-10 rounded-full"
                  src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
                />
              </a>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-start">
                <span
                  className="material-icons text-primary mr-2"
                  style={{ fontSize: '18px' }}
                >
                  location_on
                </span>
                <span>Cumilla, Bangladesh</span>
              </div>
              <div className="flex items-center">
                <span
                  className="material-icons text-primary mr-2"
                  style={{ fontSize: '18px' }}
                >
                  call
                </span>
                <span>+880 1405737757</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 space-y-4 md:space-y-0">
          <p>All rights reserved © 2023 Azizur Rahman Bappy</p>
          <div className="flex space-x-6">
            <a className="hover:text-primary" href="#">
              Terms &amp; Condition
            </a>
            <a className="hover:text-primary" href="#">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
