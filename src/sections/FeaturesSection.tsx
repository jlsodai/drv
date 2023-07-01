import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const features = [
  {
    name: "Accuracy and Reliability",
    description:
      "We understand the importance of accurate and reliable information. Our team works diligently to gather data from trusted sources and verify its authenticity. Our commitment to accuracy ensures that the reports you receive are dependable and of the highest quality.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Exceptional Customer Support",
    description:
      "We believe in providing exceptional customer support every step of the way. Our dedicated team is available to assist you with any inquiries, technical support, or guidance you may need. We strive to ensure your experience with DriveCheck is seamless and satisfactory",
    icon: FingerPrintIcon,
  },
  {
    name: "Data Privacy and Security",
    description:
      "We prioritize the privacy and security of our users' data. We employ industry-leading security measures to safeguard your information. Rest assured that your search queries and personal details are handled with utmost confidentiality and protected by robust security protocols.",
    icon: LockClosedIcon,
  },
  {
    name: "Customized Solutions",
    description:
      "We recognize that different organizations have unique needs. Whether you're a transportation company, an HR department, an insurance provider, or a government agency, we offer tailored solutions to meet your specific requirements. Our flexible services are designed to streamline your processes and enhance your decision-making capabilities.",
    icon: ArrowPathIcon,
  },
];

export default function NewFeaturesSection() {
  return (
    <section className="bg-white mb-16">
      <div className="container">
        <div className="p-16 bg-gray-100 rounded-md">
          <h2 className="text-3xl font-extrabold sm:text-4xl max-w-xl text-center mx-auto text-gray-900">
            Why do leading organizations choose DriveCheck?
          </h2>
          <div className="mx-auto mt-16">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-700">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-center mt-16">
          Join the ranks of reputable organizations who trust DriveCheck to
          deliver accurate, reliable, and comprehensive driver&apos;s and
          vehicle&apos;s record reports. Experience the difference of working
          with a trusted partner dedicated to your safety and peace of mind.
        </p>

        <div className="mt-8 sm:flex justify-center">
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
    </section>
  );
}
