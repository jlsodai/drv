import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const LogoSection = () => {
  return (
    <div className="bg-white">
      <div className="py-12 container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              We are trusted by leading organisations
            </h2>
            <p className="mt-6 max-w-3xl text-gray-500">
              Our commitment to excellence has earned us the trust of reputable
              organizations across various industries. When it comes to making
              informed decisions regarding driver safety and vehicle
              reliability, these organizations turn to us as their trusted
              partner.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link
                  href="/search"
                  className="flex items-center justify-center px-5 py-3 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoSection;
