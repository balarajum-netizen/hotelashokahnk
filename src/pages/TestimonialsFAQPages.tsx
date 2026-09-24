import React, { useState } from 'react';
import { 
  Star, 
  HelpCircle, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  User, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { TESTIMONIALS_DATA, GENERAL_FAQS, HOTEL_ENTITY } from '../data/hotelData';

interface TestimonialsFAQProps {
  type: 'testimonials' | 'faq';
  navigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenBanquetEnquiry: () => void;
}

export const TestimonialsFAQPages: React.FC<TestimonialsFAQProps> = ({
  type,
  navigate,
  onOpenBooking,
  onOpenBanquetEnquiry
}) => {
  const isFAQ = type === 'faq';

  // FAQ state
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Testimonial submission mock state
  const [submittedReview, setSubmittedReview] = useState(false);
  const [revName, setRevName] = useState('');
  const [revRating, setRevRating] = useState(5);
  const [revComment, setRevComment] = useState('');

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revName || !revComment) return;
    setSubmittedReview(true);
  };

  const filteredFaqs = GENERAL_FAQS.filter(f => {
    const matchesCategory = faqCategory === 'All' || f.category.toLowerCase().includes(faqCategory.toLowerCase());
    const matchesSearch = !searchQuery || 
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            {isFAQ ? 'Knowledge Base' : 'Guest Reviews'}
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            {isFAQ ? 'Frequently Asked Questions' : 'Guest Testimonials & Reviews'}
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            {isFAQ
              ? 'Find clear, factual answers regarding room tariffs, restaurant menus, banquet capacities, and booking policies.'
              : 'Read authentic reflections from corporate travelers, wedding organizers, and family vacationers.'}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {isFAQ ? (
          /* FAQ Section */
          <div className="space-y-8">
            <AEOBox 
              heading="Quick Answer: Hotel Ashoka FAQ Center"
              answer="Hotel Ashoka provides 4 room categories (from ₹2,200/- to ₹4,500/-), 3 dining venues (Kanishka - Pure Veg, Kadhambari - Non-Veg, Classic - Restaurant & Bar), and 4 banquet halls (15 to 500 guests). Standard check-in is 12:00 PM and check-out is 11:00 AM."
            />

            {/* Filter & Search Bar */}
            <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 text-xs">
                {['All', 'Tariff', 'Dining', 'Banquet', 'Check-in'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFaqCategory(cat)}
                    className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                      faqCategory === cat
                        ? 'bg-amber-600 text-stone-950 font-bold'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cat === 'All' ? 'All Questions' : `${cat} FAQs`}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-stone-800 focus:border-amber-500"
                />
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-2">
                    <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                      {item.category}
                    </div>
                    <h2 className="font-serif font-bold text-lg text-stone-900">
                      {item.question}
                    </h2>
                    <p className="text-xs text-stone-600 leading-relaxed pt-1">
                      {item.answer}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-stone-500 text-xs">
                  No questions match your search query. Try another keyword or contact our front desk.
                </div>
              )}
            </div>

            {/* Still have questions CTA */}
            <div className="bg-stone-900 text-stone-100 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-serif font-bold text-base text-amber-400">Still have a question?</h3>
                <p className="text-xs text-stone-400 mt-0.5">Our reservation team is ready 24/7 to clarify tariffs and availability.</p>
              </div>
              <button
                onClick={() => navigate('/contact-us/')}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shrink-0"
              >
                Contact Hotel Ashoka
              </button>
            </div>
          </div>
        ) : (
          /* Testimonials Section */
          <div className="space-y-8">
            <AEOBox 
              heading="Quick Summary: Guest Ratings & Reviews"
              answer="Hotel Ashoka holds an aggregate 4.8 / 5 star rating across verified resident guests and event hosts, praised for transparent published tariffs, prompt front desk service, clean linen upkeep, and delicious pure-veg and non-veg culinary preparations."
            />

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS_DATA.map(t => (
                <div key={t.id} className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex text-amber-500 gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-stone-700 italic leading-relaxed">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 text-xs">
                    <div className="font-serif font-bold text-stone-900">{t.author}</div>
                    <div className="text-[11px] text-stone-500">{t.designation}</div>
                    <div className="text-[10px] text-amber-800 font-medium mt-1">{t.stayType}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Leave a review box */}
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
              <h2 className="text-xl font-serif font-bold text-stone-900">
                Share Your Hotel Ashoka Experience
              </h2>
              {submittedReview ? (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you {revName}! Your review has been submitted for verification.</span>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-medium text-stone-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={revName}
                        onChange={e => setRevName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-stone-900 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-stone-700 mb-1">Star Rating</label>
                      <select
                        value={revRating}
                        onChange={e => setRevRating(Number(e.target.value))}
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-stone-900 focus:border-amber-500"
                      >
                        <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                        <option value="4">★★★★☆ (4 Stars - Very Good)</option>
                        <option value="3">★★★☆☆ (3 Stars - Average)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Your Feedback / Review *</label>
                    <textarea
                      rows={3}
                      required
                      value={revComment}
                      onChange={e => setRevComment(e.target.value)}
                      placeholder="Tell future guests about your room stay, dining experience, or banquet celebration..."
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-stone-900 focus:border-amber-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-2.5 px-5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs"
                  >
                    Submit Verified Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
