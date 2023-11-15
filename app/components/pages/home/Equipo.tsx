import circle from "app/assets/imgs/cta/circle-bg.svg";
import equipo from "app/assets/imgs/equipo.webp";

export default function Equipo() {
  return (
    <section className="py-20 md:py-24">
      <div className="container px-20 max-lg:px-0 mx-auto">
        <div className="relative max-w-7xl mx-auto px-6 max-xl:px-0 py-16 max-xl:pt-0 rounded-4xl max-xl:rounded-none bg-gray-900 overflow-hidden flex flex-row-reverse max-xl:flex-col items-center">
          <img
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full object-cover"
            src={circle}
            alt=""
          />
          <img
            src={equipo}
            alt="Un equipo trabajando"
            className="absolute max-xl:static top-0 left-0 transform translate-x-0 h-full max-xl:h-auto max-xl:w-full object-cover"
          />

          <div className="relative text-right max-xl:text-center w-[50%] max-xl:w-3/4 max-xl:mt-8 max-xl:flex flex-col items-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 mb-6">
              ¿Listo para la colaboracion?
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              <span>Conoce a nuestro equipo de trabajo</span>
              <span className="font-serif italic"></span>
            </h2>
            <a
              className="relative group inline-block w-full max-xl:w-3/4 sm:w-auto py-4 px-6 text-blue-900 hover:text-white font-semibold bg-gray-100 rounded-md overflow-hidden transition duration-300"
              href="/equipo"
            >
              <div className="absolute top-0 right-full w-full h-full bg-gradient-pink transform group-hover:translate-x-full group-hover:scale-110 transition duration-500" />
              <div className="relative flex items-center justify-center">
                <span className="mr-4">¡Vamos!</span>
                <span>
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
