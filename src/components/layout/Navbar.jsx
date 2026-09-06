import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import Button from "../ui/Button"

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-[#F7F7F8]">
      {/* Main Navbar */}
      <div className="mx-auto flex items-center justify-between px-6 py-4 md:px-[132px]">
        {/* Logo */}
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-gray-900 transition-colors hover:text-[#183A63] active:text-[#183A63]"
        >
          Diana Web
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(link.path)

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  active
                    ? "text-[#183A63] underline underline-offset-4"
                    : "text-gray-700 hover:text-[#183A63] hover:underline hover:underline-offset-4 active:text-[#183A63] active:underline active:underline-offset-4"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/appointment">
            <Button className="w-auto">
              Book a Discovery Call
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-gray-700 transition-colors hover:text-[#183A63] active:text-[#183A63] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-gray-200 bg-[#F7F7F8] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => {
              const active = isActive(link.path)

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-[#183A63] underline underline-offset-4"
                      : "text-gray-700 hover:text-[#183A63] hover:underline hover:underline-offset-4 active:text-[#183A63] active:underline active:underline-offset-4"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Mobile CTA */}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="block"
            >
              <Button className="mt-1 w-full">
                Book a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar