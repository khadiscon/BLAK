import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

function PlaceholderImage({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-stone-200 flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-2 text-stone-400">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs font-medium">Image Placeholder</span>
      </div>
    </div>
  );
}

export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // placeholder — wire to backend later
    alert('Application submitted! We will be in touch.');
    setFormData({ name: '', phone: '', email: '', role: '', message: '' });
  };

  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        {/* gradient overlay — dark top, green fade at bottom like reference */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-green-700/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-5xl md:text-7xl font-extrabold text-white tracking-widest uppercase"
        >
          Careers
        </motion.h1>
      </section>

      {/* ── Join The Team ── */}
      <section
        className="px-6 md:px-12 py-20"
        style={{ background: 'radial-gradient(circle, #d1d5db 1px, transparent 1px) 0 0 / 20px 20px, #f5f5f0' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
                Developing Minds,
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6">Join The Team</h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Join BlakMoh Consulting and contribute to our mission of empowering individuals and organizations
              through tailored psychological support and capacity building solutions. Whether you're an aspiring
              intern, dedicated volunteer, or experienced contract staff member, we offer opportunities to grow
              professionally while making a meaningful impact. Explore current openings and discover how you can
              become part of our dynamic team committed to fostering resilience and enhancing well-being. Apply
              today and embark on a rewarding journey with us.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@blakmoh.com"
                className="text-green-600 font-bold hover:text-green-700 transition-colors"
              >
                info@blakmoh.com
              </a>
              <span className="text-stone-300">|</span>
              <a
                href="mailto:info@blakmoh.com"
                className="font-bold text-stone-800 hover:text-green-600 transition-colors"
              >
                Send us A Mail
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <PlaceholderImage className="w-full aspect-[4/3] rounded-2xl shadow-xl" />
          </motion.div>
        </div>
      </section>

      {/* ── Consultation Form ── */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-stone-900/85" />

        <div className="relative z-10 w-full px-6 md:px-12 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/70 uppercase tracking-widest text-sm font-semibold mb-3">
              WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-6">
              NEED A CONSULTATION?
            </h2>
            <p className="text-white/70 leading-relaxed">
              The goal is to support individuals in understanding and managing their emotions, thoughts, and
              behaviors in order to enhance overall quality of life.
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white text-stone-800 placeholder:text-stone-400 px-5 py-4 rounded-md outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white text-stone-800 placeholder:text-stone-400 px-5 py-4 rounded-md outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white text-stone-800 placeholder:text-stone-400 px-5 py-4 rounded-md outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-white text-stone-500 px-5 py-4 rounded-md outline-none focus:ring-2 focus:ring-green-500 transition appearance-none cursor-pointer"
            >
              <option value="">Select</option>
              <option value="internship">Internship</option>
              <option value="volunteer">Volunteer</option>
              <option value="contract">Contract Staff</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white text-stone-800 placeholder:text-stone-400 px-5 py-4 rounded-md outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-4 font-bold text-base hover:bg-green-700 transition-colors rounded-md uppercase tracking-wide"
            >
              Send
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
