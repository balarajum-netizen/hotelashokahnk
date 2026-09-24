import React from 'react';
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Check, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { RESTAURANTS_DATA, HOTEL_ENTITY, RestaurantInfo } from '../data/hotelData';

interface RestaurantsPagesProps {
  subPath: string; // '', 'kanishka-coffee-shop', 'kadhambari', 'classic-restaurant-bar', 'dining-faq'
  navigate: (path: string) => void;
  onOpenRestaurantEnquiry: (restaurantSlug?: string) => void;
}

export const RestaurantsPages: React.FC<RestaurantsPagesProps> = ({
  subPath,
  navigate,
  onOpenRestaurantEnquiry
}) => {
  const cleanSub = subPath.replace(/^\/|\/$/g, '');
  const matchedRest = RESTAURANTS_DATA.find(r => r.slug === cleanSub);

  if (matchedRest) {
    return (
      <IndividualRestaurantView 
        restaurant={matchedRest} 
        navigate={navigate} 
        onOpenEnquiry={onOpenRestaurantEnquiry} 
      />
    );
  }

  if (cleanSub === 'dining-faq') {
    return <DiningFaqView navigate={navigate} onOpenEnquiry={onOpenRestaurantEnquiry} />;
  }

  // Default: Main Restaurants Landing Page (/restaurants/)
  return <MainRestaurantsLandingView navigate={navigate} onOpenEnquiry={onOpenRestaurantEnquiry} />;
};

