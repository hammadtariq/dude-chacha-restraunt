import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Legends from './components/Legends';
import Textures from './components/Textures';
import MasterMenu from './components/MasterMenu';
import Packages from './components/Packages';
import Chef from './components/Chef';
import HowToOrder from './components/HowToOrder';
import ScrollProgress from './components/ScrollProgress';
import Concierge from './components/Concierge';
import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './components/Splash';
export default function App() {
 const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
 useEffect(() => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try { localStorage.setItem('dude-chacha-theme', theme); } catch { /* Theme still works when storage is unavailable. */ }
 }, [theme]);
 useEffect(() => {
  const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { rootMargin: '0px 0px -50px 0px', threshold: 0.12 });
  document.querySelectorAll('.reveal-item').forEach(item => { item.classList.remove('is-visible'); observer.observe(item); });
  return () => observer.disconnect();
 }, []);
 return <><Splash /><a className="skip-link" href="#main-content">Skip to content</a><ScrollProgress /><Header theme={theme} onToggleTheme={() => setTheme(current => current === 'dark' ? 'light' : 'dark')} /><Concierge /><main id="main-content" className="w-full bg-background"><Hero /><Legends /><Textures /><MasterMenu /><Packages /><Chef /><HowToOrder /></main><Footer /></>;
}
