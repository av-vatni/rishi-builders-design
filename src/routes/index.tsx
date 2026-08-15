import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rishi Builders & Developers | Premium Homes in Pune" },
      { name: "description", content: "Rishi Builders & Developers — premium residential, commercial and land projects across Pune. Come home to quality." },
      { property: "og:title", content: "Rishi Builders & Developers | Premium Homes in Pune" },
      { property: "og:description", content: "Rishi Builders & Developers — premium residential, commercial and land projects across Pune. Come home to quality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [slide, setSlide] = useState(2);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % 4), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
{/* TopNavBar */}


{/* Hero Carousel */}
<header className="relative w-full h-screen bg-black" id="hero-carousel">
{/* Slides Container */}
<div className="relative w-full h-full" id="carousel-slides">
{/* Slide 1 */}
<div className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUiejDFEDr1VUzesaVwXceUA2B2iU-P2C7FUpNYlRmB3Y6hA-opAqPT6GCbHuaFBluG5NqEbMpLOrHoAfSmKHP544PRcrLDFzb_M8bdpfWiSm3WySCf88I9oBFBvfPJJX9m5g6OX3X6vajiqLZjZNN9P0RWvT0h89AYL3vU3HfYMA-fJvJ81ZrRe_vM4KCMiAoMEvo3lEHq-A8_CMbc97r5cNkJ4tFisPVoC7As5eEtOuccR3qfllc0qkOr5Ela1RBHMux38vYXxOrmo4" />
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
<div className="relative z-20 h-full flex items-center pl-8 md:pl-24 pr-6 md:pr-container-padding">
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100">
<h2 className="font-display-lg text-display-lg text-white mb-2 leading-tight drop-shadow-lg">Sun Glory<br />Lokmanya Nagar</h2>
<p className="font-label-caps text-secondary-fixed mb-4 tracking-widest uppercase">Sadashiv Peth</p>
<p className="font-body-lg text-white/90 mb-8">Premium 3 BHK Residences</p>
<button className="bg-white text-primary font-label-caps text-sm px-12 py-4 hover:bg-secondary hover:text-white transition-colors uppercase tracking-widest">KNOW MORE</button>
</div>
</div>
</div>
</div>
{/* Slide 2 */}
<div className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKMKYv2_Bju6WEO85GdUqyFximBSw66a3ot2IDVnFDsVfmoXn-UM7mEpVh5olcMAh0Hy7N5yUQ7LSyYyCpK5Xocz3c786jBS3flQ_jpvEjEDWCdZTLtC82Y1gcENzwyldR21uMm91B00Qj98fvur8LT1o0RCOl8L2QqebOUueiA5vU89PHBHfc8X4zzMQXy1dlSyTGz4AlnA6NHloMcahwysZJJcsHCVtGH9zAMll8xpFBbgafoXRpRPtHbaios3tnPR-wJEbLQssjJeg" />
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
<div className="relative z-20 h-full flex items-center pl-8 md:pl-24 pr-6 md:pr-container-padding">
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100">
<h2 className="font-display-lg text-display-lg text-white mb-2 leading-tight drop-shadow-lg">Sun Crest<br />Dhayari</h2>
<p className="font-label-caps text-secondary-fixed mb-4 tracking-widest uppercase">Pune</p>
<p className="font-body-lg text-white/90 mb-8">2 BHK Premium Homes</p>
<button className="bg-white text-primary font-label-caps text-sm px-12 py-4 hover:bg-secondary hover:text-white transition-colors uppercase tracking-widest">KNOW MORE</button>
</div>
</div>
</div>
</div>
{/* Slide 3 */}
<div className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide === 2 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIrwz9DwzR7kL4pJ_NZV7fH1TQkqYyoz1g4_DHexfR8AT2Fh8X_8jUp9iF_iet4pSd7oy8nIWrUMg4cqLEXsTAv643mRRNKUh346W8168a5TIE-UvrBrkyg8bh3ioaBeqJ35l_Gg5Lr2G7omNCPgw47gYmuO_oZhCL38FCoptwqctzJZs_wRuEYG_IqkdpGvYjs-M0kmjq2izd3lLdMFirfibocY1-1WbioCiAsI3G8TrxZQHSpI-5MsczalW-rThIrH44z6LIMViZfo0" />
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
<div className="relative z-20 h-full flex items-center pl-8 md:pl-24 pr-6 md:pr-container-padding">
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100 ml-12">
<h2 className="font-display-lg text-display-lg text-white mb-2 leading-tight drop-shadow-lg">Sun Regalia<br />Sinhagad Road</h2>
<p className="font-label-caps text-secondary-fixed mb-4 tracking-widest uppercase">Pune</p>
<p className="font-body-lg text-white/90 mb-8">Elevate your lifestyle</p>
<button className="bg-white text-primary font-label-caps text-sm px-12 py-4 hover:bg-secondary hover:text-white transition-colors uppercase tracking-widest">KNOW MORE</button>
</div>
</div>
</div>
</div>
{/* Slide 4 */}
<div className={`carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide === 3 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
<img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbeAM4ebSEPFrq_zxsq2wZ1IItU3J0AOpaYSAV4IJYxdzP0ACd7Rwhi_sLdAQixUIktUSLjP3Q70k_8eMYvJZUu7sX8uau7pcBfYF6R2q5fD5ETPdecg0EsgLA_p7mc_RS1nhgS63YIuxhhKpUNOGXmI9eR7G5nhzakfIml7MtokHa7WEfJeyPQJHdiKAn_2XySg-cJ9-IgzLdqSnsxgOqVXA6IAircaTMXanZvLtB1SHqyUSXhxES-mnLmA93CfambYjJuAOWU_zg-Ww" />
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
<div className="relative z-20 h-full flex items-center pl-8 md:pl-24 pr-6 md:pr-container-padding">
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100">
<h2 className="font-display-lg text-display-lg text-white mb-2 leading-tight drop-shadow-lg">Sun Crest<br />Dhayari</h2>
<p className="font-label-caps text-secondary-fixed mb-4 tracking-widest uppercase">Pune</p>
<p className="font-body-lg text-white/90 mb-8">2 BHK Premium Homes</p>
<button className="bg-white text-primary font-label-caps text-sm px-12 py-4 hover:bg-secondary hover:text-white transition-colors uppercase tracking-widest">KNOW MORE</button>
</div>
</div>
</div>
</div>
</div>
{/* Controls */}
<button className="absolute left-8 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors" onClick={() => setSlide((s) => (s + 3) % 4)}>
<span className="material-symbols-outlined text-6xl font-light">chevron_left</span>
</button>
<button className="absolute right-8 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors" onClick={() => setSlide((s) => (s + 1) % 4)}>
<span className="material-symbols-outlined text-6xl font-light">chevron_right</span>
</button>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
{[0, 1, 2, 3].map((i) => (
  <button
    key={i}
    aria-label={`Go to slide ${i + 1}`}
    onClick={() => setSlide(i)}
    className={`h-2 rounded-full transition-all duration-300 ${slide === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
  />
))}
</div>
</header>
{/* Overlapping Block */}
<section className="py-section-gap px-6 md:px-container-padding pb-20 pb-section-gap">
<div className="max-w-7xl mx-auto relative">
<div className="relative">
{/* Large Architectural Image on the Left */}
<div className="w-full md:w-[60%] h-[600px] relative z-0">
<img alt="Sun Glory Lokmanya Nagar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_OxvGXTsXeLEmJ_VI5B8cZ7r3iSq79zDn0DGJOEbJrw2aNi9iQZsjjMDUi-XoKp5FCi4zLSNM3RD2Efc_ZrTEm4Pa8y8aNxuLKLMGBXYnIkZ5GbKMlxRK2q1Ozx0YMexvqoScywCva9No6HrkQ1qCVJDFX9cZe54koVCU2oSjgY8m_SZLqPjf9XH8dNvqPtFAcpUM1yYQvN0GUDGMezsfsJg2QLveRds9Vsu94MRlJiiDPQCA3YzV3IaB9ZmIX4Gfp0b2014BIP-cVZU" />
</div>
{/* Overlapping Information Panel on the Right */}
<div className="absolute top-1/2 -translate-y-1/2 right-0 w-full md:w-[48%] bg-white p-12 shadow-xl z-10">
<div className="mb-6">
<h2 className="font-headline-xl text-headline-xl text-primary uppercase tracking-wide mb-4">SUN GLORY LOKMANYA NAGAR</h2>
<div className="flex items-center gap-2">
<div className="w-8 h-px bg-primary"></div>
<div className="w-24 h-px bg-[#AB8C47]"></div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
    Experience the pinnacle of city living with premium 3 BHK residences at Sun Glory, <strong>located in Lokmanya Nagar, Sadashiv Peth</strong>. Enjoy a rare blend of low-density exclusivity and unmatched, seamless connectivity to Laxmi Road, Swargate, and central business zones.
  </p>
