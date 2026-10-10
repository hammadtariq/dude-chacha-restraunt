import MenuCourse5 from './MenuCourse5';
import MenuCourse4 from './MenuCourse4';
import MenuCourse3 from './MenuCourse3';
import MenuCourse2 from './MenuCourse2';
import MenuCourse1 from './MenuCourse1';
import { useState } from 'react';

export default function MasterMenu() {
const [category, setCategoryRaw] = useState('all');
const [switched, setSwitched] = useState(false);
const setCategory = next => { setSwitched(true); setCategoryRaw(next); };
return (
<section className="py-28 px-6 md:px-12 max-w-[1520px] mx-auto border-b border-white/[0.08]" id="master-menu">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 reveal-item is-visible">
  <div className="space-y-4 max-w-3xl">
    <div className="flex items-center gap-3">
      <span className="font-label-numeric text-sm text-secondary font-bold">03 /</span>
      <span className="font-label-caps text-xs tracking-[0.3em] uppercase text-secondary">THE GASTRONOMIC REGISTRY</span>
    </div>
    <h2 className="font-headline-xl text-5xl md:text-7xl lg:text-8xl tracking-tight text-on-surface font-normal">
      The Grand Carte. <br />
      <span className="italic font-quote-italic text-secondary">38 Masterpieces in Five Acts.</span>
    </h2>
  </div>
  <div className="space-y-3 max-w-md border-l border-secondary/30 pl-6">
    <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
      Hand-ground masalas, slow overnight charcoal braises, and communal heritage feasts. Every creation is slow-prepared exclusively for your private gathering.
    </p>
    <p className="font-label-caps text-[11px] tracking-widest text-secondary uppercase flex items-center gap-2">
      <span aria-hidden="true" className="material-symbols-outlined text-sm">auto_awesome</span>
      Sherwood NW Calgary · Bespoke Spice Calibration
    </p>
  </div>
</div>


<div className="mb-14 py-4 px-6 rounded-2xl border border-white/[0.06] bg-surface-container-lowest/60 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-body-sm text-on-surface-variant">
  <div className="flex items-center gap-3">
    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
    <span className=""><strong className="text-on-surface font-medium">Communal Standard:</strong> All preparations are generous dawat batches portioned for 5–6 commensals, unless noted as individual handheld ($9.99).</span>
  </div>
  <div className="flex items-center gap-4 text-outline shrink-0 font-label-caps text-[10px] tracking-widest uppercase">
    <span className="">Pre-order 24–48h Advised</span>
    <span className="">•</span>
    <span className="">Complimentary NW Delivery</span>
  </div>
</div>


<div className="flex flex-wrap items-center gap-2 md:gap-3 mb-16 pb-6 border-b border-white/[0.08]" id="categoryFilterContainer">
  <button data-cat="all" type="button" onClick={() => setCategory("all")} aria-pressed={category === "all"} className={`filter-tab px-5 py-2 rounded-full font-label-caps text-xs tracking-widest uppercase transition-all duration-300 border border-white/5 ${category === "all" ? "bg-secondary text-on-secondary font-bold shadow-sm" : "bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface"}`}>
    All Courses
  </button>
  <button data-cat="traditional" type="button" onClick={() => setCategory("traditional")} aria-pressed={category === "traditional"} className={`filter-tab px-5 py-2 rounded-full font-label-caps text-xs tracking-widest uppercase transition-all duration-300 border border-white/5 ${category === "traditional" ? "bg-secondary text-on-secondary font-bold shadow-sm" : "bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface"}`}>
    Act I · Heritage Braises
  </button>
  <button data-cat="rice" type="button" onClick={() => setCategory("rice")} aria-pressed={category === "rice"} className={`filter-tab px-5 py-2 rounded-full font-label-caps text-xs tracking-widest uppercase transition-all duration-300 border border-white/5 ${category === "rice" ? "bg-secondary text-on-secondary font-bold shadow-sm" : "bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface"}`}>
    Act II · Dum &amp; Curries
  </button>
  <button data-cat="bbq" type="button" onClick={() => setCategory("bbq")} aria-pressed={category === "bbq"} className={`filter-tab px-5 py-2 rounded-full font-label-caps text-xs tracking-widest uppercase transition-all duration-300 border border-white/5 ${category === "bbq" ? "bg-secondary text-on-secondary font-bold shadow-sm" : "bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface"}`}>
    Act III · Charcoal Kababs
  </button>
  <button data-cat="fusion" type="button" onClick={() => setCategory("fusion")} aria-pressed={category === "fusion"} className={`filter-tab px-5 py-2 rounded-full font-label-caps text-xs tracking-widest uppercase transition-all duration-300 border border-white/5 ${category === "fusion" ? "bg-secondary text-on-secondary font-bold shadow-sm" : "bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface"}`}>
    Act IV · Karachi Fusion
  </button>
  <button data-cat="handhelds-sweets" type="button" onClick={() => setCategory("handhelds-sweets")} aria-pressed={category === "handhelds-sweets"} className={`filter-tab px-5 py-2 rounded-full font-label-caps text-xs tracking-widest uppercase transition-all duration-300 border border-white/5 ${category === "handhelds-sweets" ? "bg-secondary text-on-secondary font-bold shadow-sm" : "bg-surface-container-high/60 text-on-surface-variant hover:text-on-surface"}`}>
    Act V · Street &amp; Sweets
  </button>
</div>


<div key={category} className={`space-y-20${switched ? ' menu-switch' : ''}`} id="dishesGrid">
  
  
  {(category === "all" || category === "traditional") && <MenuCourse1 />}

  
  {(category === "all" || category === "rice") && <MenuCourse2 />}

  
  {(category === "all" || category === "bbq") && <MenuCourse3 />}

  
  {(category === "all" || category === "fusion") && <MenuCourse4 />}

  
  {(category === "all" || category === "handhelds-sweets") && <MenuCourse5 />}

</div>


<div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
  <div className="space-y-1">
    <span className="font-label-caps text-xs tracking-widest text-secondary uppercase block">Complete Archive Calibration</span>
    <p className="font-body-sm text-sm text-on-surface-variant">Have a custom family menu or specific dietary requirements? Every batch is tailored directly with Chef Noman.</p>
  </div>
  <a className="px-8 py-3.5 rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all font-label-caps text-xs tracking-[0.2em] uppercase font-bold shrink-0 shadow-lg flex items-center gap-3" href="https://wa.me/13063071379" rel="noopener noreferrer" target="_blank">
    <span className="">Inquire via WhatsApp</span>
    <span aria-hidden="true" className="material-symbols-outlined text-sm">arrow_forward</span>
  </a>
</div></section>
);
}
