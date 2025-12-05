import React from 'react';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Hero></Hero>
        <section className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
          <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="bg-background-light dark:bg-background-dark container mx-auto p-6 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="w-full">
                  <img
                    alt="Portrait of a young man with glasses and a beanie, wearing a brown shirt over a red v-neck t-shirt."
                    className="w-full h-auto object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQQXS7vJifevU8DLNvoesjlcmRC-QRQWSjHEMfUhKBq-nHF9J73INI_Tuk7tucTff-uhmhTQrSF6nQ4agj4VaLSM-ZU8W5JAYriXQuu84oO1HWSvy83evc05DNzbBQHcu5ck4uNerCc4TR5XwM6jcdFlBLmrxHX0k8IeHuEILa9307NINEJo8ZULuUkUdHi82BeQCI-c-jVu5yOWwIgxd2bwxyhrMotDIXbO4SbsxuqyOaVxpzpB5L41WzRghFM92h5Fk1fbh1ZGg"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      About Me
                    </p>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                    I Can Design Anything You Want
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Temporibus autem quibusdam et aut officiis. Nam
                    libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-8 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-orange-50 dark:bg-gray-800 rounded-lg border border-orange-200 dark:border-gray-700">
                        <span className="material-icons text-primary text-3xl">
                          verified
                        </span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">3+</p>
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
                        <p className="text-2xl font-bold text-primary">0+</p>
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
                        Work simple and cline design
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-primary">
                        check_box
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Web Design Full stack
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-primary">
                        check_box
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        New idea and user friendly design
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-primary">
                        check_box
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        Unlimited Revisions
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
        <section className="bg-background-light dark:bg-background-dark font-display">
          <div className="p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    api
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      UI/UX Design
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hen our power of choice is untrammelled and when nothing
                      prevents our being able
                    </p>
                  </div>
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
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9.58 8.01l.46-1.53a.75.75 0 011.458 0l.46 1.53m-1.46-2.022a2.25 2.25 0 00-2.228 1.956L7.5 12.5l1.01 3.535a2.25 2.25 0 002.228 1.956h2.524a2.25 2.25 0 002.228-1.956L16.5 12.5l-.832-2.912a2.25 2.25 0 00-2.228-1.956H9.58z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Mobile App
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hen our power of choice is untrammelled and when nothing
                      prevents our being able
                    </p>
                  </div>
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
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M19.5 13.5V9a6 6 0 00-12 0v4.5m10.5-3.75h.008v.008h-.008v-.008zM9 13.5h.008v.008H9v-.008z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Graphic Design
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hen our power of choice is untrammelled and when nothing
                      prevents our being able
                    </p>
                  </div>
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
                          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.871A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M15 6H9m6 3H9m6 3H9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Web Developer
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hen our power of choice is untrammelled and when nothing
                      prevents our being able
                    </p>
                  </div>
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
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527c.46-.329 1.025-.286 1.415.099l.75.75c.386.386.43.955.099 1.415l-.527.737c-.25.35-.272.806-.108 1.204.166.397.506.71.93.78l.894.149c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.93.78-.164.398-.142.854.108 1.204l-.527-.738c-.33-.46-.286-1.025.1-1.415l-.75.75c-.386-.386-.955.43-1.415.099l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.166-.71.506-.78.93l.149.894z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 8.25c-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75 3.75-1.679 3.75-3.75-1.679-3.75-3.75-3.75z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      SEO Optimisation
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hen our power of choice is untrammelled and when nothing
                      prevents our being able
                    </p>
                  </div>
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
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 6.042h.008v.008H12V6.042zm0 14.25h.008v.008H12v-.008z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      WordPress Developer
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hen our power of choice is untrammelled and when nothing
                      prevents our being able
                    </p>
                  </div>
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
                          d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9 13.5l3 3m0 0l3-3m-3 3v-6m-1.5-6H12m3 0h.008v.008H15V7.5z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      App Development
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hen our power of choice is untrammelled and when nothing
                      prevents our being able
                    </p>
                  </div>
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
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Business Strategy
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hen our power of choice is untrammelled and when nothing
                      prevents our being able
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </section>
        <section className="bg-background-light dark:bg-background-dark font-display text-stone-900 dark:text-stone-100">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <header className="text-center py-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="material-icons text-primary text-2xl">
                  assignment_ind
                </span>
                <span className="text-sm font-medium text-stone-600 dark:text-stone-400">
                  My Resume
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                10+ YEARS OF EXPERIENCE
              </h1>
            </header>
            <main className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
                <div className="relative lg:col-span-1 flex lg:flex-col lg:items-center">
                  <div className="absolute top-0 left-4 lg:left-1/2 w-0.5 h-full bg-orange-200 dark:bg-stone-700 -translate-x-1/2"></div>
                  <div className="flex items-center gap-4 lg:gap-0 lg:flex-col lg:w-full">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>
                    <h2 className="font-semibold text-lg lg:mt-4">Education</h2>
                  </div>
                </div>
                <div className="lg:col-span-3 ml-12 lg:ml-0">
                  <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h3 className="font-bold">BSc in Computer Science</h3>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          University of ULAV (2018 - 2022)
                        </p>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Pomnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                      </div>
                      <div className="space-y-2 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                        <h3 className="font-bold">
                          AS - Science &amp; Information
                        </h3>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          University of ULAV (2016 - 2018)
                        </p>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Pomnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                      </div>
                      <div className="space-y-2 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                        <h3 className="font-bold">
                          Secondary School Education
                        </h3>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Kindergarten (2006 - 2016)
                        </p>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Pomnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
                <div className="relative lg:col-span-1 flex lg:flex-col lg:items-center">
                  <div className="absolute top-0 left-4 lg:left-1/2 w-0.5 h-full bg-orange-200 dark:bg-stone-700 -translate-x-1/2"></div>
                  <div className="flex items-center gap-4 lg:gap-0 lg:flex-col lg:w-full">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>
                    <h2 className="font-semibold text-lg lg:mt-4">
                      Software Skills
                    </h2>
                  </div>
                </div>
                <div className="lg:col-span-3 ml-12 lg:ml-0">
                  <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-bold">UI/UX Design</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">Figma</span>
                            <span>90%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="90"
                          ></progress>
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">Adobe XD</span>
                            <span>85%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="85"
                          ></progress>
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">Photoshop</span>
                            <span>80%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="80"
                          ></progress>
                        </div>
                      </div>
                      <div className="space-y-4 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                        <h3 className="font-bold">Web Developer</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">WordPress</span>
                            <span>90%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="90"
                          ></progress>
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">Mockplus</span>
                            <span>85%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="85"
                          ></progress>
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">Weebly</span>
                            <span>80%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="80"
                          ></progress>
                        </div>
                      </div>
                      <div className="space-y-4 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                        <h3 className="font-bold">App Development</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">Quixy</span>
                            <span>92%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="92"
                          ></progress>
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">AppyPie</span>
                            <span>87%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="87"
                          ></progress>
                          <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                            <span className="flex-grow">iBuildApp</span>
                            <span>82%</span>
                          </div>
                          <progress
                            className="w-full h-1"
                            max="100"
                            value="82"
                          ></progress>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="relative lg:col-span-1 flex lg:flex-col lg:items-center">
                  <div className="absolute top-0 left-4 lg:left-1/2 w-0.5 h-full bg-orange-200 dark:bg-stone-700 -translate-x-1/2"></div>
                  <div className="flex items-center gap-4 lg:gap-0 lg:flex-col lg:w-full">
                    <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>
                    <h2 className="font-semibold text-lg lg:mt-4">
                      Experience
                    </h2>
                  </div>
                </div>
                <div className="lg:col-span-3 ml-12 lg:ml-0">
                  <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h3 className="font-bold">
                          Web Developer &amp; Trainer
                        </h3>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Brac Developer Team - (2012 - 2016)
                        </p>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Pomnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                      </div>
                      <div className="space-y-2 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                        <h3 className="font-bold">Front-end Developer</h3>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Brane - (2020 - 2011)
                        </p>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Pomnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                      </div>
                      <div className="space-y-2 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                        <h3 className="font-bold">UI/UX Designer</h3>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Google Out Tech - (2017 - Present)
                        </p>
                        <p className="text-sm text-stone-600 dark:text-stone-400">
                          Pomnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
        <section className="bg-background-light dark:bg-background-dark font-display">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-6xl mx-auto py-12 md:py-24 px-4">
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    Testimonial
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-center text-stone-900 dark:text-white mb-12 md:mb-16">
                CLIENT FEEDBACK
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-stone-800 p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <img
                      alt="Profile picture of Robert E. Wolf"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-igHX9lBCCjNZ3yd-Ezqe605SLRfVcaNrN_7B4Q5ZioWcuC1Ypm96xAr9qMeAQfEk6RXXVyaWa0KFYeJnTPF2JMTjKu_L-Z2csBxB-F88rmfHz6GksNV1SJMFUyblebqgxQgovfhtnsVkoMUw4tXGS2lrjKtBsewDpNUdXp38RsQLVY2wVpNZOMQ8Qv1kLc5REQqMOCexNExmy7xMyGcGb606N6H1VJ5LlxoActlJgpaWlYwfF-a0z3-FQYm8AjMLLaXSokCamm0"
                    />
                    <div>
                      <p className="font-bold text-lg text-stone-900 dark:text-white">
                        Robert E. Wolf
                      </p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        Director, Techso
                      </p>
                    </div>
                  </div>
                  <p className="text-stone-700 dark:text-stone-300">
                    "Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature fr45 BC, mak it over 2000 years old."
                  </p>
                </div>
                <div className="bg-white dark:bg-stone-800 p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <img
                      alt="Profile picture of Robert E. Wolf"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-PlXOCytyeRbJL1EetqLiv9IpowYgKAAQbqaKboKlOi8ab0rwtrPuLBuAXHT950XbdYHSKQ5BI7swOAWMBYbvHoFbe0oz2URKlScF1aBea1fbA0rBRkFdEPhbRwTDzAkjzTYptsSeMoAzW38hgLkcnEf_FQSz4OmuyFRfjwEy62ynfv8GcAZ_uNiAafCSKuLWgzGv3pdJ0Ez8K2HZGfCeNzrOteRhn1tIJkH7c8LThOxbCuNgJE-0ttuAc4Sl2Ft36nxzwCKhFx0"
                    />
                    <div>
                      <p className="font-bold text-lg text-stone-900 dark:text-white">
                        Robert E. Wolf
                      </p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        Director, Techso
                      </p>
                    </div>
                  </div>
                  <p className="text-stone-700 dark:text-stone-300">
                    "Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature fr45 BC, mak it over 2000 years old."
                  </p>
                </div>
                <div className="bg-white dark:bg-stone-800 p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <img
                      alt="Profile picture of John K. Meraz"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3TLJ_-ywxx1vjV6H6wpszYKdcUTSiKwGnz-q1wuwnUW4XSiA6THvlZTyuAqBavzTsXAOYsVwHAHUpSWoqol_RLCncEvRDj33okfAcvrWgRtfoPGZviu_4RvlWc37ITAFAke60C4ZyJeXx4tUDcs3hcga59qjmQ0xPnS4lpHOmlLB_U-dMJJHs9vXWt-WCt_gLarradzjzHJhemiKOTATJZFWCPNqSMOe5apAwMYr05YeQmotpL3oa2Z4v8W9M3vFGpFFDM-ef5Y"
                    />
                    <div>
                      <p className="font-bold text-lg text-stone-900 dark:text-white">
                        John K. Meraz
                      </p>
                      <p className="text-sm text-stone-600 dark:text-stone-400">
                        CTO, Xyz Group
                      </p>
                    </div>
                  </div>
                  <p className="text-stone-700 dark:text-stone-300">
                    "Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature fr45 BC, mak it over 2000 years old."
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-12 md:mt-16 space-x-2">
                <div className="w-2.5 h-2.5 bg-primary/40 dark:bg-primary/30 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary/40 dark:bg-primary/30 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-primary/40 dark:bg-primary/30 rounded-full"></div>
                <div className="w-3 h-3 rounded-full border-2 border-primary"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background-light dark:bg-background-dark font-display">
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="material-icons text-white text-base">
                      auto_awesome
                    </span>
                  </div>
                  <p className="text-sm font-medium text-stone-600 dark:text-stone-400">
                    My Portfolio
                  </p>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-stone-100">
                  VISIT MY PORTFOLIO
                </h1>
              </header>
              <nav className="mb-8 md:mb-12">
                <ul className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-4 text-sm font-medium text-stone-600 dark:text-stone-400">
                  <li>
                    <a
                      className="text-primary border-b-2 border-primary pb-1"
                      href="#"
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                      href="#"
                    >
                      UI/Ux Design
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                      href="#"
                    >
                      Branding Design
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                      href="#"
                    >
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                      href="#"
                    >
                      App Development
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                      href="#"
                    >
                      Web Design
                    </a>
                  </li>
                </ul>
              </nav>
              <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <div className="aspect-square">
                  <img
                    alt="A minimalist white room with a small plant on a side table next to a white lamp."
                    className="w-full h-full object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYYlimUNvyP61p2q9cLooqFoV2ferwTtAlw03XG1X3Nggq51bC_JAtIG3xON9rHVimhsv3HRsYve6jhAkAFUeq8xx6B6CfhyVQNxKKWheTDSoSoz8pYnSbnkgZK-xwDgAEthAZdD9_8IHQNnR_J9Cx0QUySixXqLrhK_zR4Omo1myi9QwxKr0zzmEA-aMo3DPH0_8rp10Yjn_GxJS3ZBH3pQ_rT3k7lcvKBdJYb6KmrbCfecY00lEhuUlA0i3IWuv55ieMsD83d2s"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    alt="An abstract 3D render of a silky grey fabric draped over rectangular shapes."
                    className="w-full h-full object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhnTWsKH6qp4BaTMC2d-P_4xdPD3TVdvrHW8YBGYYPmgaOCtGWzR1H5d_sxmzykSlxKFSlZB6TrpGl4fnJSFQ_62qU0_vfHXYQkFbY3YTOcRgcU8NNu-5S4SbxsACkkLCsSw3vTiV3gyHmnGtyGd5K5hQKzTh2T0jiwUFK4M0EEF7TFodivGBSQaqa7wIL3A0AiRWMRwJCRmSWerE_gGAxWyMP3Qoeq_ooLhmWZ-5fJWSnXWuJFCPqJjOgz3RmnrOm9kJnh_KfjGc"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    alt="A desk setup with a calendar, a planner, a small plant, and other stationery items."
                    className="w-full h-full object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaL19ljCFnHVowEezgr2Se-hnSYda3OHq2TQbeHYI4zVFWLdX1oGLlMYohmQcglfn8AdhHYhTsKiUSWC2Ow8isj4jImZ3Q1aOdXrpPEn-AOt4ClPd-XAM7tYyjZ1qz5QicD-kmYmBrUbjw1R7109G3mxJtnq9U8aHiC9Gc7WqDbX-g5_xSgvkDgrVI2lIn6LfMjAYdSiYecg8y5Zb4EP_cv8SQRoEZhWx6K8E1Bgy8RSoknN7jE7WLmQ-HoU9mn8YUaC-amLM2P44"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    alt="A framed poster of the word Helvetica in bold black and orange typography."
                    className="w-full h-full object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_2JUsXM_a3tS5G3uid8MaBocvG4nkHF1ZutIbYhtpGf-l8PURuxwULndyFUpFFHNdQJAoqAVFwYmQz6mPuVKB1hbYtwpfOpmPYJb5LX2EYCY_gYpSNYy98BIY1-cyKIMUMhOke_IajLx86PDzuKHrwAlSEsGxT-YoadGqaTfUPc7PU17tnXVn5jKBm7bMEN-Xh507hp_Jv90lCWZseyOFab9M1fpT78zWRCRUf-YbStZdo4xEf2RVtn2keWPHAl0UojX9cOWOZ6w"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    alt="A black and white photograph looking down a spiral staircase with white railings."
                    className="w-full h-full object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA640AewGIE7wvN3wDhn5jZlR8RjPtzl1s-pPvNyMY-0QinlccIcR-tprkY_8R48Oa8YxTZ9nn1mNkG7Xfa5tHYicgiH9Zchmg-YA8SpUaYWuwnu38Zp7A0wtagz3UnKCYpZ2mFuEbKaDRoSE8Yo-ejApyehdxKpqM59i03fnFPerl-LiFHh7MX8KcdghM8WlIFZ5joPI0uuXInrQaacMjQJT3IVX4p_gCqvmkaqV_jsg7J6tsDHFEd6oBDfhKuxh7D1xcDeJKk7sk"
                  />
                </div>
                <div className="aspect-square">
                  <img
                    alt="A close-up shot of a green eucalyptus branch resting on a white tag."
                    className="w-full h-full object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyTHuTKpS3THtmpC3U7w-PEc0acrhOF7u4s66NNTc2L7XT9XZMwZRMa0tsW0x6HoVY6wFb6P7W9EgvwSfESjJvnJMEZyyNoaml-FbG4X5_OIzUF_5SLVDTNCChpL3_Fnrrm0ElOIcPBiCcVVQtVNrd2J0BMgXwTG4OkTbDShbA0ciqFYIibAcxKGGfY4PatR7ijl5JCG3rIYyVkNNgCk-dKk26O_4kLmivy0BbFvOB7q7U8uDVSWdynzfsmEfS8iLlq5RzlWz83jU"
                  />
                </div>
              </main>
            </div>
          </div>
        </section>
        <section className="bg-background-light dark:bg-background-dark font-display">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-7xl w-full mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="material-icons text-primary text-xl">
                    contact_mail
                  </span>
                  <span className="text-sm font-semibold text-stone-800 dark:text-stone-300">
                    My Contact
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-stone-900 dark:text-stone-100">
                  I WANT TO HEAR FROM YOU
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                <div className="w-full">
                  <form action="#" className="space-y-6" method="POST">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="sr-only" htmlFor="name">
                          Your Name
                        </label>
                        <input
                          className="w-full bg-white dark:bg-stone-800 border border-orange-200 dark:border-stone-700 rounded-lg py-3 px-4 text-stone-700 dark:text-stone-300 placeholder-stone-400 focus:ring-primary focus:border-primary"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          type="text"
                        />
                      </div>
                      <div>
                        <label className="sr-only" htmlFor="email">
                          Your Email
                        </label>
                        <input
                          className="w-full bg-white dark:bg-stone-800 border border-orange-200 dark:border-stone-700 rounded-lg py-3 px-4 text-stone-700 dark:text-stone-300 placeholder-stone-400 focus:ring-primary focus:border-primary"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          type="email"
                        />
                      </div>
                      <div>
                        <label className="sr-only" htmlFor="phone">
                          Your phone
                        </label>
                        <input
                          className="w-full bg-white dark:bg-stone-800 border border-orange-200 dark:border-stone-700 rounded-lg py-3 px-4 text-stone-700 dark:text-stone-300 placeholder-stone-400 focus:ring-primary focus:border-primary"
                          id="phone"
                          name="phone"
                          placeholder="Your phone"
                          type="tel"
                        />
                      </div>
                      <div>
                        <label className="sr-only" htmlFor="subject">
                          Subject
                        </label>
                        <input
                          className="w-full bg-white dark:bg-stone-800 border border-orange-200 dark:border-stone-700 rounded-lg py-3 px-4 text-stone-700 dark:text-stone-300 placeholder-stone-400 focus:ring-primary focus:border-primary"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="sr-only" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="w-full bg-white dark:bg-stone-800 border border-orange-200 dark:border-stone-700 rounded-lg py-3 px-4 text-stone-700 dark:text-stone-300 placeholder-stone-400 focus:ring-primary focus:border-primary pr-20"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="6"
                      ></textarea>
                      <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                        <img
                          alt="Icon group 1"
                          className="h-6 w-auto"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD51WTpu58KTyxmq6k8jpYoSEVBEU6qQ9esDQuBJDEND7XZ-q_6sk5gUveuHu6sOV-Kdik4RP1f1IsZ93__wsTBGmVByZVXKbsm4sra-BgzuharjN8sxc22JlZQzPVjRcoT2LfjLIo8MrBPOHC_7mphTkWOohZ7RfeDLAbBF1kiX2Zpi-nDe408FAhe0FLYl9ijNCRIleEZJQtyIWbkilascLCCr5hfRdnYwxEYa9GTrlD8NPicgtMRLkTRDIKdwjRBtU5MsjeGFfs"
                        />
                        <img
                          alt="Icon group 2"
                          className="h-6 w-auto"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZnsIGv8W3e4QO2LvsexJpq2z09E6lvW7hsHpdVCQ5f78CcnMGwCZhVWjkIXBjIGg-tZA_A_fcLgmUVhhORgq75Z61lnnGbtQFWg1FgGGLO04Yb41M2OL36AWUJkDfz8aCCSQHNJWqbC2j7HORLi2wvDLhRzBlRxqyVe84yUuI_Yl-ZjsZzO3fwRhkNfsI6avQIIaXLaYkQU_c5v832MWf5IA2CAGNG4GOoCcB5GbjeJwPL3bVqMZuVtxSuDZQmKnZxdE1T5vX2g0"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        className="w-full md:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300"
                        type="submit"
                      >
                        Send Me Message
                      </button>
                    </div>
                  </form>
                </div>
                <div className="space-y-8 lg:pt-2">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-orange-100 dark:bg-stone-800 p-3 rounded-lg">
                      <span className="material-icons text-primary !text-2xl">
                        location_on
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                        Address
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400">
                        202 Dog Hill Lane Beloit, KS 67420
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-orange-100 dark:bg-stone-800 p-3 rounded-lg">
                      <span className="material-icons text-primary !text-2xl">
                        phone_in_talk
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                        Phone
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400">
                        +01589634755
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-orange-100 dark:bg-stone-800 p-3 rounded-lg">
                      <span className="material-icons text-primary !text-2xl">
                        email
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                        Email
                      </h3>
                      <p className="text-stone-600 dark:text-stone-400">
                        credesign@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background-light dark:bg-background-dark font-display">
          <footer className="bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center space-x-2">
                    <span className="relative flex items-center text-2xl font-bold text-stone-900 dark:text-white">
                      Cre
                      <span className="relative">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 bg-primary rounded-full"></span>
                        <span className="relative z-10 text-white">D</span>
                      </span>
                      esign
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et molestias excepturi sint occaecati.
                  </p>
                  <p className="font-semibold text-stone-900 dark:text-white">
                    credesign@gmail.com
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                    Explore Link
                  </h3>
                  <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
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
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default Home;
