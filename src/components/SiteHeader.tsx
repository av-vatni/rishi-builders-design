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

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const light = pathname.startsWith("/projects/sun-glory");

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
              {SECTION_LINKS.map((item) => (
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
                            NA Plots
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
            className="bg-[#b08d57] text-white font-label-caps text-sm px-6 md:px-8 py-3 border border-[#b08d57] hover:bg-[#4a4a4a] transition-colors duration-300 uppercase tracking-widest"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
