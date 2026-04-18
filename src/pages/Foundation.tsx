import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
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

const pillars = [
  { label: 'ADVOCACY', color: 'text-green-600' },
  { label: 'PSYCHOSOCIAL SUPPORT', color: 'text-blue-500' },
  { label: 'RESEARCH AND DEVELOPMENT', color: 'text-amber-500' },
];

const focusAreas = [
  'Perinatal Mental Health',
  'Climate Change & Mental Well-being',
  'Psychosocial Oncology Care',
  'Youth Mental Health & Development',
  'Faith-based Mental Health Outreach',
  "Men's Mental Health & Well-being",
];

export default function Foundation() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[480px] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background */}
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-stone-900/65" />

        {/* Foundation logo badge — top right */}
        <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg z-10">
          <div className="text-center leading-tight">
            <div className="text-green-600 font-extrabold text-xs tracking-tighter">BLAK</div>
            <div className="text-stone-700 font-extrabold text-xs tracking-tighter">MOH</div>
            <div className="text-[9px] text-stone-500 leading-tight">WELLBEING<br />FOUNDATION</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 md:px-12 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            BlakMoh Wellbeing Foundation
          </h1>
          <p className="text-white/80 italic text-lg md:text-xl mb-6">
            "…A Journey Towards Mental Strength"
          </p>
          <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            BlakMoh Well-being Foundation is a mental health and well-being organization dedicated to providing
            accessible, culturally relevant, and sustainable mental health solutions for African communities.
            Rooted in compassion, inclusivity, and innovation, we integrate preventive, remedial, and
            research-driven strategies to address mental well-being across diverse populations.
          </p>
        </motion.div>
      </section>

      {/* ── Journey Section ── */}
      {/* dotted bg via inline style */}
      <section
        className="px-6 md:px-12 py-20"
        style={{ background: 'radial-gradient(circle, #d1d5db 1px, transparent 1px) 0 0 / 20px 20px, #f5f5f0' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight mb-10">
              The Journey Towards Mental Strength
            </h2>
            <div className="space-y-5">
              {pillars.map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <ArrowRight className={`w-6 h-6 shrink-0 ${p.color}`} />
                  <span className={`font-extrabold text-base tracking-wide ${p.color}`}>{p.label}</span>
                </div>
              ))}
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

        {/* ── Who We Are + We Focus On ── */}
        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-stone-900 mb-5">Who We Are</h3>
            <p className="text-stone-600 leading-relaxed text-justify">
              BlakMoh Well-being Foundation was established in October 2024 as a mental health and well-being
              organization dedicated to creating accessible, culturally relevant, and sustainable mental health
              solutions for African communities. Through advocacy, psychosocial support, research, and
              partnerships, we are building a mentally resilient Africa.
            </p>
          </motion.div>

          {/* We Focus On */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-stone-900 mb-5">We Focus On</h3>
            <div className="space-y-3">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-stone-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Vision / Mission / Core Values blocks ── */}
      <section
        className="px-6 md:px-12 py-12"
        style={{ background: 'radial-gradient(circle, #d1d5db 1px, transparent 1px) 0 0 / 20px 20px, #f5f5f0' }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Top row: Vision (green) + Mission (blue) */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-green-600 p-10 text-stone-900">
              <h3 className="text-2xl font-extrabold mb-4">Our Vision</h3>
              <p className="leading-relaxed text-stone-900/90">
                A resilient and flourishing Africa, where mental well-being is prioritized, and individuals
                and communities have the resources to reach their full potential.
              </p>
            </div>
            <div className="bg-sky-500 p-10 text-stone-900">
              <h3 className="text-2xl font-extrabold mb-4">Our Mission</h3>
              <p className="leading-relaxed text-stone-900/90">
                To reduce stigma, promote emotional well-being, and provide innovative mental health solutions
                tailored to Africa's unique challenges.
              </p>
            </div>
          </div>
          {/* Core Values — full width amber */}
          <div className="bg-amber-400 p-10 text-stone-900">
            <h3 className="text-2xl font-extrabold mb-4">Our Core Values</h3>
            <p className="text-center text-lg font-medium tracking-wide">
              Compassion | Integrity | Inclusivity | Innovation | Collaboration
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden min-h-[380px] flex items-center justify-center text-center">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-stone-900/75" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-6 md:px-12 max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Join Us Today!
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
            Together, we can create a resilient and thriving Africa.<br />
            Join us in our mission to empower communities and promote holistic wellbeing.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-700 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-green-800 transition-colors"
          >
            JOIN US
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
