import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Menu, X, Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(27,28,26,0.06)]">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-green-800 font-headline" onClick={() => setMenuOpen(false)}>
          Blakmoh
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-headline tracking-tight transition-all duration-300 hover:translate-y-[-2px] ${
                location.pathname === link.path
                  ? 'text-green-700 font-bold border-b-2 border-green-600'
                  : 'text-stone-600 hover:text-green-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-bold hover:translate-y-[-2px] transition-all duration-300 hover:shadow-lg active:opacity-80 active:scale-95 font-body">
            Book Session
          </button>

          {/* Hamburger - mobile only */}
          <button
            className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-stone-100"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 px-4 rounded-xl font-headline text-base transition-colors ${
                    location.pathname === link.path
                      ? 'bg-green-50 text-green-700 font-bold'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-green-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-3 w-full bg-primary-container text-on-primary-container py-3 rounded-full font-bold font-body transition-all active:scale-95">
                Book Session
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white w-full mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xl font-bold mb-4">Blakmoh</div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
              BlakMoh Consulting (BN3303037) is a learning organization providing tailored solutions to all categories of persons and organizations in need of psychological support services.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-white">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" className="text-stone-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-stone-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="text-stone-400 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-stone-400 hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-5 text-white">Company</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">Company Profile</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">Journal</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">Helping Tribe!</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">BlakMoh Wellbeing Foundation</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">Team</a>
            </div>
          </div>

          {/* Contact */}
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

            {/* Newsletter */}
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
