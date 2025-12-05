import {
  ArrowRight,
  BetweenHorizontalStart,
  Braces,
  Code,
  LayoutDashboard,
  Presentation,
  Server,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Services = () => {
  return (
    <>
      <section className="bg-background-light dark:bg-background-dark font-display">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className=" text-primary text-2xl">
                  <BetweenHorizontalStart />
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  My Service
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                SERVICES I OFFER
              </h1>
            </header>
            <main>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg dark:hover:bg-gray-700">
                  <div className="mb-4">
                    <svg
                      className="h-12 w-12 text-primary mx-auto"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M7.5 18.75a3.75 3.75 0 003.75 3.75h1.5a3.75 3.75 0 003.75-3.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    FrontEnd <br /> Development
                  </h2>

                  <p className="w-full mx-auto text-sm text-gray-600 dark:text-gray-400">
                    <Link
                      to=""
                      className="flex items-center justify-center gap-1 hover:gap-2 duration-200 hover:text-primary hover:underline"
                    >
                      View More{' '}
                      <span>
                        <ArrowRight />
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg dark:hover:bg-gray-700">
                  <div className="mb-4">
                    <Code className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Backend <br /> Development
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <Link
                      to=""
                      className="flex items-center justify-center gap-1 hover:gap-2 duration-200 hover:text-primary hover:underline"
                    >
                      View More{' '}
                      <span>
                        <ArrowRight />
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg dark:hover:bg-gray-700">
                  <div className="mb-4">
                    <Braces className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Fullstack <br /> Development
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <Link
                      to=""
                      className="flex items-center justify-center gap-1 hover:gap-2 duration-200 hover:text-primary hover:underline"
                    >
                      View More{' '}
                      <span>
                        <ArrowRight />
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg dark:hover:bg-gray-700">
                  <div className="mb-4">
                    <LayoutDashboard className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Mobile Hybrid <br /> App Development
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <Link
                      to=""
                      className="flex items-center justify-center gap-1 hover:gap-2 duration-200 hover:text-primary hover:underline"
                    >
                      View More{' '}
                      <span>
                        <ArrowRight />
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg dark:hover:bg-gray-700">
                  <div className="mb-4">
                    <Presentation className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Prototype <br /> Development
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <Link
                      to=""
                      className="flex items-center justify-center gap-1 hover:gap-2 duration-200 hover:text-primary hover:underline"
                    >
                      View More{' '}
                      <span>
                        <ArrowRight />
                      </span>
                    </Link>
                  </p>
                </div>
                <div className="bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center transition-all hover:shadow-lg dark:hover:bg-gray-700">
                  <div className="mb-4">
                    <Server className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    API <br /> Development
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <Link
                      to=""
                      className="flex items-center justify-center gap-1 hover:gap-2 duration-200 hover:text-primary hover:underline"
                    >
                      View More{' '}
                      <span>
                        <ArrowRight />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
