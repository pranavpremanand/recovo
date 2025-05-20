import { categoryLinks } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={250}
              height={60}
              priority
              className="mb-4"
            />
            <p className="text-gray-300 mb-4 max-w-sm">
              Honest reviews and recommendations for the products that matter
              most. We research, test, and review products to help you make
              better decisions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:justify-self-end">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categoryLinks.map(({ name, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/category/${slug}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          {/* <div className="lg:justify-self-end">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Affiliate Disclaimer */}
        <div className="mb-8 text-sm text-gray-400">
          <h4 className="font-semibold mb-2">Affiliate Disclosure</h4>
          <p>
            This site contains affiliate links. This means if you click on a
            link and make a purchase, we may receive a small commission at no
            extra cost to you. As an Amazon Associate we earn from qualifying
            purchases. The opinions expressed here are our own and we only
            recommend products we genuinely believe in.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Recovo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
