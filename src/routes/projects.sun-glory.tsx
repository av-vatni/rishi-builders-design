import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAnz1KsaHXn8dJdl2k5yVepM1QUGBA6DvTYzsyd8Bk_Qgfp-77GOcqVHAKiYQvvm_tyVxefvav_bLdrELkY7KxLeIluT7MNTQBETBNxF0ESBK-JjycHhGE0ahA9njB70NQNu9Ead7rv0OoY4y50vrxbm7hab0JevuV3dTWZaoHs76O01YDjhwy0aX9dobV8QdBsVAtNj3Ju5aMKaDxCaxoW9tyoMRATXnZ9BraLo_u3NYW270fCE5TiIg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDVQI_Wm-lyQA_TmuX68H8CoJ-Mek2d4DLEuWEnhAZSMjBJFM0UDehDMcYVhcWyShe_MCdm_wesVb8kGV9tPbMIgpR8frkg1bcD15DH7pZC_RXe0V6QtB8BBQlpAU366WX1WYXoesnpxcBAIZMZOTOhsxGq6XuAZcKzL3n_G28MA9ShALW9wUkglVI3Ve0DeKh9SaHruV2COvR1zcsp2uaRiwFQ0eacw6tQnnWhKrmxRxnPGwe5lxUOkQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzAqGFfr5lKC9KL_zJJfsG6fgMTT0CqlKp2-HlVKyTHw3T11PCRb2LjcOnbkGm5q4AqUJF3Iha5lAn10kJ4FwtXGDPAOozuixaWEI9vwqCJcxzMogAN5AVHRFVC3SbH3R9aQGwyB3nsHHMq4xU-LUj9DHYBwUC7PNjUWgj0eW_A02UhtDx3RCo2syD26v-TZy2w_JokAt9q3usrVK5cj6lZC3hrY5em0kjcuPCcxG0qjHM3HXwQ-kvww"
];

const AMENITIES = [
  {
    "alt": "Infinity Pool",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuA5_yyo4SRoEtixgElHuRePOIgejadPBZM3BiJQ3EW_LKkQqq_GU84nPFc3nbuq_pCYDTsGwuHvqC78ozcwir7rNgTD8EClz-imbfhAftOMoSdIyGSPyJ9-Gsth84gq4nF2cKhQ05LANR7a_-9ar6Y87Oudda_LRVYt3NqFJxMai4Ft9s9zhFjWC1fcz4wsI9XrrWp2VCt5dZA41MWgSBejJf1ArRNHjo3fcoCb1Jw4y2Aha0w2Q82ulg",
    "kicker": "WORLD-CLASS AMENITIES",
    "title": "A Lifestyle of Unmatched Elegance",
    "body": "Immerse yourself in tranquility with our temperature-controlled infinity pool offering panoramic views of the city skyline. A perfect retreat after a long day to rejuvenate your senses."
  },
  {
    "alt": "State of the art Gym",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuAYym5HO-SsZlC9hy3lbMaNtylTNPjBCO3ZDL4gscrd74uthtZEqW14d59NhP692On5qN5qOM6EBlm12P0sv_MtLQ9-2Ks1MaVj4R8U7lEhbubJUsz3XvhDPJX7UMxuMTlmD9F5AaH_NBufEkU7q3gwGEwSP8iTdN51bj2vccxI90A7nEBbPrMNbW3sqwce-j2sssCNVPaoScE42fWsLf8JkHKQv06GTu6evA6ma-Q5E9w77Tjwu1nUDQ",
    "kicker": "HEALTH & WELLNESS",
    "title": "State-of-the-Art Fitness",
    "body": "Achieve your fitness goals in our fully equipped gymnasium featuring the latest cardio and strength training equipment, along with dedicated spaces for yoga and meditation."
  },
  {
    "alt": "Clubhouse",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuD8EojDvywpQZaH_ZeK23hbKsKfHqBjlgKKwZbLi4ZLcozUBjieJDnNQMcenIZ7J0FKEjKNt08LsMFaRCj-H2RboiPNiS9vqnrv3kpNSrHezUV7ndYlRg-vjw4XhZz-FSysh2jnKn1XX4PzVW-P9fmVFnMIZjE-k2QQlXCLp_pyaMQhqe6pUL7azcJzc8Olys2Omf__5766idhMvAt8weAhBsUJgOlJVGrq8706KVUSX7w88v7RPoA0Kw",
    "kicker": "SOCIAL SPACES",
    "title": "Exclusive Clubhouse",
    "body": "Host gatherings or simply unwind in our elegantly designed clubhouse. Featuring a luxurious lounge, reading room, and private dining areas for your intimate celebrations."
  }
];

const GALLERY = [
  {
    "alt": "Living Room",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Z08Zzb7rYH7w18lCcLUdTmJLkchoiXZBPhprKhzO6jgIIbX_5Wo751dEUjeKvL7-yFlGkOK3cBACP48wWAbI7lj7yOoNuFRUcyf8ypdIw3wsGFC5f9YIXNJCVW661G2r34-6zrVR57I_vaaFRYBCnVNoFVf42utJSXuUUxYN617fKbn_OTZDAO1__CbU6WIoPNE75OX-WMi8OYkYVlJHDNVuFVQjINwLvQDHkptlsPB2YvT-RFAkTA"
  },
  {
    "alt": "Exterior View",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuDDJk6ePrMdWyhwHeuvBTGO_geuNgNCrVLEtNA-A6n0n0yIk5Iykea_T_PF2PvMaVasbQv1ZHRKXtUVQg0I-1EnH1kzQ8GPBtysoLZJY_-7DeK3bAcjbQDckKvqmVZpx76BpcqUN5v44rR-i46UDh0GKD9iX1emaM9Vr3LwtfmJbX7fKhzaxKYkT8B0_XyQW9XNbZweitAUrajsPEsRRMFZCPplz_eWsXnmLh78Mb0XsnhOpOiVqnobD5aFPBVzqvt3G80"
  },
  {
    "alt": "Atrium Lobby",
    "src": "https://lh3.googleusercontent.com/aida-public/AB6AXuD1qnKxmswsX1lJOHcJdqU5s9OOO1UeFNUvPcOIwZLPsHRYl8EVpxeOoOAsKMtY2VVp5E2n2J9u4dysI0F34ey0WCS8U6yh-sraockbuobEVbWQh0a7x495QE2vKeH7W0sGWeg6HKiVXNSf7BQsW9jghX-VVV4mfxmdHENBQoo73CDRZW2H7Aag2ZlpGt1hVPfQMcf0vEq1KzSrHYZicO7a4nUTiLaAHkjHXk_pSKWv7dnCFus4vZaelA"
  }
];