<button className="bg-[#AB8C47] text-white font-label-caps text-sm px-12 py-4 hover:bg-[#8A7139] transition-colors uppercase tracking-widest">
    KNOW MORE
  </button>
</div>
</div>
</div>
</section>
{/* Featured Projects */}
<section className="py-section-gap px-6 md:px-container-padding bg-surface-container-low">
<div className="max-w-7xl mx-auto text-center mb-16">
<div className="flex items-center justify-center gap-4 mb-4">
<div className="w-12 h-px bg-secondary"></div>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-widest">OUR FEATURED PROPERTIES</h2>
<div className="w-12 h-px bg-secondary"></div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto">At Rishi Builders, we redefine modern living with thoughtfully designed residential and commercial spaces. Our featured projects showcase a perfect blend of luxury, innovation, and sustainability.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
<div className="relative group cursor-pointer pt-4 pb-20">
<div className="w-full h-[400px] rounded-2xl overflow-hidden relative z-0">
<img alt="Sun Garnet" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcRSWE4H8JDKcFgOjzFClloKapPaYDubyup1JqKPT32tlnNnfODfij4oUuYy13pgXdFViNWpM7tkXRguYOxKiOEF_4a9HMTK3581fH2NUYuYmJla7-LVo8CIaiK2Fr6bfoPXJvfdwxP2zkY0WjE2o24E4sqmq5VTfUEfyd941W3Sd5az0ST4Lsz5_wBpu5dXC9KGDKleNr3jWMokW6Y6TF2VTh55NjqL3kLqFO6FEtJndwTFsm2mp8sfUwXzNJm6tRpRMErlsGjKUHQ7E" />
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-[#5B5B5B] flex flex-col items-center text-center z-10 transition-all duration-[400ms] ease-out justify-end overflow-hidden h-[100px] group-hover:h-[220px] shadow-lg group-hover:h-[240px]">
<div className="p-6 flex flex-col items-center justify-end w-full h-full">
<h3 className="font-headline-lg text-2xl text-white mb-2 leading-tight">Sun Garnet<br /><span className="text-lg">Keshav Nagar</span></h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-0 group-hover:h-auto group-hover:mt-2 overflow-hidden flex flex-col items-center w-full">
<p className="text-white/90 text-sm mb-4">Premium residential building featuring a sophisticated facade with a mix of glass and solid panels.</p>
<button className="bg-[#AB8C47] text-white font-label-caps text-xs px-6 py-3 uppercase tracking-widest hover:bg-[#8A7139] transition-colors">EXPLORE MORE</button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200 mt-4">
<button className="bg-[#F0F5FB] text-[#AB8C47] font-label-caps text-xs px-8 py-3 uppercase tracking-widest font-bold border-none">EXPLORE MORE</button>
</div>
</div>
<div className="relative group cursor-pointer pt-4 pb-20">
<div className="w-full h-[400px] rounded-2xl overflow-hidden relative z-0">
<img alt="Sun Regalia" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH0fMDAitEM2IKwsF2DrTL7X5teMZAbmoJlvke_oJ9Jgw77PzpvlwfrkZL_5rslrdxNWbEtG6CfF9n3Vi56XQHZ-_UBxWoo3P3f522lT9DtBij5j_yQWYVjrvCryOFxV2uMq1AxiFXWj8dUZ8pXDPixoFAuGTYdo4X5qiC-jAoQYX6R2c5xxD_Wg3MxKgkH0gQ8tIKoLnbC73cAJREmNPkyFbUCOG-89AC5z43WyG7Xvo9CIZ-gyOGRaSetBQ1B0IWIicmwz-4jqzcGR8" />
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-[#5B5B5B] flex flex-col items-center text-center z-10 transition-all duration-[400ms] ease-out justify-end overflow-hidden h-[100px] group-hover:h-[220px] shadow-lg group-hover:h-[240px]">
<div className="p-6 flex flex-col items-center justify-end w-full h-full">
<h3 className="font-headline-lg text-2xl text-white mb-2 leading-tight">Sun Regalia<br /><span className="text-lg">Sinhagad Road</span></h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-0 group-hover:h-auto group-hover:mt-2 overflow-hidden flex flex-col items-center w-full">
<p className="text-white/90 text-sm mb-4">A sprawling luxury complex nestled in a quiet urban setting, highlighting premium residential living.</p>
<button className="bg-[#AB8C47] text-white font-label-caps text-xs px-6 py-3 uppercase tracking-widest hover:bg-[#8A7139] transition-colors">EXPLORE MORE</button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200 mt-4">
<button className="bg-[#F0F5FB] text-[#AB8C47] font-label-caps text-xs px-8 py-3 uppercase tracking-widest font-bold border-none">EXPLORE MORE</button>
</div>
</div>
<div className="relative group cursor-pointer pt-4 pb-20">
<div className="w-full h-[400px] rounded-2xl overflow-hidden relative z-0">
<img alt="Sun Platina" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMyis14d6jQtZW8hxy9ycbU164bAxZfmugBuaSXbaH8dU5ArAV8Q7h3v0t_VMilex9lftTuSQllH5CZ60He3wEs1ZjQPG_3NBB3t3QswktTHPFSdpT0tMdbq10wvRE2mUtP2_8DCsSLjWq9IMjLCpeRBu4lXBeqvr81Y8Gn6RKLyO-UxLmDD7zHP1sl6pLz6AzCsZ4cl-vwyPsv_CL9SBUSKJ6yAOLbilO1ugWxgdmR51iUZjkLVtnvPlKJOVULRR23YtvRoYBoZFeDn8" />
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-[#5B5B5B] flex flex-col items-center text-center z-10 transition-all duration-[400ms] ease-out justify-end overflow-hidden h-[100px] group-hover:h-[220px] shadow-lg group-hover:h-[240px]">
<div className="p-6 flex flex-col items-center justify-end w-full h-full">
<h3 className="font-headline-lg text-2xl text-white mb-2 leading-tight">Sun Platina<br /><span className="text-lg">Kharadi</span></h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-0 group-hover:h-auto group-hover:mt-2 overflow-hidden flex flex-col items-center w-full">
<p className="text-white/90 text-sm mb-4">A sprawling luxury complex reflecting growth and investment potential in Pune's top hotspot.</p>
<button className="bg-[#AB8C47] text-white font-label-caps text-xs px-6 py-3 uppercase tracking-widest hover:bg-[#8A7139] transition-colors">EXPLORE MORE</button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200 mt-4">
<button className="bg-[#F0F5FB] text-[#AB8C47] font-label-caps text-xs px-8 py-3 uppercase tracking-widest font-bold border-none">EXPLORE MORE</button>
</div>
</div>
</div>
</section>
{/* Insights */}
<section className="py-section-gap px-6 md:px-container-padding">
<div className="max-w-7xl mx-auto text-center mb-16">
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-px bg-secondary"></div>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-widest">QUICK INSIGHTS</h2>
<div className="w-12 h-px bg-secondary"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
{/* Insight 1 */}
<div className="bg-surface-container-high overflow-hidden group">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional business setting showing a real estate consultant in a sharp suit discussing property investments. The background is a minimalist, modern office space with subtle lighting, conveying trust and expertise. The tone is editorial and polished." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBurMolEmcsj07mAq9AcolY5ri1gEPxRwi-7jojR8sWIA55A39eoaWko-I7nIvQMMYMBuGkK4WlX75Uqv9d3ZVAsUMbTMeysg4ihfhWlvGBQix5cvzHCXkoLBNN3GLzqTnK2esDLiIonjedk8YqPbK-UA1JrhdcoWKJg8dQSNMrcJTtogk8cXbXee6mRCundhK8iJ25-dg8fL9j9YBqtotr-Ua8BQhxcGVOGe4Em0rVdZsW8ccgIVJfaw" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
<h3 className="font-headline-lg text-headline-lg text-on-primary">Everything You Need To Know About Buying A 3 BHK in Pune</h3>
</div>
</div>
<div className="p-6 bg-inverse-surface text-on-primary">
<h4 className="font-body-lg text-body-lg mb-4">Everything You Need to Know About Buying a 3 BHK in Pune</h4>
<a className="font-label-caps text-label-caps text-secondary hover:text-secondary-fixed transition-colors" href="#">READ MORE</a>
</div>
</div>
{/* Insight 2 */}
<div className="bg-surface-container-high overflow-hidden group">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An interior shot of a luxurious, contemporary living room in a high-end apartment. The space features modern furniture, warm ambient lighting, and expansive windows. The aesthetic is sophisticated and minimalist, highlighting spatial quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGRYkSVDmjoq23l6va-9KNq_1Gm7RsVlXgRV51QoOlPCUFH2XHYhKbu0Eetzh8MUhXmgmyAQaprg-zWWmjFJ3iugVC2gvttXhlihY21HFiyGW1bjfdCll_afN5JtaA1bvf2xtRB5nsMmy40ftSDbRjE-f60_nB_vXCon7LvOoV2ylEAxA0WkPkJm765LDwEL-jPKglst5I6Ch8Ap94DCvV1mACjSwMiRjxEiR8qQTTaqYWn7YSO9ddJg" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
<h3 className="font-headline-lg text-headline-lg text-on-primary">The Ultimate Guide To Pune's Emerging Residential Hubs.</h3>
</div>
</div>
<div className="p-6 bg-inverse-surface text-on-primary">
<h4 className="font-body-lg text-body-lg mb-4">The Ultimate Guide to Pune's Emerging Residential Hubs</h4>
<a className="font-label-caps text-label-caps text-secondary hover:text-secondary-fixed transition-colors" href="#">READ MORE</a>
</div>
</div>
{/* Insight 3 */}
<div className="bg-surface-container-high overflow-hidden group">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A sprawling aerial view of an emerging urban residential hub in Pune at sunset. The cityscape is dotted with modern high-rises intermingled with green spaces, reflecting growth and investment potential. The lighting is warm and cinematic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArV8FuyCgjHdLkHlEkT1K6yYq2pyE1bSHDQ-TX43iQt_bxXSbAFzrISnUxexfZNxn6jpfrc0_sesUNYDdwoc6I7ZgUnC0TqbuP1bOehq1Rm9kc1KJtGF615v85cOrCNlq3PAu_9xw2g9vBNqIKIegxX_DcGd3AlahFplUbzA17uPhO4AXKgpwNdooTr-NNUsWQt7URmm6j_hvNhCZNlJg1vRzJZmsiio_4m4wYCS2lXEaWqQjuBcreOg" />
<div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
<h3 className="font-headline-lg text-headline-lg text-on-primary">Why Kharadi &amp; Keshavnagar Are Pune's Top Investment Hotspots In 2026.</h3>
</div>
</div>
<div className="p-6 bg-inverse-surface text-on-primary">
<h4 className="font-body-lg text-body-lg mb-4">Why Kharadi &amp; Keshavnagar Continue to Be Pune's Top Real Estate Investment...</h4>
<a className="font-label-caps text-label-caps text-secondary hover:text-secondary-fixed transition-colors" href="#">READ MORE</a>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-secondary text-on-secondary font-label-caps text-label-caps px-8 py-4 hover:bg-secondary-fixed-dim transition-colors">
                VIEW MORE
            </button>
</div>
</section>
{/* Footer */}
    </>
  );
}
