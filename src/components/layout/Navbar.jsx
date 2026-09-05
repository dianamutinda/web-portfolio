
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../ui/Button"

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-[#F7F7F8]">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-gray-900"
        >
          Diana Web
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#183A63]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button className="hidden md:inline-flex">
          Book a Discovery Call
        </Button>

        <button
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-[#F7F7F8] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700"
              >
                {link.label}
              </Link>
            ))}

            <Button className="mt-2 w-full">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
