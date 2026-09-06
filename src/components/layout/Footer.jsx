import { Link } from "react-router-dom"
import { FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { Mail, Phone, Clock } from "lucide-react"
import Button from "../ui/Button"

function Footer() {
  return (
    <footer className="bg-[#F7F7F8] px-6 py-16">
      <div className="mx-auto max-w-[1176px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-[#183A63]">
              Diana Web
            </h2>

            <p className="mt-4 max-w-sm text-base leading-relaxed text-gray-600">
              Websites built around your business, not the other way around.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#183A63] hover:text-[#183A63]"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#183A63] hover:text-[#183A63]"
              >
                <FaXTwitter size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#183A63] hover:text-[#183A63]"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-base text-gray-600 transition-colors hover:text-[#183A63]"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-base text-gray-600 transition-colors hover:text-[#183A63]"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-base text-gray-600 transition-colors hover:text-[#183A63]"
              >
                Contact
              </Link>

              <Link
                to="/appointment"
                className="text-base text-gray-600 transition-colors hover:text-[#183A63]"
              >
                Book a Call
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Let's work together
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href="mailto:hello@dianaweb.com"
                className="flex items-center gap-3 text-base text-gray-600 transition-colors hover:text-[#183A63]"
              >
                <Mail
                  size={18}
                  className="shrink-0 text-[#183A63]"
                />
                <span>hello@dianaweb.com</span>
              </a>

              <a
                href="tel:+254700000000"
                className="flex items-center gap-3 text-base text-gray-600 transition-colors hover:text-[#183A63]"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-[#183A63]"
                />
                <span>+254 700 000 000</span>
              </a>

              <div className="flex items-center gap-3">
                <Clock
                  size={18}
                  className="shrink-0 text-[#183A63]"
                />
                <span className="text-base text-gray-600">
                  Mon–Fri, 9–5
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link to="/appointment">
                <Button variant="primary">
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500">
            © 2026 Diana Web. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer