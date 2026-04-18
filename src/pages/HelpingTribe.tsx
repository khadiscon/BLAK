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

const services = [
  'Academic & Professional Training',
  'Mentorship & Career Guidance',
  'Mobile Mental Health Clinics',
  'Collaborative Research & Advocacy Programs',
];

const benefits = [
  'Professional Growth',
  'Resource Access',
  'Networking Opportunities',
  'Exclusive Membership Perks',
];

const programs = [
  'Group Therapy – Addiction, Perinatal Anxiety, Cancer Care',
  'Professional Training Courses (Certificate Courses)',
  'Confidential Case Reviews',
  'Mental Health Talks Podcast',
  'Continuing Professional Development Seminars',
];

const weeklyEvents = [
  {
    title: 'Case Study Discussions',
    desc: 'Delve into real-world counselling and therapy cases. Each week, members of The Helping Tribe collaborate to analyse complex scenarios, exchange insights, and explore best practices in client management and therapeutic techniques.',
  },
  {
    title: 'Diary of a Therapist',
    desc: 'Walk with us through the inner world of counsellors and therapists. This series offers reflective journal entries from practitioners, sharing personal experiences, professional dilemmas, and moments of transformation in their therapeutic journeys.',
  },
  {
    title: 'Therapist Keyword',
    desc: 'Each week, we highlight an essential term or concept relevant to counselling and therapy practice. These keywords provide insights into therapeutic trends, tools, and frameworks that can enhance your sessions and professional knowledge.',
  },
  {
    title: 'Psychoeducation',
    desc: 'Enhance your understanding of key mental health topics. These interactive sessions equip practitioners with tools and knowledge to educate clients, promote well-being, and develop evidence-based practices.',
  },
  {
    title: 'Group Therapy Circles',
    desc: 'Connect with fellow professionals in peer-led group therapy. These safe spaces allow members to explore their emotions, build self-awareness, and find mutual support as they balance the demands of their practice and personal lives.',
  },
  {
    title: "Street Matters: Helper's Perspective",
    desc: 'Explore the role of therapists and counsellors beyond the office. This series offers stories, insights, and reflections on community outreach, focusing on how we can make a difference in everyday life through compassion and engagement.',
  },
];

export default function HelpingTribe() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[420px] flex flex-col items-center justify-end overflow-hidden pb-16">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-stone-900/60" />

        {/* Tribe logo badge */}
        <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg z-10">
          <div className="text-center leading-tight px-1">
            <div className="text-green-600 font-extrabold text-[10px] tracking-tighter">THE</div>
            <div className="text-stone-700 font-extrabold text-[10px] tracking-tighter">HELPING</div>
            <div className="text-green-600 font-extrabold text-[10px] tracking-tighter">TRIBE</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 md:px-12 max-w-5xl text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            The Helping Tribe School of Counselling and Positive Psychology
          </h1>
        </motion.div>
      </section>

      {/* ── Intro: Nurturing Excellence Together ── */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <PlaceholderImage className="w-full aspect-[4/3] rounded-2xl shadow-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-green-700 mb-5">Nurturing Excellence Together</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              The "Helping Tribe," powered by BlakMoh Consulting, is a learning community designed to support
              budding therapists. You might be a skilled professional but struggle with the capacity to initiate,
              manage and conclude therapeutic engagements.
            </p>
            <h3 className="text-lg font-bold text-green-700 mb-3">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              Our mission is to foster a nurturing environment that promotes professional growth, access to
              valuable resources, networking opportunities, and exclusive membership perks.
            </p>
            <p className="text-stone-600 leading-relaxed">
              By joining the Helping Tribe, therapists will be equipped with the tools, knowledge, and support
              necessary to thrive in their careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Why Join? ── */}
      <section className="px-6 md:px-12 py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-3">
              Why Join The Helping Tribe?
            </h2>
            <div className="w-64 h-1 bg-stone-900 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="border-2 border-green-500 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-green-600 mb-6">Services</h3>
              <div className="space-y-4">
                {services.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm leading-snug">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="border-2 border-green-500 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-green-600 mb-6">Benefits</h3>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="border-2 border-green-500 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-green-600 mb-6">Programs</h3>
              <div className="space-y-4">
                {programs.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm leading-snug">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden min-h-[320px] flex items-center justify-center text-center">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-stone-900/78" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 px-6 md:px-12 max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Join Us Today!</h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            By joining The Helping Tribe, you become part of a movement towards a more collaborative and
            supportive future for budding therapists.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-700 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-green-800 transition-colors"
          >
            JOIN US
          </Link>
        </motion.div>
      </section>

      {/* ── Programs and Monthly Routines ── */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: events list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-bold text-green-700 mb-2">Programs and Monthly Routines</h2>
            <h3 className="text-3xl font-extrabold text-stone-900 mb-8">Weekly Events</h3>

            <div className="space-y-6">
              {weeklyEvents.map((ev) => (
                <div key={ev.title} className="flex gap-3">
                  <ArrowRight className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-stone-900">{ev.title} </span>
                    <span className="text-stone-600 text-sm leading-relaxed">{ev.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Monthly Event */}
            <div className="mt-10">
              <h3 className="text-2xl font-extrabold text-stone-900 mb-6">Monthly Event</h3>
              <div className="flex gap-3">
                <ArrowRight className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-stone-900">Continuing Professional Development (CPD) Course </span>
                  <span className="text-stone-600 text-sm leading-relaxed">
                    Stay ahead in your practice with our monthly CPD events. These courses provide in-depth
                    training on emerging trends, therapeutic models, and essential skills, helping members
                    maintain competence and excellence in their practice.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <PlaceholderImage className="w-full aspect-[3/4] rounded-2xl shadow-xl" />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
