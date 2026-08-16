const PROJECT_BY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAnz1KsaHXn8dJdl2k5yVepM1QUGBA6DvTYzsyd8Bk_Qgfp-77GOcqVHAKiYQvvm_tyVxefvav_bLdrELkY7KxLeIluT7MNTQBETBNxF0ESBK-JjycHhGE0ahA9njB70NQNu9Ead7rv0OoY4y50vrxbm7hab0JevuV3dTWZaoHs76O01YDjhwy0aX9dobV8QdBsVAtNj3Ju5aMKaDxCaxoW9tyoMRATXnZ9BraLo_u3NYW270fCE5TiIg";

const QR_IMG =
  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&data=P52100055156";

const gold = "#B8934A";

export function ProjectFooter() {
  return (
    <footer className="bg-black full-width">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12 py-14">
        {/* Column 1 */}
        <div className="flex flex-col gap-7">
          <h3
            className="font-headline-lg text-2xl leading-snug tracking-wide"
            style={{ color: gold }}
          >
            COME HOME TO QUALITY
          </h3>
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-3"
              style={{ color: gold }}
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

        {/* Column 2 */}
        <div className="flex flex-col gap-8">
          <div>
            <h4
              className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
              style={{ color: gold }}
            >
              DOWNLOADS
            </h4>
            <ul className="flex flex-col gap-3 font-body-md text-sm">
              {["RERA Certificate", "EC Certificate", "Six monthly compliance"].map(
                (label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
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
        </div>

        {/* Column 3 */}
        <div>
          <h4
            className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
            style={{ color: gold }}
          >
            PROJECT BY
          </h4>
          <img
            src={PROJECT_BY_IMG}
            alt="Rishi Builders project"
            className="w-24 h-16 object-cover grayscale mb-6"
            loading="lazy"
          />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-white/60">
              <span className="material-symbols-outlined text-lg">handshake</span>
            </div>
            <span className="font-body-md text-xs tracking-[0.15em] text-white/80">
              JV PARTNER
            </span>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h4
            className="font-body-md text-xs font-bold tracking-[0.18em] mb-4"
            style={{ color: gold }}
          >
            MAHA RERA
          </h4>
          <p className="font-body-md text-sm text-white/70 mb-5">
            Registration No: P52100055156
          </p>
          <img
            src={QR_IMG}
            alt="MahaRERA registration QR code"
            className="w-20 h-20 bg-white p-1"
            loading="lazy"
          />
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