export const Route = createFileRoute("/projects/sun-glory")({
  head: () => ({
    meta: [
      { title: "Sun Glory, Lokmanya Nagar — Rishi Builders" },
      { name: "description", content: "Premium 3 BHK residences at Sun Glory, Sadashiv Peth, Pune by Rishi Builders & Developers." },
      { property: "og:title", content: "Sun Glory, Lokmanya Nagar — Rishi Builders" },
      { property: "og:description", content: "Premium 3 BHK residences at Sun Glory, Sadashiv Peth, Pune by Rishi Builders & Developers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SunGloryPage,
});

function SunGloryPage() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [amenIdx, setAmenIdx] = useState(0);
  const [galIdx, setGalIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
{/* TopNavBar */}

<main>
{/* Hero Section */}
<section className="relative w-full h-screen min-h-[600px] flex items-center justify-start overflow-hidden hero-carousel-container" id="hero">
<div className="absolute inset-0 z-0">
<div className="relative w-full h-full">
{HERO_IMAGES.map((src, i) => (
  <img key={src} alt="Sun Glory" className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${heroIdx === i ? "opacity-100" : "opacity-0"}`} src={src} />
))}
<div className="absolute inset-0 bg-black/40"></div>
</div>
</div>
<div className="relative z-10 px-6 md:px-container-padding w-full max-w-7xl mx-auto text-on-primary">
</div>
{/* Carousel Controls (Decorative) */}
<button className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-on-primary hover:text-secondary transition-colors hero-prev" onClick={() => setHeroIdx((i) => (i + HERO_IMAGES.length - 1) % HERO_IMAGES.length)}>
<span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: "'wght' 200"}}>chevron_left</span>
</button>
<button className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-on-primary hover:text-secondary transition-colors hero-next" onClick={() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length)}>
<span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: "'wght' 200"}}>chevron_right</span>
</button>
</section>
{/* About Section (Overlapping Panel) */}
<section className="bg-background" id="about">
{/* First Editorial Section */}
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-section-gap">
<div className="h-[600px] overflow-hidden slide-in-left visible">
<img alt="Luxury Project Exterior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvnedKxHhXdr_UrnYhLW6qQIk-nwjMwPNam-o5ScHCz7Wasug3VWBdPbSJThVma8UUphjyGGQ7RhT2OBDcb8L5Yvc4UORj30MlWm7BabpTV8C6FOtvwat3o9_T_Hx8rLDlUh3tJX70H093FBRJBrMcgQnmqJAIQQ2kDq8szHWgqBzMtmHowbPfdHPGaN9dw38BZg6WkzMcBaBOcccTbhCpV0qUeg_C1n7Hs8oi3uvx1S1uH-jtvnCW8jhfEeWvaYv2rMI" />
</div>
<div className="p-12 lg:p-24 flex flex-col justify-center slide-in-right visible">
<h2 className="font-headline-xl text-headline-xl text-primary mb-8">Experience True Luxury at Lokmanya Nagar</h2>
<div className="w-16 h-[1px] bg-secondary mb-8"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        Experience the pinnacle of city living with premium 3 BHK residences at Sun Glory, located in Lokmanya Nagar, Sadashiv Peth. Enjoy a rare blend of low-density exclusivity and unmatched, seamless connectivity to Laxmi Road, Swargate, and central business zones.
      </p>
</div>
</div>
{/* Second Editorial Section */}
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center bg-surface-container-low"><div className="h-[600px] overflow-hidden lg:order-2">
<img alt="Architectural Detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbnU9LOU2EF4KbwEziSrLn1xjtteGn0BY6vOIH5wyowtxu8F019Fxxm-oZiFaqB2Wc-L6q6BaREb9EWp5omVjZnZw06APTfoIht19OklxNOdE19042CcP1XdV01ObrRcBhAsiEHQWFgnCy5l2ypVSp2cDn5Qf3C_Z-FvH1bvUIumPqmnnpzuos99WXcW7BluD9fKWyPPQazZSmSrse33Ie3LplwaBn60UTzh9lHQKXSmZ4l5e8kEo6b1SKTHHmWMnHatTTdb0RSlEQRIk" />
</div><div className="p-12 lg:p-24 flex flex-col justify-center lg:order-1">
<h2 className="font-headline-xl text-headline-xl text-primary mb-8">Architectural Excellence</h2>
<div className="w-16 h-[1px] bg-secondary mb-8"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
        Our design philosophy merges timeless elegance with modern functionality. Every structure is a testament to our commitment to quality, featuring sustainable materials and innovative spatial planning that redefines urban living for the discerning homeowner.
      </p>
</div></div>
</section>
{/* Amenities Section */}
<section className="relative max-w-[1920px] mx-auto bg-surface-container-low min-h-[700px] flex flex-col" id="amenities"><div className="text-center pt-24 pb-12 fade-in visible">
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">Discover</p>
<h2 className="font-headline-xl text-headline-xl text-primary mb-4 uppercase tracking-widest">AMENITIES</h2>
<div className="w-24 h-[1px] bg-secondary mx-auto"></div>
</div>
<div className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-stretch">
{/* Image Carousel */}
<div className="relative h-[400px] lg:h-auto overflow-hidden group amenities-carousel">
{AMENITIES.map((a, i) => (
  <div key={a.src} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${amenIdx === i ? "opacity-100" : "opacity-0"}`}>
    <img alt={a.alt} className="w-full h-full object-cover" src={a.src} />
  </div>
))}
{/* Arrows */}
<button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all duration-300 z-10 amenities-prev" onClick={() => setAmenIdx((i) => (i + AMENITIES.length - 1) % AMENITIES.length)}>
<span className="material-symbols-outlined text-3xl">chevron_left</span>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all duration-300 z-10 amenities-next" onClick={() => setAmenIdx((i) => (i + 1) % AMENITIES.length)}>
<span className="material-symbols-outlined text-3xl">chevron_right</span>
</button>
</div>
{/* Text Content */}
<div className="relative p-12 lg:p-24 flex flex-col justify-center bg-surface-container-low min-h-[500px]">
{AMENITIES.map((a, i) => (
  <div key={a.title} className={`absolute inset-0 p-12 lg:p-24 flex flex-col justify-center transition-all duration-700 ease-in-out ${amenIdx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
    <p className="font-label-caps text-[14px] font-semibold tracking-[0.15em] mb-4" style={{color: "#AB8C47"}}>{a.kicker}</p>
    <h3 className="font-headline-xl text-4xl lg:text-5xl text-primary mb-6 leading-tight">{a.title}</h3>
    <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">{a.body}</p>
  </div>
))}
{/* Pagination Dots */}
<div className="absolute bottom-8 left-12 lg:left-24 flex space-x-3 z-10">
{AMENITIES.map((a, i) => (
  <button key={a.src} aria-label={`Show ${a.title}`} onClick={() => setAmenIdx(i)} className="w-3 h-3 rounded-full transition-colors duration-300" style={{backgroundColor: amenIdx === i ? "#AB8C47" : "var(--color-outline-variant, #cac4d0)"}}></button>
))}
</div>
</div>
</div>
</section>
<section className="py-section-gap bg-surface overflow-hidden" id="gallery">
<div className="text-center mb-12">
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">Visuals</p>
<h2 className="font-headline-xl text-headline-xl text-primary mb-4 uppercase tracking-widest">GALLERY</h2>
<div className="w-24 h-[1px] bg-secondary mx-auto"></div>
</div>
<div className="relative max-w-[1920px] mx-auto px-4 md:px-0">
<div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden h-[400px] md:h-[600px] relative gallery-carousel">
{GALLERY.map((g, i) => {
  const rel = (i - galIdx + GALLERY.length) % GALLERY.length;
  const cls = rel === 0
    ? "w-[80%] md:w-[50%] translate-x-0 opacity-100 scale-100 z-10"
    : rel === GALLERY.length - 1
      ? "w-[60%] md:w-[40%] -translate-x-[60%] md:-translate-x-[70%] opacity-40 scale-90 z-0"
      : "w-[60%] md:w-[40%] translate-x-[60%] md:translate-x-[70%] opacity-40 scale-90 z-0";
  return (
    <div key={g.src} className={`absolute transition-all duration-700 transform ${cls}`}>
      <img alt={g.alt} className="w-full h-full object-cover rounded-xl shadow-2xl" src={g.src} />
      {rel === 0 && (
        <div className="absolute bottom-8 left-8 bg-black/40 backdrop-blur-md px-6 py-2 border-l-2 border-[#AB8C47]">
          <p className="text-white font-label-caps text-sm tracking-widest uppercase">{g.alt}</p>
        </div>
      )}
    </div>
  );
})}
</div>
<button className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-300 gallery-prev" onClick={() => setGalIdx((i) => (i + GALLERY.length - 1) % GALLERY.length)}>
<span className="material-symbols-outlined text-3xl">chevron_left</span>
</button>
<button className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-300 gallery-next" onClick={() => setGalIdx((i) => (i + 1) % GALLERY.length)}>
<span className="material-symbols-outlined text-3xl">chevron_right</span>
</button>
</div>
</section>
<section className="py-section-gap bg-background overflow-hidden" id="floor-plan">
<div className="text-center mb-12">
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">Architectural Layout</p>
<h2 className="font-headline-xl text-headline-xl text-primary mb-4 uppercase tracking-widest">FLOOR PLAN</h2>
<div className="w-24 h-[1px] bg-secondary mx-auto"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-container-padding">
{/* Tabs */}
<div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 px-6">
<button className="px-4 md:px-8 py-3 border border-[#AB8C47] bg-[#AB8C47] text-white font-label-caps text-sm tracking-widest transition-all">3 BHK LUXURY</button>
<button className="px-4 md:px-8 py-3 border border-outline-variant/30 text-on-surface-variant font-label-caps text-sm tracking-widest hover:border-[#AB8C47] transition-all">2.5 BHK PREMIUM</button>
<button className="px-4 md:px-8 py-3 border border-outline-variant/30 text-on-surface-variant font-label-caps text-sm tracking-widest hover:border-[#AB8C47] transition-all">3 BHK XXL</button>
</div>
{/* Content Split */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
{/* Left: Image */}
<div className="bg-white p-4 shadow-sm border border-outline-variant/10">
<img alt="3 BHK Luxury Floor Plan" className="w-full h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHAfs2A-SHCMw0LYAKif6PvPi1vjU1t0Ok15RbprNBgb4Wz--M5aM3-RXmhl2zkpr7rujkqng877aYuStoCpafXAERH_hQK-pSRCAfPQZbDhJMMn6A9kFtzwBBObWLV3eCk2ZWQkGcTAI0Pefm1lEptCo1m8FA5MNB_PQq0JawU15bOw0wwtMpNV2rrOFCmcdoqqEDe-F8lR1JKuYZLTYjjlbBXg0YzD-LKsclVhagPmNLwLUUk3DNyw" />
</div>
{/* Right: Details */}
<div className="flex flex-col">
<h3 className="font-headline-lg text-headline-lg text-primary mb-4">The Grand Residences</h3>
<p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">Designed for the modern family, our 3 BHK Luxury units offer expansive living areas with double-height ceilings and premium finishes that define sophisticated urban living.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">air</span>
<span className="font-label-caps text-xs uppercase tracking-wider">Cross Ventilation</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">temple_hindu</span>
<span className="font-label-caps text-xs uppercase tracking-wider">Vaastu Compliant</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">balcony</span>
<span className="font-label-caps text-xs uppercase tracking-wider">Private Balconies</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">smart_home</span>
<span className="font-label-caps text-xs uppercase tracking-wider">Smart Home Ready</span>
</div>
</div>
<div className="bg-surface-container-low p-6 border-l-4 border-[#AB8C47] mb-8">
<p className="font-label-caps text-xs text-secondary uppercase mb-1">Total Carpet Area</p>
<p className="font-headline-lg text-3xl text-primary">1,450 Sq. Ft.</p>
</div>
<button className="bg-[#AB8C47] text-white font-label-caps text-sm px-6 md:px-10 py-4 hover:bg-[#9A7B4C] transition-colors duration-300 uppercase tracking-widest w-fit">
REQUEST BROCHURE
</button>
</div>
</div>
</div>
</section><section className="py-section-gap bg-background overflow-hidden" id="location"><div className="max-w-7xl mx-auto px-6 md:px-container-padding"><div className="text-center mb-16"><p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">DISCOVER THE NEIGHBORHOOD</p><h2 className="font-headline-xl text-headline-xl text-primary mb-4">Strategic Location</h2><div className="w-24 h-[1px] bg-secondary mx-auto"></div></div><div className="mb-16 rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20"><img alt="Strategic Location Map" className="w-full h-[280px] md:h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLsbpawNQb92x8dlWbalPtyTyteh6ksFWQTLFaQY96S9nUmqo8D3hNiRs9CrArvp4bu4OPwQQSDPEH7GdNmyiL1duLXOgtUEA8iA9YjaJ5Nrhb4geG5YcQsWYIiUUBFm98wrdbcWVocw6onoLbxQes-FLTXjJDcyBNY-SDMuSoB37300AZOk_jnGcMMFGQUpb39R6c5KjhJy7LMOZ_YwvnO4991pZ3JRFnKJ98KPjwY8nm3VdgcIjJU3_efu" /></div></div></section>
{/* Location Section */}
</main>
{/* Footer */}




<div id="enquire-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300">
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="modal-backdrop"></div>
    <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl border border-[#AB8C47]/30 overflow-hidden transform transition-transform duration-300 scale-95" id="modal-container">
        <button className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors" id="close-modal">
            <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        <div className="p-8 md:p-12 text-center">
            <p className="font-label-caps text-xs text-secondary tracking-widest uppercase mb-2">Your ideal space is just a step away</p>
            <h2 className="font-headline-xl text-3xl md:text-4xl text-primary uppercase mb-4">LET'S GET STARTED!</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-12 bg-[#AB8C47]"></div>
                <div className="h-1 w-1 rounded-full bg-outline-variant"></div>
                <div className="h-px w-12 bg-[#AB8C47]"></div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-8">Brochure and details will be sent on your mobile number</p>
            <form className="space-y-4 text-left">
                <div>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-outline-variant/30 rounded focus:border-[#AB8C47] focus:ring-0 transition-colors font-body-md" />
                </div>
                <div>
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-outline-variant/30 rounded focus:border-[#AB8C47] focus:ring-0 transition-colors font-body-md" />
                </div>
                <div>
                    <input type="tel" placeholder="Phone" className="w-full px-4 py-3 border border-outline-variant/30 rounded focus:border-[#AB8C47] focus:ring-0 transition-colors font-body-md" />
                </div>
                <div>
                    <select className="w-full px-4 py-3 border border-outline-variant/30 rounded focus:border-[#AB8C47] focus:ring-0 transition-colors font-body-md text-on-surface-variant">
                        <option value="">Select your dream project</option>
                        <option value="sun-glory">Sun Glory - Lokmanya Nagar</option>
                        <option value="other">Other Projects</option>
                    </select>
                </div>
                <p className="text-[10px] text-on-surface-variant leading-tight mt-4">
                    By clicking submit, I agree to be contacted by Rishi Builders and their partners via call, SMS, or WhatsApp regarding my enquiry.
                </p>
                <div className="pt-4 flex justify-center">
                    <button type="submit" className="bg-[#AB8C47] text-white font-label-caps text-sm px-12 py-4 hover:bg-[#9A7B4C] transition-colors duration-300 uppercase tracking-widest w-full md:w-fit">
                        SUBMIT ENQUIRY
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
  );
}
