const gold = "#B8934A";

export function LandFooter() {
  return (
    <footer className="bg-black full-width">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-14">
        {/* Column 1: Branding + Addresses */}
        <div className="flex flex-col gap-7">
          <h3
            className="font-headline-lg text-2xl leading-snug tracking-wide"
            style={{ color: gold }}
          >
            COME HOME TO SPACE
          </h3>
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-3"
              style={{ color: gold }}
            >
              SITE ADDRESS
            </h4>
            <p className="font-body-md text-sm leading-relaxed text-white/70">
              S. No. 123, Near Main Road,
              <br />
              North Valley,
              <br />
              Pune - 411030
            </p>
          </div>
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-3"
              style={{ color: gold }}
            >
              RISHI DEVELOPERS
            </h4>
            <p className="font-body-md text-sm leading-relaxed text-white/70">
              Rishi Corporate House, College Road,
              <br />
              Nashik, Maharashtra 422005
            </p>
          </div>
        </div>

        {/* Column 2: Social Links + Contact */}
        <div className="flex flex-col gap-8 md:items-start">
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
              style={{ color: gold }}
            >
              SOCIAL LINKS
            </h4>
            <div className="flex gap-3">
              {["share", "photo_camera", "play_arrow", "work"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded border flex items-center justify-center transition-colors hover:bg-white/10"
                  style={{ borderColor: gold, color: gold }}
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
              style={{ color: gold }}
            >
              GET IN TOUCH
            </h4>
            <p className="font-body-md text-sm leading-relaxed text-white/70">
              Call us: +91 98765 43210
              <br />
              Email: info@rishibuilders.com
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-full h-[50px] flex items-center text-white font-body-md text-xs"
        style={{ backgroundColor: "#AB8C47" }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <p>© 2026 Rishi Group - All Rights Reserved.</p>
          <p>Designed & Developed By Mulsetu</p>
        </div>
      </div>
    </footer>
  );
}
