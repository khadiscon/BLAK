import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Facebook, Twitter, Linkedin, ArrowLeft, ChevronRight, User, Mail } from 'lucide-react';

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

const recentPosts = [
  { title: 'The Father Factor', path: '/journal/father-factor' },
  { title: 'The Limits of Self-Disclosure in Therapy: The Dangers of Trauma Bonding', path: '/journal/self-disclosure' },
  { title: 'Challenging Experiences or Traumatic Experiences: The Use, Abuse, and Misuse of the word- "Trauma"', path: '/journal/trauma' },
  { title: 'Depression and Sense of Agency', path: '/journal/depression-agency' },
  { title: 'Finding Hope in Despair: The Role of Spiritual Coping and Social Support in Navigating Terminal Illness and End-of-Life Care', path: '/journal/hope-despair' },
];

const categories = ['BLAKMOH WELLBEING', 'journal', 'THE HELPING TRIBE', "THE HELPING TRIBE'S JOURNEY"];
const tags = ['Therapy', 'Mental Health', 'Counselling', 'Wellbeing', 'Psychology', 'Trauma', 'Self-Care', 'Fatherhood', 'Positive Psychology'];

interface ArticleLayoutProps {
  title: string;
  date: string;
  comments?: number;
  children: React.ReactNode;
  hashtags?: string[];
  authorName?: string;
  authorBio?: string;
  authorBio2?: string;
  prevPost?: { title: string; path: string };
  nextPost?: { title: string; path: string };
}

