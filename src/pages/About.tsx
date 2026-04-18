import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Verified, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const boardMembers = [
  { name: 'Mohammad Ahmed', role: 'CEO/Lead Consultant', initials: 'MA' },
  { name: 'Prof D.A Oluwole', role: 'Member, Board of Expert — Psychological Services', initials: 'DO' },
  { name: 'Mr Abdulrahman Lekk', role: 'Member, Board of Expert — Management Consulting', initials: 'AL' },
  { name: 'Dr Bukola Lawal', role: 'Member, Board of Experts, Test & Measurement', initials: 'BL' },
];

const coreValues = [
  { label: 'Positivity', icon: Verified },
  { label: 'Resourcefulness', icon: TrendingUp },
  { label: 'Integrity', icon: CheckCircle },
  { label: 'Conscientiousness', icon: Users },
  { label: 'Excellence and Dependability', icon: Verified },
];

const faqs = [
  { q: 'What types of counseling services does BlakMoh Consulting offer?', a: 'BlakMoh Consulting offers a wide range of counseling services tailored to meet the needs of individuals, groups, and organizations — including individual, group, workplace, career, and family counseling, both online and offline.' },
  { q: 'What training courses are available at BlakMoh Consulting?', a: 'We offer training courses focused on personal development, professional growth, and organizational wellbeing. Contact us to learn about current offerings and upcoming programs.' },
  { q: 'How can workplace counseling benefit my organization?', a: 'Workplace counseling improves employee mental health, reduces absenteeism, boosts productivity, and fosters a healthier culture.' },
  { q: 'What is positive psychology, and how does BlakMoh incorporate it?', a: 'Positive psychology focuses on strengths and flourishing. BlakMoh integrates these principles to help individuals and organizations build on what works.' },
  { q: 'How are counseling sessions conducted?', a: 'Sessions are conducted in-person at our Lagos office and online via secure video platforms, tailored to client preferences.' },
  { q: 'What is the process for enrolling in training courses?', a: 'Reach out via our contact page or email info@blakmoh.com, and our team will guide you through available programs and enrollment.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden border border-outline-variant/30">
      <button onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
        <span className="font-semibold text-on-surface pr-4 text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="px-6 py-5 text-on-surface-variant leading-relaxed bg-surface-container-low border-t border-outline-variant/20 text-sm md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function About() {
  const [slide, setSlide] = useState(0);

  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative px-6 md:px-12 py-20 md:py-32 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 text-primary font-semibold text-xs uppercase tracking-widest mb-6">
              Developing Minds
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6">
              Empowering Minds,<br />
              <span className="text-primary">Elevating Potential</span>
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              BlakMoh Consulting (BN3303037) is a learning organization providing tailored solutions to all categories
              of persons and organizations in need of psychological support services and capacity building solutions.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold hover:translate-y-[-2px] transition-all duration-300 shadow-lg">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <PlaceholderImage className="w-full aspect-[4/3]" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-3xl shadow-xl border border-outline-variant/15 hidden md:block">
              <div className="flex items-center gap-3 mb-1">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="font-bold text-sm">15K+ Clients Helped</span>
              </div>
              <p className="text-xs text-on-surface-variant">Guided toward better wellbeing.</p>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary-container/5 to-transparent rounded-bl-[10rem]" />
      </section>

      {/* ── Vision & Mission ── */}
      <section className="px-6 md:px-12 py-20 bg-surface-container-low">
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { title: 'Our Vision', text: 'To enhance overall well-being and life satisfaction both at home and work, focus on balanced routines, effective stress management, healthy relationships, continuous learning, and personal growth.' },
            { title: 'Our Mission', text: 'Facilitate career development and flourishing at any phase in Africa by utilizing strength-based principles to maximize human capabilities and foster a state of flow.' },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
              className="bg-surface-container-lowest rounded-[2rem] overflow-hidden border border-outline-variant/10 flex flex-col md:flex-row shadow-sm hover:shadow-lg transition-shadow duration-500">
              <PlaceholderImage className="w-full md:w-2/5 h-56 md:h-auto shrink-0" />
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="w-10 h-1 bg-primary rounded-full mb-5" />
                <h2 className="text-2xl font-extrabold text-on-surface mb-4">{item.title}</h2>
                <p className="text-on-surface-variant leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Board of Expertise ── */}
      <section id="team" className="py-20 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface">
              Meet The Board of Expertise
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
                className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="relative">
                  <PlaceholderImage className="w-full aspect-[3/4]" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-on-surface text-sm mb-1">{member.name}</h3>
                  <p className="text-on-surface-variant text-xs leading-snug">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-10">
            <button onClick={() => setSlide(s => Math.max(0, s - 1))}
              className="w-10 h-10 rounded-full border-2 border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {[0, 1].map(i => (
                <div key={i} className={`w-3 h-3 rounded-full transition-colors ${i === slide ? 'bg-primary' : 'bg-outline-variant'}`} />
              ))}
            </div>
            <button onClick={() => setSlide(s => Math.min(1, s + 1))}
              className="w-10 h-10 rounded-full border-2 border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface mb-10">Core Values</h2>
            <div className="space-y-3">
              {coreValues.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div key={val.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-primary-container/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-on-surface">{val.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <PlaceholderImage className="w-full aspect-[4/3] rounded-[2rem] shadow-xl" />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-on-surface p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <p className="text-surface-variant/70 uppercase tracking-widest text-xs font-semibold mb-3">
                We are here 24/7
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter">
                Need A Consultation?
              </h2>
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
              CONTACT US <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Got Questions?</span>
            <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(faq => <FAQItem key={faq.q} {...faq} />)}
          </div>
        </div>
      </section>

    </div>
  );
}
