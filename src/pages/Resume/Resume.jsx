import React from 'react';

const Resume = () => {
  return (
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
            1+ YEARS OF EXPERIENCE
          </h1>
        </header>
        <main className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="relative lg:col-span-1 flex lg:flex-col lg:items-center">
              <div className="absolute top-0 left-4 lg:left-1/2 w-0.5 h-full bg-orange-200 dark:bg-stone-700 -translate-x-1/2"></div>
              <div className="flex items-center gap-4 lg:gap-0 lg:flex-col lg:w-full">
                <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>
                <h2 className="font-semibold text-lg lg:mt-4 z-2">Education</h2>
              </div>
            </div>
            <div className="lg:col-span-3 ml-12 lg:ml-0">
              <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2 col-span-full">
                    <h3 className="font-bold">
                      Secondary School Certificate (2023 - 2025)
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      SK. Fazilatunnesa Modern High School (Science)
                    </p>
                    {/* <p className="text-sm text-stone-600 dark:text-stone-400"></p> */}
                  </div>
                  {/* <div className="space-y-2 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                    <h3 className="font-bold">
                      AS - Science &amp; Information
                    </h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      University of ULAV (2016 - 2018)
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="relative lg:col-span-1 flex lg:flex-col lg:items-center">
              <div className="absolute top-0 left-4 lg:left-1/2 w-0.5 h-full bg-orange-200 dark:bg-stone-700 -translate-x-1/2"></div>
              <div className="flex items-center gap-4 lg:gap-0 lg:flex-col lg:w-full">
                <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>
                <h2 className="font-semibold text-lg lg:mt-4 z-2">
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
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <span className="flex-grow">Adobe XD</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <span className="flex-grow">Photoshop</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                    <h3 className="font-bold">Frontend</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <span className="flex-grow">HTML5</span>
                        <span>JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <span className="flex-grow">CSS3</span>
                        <span>React.js</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <span className="flex-grow">Tailwind CSS</span>
                        <span>Next.js</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                    <h3 className="font-bold">Backend</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <span className="flex-grow">Node.js</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <span className="flex-grow">Express.js</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                        <span className="flex-grow">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Ex section */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="relative lg:col-span-1 flex lg:flex-col lg:items-center">
              <div className="absolute top-0 left-4 lg:left-1/2 w-0.5 h-full bg-orange-200 dark:bg-stone-700 -translate-x-1/2"></div>
              <div className="flex items-center gap-4 lg:gap-0 lg:flex-col lg:w-full">
                <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>
                <h2 className="font-semibold text-lg lg:mt-4">Experience</h2>
              </div>
            </div>
            <div className="lg:col-span-3 ml-12 lg:ml-0">
              <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">Web Developer &amp; Trainer</h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Brac Developer Team - (2012 - 2016)
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                  <div className="space-y-2 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                    <h3 className="font-bold">Front-end Developer</h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Brane - (2020 - 2011)
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                  <div className="space-y-2 border-t md:border-t-0 md:border-l border-orange-200 dark:border-stone-700 pt-6 md:pt-0 md:pl-6">
                    <h3 className="font-bold">UI/UX Designer</h3>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Google Out Tech - (2017 - Present)
                    </p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </section>
  );
};

export default Resume;
