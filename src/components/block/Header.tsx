import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Track Order", to: "/track" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Subtle shadow / backdrop once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-100 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F7F4]/95 backdrop-blur-md shadow-[0_2px_24px_-6px_rgba(74,59,50,0.25)]"
          : "bg-[#F8F7F4]"
      }`}
    >
      {/* Thin brown accent line */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#4A3B32]/60 to-transparent" />

      {/* Main wrapper */}
      <div className="flex w-full justify-center">
        {/* Container: 90% width, centered */}
        <div className="w-[90%]">
          {/* Top bar */}
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* LOGO */}
            <Link
              to="/"
              className="group relative flex items-center"
              aria-label="MJBD Home"
            >
              <span className="text-2xl font-black tracking-[0.25em] text-[#4A3B32] transition-colors duration-300 group-hover:text-[#4A3B32]/70 sm:text-3xl">
                LOGO
              </span>
              <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-[#4A3B32] transition-all duration-500 group-hover:w-full" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `group relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 lg:px-4 ${
                      isActive
                        ? "text-[#4A3B32]"
                        : "text-[#4A3B32]/60 hover:text-[#4A3B32]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      <span
                        className={`pointer-events-none absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 bg-[#4A3B32] transition-all duration-300 ${
                          isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Link
                to="/gallery"
                className="group relative overflow-hidden rounded-full border border-[#4A3B32]/40 px-5 py-2.5 text-sm font-semibold tracking-wide text-[#4A3B32] transition-all duration-300 hover:border-[#4A3B32] hover:text-[#F8F7F4]"
              >
                <span className="relative z-10">Shop Now</span>
                <span className="absolute inset-0 -translate-x-full bg-[#4A3B32] transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-md text-[#4A3B32] transition-colors hover:text-[#4A3B32]/70 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="flex h-5 w-6 flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${
                    menuOpen ? "translate-y-2.25 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${
                    menuOpen ? "-translate-y-2.25 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel — sits above hero */}
      <div
        className={`md:hidden overflow-hidden bg-[#E5DFD5] transition-[max-height,opacity] duration-500 ease-in-out ${
          menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Same 90% centered container for alignment */}
        <div className="flex w-full justify-center">
          <nav className="flex w-[90%] flex-col gap-1 border-t border-[#4A3B32]/15 py-4">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: `${menuOpen ? i * 60 : 0}ms` }}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-base font-medium transition-all duration-300 ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  } ${
                    isActive
                      ? "text-[#4A3B32] bg-[#F8F7F4]"
                      : "text-[#4A3B32]/70 hover:bg-[#F8F7F4] hover:text-[#4A3B32]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              style={{
                transitionDelay: `${menuOpen ? NAV_LINKS.length * 60 : 0}ms`,
              }}
              className={`mt-2 rounded-full border border-[#4A3B32]/40 px-5 py-3 text-center text-sm font-semibold tracking-wide text-[#4A3B32] transition-all duration-300 hover:bg-[#4A3B32] hover:text-[#F8F7F4] ${
                menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              Shop Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}