export default function ArticleLayout({
  title,
  date,
  comments = 0,
  children,
  hashtags = [],
  authorName,
  authorBio,
  authorBio2,
  prevPost,
  nextPost,
}: ArticleLayoutProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [comment, setComment] = useState({ text: '', name: '', email: '', save: false });

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

          {/* ── Main Article ── */}
          <main>
            {/* Back link */}
            <Link to="/journal" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </Link>

            {/* Featured image */}
            <div className="rounded-[1.5rem] overflow-hidden mb-8 shadow-lg">
              <PlaceholderImage className="w-full aspect-[16/7]" />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-4 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                {comments} Comments
              </span>
              <span>{date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface mb-8 leading-tight">
              {title}
            </h1>

            {/* Article body */}
            <div className="prose-custom text-on-surface-variant leading-relaxed space-y-5 text-base">
              {children}
            </div>

            {/* Hashtags */}
            {hashtags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {hashtags.map(tag => (
                  <span key={tag} className="text-primary font-medium text-sm hover:text-primary/70 cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio */}
            {authorName && (
              <div className="mt-10 border-t border-outline-variant/20 pt-8">
                <div className="bg-surface-container-low rounded-[1.5rem] p-6 border border-outline-variant/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                      <User className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-on-surface text-lg">{authorName}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <Facebook className="w-4 h-4 text-outline hover:text-primary cursor-pointer transition-colors" />
                        <Twitter className="w-4 h-4 text-outline hover:text-primary cursor-pointer transition-colors" />
                        <Linkedin className="w-4 h-4 text-outline hover:text-primary cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                  {authorBio && <p className="text-on-surface-variant text-sm leading-relaxed mb-3">{authorBio}</p>}
                  {authorBio2 && <p className="text-on-surface-variant text-sm leading-relaxed">{authorBio2}</p>}
                </div>
              </div>
            )}

            {/* Post Navigation */}
            {(prevPost || nextPost) && (
              <div className="mt-8 border-t border-outline-variant/20 pt-6 flex justify-between gap-4">
                {prevPost && (
                  <Link to={prevPost.path} className="flex items-center gap-3 group max-w-[48%]">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <PlaceholderImage className="w-full h-full" />
                    </div>
                    <div>
                      <span className="text-xs text-outline block mb-0.5">Previous Post</span>
                      <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-2">{prevPost.title}</span>
                    </div>
                  </Link>
                )}
                {nextPost && (
                  <Link to={nextPost.path} className="flex items-center gap-3 group max-w-[48%] ml-auto text-right">
                    <div>
                      <span className="text-xs text-outline block mb-0.5">Next Post</span>
                      <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-2">{nextPost.title}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <PlaceholderImage className="w-full h-full" />
                    </div>
                  </Link>
                )}
              </div>
            )}

            {/* Comment Form */}
            <div className="mt-12 border-t border-outline-variant/20 pt-10">
              <h2 className="text-2xl font-extrabold tracking-tighter text-on-surface mb-2">Leave A Comment</h2>
              <p className="text-xs text-on-surface-variant mb-6">Your email address will not be published. Required fields are marked *</p>
              <div className="bg-surface-container-low rounded-[1.5rem] p-6 border border-outline-variant/10 space-y-4">
                <textarea
                  value={comment.text}
                  onChange={e => setComment({ ...comment, text: e.target.value })}
                  placeholder="Write Your Comment *"
                  rows={5}
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl px-5 py-4 text-sm text-on-surface placeholder:text-outline outline-none focus:ring-2 focus:ring-primary/30 resize-none transition"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={comment.name}
                      onChange={e => setComment({ ...comment, name: e.target.value })}
                      placeholder="Enter Your Name *"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl px-5 py-4 pr-12 text-sm text-on-surface placeholder:text-outline outline-none focus:ring-2 focus:ring-primary/30 transition"
                    />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      value={comment.email}
                      onChange={e => setComment({ ...comment, email: e.target.value })}
                      placeholder="Enter E-mail Address *"
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-2xl px-5 py-4 pr-12 text-sm text-on-surface placeholder:text-outline outline-none focus:ring-2 focus:ring-primary/30 transition"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                  </div>
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={comment.save}
                    onChange={e => setComment({ ...comment, save: e.target.checked })}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-xs text-on-surface-variant">Save my name, email, and website in this browser for the next time I comment.</span>
                </label>
                <button
                  onClick={() => alert('Comment submitted!')}
                  className="w-full bg-primary-container text-on-primary-container py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 hover:translate-y-[-1px] transition-all duration-300"
                >
                  POST COMMENT <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </main>

          {/* ── Sidebar ── */}
          <aside className="space-y-6">
            {/* Search */}
            <div className="bg-surface-container-low rounded-[1.5rem] p-6 border border-outline-variant/10">
              <h3 className="font-extrabold text-on-surface text-base mb-4">Search</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
                <button className="bg-primary-container text-on-primary-container px-4 py-2.5 rounded-xl hover:opacity-90 transition">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-surface-container-low rounded-[1.5rem] p-6 border border-outline-variant/10">
              <h3 className="font-extrabold text-on-surface text-base mb-4">Recent Posts</h3>
              <div className="space-y-3">
                {recentPosts.map(post => (
                  <Link key={post.path} to={post.path}
                    className="block text-xs text-on-surface-variant hover:text-primary transition-colors leading-snug border-b border-outline-variant/15 pb-3 last:border-0 last:pb-0">
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Comments */}
            <div className="bg-surface-container-low rounded-[1.5rem] p-6 border border-outline-variant/10">
              <h3 className="font-extrabold text-on-surface text-base mb-3">Recent Comments</h3>
              <p className="text-xs text-outline">No comments to show.</p>
            </div>

            {/* Categories */}
            <div className="bg-surface-container-low rounded-[1.5rem] p-6 border border-outline-variant/10">
              <h3 className="font-extrabold text-on-surface text-base mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <a key={cat} href="#"
                    className="block text-xs text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant/15 pb-2 last:border-0 last:pb-0 uppercase tracking-wide">
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-surface-container-low rounded-[1.5rem] p-6 border border-outline-variant/10">
              <h3 className="font-extrabold text-on-surface text-base mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag}
                    className="bg-surface-container text-on-surface-variant text-xs px-3 py-1.5 rounded-full hover:bg-primary-container/20 hover:text-primary cursor-pointer transition-colors">
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
