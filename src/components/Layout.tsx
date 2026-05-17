import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Menu, X, Facebook, Linkedin, Twitter, Instagram, Youtube, ChevronDown, Loader } from 'lucide-react';
import { useEmailJS } from '../lib/useEmailJS';
import { EMAILJS_CONFIG, CONTACT_INFO, SOCIAL_LINKS } from '../lib/emailConfig';

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
  {
    name: 'Resources',
    dropdown: [
      { name: 'Journal', path: '/journal' },
      { name: 'Blog', path: '/blog' },
      { name: 'Gallery', path: '/gallery' },
    ],
  },
  { name: 'Contact Us', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter / X' },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' },
];

function BrandLogo({
  onClick,
  variant = 'light',
}: {
  onClick?: () => void;
  variant?: 'light' | 'dark';
}) {
  const textClass = variant === 'dark' ? 'text-white' : 'text-green-800';
  const markClass = variant === 'dark'
    ? 'bg-white shadow-lg shadow-black/20'
    : 'bg-white ring-1 ring-stone-200 shadow-sm';

  return (
    <Link
      to="/"
      className="inline-flex items-center gap-3"
      onClick={onClick}
      aria-label="BlakMoh home"
    >
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl ${markClass}`}>
        <img
          src="/assets/blakmoh-logo.png"
          alt=""
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className={`text-xl font-bold tracking-tighter font-headline ${textClass}`}>
        Blakmoh
      </span>
    </Link>
  );
}

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
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDesktopDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setDesktopDropdown(null);
    setMobileDropdown(null);
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropdown(null);
  };

  const isActive = (item: NavItem) => {
    if ('path' in item && item.path) return location.pathname === item.path;
    if ('dropdown' in item && item.dropdown)
      return item.dropdown.some((d) => location.pathname === d.path);
    return false;
  };

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <header className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-stone-100">
        <nav ref={navRef} className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <BrandLogo onClick={closeMenu} />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              if ('dropdown' in item && item.dropdown) {
                const active = isActive(item);
                return (
                  <div key={item.name} className="relative">
                    <button
                      type="button"
                      onClick={() => setDesktopDropdown(desktopDropdown === item.name ? null : item.name)}
                      className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                        active ? 'text-green-700 font-bold' : 'text-stone-700 hover:text-green-700'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${desktopDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <DropdownMenu items={item.dropdown} visible={desktopDropdown === item.name} />
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
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="hidden lg:block bg-green-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-green-700 transition-colors"
          >
            Book Session
          </button>

          {/* Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col px-4 py-3 gap-1">
              {navItems.map((item) => {
                if ('dropdown' in item && item.dropdown) {
                  const isOpen = mobileDropdown === item.name;
                  return (
                    <div key={item.name}>
                      <button
                        type="button"
                        onClick={() => setMobileDropdown(isOpen ? null : item.name)}
                        className={`w-full flex justify-between items-center py-3.5 px-4 font-medium text-base rounded-xl transition-colors ${
                          isActive(item)
                            ? 'bg-green-50 text-green-700'
                            : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="mx-2 mb-2 bg-stone-50 rounded-xl border border-stone-100">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={closeMenu}
                              className="block py-3.5 px-5 text-sm font-medium text-stone-600 hover:text-green-700 border-b border-stone-100 last:border-0 transition-colors"
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
                    onClick={closeMenu}
                    className={`block py-3.5 px-4 rounded-xl font-medium text-base transition-colors ${
                      isActive(item)
                        ? 'bg-green-50 text-green-700 font-bold'
                        : 'text-stone-600 hover:bg-stone-50 hover:text-green-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2 pb-1">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block text-center w-full bg-green-600 text-white py-3.5 rounded-full font-bold transition-all active:scale-95 text-sm"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

// ─── Footer Newsletter ────────────────────────────────────────────────────────
function FooterNewsletter() {
  const { status, send } = useEmailJS();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await send(EMAILJS_CONFIG.NEWSLETTER_TEMPLATE_ID, { subscriber_email: email });
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex bg-stone-800 rounded-xl p-1 overflow-hidden">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-transparent border-none outline-none text-xs flex-1 px-3 text-white placeholder:text-stone-500"
        placeholder="Email address"
      />
      <button
        type="submit"
        disabled={status === 'sending' || status === 'success'}
        className="bg-green-700 text-white p-2 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-60"
        aria-label="Subscribe"
      >
        {status === 'sending' ? <Loader className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      </button>
    </form>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-stone-900 text-white w-full mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <BrandLogo variant="dark" />
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
              BlakMoh Consulting (BN3303037) is a learning organization providing tailored solutions to all categories
              of persons and organizations in need of psychological support services.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
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
              <Link to="/journal" className="text-stone-400 hover:text-white transition-colors">Journal</Link>
              <Link to="/helping-tribe" className="text-stone-400 hover:text-white transition-colors">Helping Tribe!</Link>
              <Link to="/foundation" className="text-stone-400 hover:text-white transition-colors">BlakMoh Wellbeing Foundation</Link>
              <Link to="/about#team" className="text-stone-400 hover:text-white transition-colors">Team</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-white">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-stone-400 group-hover:text-white transition-colors">{CONTACT_INFO.email}</span>
              </a>
              <a
                href={CONTACT_INFO.addressMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-stone-400 group-hover:text-white transition-colors">{CONTACT_INFO.address}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <span className="text-stone-400 group-hover:text-white transition-colors">{CONTACT_INFO.phone}</span>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-stone-400 text-xs mb-3">Stay updated with our latest insights.</p>
              <FooterNewsletter />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">© {new Date().getFullYear()} Blakmoh. All Rights Reserved</p>
          <div className="flex gap-6">
            <span className="text-stone-600 text-xs">Empowering Minds</span>
            <span className="text-stone-600 text-xs">Transforming Culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float Button ────────────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
