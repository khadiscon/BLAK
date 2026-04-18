import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Users, TrendingUp, Heart, ArrowRight } from 'lucide-react';

function PlaceholderImage({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-surface-container flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-2 text-outline">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs font-medium">Image Placeholder</span>
      </div>
    </div>
  );
}

const perks = [
  { icon: Heart, title: 'Meaningful Impact', desc: 'Work that directly improves lives across Nigeria and beyond.' },
  { icon: TrendingUp, title: 'Professional Growth', desc: 'Access to training, mentorship, and CPD opportunities.' },
  { icon: Users, title: 'Dynamic Team', desc: 'Join a collaborative community of passionate mental health professionals.' },
];

export default function Career() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', role: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Application submitted! We will be in touch.');
    setFormData({ name: '', phone: '', email: '', role: '', message: '' });
  };

  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 md:px-12 py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 text-primary font-semibold text-xs uppercase tracking-widest mb-6">
              Developing Minds
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.05] mb-6">
              Careers
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Join BlakMoh Consulting and contribute to our mission of empowering individuals and organizations
              through tailored psychological support and capacity building solutions.
            </p>
            <a href="mailto:info@blakmoh.com"
              className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary group-hover:bg-primary-container/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-bold text-primary group-hover:underline">info@blakmoh.com</span>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700">
              <PlaceholderImage className="w-full aspect-[4/3]" />
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 -z-10 w-1/2 h-full bg-gradient-to-r from-primary-container/5 to-transparent rounded-br-[10rem]" />
      </section>

      {/* ── Why Join ── */}
      <section className="px-6 md:px-12 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Why BlakMoh</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface">Join The Team</h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">
              Whether you're an aspiring intern, dedicated volunteer, or experienced contract staff member, we offer
              opportunities to grow professionally while making a meaningful impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div key={perk.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }} whileHover={{ y: -5 }}
                  className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 text-center">
                  <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-3">{perk.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-on-surface-variant mb-4">Explore current openings and apply today.</p>
            <a href="mailto:info@blakmoh.com"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300">
              Send us A Mail <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="relative overflow-hidden">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-on-surface/88" />
        <div className="relative z-10 px-6 md:px-12 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-white/60 uppercase tracking-widest text-xs font-semibold mb-4">
              We are here to answer your questions 24/7
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6">
              Need A Consultation?
            </h2>
            <p className="text-white/65 leading-relaxed text-base">
              The goal is to support individuals in understanding and managing their emotions, thoughts, and
              behaviors in order to enhance overall quality of life.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
            className="bg-surface-container-lowest/10 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 space-y-4">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
              className="w-full bg-white text-on-surface placeholder:text-outline px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
              className="w-full bg-white text-on-surface placeholder:text-outline px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
              className="w-full bg-white text-on-surface placeholder:text-outline px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition" />
            <select name="role" value={formData.role} onChange={handleChange}
              className="w-full bg-white text-on-surface px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition appearance-none cursor-pointer">
              <option value="">Select Role</option>
              <option value="internship">Internship</option>
              <option value="volunteer">Volunteer</option>
              <option value="contract">Contract Staff</option>
            </select>
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows={4}
              className="w-full bg-white text-on-surface placeholder:text-outline px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition resize-none" />
            <button onClick={handleSubmit}
              className="w-full bg-primary-container text-on-primary-container py-4 rounded-full font-bold text-base hover:opacity-90 hover:translate-y-[-2px] transition-all duration-300 uppercase tracking-wide">
              Send Application
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
