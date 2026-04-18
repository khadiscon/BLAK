import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, BookOpen, Star, Users } from 'lucide-react';
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

const cards = [
  {
    title: 'Services',
    icon: BookOpen,
    items: ['Academic & Professional Training', 'Mentorship & Career Guidance', 'Mobile Mental Health Clinics', 'Collaborative Research & Advocacy Programs'],
  },
  {
    title: 'Benefits',
    icon: Star,
    items: ['Professional Growth', 'Resource Access', 'Networking Opportunities', 'Exclusive Membership Perks'],
  },
  {
    title: 'Programs',
    icon: Users,
    items: ['Group Therapy – Addiction, Perinatal Anxiety, Cancer Care', 'Professional Training Courses (Certificate Courses)', 'Confidential Case Reviews', 'Mental Health Talks Podcast', 'Continuing Professional Development Seminars'],
  },
];

const weeklyEvents = [
  { title: 'Case Study Discussions', desc: 'Delve into real-world counselling and therapy cases. Each week, members collaborate to analyse complex scenarios, exchange insights, and explore best practices in client management.' },
  { title: 'Diary of a Therapist', desc: 'Walk through the inner world of counsellors and therapists. This series offers reflective journal entries sharing personal experiences, professional dilemmas, and moments of transformation.' },
  { title: 'Therapist Keyword', desc: 'Each week, we highlight an essential term or concept relevant to counselling practice. These keywords provide insights into therapeutic trends, tools, and frameworks.' },
  { title: 'Psychoeducation', desc: 'Enhance your understanding of key mental health topics. These interactive sessions equip practitioners with tools and knowledge to educate clients and develop evidence-based practices.' },
  { title: 'Group Therapy Circles', desc: 'Connect with fellow professionals in peer-led group therapy. These safe spaces allow members to explore their emotions, build self-awareness, and find mutual support.' },
  { title: "Street Matters: Helper's Perspective", desc: 'Explore the role of therapists beyond the office. Stories, insights, and reflections on community outreach and making a difference in everyday life through compassion.' },
];

export default function HelpingTribe() {
  return (
    <div className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[460px] flex items-end overflow-hidden pb-16 px-6">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/50 to-transparent" />
        <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg z-10">
          <div className="text-center leading-tight px-1">
            <div className="text-primary font-extrabold text-[9px] tracking-tighter">THE</div>
            <div className="text-on-surface font-extrabold text-[9px]">HELPING</div>
            <div className="text-primary font-extrabold text-[9px] tracking-tighter">TRIBE</div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-primary-fixed font-semibold text-xs uppercase tracking-widest mb-5">
            School of Counselling & Positive Psychology
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-tight">
            The Helping Tribe
          </h1>
        </motion.div>
      </section>

      {/* ── Intro ── */}
      <section className="px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <PlaceholderImage className="w-full aspect-[4/3] rounded-[2rem] shadow-2xl" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-4">Our Community</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface mb-6">
              Nurturing Excellence Together
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              The "Helping Tribe," powered by BlakMoh Consulting, is a learning community designed to support
              budding therapists. You might be a skilled professional but struggle with the capacity to initiate,
              manage and conclude therapeutic engagements.
            </p>
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10">
              <h3 className="text-base font-bold text-primary mb-3 uppercase tracking-wide">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                To foster a nurturing environment that promotes professional growth, access to valuable resources,
                networking opportunities, and exclusive membership perks. By joining the Helping Tribe, therapists
                will be equipped with the tools, knowledge, and support necessary to thrive in their careers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="px-6 md:px-12 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Membership</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface">
              Why Join The Helping Tribe?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-5 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }} whileHover={{ y: -5 }}
                  className="bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                  <div className="w-14 h-14 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-on-surface mb-6">{card.title}</h3>
                  <div className="space-y-3">
                    {card.items.map(item => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-on-surface-variant text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-on-surface p-10 md:p-16 relative overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-5">Join Us Today!</h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              By joining The Helping Tribe, you become part of a movement towards a more collaborative and
              supportive future for budding therapists.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold hover:opacity-90 hover:translate-y-[-2px] transition-all duration-300">
              JOIN US <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* ── Programs & Monthly Routines ── */}
      <section className="px-6 md:px-12 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Monthly Routines</span>
            <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface mb-10">Weekly Events</h2>
            <div className="space-y-5">
              {weeklyEvents.map((ev, i) => (
                <motion.div key={ev.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/10 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-primary-container/10 flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">{ev.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{ev.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-extrabold tracking-tighter text-on-surface mb-5">Monthly Event</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-primary-container/10 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Continuing Professional Development (CPD) Course</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Stay ahead in your practice with our monthly CPD events. In-depth training on emerging trends,
                      therapeutic models, and essential skills, helping members maintain competence and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} className="lg:sticky lg:top-28">
            <PlaceholderImage className="w-full aspect-[3/4] rounded-[2rem] shadow-2xl" />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
