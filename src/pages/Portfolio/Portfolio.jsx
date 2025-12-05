import React from 'react';

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
