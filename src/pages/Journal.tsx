import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { User, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

function PlaceholderImage({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-surface-container flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-2 text-outline">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs font-medium">Image Placeholder</span>
      </div>
    </div>
  );
}

const articles = [
  { title: 'The Father Factor', date: 'September 16, 2024', comments: 0, path: '/journal/father-factor', category: 'BLAKMOH WELLBEING' },
  { title: 'The Limits of Self-Disclosure in Therapy: The Dangers of Trauma Bonding', date: 'September 16, 2024', comments: 0, path: '/journal/self-disclosure', category: 'journal' },
  { title: 'Challenging Experiences or Traumatic Experiences: The Use, Abuse, and Misuse of the word- "Trauma"', date: 'September 16, 2024', comments: 0, path: '/journal/trauma', category: 'THE HELPING TRIBE' },
  { title: 'Depression and Sense of Agency', date: 'September 16, 2024', comments: 0, path: '/journal/depression-agency', category: 'journal' },
  { title: 'Finding Hope in Despair: The Role of Spiritual Coping and Social Support in Navigating Terminal Illness and End-of-Life Care', date: 'September 16, 2024', comments: 0, path: '/journal/hope-despair', category: "THE HELPING TRIBE'S JOURNEY" },
];

export default function Journal() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-on-surface/55" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-primary-fixed font-semibold text-xs uppercase tracking-widest mb-5">
            Insights & Articles
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">The Journal</h1>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-3">Latest</span>
            <h2 className="text-3xl font-extrabold tracking-tighter text-on-surface">Recent Articles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, i) => (
              <motion.article key={article.path}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
                className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
                <div className="relative overflow-hidden">
                  <PlaceholderImage className="w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-on-surface leading-snug mb-4 flex-1 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[11px] text-outline mb-4 flex-wrap">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> admin</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {article.comments}</span>
                  </div>
                  <Link to={article.path}
                    className="inline-flex items-center gap-1.5 bg-primary-container text-on-primary-container text-xs font-bold px-4 py-2.5 rounded-full hover:opacity-90 hover:gap-2.5 transition-all duration-300 w-fit">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
