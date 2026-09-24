import React from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ChevronRight, 
  Share2, 
  Bookmark,
  Check
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { BLOG_ARTICLES, BlogPost } from '../data/hotelData';

interface BlogPagesProps {
  subPath: string; // '', or article slug
  navigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenBanquetEnquiry: () => void;
}

export const BlogPages: React.FC<BlogPagesProps> = ({
  subPath,
  navigate,
  onOpenBooking,
  onOpenBanquetEnquiry
}) => {
  const cleanSub = subPath.replace(/^\/|\/$/g, '');
  const matchedPost = BLOG_ARTICLES.find(p => p.slug === cleanSub);

  if (matchedPost) {
    return (
      <SingleBlogPostView 
        post={matchedPost} 
        navigate={navigate} 
        onOpenBooking={onOpenBooking} 
        onOpenBanquetEnquiry={onOpenBanquetEnquiry} 
      />
    );
  }

  // Blog overview
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Insights & Guides
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Hotel Ashoka Blog & Guides
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Verified local guides, tariff comparisons, dining advice, and event planning checklists from the team at Hotel Ashoka.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map(post => (
            <article 
              key={post.id}
              onClick={() => navigate(`/blog/${post.slug}/`)}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/85 text-amber-400 text-[10px] font-semibold px-2.5 py-1 rounded">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-stone-400 font-mono">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between text-xs font-semibold text-amber-800 group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Dedicated Single BlogPost View */
const SingleBlogPostView: React.FC<{
  post: BlogPost;
  navigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenBanquetEnquiry: () => void;
}> = ({ post, navigate, onOpenBooking, onOpenBanquetEnquiry }) => {
  const otherPosts = BLOG_ARTICLES.filter(p => p.id !== post.id);

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-14 px-4 border-b border-amber-900/40">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
            <button onClick={() => navigate('/blog/')} className="hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Blog</span>
            </button>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 font-mono pt-2">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        <AEOBox 
          heading="Quick Summary & Takeaways"
          answer={post.quickAnswer}
        />

        <div className="rounded-xl overflow-hidden shadow-md h-72 sm:h-96">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <article className="bg-white rounded-xl p-6 sm:p-10 border border-stone-200 shadow-xs space-y-6 text-sm text-stone-700 leading-relaxed">
          <div className="text-base text-stone-800 font-medium italic border-l-4 border-amber-600 pl-4 py-1">
            "{post.excerpt}"
          </div>

          {post.content.map((paragraph: string, i: number) => (
            <p key={i}>
              {paragraph}
            </p>
          ))}

          {/* Practical Checklist Box */}
          <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-3">
            <h3 className="font-serif font-bold text-base text-amber-950">
              Key Insights from Hotel Ashoka
            </h3>
            <ul className="space-y-2 text-xs text-amber-900">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Published tariffs on hotelashoka.in guarantee the authentic rate with no third-party markups.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Catering at banquets is handled by our dedicated vegetarian (Kanishka) and non-vegetarian (Kadhambari) kitchens.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Advance reservations ensure preferred room allocations and priority banquet dates.</span>
              </li>
            </ul>
          </div>
        </article>

        {/* Post CTA */}
        <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-xl border border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-amber-400">
              Ready to Experience Hotel Ashoka?
            </h3>
            <p className="text-xs text-stone-300 mt-1">
              Book your room starting from ₹2,200/- per night or check banquet availability.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase"
            >
              Book Room
            </button>
            <button
              onClick={onOpenBanquetEnquiry}
              className="px-5 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs border border-stone-700"
            >
              Plan Event
            </button>
          </div>
        </div>

        {/* Next Articles */}
        <div className="space-y-4">
          <h3 className="text-xl font-serif font-bold text-stone-900">
            More Articles from Hotel Ashoka
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherPosts.slice(0, 2).map(p => (
              <div 
                key={p.id}
                onClick={() => navigate(`/blog/${p.slug}/`)}
                className="p-5 rounded-xl bg-white border border-stone-200 hover:border-amber-500 cursor-pointer transition-colors shadow-2xs space-y-2"
              >
                <div className="text-[10px] font-mono text-stone-400">{p.date} • {p.readTime}</div>
                <h4 className="font-serif font-bold text-base text-stone-900 line-clamp-2">{p.title}</h4>
                <p className="text-xs text-stone-500 line-clamp-2">{p.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
