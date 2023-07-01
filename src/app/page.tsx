import NavBar from "@/components/NavBar";
import FeaturesSection from "@/sections/FeaturesSection";
import FooterSection from "@/sections/FooterSection";
import LogoSection from "@/sections/LogoSection";

export default function Example() {
  return (
    <>
      <section className="bg-[url('https://img.freepik.com/premium-photo/portrait-delivery-man-truck_236854-45629.jpg')] bg-cover min-h-screen">
        <NavBar />
        <div className="w-full bg-[#03125996]">
          <div className="mx-auto max-w-4xl min-h-screen flex items-center container">
            <div className="text-center mt-16 mb-8">
              <h1 className="text-4xl font-bold text-white sm:text-6xl">
                Comprehensive Driver&apos;s and Vehicle&apos;s Record Reports
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Whether you&apos;re a concerned citizen, an employer looking to
                hire a driver, or a used car buyer, our comprehensive
                driver&apos;s and vehicle&apos;s record reports equip you with
                vital insights to ensure your safety and peace of mind.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/search"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LogoSection />
      <FeaturesSection />
    </>
  );
}
