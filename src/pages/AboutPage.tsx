import React from 'react';
import { 
  Building, 
  Utensils, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Check, 
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { HOTEL_ENTITY, ROOMS_DATA, RESTAURANTS_DATA, BANQUET_HALLS_DATA } from '../data/hotelData';

interface AboutPageProps {
  navigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenBanquetEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  navigate, 
  onOpenBooking, 
  onOpenBanquetEnquiry 
}) => {
  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen">
      {/* Header Banner */}
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Heritage & Hospitality
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            About Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            A premier hospitality destination offering comfortable accommodations, distinctive culinary venues, and stately event spaces in the city center.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* AEO Box */}
        <AEOBox 
          heading="Quick Answer: What is Hotel Ashoka?"
          answer="Hotel Ashoka (hotelashoka.in) is a central full-service hotel featuring four published room categories: Presidential Suite (₹4,500/-), Executive Suite (₹3,450/-), Executive Room (₹3,100/-), and Deluxe Room (₹2,200/-). It houses three dining venues: Kanishka Coffee Shop (Pure Veg), Kadhambari (Non-Veg), and Classic Restaurant & Bar, alongside four banquet halls accommodating 15 to 500 attendees."
        />

        {/* Section 1: About Hotel Ashoka */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            About Hotel Ashoka
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            Hotel Ashoka was founded on the enduring values of Indian hospitality: warm personal courtesy, meticulous hygiene, and culinary integrity. Situated in the city's commercial and transit nucleus, the hotel caters seamlessly to discerning business executives, wedding parties, vacationing families, and transit travelers.
          </p>
          <p className="text-stone-700 leading-relaxed text-sm">
            Over the years, Hotel Ashoka has maintained a sterling reputation for transparent pricing, attentive service, and well-maintained event infrastructure.
          </p>
        </section>

        {/* Section 2: Our Hospitality */}
        <section className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Our Hospitality Philosophy
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed">
            We believe true hospitality begins with honesty and reliability. Our room tariffs are published openly, our dining kitchen spaces are strictly segregated for vegetarian and non-vegetarian purity, and our event management team is committed to making every celebration stress-free.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="font-serif font-bold text-amber-900 text-sm mb-1">Authenticity</div>
              <p className="text-xs text-stone-600">Strict adherence to genuine published tariffs without hidden reservation markups.</p>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="font-serif font-bold text-amber-900 text-sm mb-1">Culinary Purity</div>
              <p className="text-xs text-stone-600">Pure vegetarian cuisine segregated cleanly from our dedicated non-vegetarian kitchens.</p>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="font-serif font-bold text-amber-900 text-sm mb-1">Event Dependability</div>
              <p className="text-xs text-stone-600">Proven capacity management for 15 to 500 guests with backup power and AV support.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Accommodation */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Accommodation Overview
            </h2>
            <button
              onClick={() => navigate('/rooms/')}
              className="text-xs font-semibold text-amber-800 hover:underline"
            >
              Explore All Rooms →
            </button>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed">
            Our property features four carefully calibrated room tiers designed for varying budgets and space requirements:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ROOMS_DATA.map(r => (
              <div 
                key={r.id}
                onClick={() => navigate(`/rooms/${r.slug}/`)}
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 cursor-pointer transition-colors shadow-2xs"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif font-bold text-base text-stone-900">{r.name}</h3>
                    <p className="text-xs text-stone-500 mt-0.5">{r.size} • {r.occupancy}</p>
                  </div>
                  <span className="font-mono font-bold text-amber-800 text-sm bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {r.tariffDisplay}
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-2 line-clamp-2">{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Restaurants */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Restaurants & Dining
            </h2>
            <button
              onClick={() => navigate('/restaurants/')}
              className="text-xs font-semibold text-amber-800 hover:underline"
            >
              Explore Dining Venues →
            </button>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed">
            Hotel Ashoka offers distinct culinary environments to cater to diverse dining desires:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RESTAURANTS_DATA.map(rest => (
              <div 
                key={rest.id}
                onClick={() => navigate(`/restaurants/${rest.slug}/`)}
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 cursor-pointer transition-colors shadow-2xs space-y-2"
              >
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                  {rest.category}
                </span>
                <h3 className="font-serif font-bold text-base text-stone-900">{rest.name}</h3>
                <p className="text-xs text-stone-600 line-clamp-2">{rest.tagline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Banquet & Event Facilities */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Banquet & Event Facilities
            </h2>
            <button
              onClick={() => navigate('/banquet-halls/')}
              className="text-xs font-semibold text-amber-800 hover:underline"
            >
              Explore Banquet Halls →
            </button>
          </div>
          <p className="text-stone-700 text-sm leading-relaxed">
            From intimate 15-person boardroom strategy discussions to 500-attendee wedding receptions, our four hall venues provide flexibility, acoustic excellence, and seamless catering:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BANQUET_HALLS_DATA.map(hall => (
              <div 
                key={hall.id}
                onClick={() => navigate(`/banquet-halls/${hall.slug}/`)}
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 cursor-pointer transition-colors shadow-2xs space-y-2"
              >
                <div className="font-mono font-bold text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded inline-block">
                  {hall.capacityDisplay}
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900">{hall.name}</h3>
                <p className="text-xs text-stone-500 line-clamp-2">{hall.tagline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 & 7: Location & Contact */}
        <section className="bg-stone-900 text-stone-100 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-amber-400">
                Location & Accessibility
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed">
                Hotel Ashoka is situated in the central commercial district with direct access to major transit avenues, making it effortless for out-of-town wedding attendees and corporate delegates to arrive.
              </p>
              <div className="text-xs space-y-2 text-stone-300 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{HOTEL_ENTITY.address}, {HOTEL_ENTITY.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{HOTEL_ENTITY.phone} / {HOTEL_ENTITY.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{HOTEL_ENTITY.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm"
              >
                BOOK A ROOM AT HOTEL ASHOKA
              </button>
              <button
                onClick={onOpenBanquetEnquiry}
                className="w-full py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-medium text-sm border border-stone-700"
              >
                ENQUIRE ABOUT BANQUET VENUES
              </button>
              <button
                onClick={() => navigate('/contact-us/')}
                className="w-full py-2.5 rounded-lg text-xs text-stone-400 hover:text-white"
              >
                View Full Contact & Directions Page →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
