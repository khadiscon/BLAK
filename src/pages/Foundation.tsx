import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Heart, Shield, Lightbulb, Users, Leaf } from 'lucide-react';
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

const pillars = [
  { label: 'Advocacy', icon: Shield, desc: 'Championing mental health rights and reducing stigma across African communities.' },
  { label: 'Psychosocial Support', icon: Heart, desc: 'Providing accessible emotional and psychological care where it matters most.' },
  { label: 'Research & Development', icon: Lightbulb, desc: 'Building evidence-based solutions grounded in Africa-specific mental health data.' },
];

const focusAreas = [
  'Perinatal Mental Health',
  'Climate Change & Mental Well-being',
  'Psychosocial Oncology Care',
  'Youth Mental Health & Development',
  'Faith-based Mental Health Outreach',
  "Men's Mental Health & Well-being",
];

const coreValues = [
  { label: 'Compassion', icon: Heart },
  { label: 'Integrity', icon: Shield },
  { label: 'Inclusivity', icon: Users },
  { label: 'Innovation', icon: Lightbulb },
  { label: 'Collaboration', icon: Leaf },
];

export default function Foundation() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[520px] flex flex-col items-center justify-center text-center overflow-hidden px-6">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-on-surface/70 via-on-surface/60 to-on-surface/80" />
        {/* Foundation badge */}
        <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg z-10">
          <div className="text-center leading-tight px-1">
            <div className="text-primary font-extrabold text-[9px] tracking-tighter">BLAK</div>
            <div className="text-on-surface font-extrabold text-[9px] tracking-tighter">MOH</div>
            <div className="text-outline text-[7px] leading-tight">WELLBEING<br />FOUNDATION</div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-primary-fixed font-semibold text-xs uppercase tracking-widest mb-6">
            A Journey Towards Mental Strength
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
            BlakMoh Wellbeing Foundation
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            A mental health and well-being organization dedicated to providing accessible, culturally relevant,
            and sustainable mental health solutions for African communities.
          </p>
        </motion.div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface">
              The Journey Towards Mental Strength
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }} whileHover={{ y: -5 }}
                  className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-on-surface mb-3 uppercase tracking-wide">{p.label}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who We Are + Focus ── */}
      <section className="px-6 md:px-12 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-4">Our Story</span>
            <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface mb-6">Who We Are</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              BlakMoh Well-being Foundation was established in October 2024 as a mental health and well-being
              organization dedicated to creating accessible, culturally relevant, and sustainable mental health
              solutions for African communities. Through advocacy, psychosocial support, research, and partnerships,
              we are building a mentally resilient Africa.
            </p>
            <PlaceholderImage className="w-full aspect-[4/3] rounded-[2rem] shadow-xl" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-4">Focus Areas</span>
            <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface mb-8">We Focus On</h2>
            <div className="space-y-3">
              {focusAreas.map((area, i) => (
                <motion.div key={area} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 bg-surface-container-lowest rounded-2xl px-5 py-4 border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-on-surface">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Vision / Mission / Values ── */}
      <section className="px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="bg-primary rounded-[2rem] p-10 text-on-surface">
              <h3 className="text-2xl font-extrabold mb-4 text-white">Our Vision</h3>
              <p className="leading-relaxed text-white/85">
                A resilient and flourishing Africa, where mental well-being is prioritized, and individuals and
                communities have the resources to reach their full potential.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="bg-sky-500 rounded-[2rem] p-10">
              <h3 className="text-2xl font-extrabold mb-4 text-white">Our Mission</h3>
              <p className="leading-relaxed text-white/85">
                To reduce stigma, promote emotional well-being, and provide innovative mental health solutions
                tailored to Africa's unique challenges.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-amber-400 rounded-[2rem] p-10">
            <h3 className="text-2xl font-extrabold text-on-surface mb-6">Our Core Values</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {coreValues.map(val => {
                const Icon = val.icon;
                return (
                  <div key={val.label} className="flex items-center gap-2 bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-full">
                    <Icon className="w-4 h-4 text-on-surface" />
                    <span className="font-bold text-on-surface text-sm">{val.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden min-h-[380px] flex items-center justify-center text-center px-6">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-on-surface/82" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-5">Join Us Today!</h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
            Together, we can create a resilient and thriving Africa.<br />
            Join us in our mission to empower communities and promote holistic wellbeing.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold hover:opacity-90 hover:translate-y-[-2px] transition-all duration-300">
            JOIN US <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
