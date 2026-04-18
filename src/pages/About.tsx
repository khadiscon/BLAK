import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const boardMembers = [
  { name: 'Mohammad Ahmed', role: 'CEO/Lead Consultant' },
  { name: 'Prof D.A Oluwole', role: 'Member, Board of Expert — Psychological Services' },
  { name: 'Mr Abdulrahman Lekk', role: 'Member, Board of Expert — Management Consulting' },
  { name: 'Dr Bukola Lawal', role: 'Member, Board of Experts, Test & Measurement' },
];

const coreValues = [
  'Positivity',
  'Resourcefulness',
  'Integrity',
  'Conscientiousness',
  'Excellence and Dependability',
];

const faqs = [
  {
    q: 'What types of counseling services does BlakMoh Consulting offer?',
    a: 'BlakMoh Consulting offers a wide range of counseling services tailored to meet the needs of individuals, groups, and organizations. Our services include individual counseling, group counseling, workplace counseling, career counseling, family counseling, and more. We also provide online and offline counseling support to clients in Nigeria and abroad.',
  },
  {
    q: 'What training courses are available at BlakMoh Consulting?',
    a: 'We offer a variety of training courses focused on personal development, professional growth, and organizational wellbeing. Contact us to learn about current offerings and upcoming programs.',
  },
  {
    q: 'How can workplace counseling benefit my organization?',
    a: 'Workplace counseling helps improve employee mental health, reduce absenteeism, boost productivity, and foster a healthier organizational culture.',
  },
  {
    q: 'What is positive psychology, and how does BlakMoh Consulting incorporate it into its services?',
    a: 'Positive psychology focuses on strengths, wellbeing, and flourishing. BlakMoh integrates these principles across all services to help individuals and organizations build on what works.',
  },
  {
    q: 'How are counseling sessions conducted at BlakMoh Consulting?',
    a: 'Sessions are conducted both in-person at our Lagos office and online via secure video platforms, tailored to client preferences and availability.',
  },
  {
    q: 'What is the process for enrolling in training courses at BlakMoh Consulting?',
    a: 'Reach out via our contact page or email info@blakmoh.com, and our team will guide you through available programs, schedules, and the enrollment process.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left bg-white hover:bg-stone-50 transition-colors"
      >
        <span className="font-semibold text-stone-800 pr-4 text-sm md:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-green-600 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 py-5 text-stone-600 leading-relaxed bg-stone-50 border-t border-stone-100 text-sm md:text-base">
              {a}
            </p>
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

      {/* Hero */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm block mb-3">
              Developing Minds,
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-stone-900 leading-[1.1] mb-6">
              Empowering Minds,<br />Elevating Potential
            </h1>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              BlakMoh Consulting (BN3303037) is a learning organization providing tailored solutions to all categories
              of persons and organizations in need of psychological support services and capacity building solutions
              that aid in the development, management and enhancement of human potential in personal and professional life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition-colors uppercase tracking-wide"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <PlaceholderImage className="w-full aspect-[4/3] rounded-2xl shadow-xl" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 md:px-12 py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 flex flex-col md:flex-row shadow-sm">
            <PlaceholderImage className="w-full md:w-2/5 h-60 md:h-auto shrink-0" />
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h2>
              <p className="text-stone-600 leading-relaxed">
                To enhance overall well-being and life satisfaction both at home and work, focus on balanced routines,
                effective stress management, healthy relationships, continuous learning, and personal growth.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 flex flex-col md:flex-row shadow-sm">
            <PlaceholderImage className="w-full md:w-2/5 h-60 md:h-auto shrink-0" />
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
              <p className="text-stone-600 leading-relaxed">
                Facilitate career development and flourishing at any phase in Africa by utilizing strength-based principles
                to maximize human capabilities and foster a state of flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Expertise */}
      <section id="team" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-14">
            Meet The Board of Expertise
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <PlaceholderImage className="w-full aspect-[3/4] rounded-xl mb-4 shadow-md" />
                <h3 className="font-bold text-stone-900 text-base">{member.name}</h3>
                <p className="text-stone-500 text-sm mt-1 leading-snug">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setSlide((s) => Math.max(0, s - 1))}
              className="w-10 h-10 rounded-full border-2 border-stone-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {[0, 1].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-full transition-colors ${i === slide ? 'bg-stone-900' : 'bg-stone-300'}`} />
              ))}
            </div>
            <button
              onClick={() => setSlide((s) => Math.min(1, s + 1))}
              className="w-10 h-10 rounded-full border-2 border-stone-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 md:px-12 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-8">Core Values</h2>
            <div className="space-y-3">
              {coreValues.map((value) => (
                <div key={value} className="flex items-center gap-4 border border-stone-200 rounded-xl px-5 py-4 bg-white shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="font-bold text-stone-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <PlaceholderImage className="w-full aspect-[4/3] rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden min-h-[280px] flex items-center">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-stone-900/80" />
        <div className="relative z-10 px-6 md:px-12 py-16 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/70 uppercase tracking-widest text-sm font-semibold mb-3">
              WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase">
              NEED A CONSULTATION?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-700 transition-colors whitespace-nowrap uppercase tracking-wide"
          >
            CONTACT US <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </section>

    </div>
  );
}
