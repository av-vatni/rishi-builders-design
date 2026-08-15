import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navLinkClass = "transition-colors";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="bg-[#4a4a4a] full-width top-0 sticky z-50 transition-all duration-300">
      <div
        className={`flex justify-between items-center w-full px-6 md:px-container-padding max-w-full mx-auto transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Link to="/" className="flex items-center">
          <div className="font-headline-lg text-headline-lg font-bold text-white leading-tight">
            <span className="block text-2xl tracking-tighter">RISHI</span>
            <span className="block text-sm tracking-[0.3em] font-light -mt-1">BUILDERS</span>
            <div className="h-px bg-white/30 w-full mt-1"></div>
            <span className="block text-[10px] tracking-[0.1em] font-light">
              COME HOME TO QUALITY
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 font-nav-link text-nav-link text-white">
            <div className="relative group py-2">
              <div className="absolute -top-1 left-0 right-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Link to="/" className={navLinkClass}>
                Home
              </Link>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group py-2">
              <div className="absolute -top-1 left-0 right-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Link to="/about" className={navLinkClass}>
                About
              </Link>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group py-2">
              <div className="absolute -top-1 left-0 right-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="flex items-center gap-1 cursor-pointer">Projects</span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-full left-0 hidden group-hover:block min-w-[260px] bg-white rounded-b-xl z-50 mt-2 overflow-hidden shadow-xl">
                <div className="flex flex-col">
                  <Link
                    to="/projects/residential"
                    className="px-6 py-4 text-on-surface hover:bg-surface-container-low transition-colors border-b border-gray-100 uppercase font-bold text-xs tracking-widest"
                  >
                    All Projects
                  </Link>
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
            <div className="relative group py-2">
              <div className="absolute -top-1 left-0 right-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Link to="/contact" className={navLinkClass}>
                Contact
              </Link>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
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
