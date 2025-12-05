import React from 'react';

const Testimonial = () => {
  return (
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
                "Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature fr45
                BC, mak it over 2000 years old."
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
                "Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature fr45
                BC, mak it over 2000 years old."
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
                "Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature fr45
                BC, mak it over 2000 years old."
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
  );
};

export default Testimonial;
