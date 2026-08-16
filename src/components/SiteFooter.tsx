import { Link } from "@tanstack/react-router";
import rishiLogo from "../assets/rishi-logo.png.asset.json";

export function SiteFooter() {

  return (
<footer className="bg-tertiary dark:bg-tertiary-container full-width border-t border-on-tertiary-fixed-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-container-padding py-section-gap w-full max-w-7xl mx-auto">
<div className="flex flex-col gap-6">
<img src={rishiLogo.url} alt="Rishi Builders & Developers logo" className="h-24 w-auto bg-white rounded p-2 self-start" />
<div className="flex gap-4">
<a className="w-10 h-10 bg-on-tertiary text-tertiary flex items-center justify-center rounded hover:bg-secondary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="share">share</span></a>
<a className="w-10 h-10 bg-on-tertiary text-tertiary flex items-center justify-center rounded hover:bg-secondary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="photo_camera">photo_camera</span></a>
<a className="w-10 h-10 bg-on-tertiary text-tertiary flex items-center justify-center rounded hover:bg-secondary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="play_arrow">play_arrow</span></a>
<a className="w-10 h-10 bg-on-tertiary text-tertiary flex items-center justify-center rounded hover:bg-secondary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="work">work</span></a>
</div>
</div>
<div>
<h4 className="font-headline-lg text-headline-lg text-secondary-fixed mb-6">Quick Links</h4>
<ul className="flex flex-col gap-3 font-body-md text-body-md">
<li><Link className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" to="/"><span className="material-symbols-outlined text-sm">chevron_right</span> Home</Link></li>
<li><Link className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" to="/about"><span className="material-symbols-outlined text-sm">chevron_right</span> About Us</Link></li>
<li className="group">
<Link className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" to="/projects/residential"><span className="material-symbols-outlined text-sm">chevron_right</span> Projects</Link>
<ul className="mt-3 ml-6 flex flex-col gap-2 text-sm">
<li><span className="text-secondary-fixed/70 text-xs tracking-widest font-bold uppercase">Land Projects</span></li>
<li><Link className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors" to="/projects/na-plots">Land</Link></li>
<li><Link className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors" to="/projects/agricultural-land">Agricultural Land</Link></li>
<li className="mt-2"><span className="text-secondary-fixed/70 text-xs tracking-widest font-bold uppercase">Construction Projects</span></li>
<li><Link className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors" to="/projects/residential">Residential Projects</Link></li>
<li><Link className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors" to="/projects/commercial">Commercial Projects</Link></li>
</ul>
</li>
<li><Link className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" to="/contact"><span className="material-symbols-outlined text-sm">chevron_right</span> Contact Us</Link></li>
</ul>
</div>
<div>
<h4 className="font-headline-lg text-headline-lg text-secondary-fixed mb-6">Useful Links</h4>
<ul className="flex flex-col gap-3 font-body-md text-body-md">
<li className=""><a className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span> Disclaimer</a></li>
<li className=""><a className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span> Privacy Policy</a></li>
<li className=""><a className="text-on-tertiary/70 hover:text-secondary-fixed transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span> Terms &amp; Conditions</a></li>
</ul>
</div>
<div>

<div className="flex gap-4 mb-8">
{/* Mock Certifications */}
<div className="bg-on-tertiary/10 p-2 rounded flex items-center justify-center w-24 h-12 text-secondary font-bold text-xs text-center border border-secondary/30">CREDAI PUNE</div>
<div className="bg-on-tertiary/10 p-2 rounded flex items-center justify-center w-24 h-12 text-secondary font-bold text-xs text-center border border-secondary/30">MAHA RERA</div>
</div>
<div className="grid grid-cols-2 gap-4">
{/* QR Mock 1 */}
<div className="flex items-center gap-2">
<div className="w-12 h-12 bg-on-tertiary p-1"><div className="w-full h-full bg-tertiary" style={{backgroundImage: "repeating-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), repeating-linear-gradient(45deg, #fff 25%, #000 25%, #000 75%, #fff 75%, #fff)", backgroundPosition: "0 0, 4px 4px", backgroundSize: "8px 8px"}}></div></div>
<div className="text-on-tertiary font-body-md text-xs">
                            SUN GLORY<br />
<span className="text-on-tertiary/60">PR1260002600531</span>
</div>
</div>
{/* QR Mock 2 */}
<div className="flex items-center gap-2">
<div className="w-12 h-12 bg-on-tertiary p-1"><div className="w-full h-full bg-tertiary" style={{backgroundImage: "repeating-linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), repeating-linear-gradient(45deg, #fff 25%, #000 25%, #000 75%, #fff 75%, #fff)", backgroundPosition: "0 0, 4px 4px", backgroundSize: "8px 8px"}}></div></div>
<div className="text-on-tertiary font-body-md text-xs">
                            SUN PLATINA<br />
<span className="text-on-tertiary/60">P52100080580</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-[#AB8C47] text-white font-body-md text-xs w-full h-[50px] flex items-center">
<div className="w-full px-12 flex justify-between items-center">
<p className="">Copyright © 2026 Rishi Builders &amp; Developers - All Rights Reserved.</p>
<p className="">Designed &amp; Developed By Mulsetu</p>
</div>
</div>
</footer>

  );
}
