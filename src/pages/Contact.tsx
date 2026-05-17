import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useEmailJS } from '../lib/useEmailJS';
import { EMAILJS_CONFIG, CONTACT_INFO } from '../lib/emailConfig';

const subjects = [
  'Individual Therapy Inquiry',
  'Corporate Partnership',
  'Workshop/Speaking Engagement',
  'General Inquiry',
];

export default function Contact() {
  const { status, send } = useEmailJS();
  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await send(EMAILJS_CONFIG.CONTACT_TEMPLATE_ID, {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_email: CONTACT_INFO.email,
    });
    if (status !== 'error') {
      setForm({ name: '', email: '', subject: subjects[0], message: '' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <header className="mb-20 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6"
        >
          Let's Start a <span className="text-primary italic">Conversation</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-on-surface-variant leading-relaxed font-body"
        >
          Whether you're an individual seeking support or an organization looking to transform your culture,
          our team is ready to listen.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(27,28,26,0.06)] border border-outline-variant/10"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface font-body"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">
                Subject
              </label>
              <select
                name="subject"
                title="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface font-body appearance-none"
              >
                {subjects.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest ml-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface font-body resize-none"
              />
            </div>

            {/* Status feedback */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="font-medium">Message sent! We'll get back to you within 24 hours.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="font-medium">Something went wrong. Please email us directly at {CONTACT_INFO.email}.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <><Loader className="w-5 h-5 animate-spin" /> Sending…</>
              ) : (
                <>Send Message <Send className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl text-on-surface mb-1">Email Us</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-on-surface-variant hover:text-primary transition-colors block mb-1">
                  General: {CONTACT_INFO.email}
                </a>
                <a href={`mailto:${CONTACT_INFO.emailClinical}`} className="text-on-surface-variant hover:text-primary transition-colors block">
                  Clinical: {CONTACT_INFO.emailClinical}
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl text-on-surface mb-1">Call Us</h4>
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-on-surface-variant hover:text-primary transition-colors block mb-1">
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline flex items-center gap-1"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-xl text-on-surface mb-1">Visit Us</h4>
                <a
                  href={CONTACT_INFO.addressMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.address}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Clock className="text-primary w-6 h-6" />
              <h4 className="font-headline font-bold text-xl text-on-surface">Response Times</h4>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">General Inquiries</span>
                <span className="font-bold text-primary">24 Hours</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Clinical Intake</span>
                <span className="font-bold text-primary">4–6 Hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant">Partnership Proposals</span>
                <span className="font-bold text-primary">48 Hours</span>
              </div>
            </div>
          </motion.div>

          <motion.a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-green-600 rounded-3xl p-8 text-white flex items-center gap-6 hover:bg-green-700 transition-colors"
          >
            <div className="bg-white/20 p-4 rounded-2xl">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-xl mb-1">Chat on WhatsApp</h4>
              <p className="text-white/80 text-sm">Available Mon–Sat, 9am–5pm WAT</p>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Google Maps Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-16 rounded-3xl overflow-hidden shadow-xl border border-outline-variant/10 h-80"
      >
        <iframe
          title="BlakMoh Consulting Location"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=30+Lagos+Abeokuta+Expressway+Cement+Bus+Stop+Lagos+Nigeria&output=embed&z=15"
        />
      </motion.div>
    </div>
  );
}
