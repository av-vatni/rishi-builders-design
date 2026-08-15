import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const STATUSES = ["ONGOING", "UPCOMING", "COMPLETED"] as const;

export const Route = createFileRoute("/projects/residential")({
  head: () => ({
    meta: [
      { title: "Residential Projects — Rishi Builders & Developers" },
      { name: "description", content: "Premium residential apartments and homes built by Rishi Builders & Developers in Pune." },
      { property: "og:title", content: "Residential Projects — Rishi Builders & Developers" },
      { property: "og:description", content: "Premium residential apartments and homes built by Rishi Builders & Developers in Pune." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("ONGOING");
  return (
    <>
{/* TopNavBar Shared Component */}

{/* Main Content Canvas */}
<main className="flex-grow pt-[100px] md:pt-[120px]">
{/* Page Header & Filters */}
<section className="px-gutter md:px-6 md:px-container-padding py-margin-lg text-center max-w-5xl mx-auto">
<h1 className="font-headline-xl text-headline-xl md:font-display-lg md:text-display-lg text-primary mb-6">Residential Projects</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Discover our portfolio of meticulously planned non-agricultural plots, designed for those who appreciate space, security, and long-term value.
            </p>
{/* Status Filters */}
<div className="flex flex-wrap justify-center gap-4">
{STATUSES.map((s) => (
  <button
    key={s}
    onClick={() => setStatus(s)}
    className={`px-8 py-3 font-label-caps text-label-caps tracking-widest border border-secondary rounded-DEFAULT transition-all duration-300 ${status === s ? "bg-secondary text-on-secondary shadow-sm" : "bg-surface text-secondary hover:bg-[#4a4a4a] hover:text-white"}`}
  >{s}</button>
))}
</div>
</section>
{/* Project Grid */}
<section className="px-gutter md:px-6 md:px-container-padding pb-section-gap">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-margin-md">{/* Card 1: Aura Estates */}
<div className="relative group cursor-pointer pt-4 pb-20">
<div className="w-full h-[400px] rounded-2xl overflow-hidden relative z-0">
<img alt="Aura Estates" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnBsZy6XNkD6qQOnL6XBfD2QQrpJCodIB6oC1o1smocrBPFPvG69oJfbcB3h_bXazTJht0kGQm3LHnP_fkGvHCR6ymH2srj_mUIWopMU-GSNxSdynqyhZqfS8pYxdGF0TgKG026G0UXJ7vC409bbvTs5li8dwjNrVMdhSCKPVvrG66wYFfDVFi4UDjO396t3WG1QFvajiFCLS4Avvu1sVpWwW09wOMh60IjbvB7qKBdqg3zOg0aTO9kw" />
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-[#5B5B5B] flex flex-col items-center text-center z-10 transition-all duration-[400ms] ease-out justify-end overflow-hidden h-[100px] group-hover:h-[240px] shadow-lg">
<div className="p-6 flex flex-col items-center justify-end w-full h-full">
<h3 className="font-headline-lg text-2xl text-white mb-2 leading-tight">Aura Estates<br /><span className="text-lg">North Valley</span></h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-0 group-hover:h-auto group-hover:mt-2 overflow-hidden flex flex-col items-center w-full">
<p className="text-white/90 text-sm mb-4">Exclusive 5-acre plots designed for bespoke architectural visions, surrounded by protected woodlands.</p>
<button className="bg-[#AB8C47] text-white font-label-caps text-xs px-6 py-3 uppercase tracking-widest hover:bg-[#8A7139] transition-colors">EXPLORE MORE</button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200 mt-4">
<button className="bg-[#F0F5FB] text-[#AB8C47] font-label-caps text-xs px-8 py-3 uppercase tracking-widest font-bold border-none">EXPLORE MORE</button>
</div>
</div>
{/* Card 2: The Grove */}
<div className="relative group cursor-pointer pt-4 pb-20">
<div className="w-full h-[400px] rounded-2xl overflow-hidden relative z-0">
<img alt="The Grove" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANLb92m0lQF-c7XrRkXYK69GKSW4v_MvATte4zkuCw_EQjpjKwH9xjktM2KuXlaN9KranAexm-tRQ7vSxxqe8_SCcXK04MXckhFPSH1hf1MkBINSSqDjPfyAzc_Cba5VCnBRGRW61QuEwjQ6ko86t-55rRIV-5BXPGZ8HNBKaiW0dm5gQtEhtculGrGcBSp4TRj43nwDa0OOFa0FvGbrkQgzSGDMvFg3_bmDB5jjaoU17r5puoBQSZ2w" />
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-[#5B5B5B] flex flex-col items-center text-center z-10 transition-all duration-[400ms] ease-out justify-end overflow-hidden h-[100px] group-hover:h-[240px] shadow-lg">
<div className="p-6 flex flex-col items-center justify-end w-full h-full">
<h3 className="font-headline-lg text-2xl text-white mb-2 leading-tight">The Grove<br /><span className="text-lg">West Hills</span></h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-0 group-hover:h-auto group-hover:mt-2 overflow-hidden flex flex-col items-center w-full">
<p className="text-white/90 text-sm mb-4">Premium lifestyle community offering unparalleled views and integrated smart-infrastructure.</p>
<button className="bg-[#AB8C47] text-white font-label-caps text-xs px-6 py-3 uppercase tracking-widest hover:bg-[#8A7139] transition-colors">EXPLORE MORE</button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200 mt-4">
<button className="bg-[#F0F5FB] text-[#AB8C47] font-label-caps text-xs px-8 py-3 uppercase tracking-widest font-bold border-none">EXPLORE MORE</button>
</div>
</div>
{/* Card 3: Lakeside Enclave */}
<div className="relative group cursor-pointer pt-4 pb-20">
<div className="w-full h-[400px] rounded-2xl overflow-hidden relative z-0">
<img alt="Lakeside Enclave" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUpBFeMd6hFt-VYk67wVUJ-jEgN96k0ojijWbzZlk3SfIewJwAPlewVg-6sr8QOeJRnKqZjK4JC0wgoNbVlkQINBnf8-iDc-9qqh5QV3cEKmt6IRYuTJcNu9ljomB7O9ks_LF1k046VD8whFWdq5aL2t25Rn1_t78v_CkMqJYfWVBDtpW0QoaXHKE8V0qbCYoH563aGGCuQW-C3rIRRdreCfvPaJwNDcofPRJOtBxXL-bjy7m49B9cg" />
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-[#5B5B5B] flex flex-col items-center text-center z-10 transition-all duration-[400ms] ease-out justify-end overflow-hidden h-[100px] group-hover:h-[240px] shadow-lg">
<div className="p-6 flex flex-col items-center justify-end w-full h-full">
<h3 className="font-headline-lg text-2xl text-white mb-2 leading-tight">Lakeside Enclave<br /><span className="text-lg">Eastern Shores</span></h3>
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out h-0 group-hover:h-auto group-hover:mt-2 overflow-hidden flex flex-col items-center w-full">
<p className="text-white/90 text-sm mb-4">Waterfront properties offering a rare blend of tranquility and proximity to urban centers.</p>
<button className="bg-[#AB8C47] text-white font-label-caps text-xs px-6 py-3 uppercase tracking-widest hover:bg-[#8A7139] transition-colors">EXPLORE MORE</button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-200 mt-4">
<button className="bg-[#F0F5FB] text-[#AB8C47] font-label-caps text-xs px-8 py-3 uppercase tracking-widest font-bold border-none">EXPLORE MORE</button>
</div>
</div></div>
</section>
</main>
{/* Footer Shared Component */}
    </>
  );
}
