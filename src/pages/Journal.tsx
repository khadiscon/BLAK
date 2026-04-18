import { motion } from 'motion/react';
import { User, Calendar, MessageCircle } from 'lucide-react';

function PlaceholderImage({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-stone-200 flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-2 text-stone-400">
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
  { title: 'The Father Factor', date: 'September 16, 2024', comments: 0 },
  { title: 'The Limits of Self-Disclosure in Therapy: The Dangers of Trauma Bonding', date: 'September 16, 2024', comments: 0 },
  { title: 'Challenging Experiences or Traumatic Experiences: The Use, Abuse, and Misuse of the word- "Trauma"', date: 'September 16, 2024', comments: 0 },
  { title: 'Depression and Sense of Agency', date: 'September 16, 2024', comments: 0 },
  { title: 'Finding Hope in Despair: The Role of Spiritual Coping and Social Support in Navigating Terminal Illness and End-of-Life Care', date: 'September 16, 2024', comments: 0 },
];

export default function Journal() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <PlaceholderImage className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-stone-900/55" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-4xl md:text-6xl font-bold text-white"
        >
          The Journal
        </motion.h1>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col"
            >
              <PlaceholderImage className="w-full aspect-[4/3] rounded-t-xl" />
              <div className="border border-t-0 border-stone-200 rounded-b-xl p-4 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-stone-900 leading-snug mb-3 flex-1">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-stone-500 mb-4 flex-wrap">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> admin
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" /> {article.comments}
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-block bg-green-600 text-white text-xs font-bold px-4 py-2 hover:bg-green-700 transition-colors uppercase tracking-wide w-fit"
                >
                  Read More
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

    </div>
  );
}
