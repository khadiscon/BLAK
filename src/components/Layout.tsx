import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Menu, X, Facebook, Linkedin, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react';

// ─── Nav structure ────────────────────────────────────────────────────────────
type NavItem =
  | { name: string; path: string; dropdown?: never }
  | { name: string; path?: never; dropdown: { name: string; path: string }[] };

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    dropdown: [
      { name: 'Who We Are', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
    ],
  },
  { name: 'Service', path: '/services' },
  { name: 'Foundation', path: '/foundation' },
  { name: 'Helping Tribe', path: '/helping-tribe' },
  { name: 'Career', path: '/career' },
  { name: 'Resources', dropdown: [
    { name: 'Journal', path: '/journal' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
  ] },
  { name: 'Contact Us', path: '/contact' },
];

// ─── Dropdown Menu ────────────────────────────────────────────────────────────
function DropdownMenu({
  items,
  visible,
}: {
  items: { name: string; path: string }[];
  visible: boolean;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden z-50"
        >
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-3 text-sm text-stone-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (item: NavItem) => {
    if ('path' in item && item.path) return location.pathname === item.path;
    if ('dropdown' in item && item.dropdown)
      return item.dropdown.some((d) => location.pathname === d.path);
    return false;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-stone-100">
      <nav ref={navRef} className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tighter text-green-800 font-headline flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          Blakmoh
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            if ('dropdown' in item && item.dropdown) {
              const active = isActive(item);
              return (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                      active ? 'text-green-700 font-bold' : 'text-stone-700 hover:text-green-700'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  <DropdownMenu items={item.dropdown} visible={openDropdown === item.name} />
                </div>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path!}
                className={`font-medium text-sm transition-colors ${
                  isActive(item)
                    ? 'text-green-700 font-bold border-b-2 border-green-600 pb-0.5'
                    : 'text-stone-700 hover:text-green-700'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Book Session CTA */}
        <button className="hidden lg:block bg-green-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition-colors">
          Book Session
        </button>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-stone-100"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => {
                if ('dropdown' in item && item.dropdown) {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="w-full flex justify-between items-center py-3 px-4 rounded-xl text-stone-700 hover:bg-stone-50 font-medium text-base transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMenuOpen(false)}
                              className="block py-2 px-4 rounded-lg text-stone-600 hover:text-green-700 text-sm font-medium"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path!}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 px-4 rounded-xl font-medium text-base transition-colors ${
                      isActive(item)
                        ? 'bg-green-50 text-green-700 font-bold'
                        : 'text-stone-600 hover:bg-stone-50 hover:text-green-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <button className="mt-3 w-full bg-green-600 text-white py-3 rounded-full font-bold transition-all active:scale-95">
                Book Session
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-stone-900 text-white w-full mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xl font-bold mb-4">Blakmoh</div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
              BlakMoh Consulting (BN3303037) is a learning organization providing tailored solutions to all categories
              of persons and organizations in need of psychological support services.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-white">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="text-stone-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-stone-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="text-stone-400 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-stone-400 hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-white">Company</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/about" className="text-stone-400 hover:text-white transition-colors">Company Profile</Link>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">Journal</a>
              <Link to="/helping-tribe" className="text-stone-400 hover:text-white transition-colors">Helping Tribe!</Link>
              <Link to="/foundation" className="text-stone-400 hover:text-white transition-colors">BlakMoh Wellbeing Foundation</Link>
              <Link to="/about#team" className="text-stone-400 hover:text-white transition-colors">Team</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-white">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-stone-400">info@blakmoh.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-stone-400">1st Floor, 30/32 Lagos Abeokuta Expressway, Cement Bus stop, Lagos</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-stone-400">+234 (0) 703 005 2021</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-stone-400 text-xs mb-3">Stay updated with our latest insights.</p>
              <div className="flex bg-stone-800 rounded-xl p-1 overflow-hidden">
                <input
                  className="bg-transparent border-none outline-none text-xs flex-1 px-3 text-white placeholder:text-stone-500"
                  placeholder="Email address"
                  type="email"
                />
                <button className="bg-green-700 text-white p-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">© 2024 Blakmoh. All Rights Reserved</p>
          <div className="flex gap-6">
            <span className="text-stone-600 text-xs">Empowering Minds</span>
            <span className="text-stone-600 text-xs">Transforming Culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
