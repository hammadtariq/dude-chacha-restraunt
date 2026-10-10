import './Hero.css';

export default function Hero() {
 return (
<section className="relative min-h-[92svh] flex flex-col justify-between overflow-hidden px-6 md:px-12 pt-12 pb-16 border-b border-white/[0.08]" id="hero-manifesto" aria-labelledby="hero-title">
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
  <img src="/karachi-feast-refined.png" alt="" className="absolute inset-0 w-full h-full object-cover object-right" fetchPriority="high" />
  <div className="hero-dark-overlay absolute inset-0"></div>
</div>


<div className="max-w-[1520px] mx-auto w-full pt-4 pb-6 z-10 relative flex items-center justify-between border-b border-white/[0.08]">
  <div className="flex items-center gap-3 font-label-caps text-xs tracking-[0.4em] uppercase text-primary/80">
    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
    <span className="">BURNS ROAD HERITAGE · CALGARY NW</span>
  </div>
  <div className="hero-location hidden md:flex items-center gap-6 font-label-caps text-[11px] tracking-[0.25em] text-on-surface-variant/70 uppercase">
    <span className="">COMMUNAL DAWAT FEASTS</span>
    <span className="text-outline">•</span>
    <span className="">CALGARY, ALBERTA</span>
  </div>
</div>


<div className="hero-content max-w-[1520px] mx-auto w-full my-auto py-12 md:py-20 z-10 relative">
  <div className="max-w-5xl space-y-8">
    <div>
      <span className="block font-label-caps text-xs tracking-[0.4em] text-secondary uppercase mb-6">ORIGINAL BURNS ROAD ARCHIVE</span>
      <h1 id="hero-title" className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display-hero font-black tracking-tight leading-[0.88] text-on-surface mb-8">
        <span className="block uppercase">KARACHI.</span>
        <span className="block italic font-quote-italic font-normal text-secondary">Distilled.</span>
      </h1>
    </div>

    <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed tracking-wide font-body-lg">
      Artisanal communal dawats slow-crafted overnight by Chef Noman. No shortcuts, no pre-made bases—pure culinary heritage for 6+ guests.
    </p>

    
    <div className="pt-4 flex flex-wrap items-center gap-6 md:gap-8">
      <a className="group flex items-center gap-4 px-8 py-4 rounded-full bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-all shadow-[0_12px_35px_rgba(255,181,161,0.2)] font-label-caps text-xs tracking-[0.2em] uppercase font-bold" href="https://wa.me/13063071379" rel="noopener noreferrer" target="_blank">
        <span className="">ORDER VIA WHATSAPP</span>
        <span aria-hidden="true" className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">east</span>
      </a>
      <a className="font-label-caps text-xs tracking-[0.2em] uppercase text-on-surface hover:text-secondary transition-colors inline-flex items-center gap-2 group py-3" href="#master-menu">
        <span className="">EXPLORE THE 38 DISHES</span>
        <span aria-hidden="true" className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </a>
    </div>

    
    <div className="pt-6 border-t border-white/[0.08] max-w-xl">
      <p className="font-label-caps text-[11px] tracking-[0.2em] text-outline uppercase">
        Home-Crafted in Sherwood NW · 6-Person Feast Batches · Zero Assembly Lines
      </p>
    </div>
  </div>
</div>


<div className="w-full overflow-hidden border-t border-white/[0.08] py-4 bg-surface-container-lowest/90 -mx-6 md:-mx-12 px-0 z-10 relative">
  <div className="animate-marquee-linear whitespace-nowrap font-label-caps text-xs tracking-[0.3em] uppercase text-on-surface-variant/80">
    <span className="mx-6 text-primary">● BURNS ROAD NIHARI SHANK</span>
    <span className="mx-6">BOHRA-STYLE KARACHI DUM BIRYANI</span>
    <span className="mx-6 text-secondary">● 8-HOUR SLOW-COOKED HALEEM</span>
    <span className="mx-6">TRADITIONAL COLLAGEN PAYA</span>
    <span className="mx-6 text-tertiary">● HIGHWAY-STYLE KOYLA CURRY</span>
    <span className="mx-6">PESHAWARI CHAPLI KABAB</span>
    <span className="mx-6 text-primary">● 6-PERSON DAWAT BATCHES</span>
    <span className="mx-6">FREE NW CALGARY DELIVERY</span>
    
    <span className="mx-6 text-primary">● BURNS ROAD NIHARI SHANK</span>
    <span className="mx-6">BOHRA-STYLE KARACHI DUM BIRYANI</span>
    <span className="mx-6 text-secondary">● 8-HOUR SLOW-COOKED HALEEM</span>
    <span className="mx-6">TRADITIONAL COLLAGEN PAYA</span>
    <span className="mx-6 text-tertiary">● HIGHWAY-STYLE KOYLA CURRY</span>
    <span className="mx-6">PESHAWARI CHAPLI KABAB</span>
    <span className="mx-6 text-primary">● 6-PERSON DAWAT BATCHES</span>
    <span className="mx-6">FREE NW CALGARY DELIVERY</span>
  </div>
</div></section>
 );
}
