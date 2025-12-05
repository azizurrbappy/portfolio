import React from 'react';

const Contact = () => {
  return (
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
                    393/1 Insaf Rosevally, Baganbari Road, Thakurpara, Comilla -
                    3500, Bangladesh
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
                    +880 1405737757
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
                    azizurr.bappy@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
