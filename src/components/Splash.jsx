import { useEffect, useState } from 'react';

const root = document.documentElement;
const INTRO_MS = 1500;
const EXIT_MS = 650;

export default function Splash() {
 const [show, setShow] = useState(() => root.classList.contains('splash-lock'));
 const [exiting, setExiting] = useState(false);

 useEffect(() => {
  if (!show) return undefined;
  const exit = () => {
   setExiting(true);
   // The hero choreography is delayed by --splash-delay (see styles.css); start it as the curtain lifts.
   root.style.setProperty('--splash-delay', '250ms');
  };
  const exitTimer = window.setTimeout(exit, INTRO_MS);
  const doneTimer = window.setTimeout(() => { root.classList.remove('splash-lock'); setShow(false); }, INTRO_MS + EXIT_MS);
  return () => { window.clearTimeout(exitTimer); window.clearTimeout(doneTimer); };
 }, [show]);

 if (!show) return null;

 const skip = () => {
  if (exiting) return;
  setExiting(true);
  root.style.setProperty('--splash-delay', '250ms');
 };

 return (
  <div className={`splash${exiting ? ' splash-exit' : ''}`} aria-hidden="true" onClick={skip}>
   <div className="splash-inner">
    <span className="splash-eyebrow font-label-caps">Burns Road Heritage · Calgary</span>
    <h2 className="splash-word font-headline-md">
     <span><span style={{ '--i': 0 }}>DUDE</span></span>
     <span><span style={{ '--i': 1 }}>CHACHA</span></span>
    </h2>
    <span className="splash-rule" />
    <span className="splash-tag font-quote-italic">Karachi. Distilled.</span>
   </div>
  </div>
 );
}
