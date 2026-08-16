import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import rishiLogo from "../assets/rishi-logo.png.asset.json";

const navLinkClass = "transition-colors";

const SECTION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Floor Plan", href: "#floor-plan" },
  { label: "Location", href: "#location" },
];

const LAND_SECTION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLand = pathname.startsWith("/projects/land");
  const light = isLand || pathname.startsWith("/projects/sun-glory");
  const sectionLinks = isLand ? LAND_SECTION_LINKS : SECTION_LINKS;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`full-width top-0 sticky z-50 transition-all duration-300 ${
        light
          ? "bg-white/95 backdrop-blur-sm border-b border-black/10"
          : "bg-[#4a4a4a]"
      }`}
    >
      <div
        className={`flex justify-between items-center w-full px-6 md:px-container-padding max-w-full mx-auto transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Link to="/" className="flex items-center">
          <img
            src={rishiLogo.url}
            alt="Rishi Builders & Developers logo"
            className={`w-auto transition-all duration-300 bg-white rounded p-1 ${
              scrolled ? "h-12" : "h-16"
            }`}
          />
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          {light ? (
            <div className="hidden md:flex items-center gap-8 font-nav-link text-nav-link text-[#4a4a4a]">
              {sectionLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative group py-2 transition-colors hover:text-[#b08d57]"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#b08d57] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-8 font-nav-link text-nav-link text-white">
              <div className="relative group py-2">
                <div className="absolute -top-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-white"></div>
                <Link to="/" className={navLinkClass}>
                  Home
                </Link>
                <div className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-white"></div>
              </div>
              <div className="relative group py-2">
                <div className="absolute -top-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-white"></div>
                <Link to="/about" className={navLinkClass}>
                  About
                </Link>
                <div className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-white"></div>
              </div>
              <div className="relative group py-2">
                <div className="absolute -top-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-white"></div>
                <span className="flex items-center gap-1 cursor-pointer">Projects</span>
                <div className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-white"></div>
                <div className="absolute top-full left-0 hidden group-hover:block min-w-[260px] pt-4 z-50">
                  <div className="bg-white rounded-b-xl overflow-hidden shadow-xl">
                    <div className="flex flex-col">
                      <div className="px-6 py-4">
                        <div className="text-[#b08d57] font-label-caps text-xs mb-3 tracking-widest font-bold uppercase">
                          LAND PROJECTS
                        </div>
                        <div className="flex flex-col gap-3">
                          <Link
                            to="/projects/na-plots"
                            className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
                          >
                            Land
                          </Link>
                          <Link
                            to="/projects/agricultural-land"
                            className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
                          >
                            Agricultural Land
                          </Link>
                        </div>
                      </div>
                      <div className="px-6 py-4 border-t border-gray-100">
                        <div className="text-[#b08d57] font-label-caps text-xs mb-3 tracking-widest font-bold uppercase">
                          CONSTRUCTION PROJECTS
                        </div>
                        <div className="flex flex-col gap-3">
                          <Link
                            to="/projects/residential"
                            className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
                          >
                            Residential Projects
                          </Link>
                          <Link
                            to="/projects/commercial"
                            className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
                          >
                            Commercial Projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group py-2">
                <div className="absolute -top-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-white"></div>
                <Link to="/contact" className={navLinkClass}>
                  Contact
                </Link>
                <div className="absolute -bottom-1 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity bg-white"></div>
              </div>
            </div>
          )}
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-[#b08d57] text-white font-label-caps text-xs md:text-sm px-4 md:px-8 py-3 border border-[#b08d57] hover:bg-[#4a4a4a] transition-colors duration-300 uppercase tracking-widest whitespace-nowrap"
          >
            ENQUIRE NOW
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded border transition-colors ${
              light
                ? "border-black/15 text-[#4a4a4a]"
                : "border-white/30 text-white"
            }`}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden w-full border-t ${
            light
              ? "bg-white border-black/10 text-[#4a4a4a]"
              : "bg-[#4a4a4a] border-white/15 text-white"
          }`}
        >
          <div className="px-6 py-5 flex flex-col gap-4 font-nav-link text-nav-link max-h-[70vh] overflow-y-auto">
            {light ? (
              sectionLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="py-1 hover:text-[#b08d57] transition-colors"
                >
                  {item.label}
                </a>
              ))
            ) : (
              <>
                <Link to="/" onClick={() => setMenuOpen(false)} className="py-1">
                  Home
                </Link>
                <Link to="/about" onClick={() => setMenuOpen(false)} className="py-1">
                  About
                </Link>
                <div className="flex flex-col gap-3">
                  <span className="text-[#b08d57] text-xs tracking-widest font-bold uppercase">
                    Land Projects
                  </span>
                  <Link
                    to="/projects/na-plots"
                    onClick={() => setMenuOpen(false)}
                    className="pl-4 text-sm"
                  >
                    Land
                  </Link>
                  <Link
                    to="/projects/agricultural-land"
                    onClick={() => setMenuOpen(false)}
                    className="pl-4 text-sm"
                  >
                    Agricultural Land
                  </Link>
                  <span className="text-[#b08d57] text-xs tracking-widest font-bold uppercase mt-2">
                    Construction Projects
                  </span>
                  <Link
                    to="/projects/residential"
                    onClick={() => setMenuOpen(false)}
                    className="pl-4 text-sm"
                  >
                    Residential Projects
                  </Link>
                  <Link
                    to="/projects/commercial"
                    onClick={() => setMenuOpen(false)}
                    className="pl-4 text-sm"
                  >
                    Commercial Projects
                  </Link>
                </div>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="py-1">
                  Contact
                </Link>
              </>
            )}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#b08d57] text-white text-center font-label-caps text-sm px-6 py-3 uppercase tracking-widest"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