/* 1. MAIN RESTAURANTS LANDING PAGE (/restaurants/) */
const MainRestaurantsLandingView: React.FC<{
  navigate: (path: string) => void;
  onOpenEnquiry: (slug?: string) => void;
}> = ({ navigate, onOpenEnquiry }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Dining Venues
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Restaurants at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            "Discover the dining venues at Hotel Ashoka, offering options for coffee, vegetarian dining, non-vegetarian dining and restaurant & bar experiences."
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <AEOBox 
          heading="Quick Answer: Dining at Hotel Ashoka"
          answer="Hotel Ashoka features three distinct on-site dining venues: Kanishka Coffee Shop (a 100% pure vegetarian restaurant open 6:30 AM – 11:00 PM), Kadhambari (a fine dining non-vegetarian restaurant serving dum biryani, curries and tandoor), and Classic - Restaurant & Bar (a licensed lounge and bar serving beverages and appetizers)."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESTAURANTS_DATA.map(rest => (
            <div 
              key={rest.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={rest.imageUrl} 
                    alt={`${rest.name} at Hotel Ashoka`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/90 text-amber-400 font-semibold text-xs px-3 py-1 rounded-md border border-amber-700/60 backdrop-blur-xs">
                    {rest.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {rest.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800">
                    {rest.tagline}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {rest.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100 text-xs text-stone-600 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{rest.timings}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => navigate(`/restaurants/${rest.slug}/`)}
                  className="flex-1 py-2.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-colors border border-stone-200"
                >
                  View Restaurant
                </button>
                <button
                  onClick={() => onOpenEnquiry(rest.slug)}
                  className="flex-1 py-2.5 rounded bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors shadow-xs"
                >
                  Enquire Table
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dining FAQ Teaser */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900">Have Questions About Hotel Ashoka Dining?</h3>
            <p className="text-xs text-stone-600 mt-1">Review our culinary hygiene practices, kitchen segregation, and table booking policies.</p>
          </div>
          <button
            onClick={() => navigate('/restaurants/dining-faq/')}
            className="px-5 py-2.5 rounded-lg bg-stone-900 text-amber-300 font-semibold text-xs hover:bg-stone-800 shrink-0"
          >
            Read Food & Dining FAQ →
          </button>
        </div>
      </div>
    </div>
  );
};

/* 2. DEDICATED RESTAURANT VIEW */
const IndividualRestaurantView: React.FC<{
  restaurant: RestaurantInfo;
  navigate: (path: string) => void;
  onOpenEnquiry: (slug: string) => void;
}> = ({ restaurant, navigate, onOpenEnquiry }) => {
  const otherRestaurants = RESTAURANTS_DATA.filter(r => r.id !== restaurant.id);

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-14 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
            <button onClick={() => navigate('/restaurants/')} className="hover:underline">Restaurants</button>
            <span>/</span>
            <span>{restaurant.name}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            {restaurant.name} at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl leading-relaxed">
            {restaurant.tagline}
          </p>
          <div className="inline-block bg-amber-500 text-stone-950 font-bold px-3.5 py-1 rounded text-xs">
            Category: {restaurant.category}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        <AEOBox 
          heading={`Quick Answer: About ${restaurant.name}`}
          answer={restaurant.aeoAnswer}
        />

        {/* Hero image */}
        <div className="h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-stone-200">
          <img 
            src={restaurant.imageUrl} 
            alt={`${restaurant.name} dining hall ambience`} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Specifications & Dining Experience */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Dining Experience & Ambience
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed">
            {restaurant.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
              <div className="font-semibold text-stone-500">Cuisine Classification</div>
              <div className="font-bold text-stone-900 text-sm">{restaurant.cuisine}</div>
            </div>
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
              <div className="font-semibold text-stone-500">Operating Hours (Verified)</div>
              <div className="font-bold text-stone-900 text-sm">{restaurant.timings}</div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2">Ambience & Setting</h3>
            <p className="text-xs text-stone-700 leading-relaxed">{restaurant.ambience}</p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 mb-3">Verified Menu Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {restaurant.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded bg-amber-50/50 border border-amber-100">
                  <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {restaurant.category === 'Restaurant & Bar' && (
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Statutory Compliance:</strong> Service of alcoholic beverages is strictly restricted to patrons of legal drinking age holding valid government photo identification.
              </div>
            </div>
          )}
        </div>

        {/* CTA Banner */}
        <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-xl border border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-amber-400">
              Enquire About {restaurant.name}
            </h3>
            <p className="text-xs text-stone-300 mt-1">
              Reserve your table or enquire about group dining and party catering.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry(restaurant.slug)}
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all uppercase tracking-wider"
            >
              Enquire About {restaurant.name}
            </button>
            <a
              href={`tel:${HOTEL_ENTITY.phone}`}
              className="px-4 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs border border-stone-700 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dining Desk</span>
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 space-y-4">
          <h2 className="text-xl font-serif font-bold text-stone-900">
            {restaurant.name} Frequently Asked Questions
          </h2>
          <div className="divide-y divide-stone-100 text-xs">
            {restaurant.faqs.map((faq, idx) => (
              <div key={idx} className="py-3 space-y-1">
                <h3 className="font-semibold text-stone-900">{faq.question}</h3>
                <p className="text-stone-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Dining Options */}
        <div>
          <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">
            Related Dining Options at Hotel Ashoka
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherRestaurants.map(r => (
              <div 
                key={r.id}
                onClick={() => navigate(`/restaurants/${r.slug}/`)}
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 cursor-pointer transition-colors shadow-2xs space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-serif font-bold text-base text-stone-900">{r.name}</h4>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">{r.category}</span>
                </div>
                <p className="text-xs text-stone-500 line-clamp-2">{r.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. DINING FAQ VIEW (/restaurants/dining-faq/) */
const DiningFaqView: React.FC<{
  navigate: (path: string) => void;
  onOpenEnquiry: () => void;
}> = ({ navigate, onOpenEnquiry }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900 py-12 px-4 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Food & Dining FAQ
        </h1>
        <p className="text-stone-600 text-sm">
          Everything you need to know about dining at Kanishka Coffee Shop, Kadhambari, and Classic Restaurant & Bar.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm space-y-6 text-xs sm:text-sm">
        <div className="space-y-4 divide-y divide-stone-100">
          <div className="pt-3 first:pt-0 space-y-1">
            <h2 className="font-semibold text-stone-900">Is Kanishka Coffee Shop 100% pure vegetarian?</h2>
            <p className="text-stone-600">Yes. Kanishka Coffee Shop operates with a completely segregated kitchen facility dedicated solely to pure vegetarian preparation.</p>
          </div>

          <div className="pt-3 space-y-1">
            <h2 className="font-semibold text-stone-900">Can outside walk-in guests dine at Hotel Ashoka restaurants?</h2>
            <p className="text-stone-600">Yes, our dining venues welcome both in-house hotel residents and walk-in city guests. Table reservations are recommended on weekends.</p>
          </div>

          <div className="pt-3 space-y-1">
            <h2 className="font-semibold text-stone-900">Does Hotel Ashoka provide breakfast for room guests?</h2>
            <p className="text-stone-600">Breakfast packages are available and served fresh at Kanishka Coffee Shop or through in-room dining services.</p>
          </div>

          <div className="pt-3 space-y-1">
            <h2 className="font-semibold text-stone-900">What are the bar timings at Classic - Restaurant & Bar?</h2>
            <p className="text-stone-600">Classic operates from 11:00 AM to 11:30 PM daily in strict compliance with state excise regulations.</p>
          </div>
        </div>

        <div className="pt-4 flex justify-between items-center border-t border-stone-200">
          <button onClick={() => navigate('/restaurants/')} className="text-amber-800 font-semibold text-xs hover:underline">
            ← Back to All Restaurants
          </button>
          <button
            onClick={() => onOpenEnquiry()}
            className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs"
          >
            Enquire Table Reservation
          </button>
        </div>
      </div>
    </div>
  );
};
