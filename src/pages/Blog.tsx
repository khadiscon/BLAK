import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Calendar, MessageCircle, Search, ArrowRight } from 'lucide-react';

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
  {
    title: 'The Father Factor',
    excerpt: 'The Father Factor. A few weeks ago, I had the privilege of speaking on the topic of "Breaking the Cycle: Empowering Fathers to Raise Emotionally Healthy Sons."',
    date: 'September 16, 2024',
    comments: 0,
    category: 'BLAKMOH WELLBEING',
  },
  {
    title: 'The Limits of Self-Disclosure in Therapy: The Dangers of Trauma Bonding',
    excerpt: '"One of the hardest parts of therapy is revealing ourselves." The Limits of Self-Disclosure in Therapy explores how over-sharing can blur professional boundaries.',
    date: 'September 16, 2024',
    comments: 0,
    category: 'journal',
  },
  {
    title: 'Challenging Experiences or Traumatic Experiences: The Use, Abuse, and Misuse of the word- "Trauma"',
    excerpt: 'The word "trauma" has become a ubiquitous part of everyday language. But are we using it correctly? This piece unpacks the clinical meaning versus popular usage.',
    date: 'September 16, 2024',
    comments: 0,
    category: 'THE HELPING TRIBE',
  },
  {
    title: 'Depression and Sense of Agency',
    excerpt: '"The greatest discovery of my generation is that a human being can alter his life by altering his attitudes." — William James. Depression often strips individuals of their sense of control.',
    date: 'September 16, 2024',
    comments: 0,
    category: 'journal',
  },
  {
    title: 'Finding Hope in Despair: The Role of Spiritual Coping and Social Support in Navigating Terminal Illness and End-of-Life Care',
    excerpt: '"Who no go, no know. Who no come, no see." Facing a terminal illness, either personally or through a loved one, is one of life\'s most profound challenges.',
    date: 'September 16, 2024',
    comments: 0,
    category: 'THE HELPING TRIBE\'S JOURNEY',
  },
];

const recentPosts = articles.map((a) => a.title);

const categories = [
  'BLAKMOH WELLBEING',
  'journal',
  'THE HELPING TRIBE',
  "THE HELPING TRIBE'S JOURNEY",
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-hidden bg-white">

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

          {/* ── Main articles ── */}
          <main className="space-y-12">
            {filtered.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="border border-stone-200 rounded-xl overflow-hidden shadow-sm"
              >
                <PlaceholderImage className="w-full h-64 md:h-80" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 text-xs text-stone-500 mb-3 flex-wrap">
                    <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {article.comments} Comments</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-5 text-sm md:text-base">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-green-600 font-bold text-sm hover:text-green-700 uppercase tracking-wide transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}

            {filtered.length === 0 && (
              <p className="text-stone-500 text-center py-16">No posts found for "{searchQuery}".</p>
            )}
          </main>

          {/* ── Sidebar ── */}
          <aside className="space-y-8">

            {/* Search */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-lg mb-4">Search</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border border-stone-200 rounded-md px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-500 transition"
                />
                <button className="bg-green-600 text-white px-4 py-2.5 rounded-md hover:bg-green-700 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-lg mb-4">Recent Posts</h3>
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <a
                    key={post}
                    href="#"
                    className="block text-sm text-stone-600 hover:text-green-600 transition-colors leading-snug border-b border-stone-200 pb-3 last:border-0 last:pb-0"
                  >
                    {post}
                  </a>
                ))}
              </div>
            </div>

            {/* Recent Comments */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-lg mb-4">Recent Comments</h3>
              <p className="text-sm text-stone-500">No comments to show.</p>
            </div>

            {/* Categories */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="block text-sm text-stone-600 hover:text-green-600 transition-colors border-b border-stone-200 pb-2 last:border-0 last:pb-0 uppercase tracking-wide"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 text-lg mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Therapy', 'Mental Health', 'Counselling', 'Wellbeing', 'Psychology', 'Trauma', 'Self-Care'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-stone-200 text-stone-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 hover:text-green-700 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
