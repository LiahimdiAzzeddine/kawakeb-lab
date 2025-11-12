import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-white py-6">
      <div className="max-ms:max-w-7xl ms:max-w-[90%] custom-max-w mx-auto px-6 sm:px-16">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-2 items-start">
            <a href="mailto:kawakeb.company.dubai@gmail.com" className="text-gray-400 hover:text-white md:items-end">
              <EnvelopeIcon className="h-6 w-6" />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center text-center flex-grow">
            <p className="text-gray-400">
              © 2024 Kawakeb. All rights reserved.
            </p>
            <p className="text-gray-400">
              Designed &amp; developed by AZ
            </p>
          </div>
          <div className="flex gap-2 items-end">
            <a href="tel:+123456789" className="text-gray-400 hover:text-white md:items-end">
              <PhoneIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;