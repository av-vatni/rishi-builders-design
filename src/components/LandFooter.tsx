import logoAsset from "@/assets/rishi-logo.png.asset.json";

const gold = "#B8934A";

export function LandFooter() {
  return (
    <footer className="bg-black full-width">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12 py-14">
        {/* Column 1: Logo + tagline */}
        <div className="flex flex-col gap-5">
          <img
            src={logoAsset.url}
            alt="Rishi Builders & Developers"
            className="h-14 w-auto object-contain bg-white rounded p-2 self-start"
          />
          <h3
            className="font-headline-lg text-xl leading-snug tracking-wide"
            style={{ color: gold }}
          >
            COME HOME TO QUALITY
          </h3>
        </div>

        {/* Column 2: Site address */}
        <div>
          <h4
            className="font-body-md text-xs font-bold tracking-[0.18em] mb-3 text-white"
          >
            SUN APEX SITE ADDRESS
          </h4>
          <p className="font-body-md text-sm leading-relaxed text-white/70">
            S. No. 123, Near Main Road,
            <br />
            Lokmanya Nagar, Sadashiv Peth,
            <br />
            Pune - 411030
          </p>
        </div>

        {/* Column 3: Rishi Developers */}
        <div>
          <h4 className="font-body-md text-xs font-bold tracking-[0.18em] mb-3 text-white">
            RISHI DEVELOPERS
          </h4>
          <p className="font-body-md text-sm leading-relaxed text-white/70">
            Rishi Corporate House, College Road,
            <br />
            Nashik, Maharashtra 422005
          </p>
        </div>

        {/* Column 4: Social links */}
        <div>
          <h4 className="font-body-md text-xs font-bold tracking-[0.18em] mb-4 text-white">
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
      </div>

      <div
        className="w-full h-[50px] flex items-center text-white font-body-md text-xs"
        style={{ backgroundColor: "#AB8C47" }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <p>© 2026 Rishi Group - All Rights Reserved.</p>
          <p>Designed &amp; Developed By Mulsetu</p>
        </div>
      </div>
    </footer>
  );
}
