import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Calendar, 
  Clock, 
  Phone, 
  MessageSquare, 
  Check, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { BANQUET_HALLS_DATA, HOTEL_ENTITY, BanquetHallInfo } from '../data/hotelData';

interface BanquetPagesProps {
  subPath: string; // '', 'board-rooms', 'kakatiya-hall', 'chalukya-hall', 'shubam-hall', 'banquet-enquiry'
  navigate: (path: string) => void;
  onOpenBanquetEnquiry: (hallSlug?: string) => void;
}

export const BanquetPages: React.FC<BanquetPagesProps> = ({
  subPath,
  navigate,
  onOpenBanquetEnquiry
}) => {
  const cleanSub = subPath.replace(/^\/|\/$/g, '');
  const matchedHall = BANQUET_HALLS_DATA.find(h => h.slug === cleanSub);

  if (matchedHall) {
    return (
      <IndividualHallView 
        hall={matchedHall} 
        navigate={navigate} 
        onOpenEnquiry={onOpenBanquetEnquiry} 
      />
    );
  }

  if (cleanSub === 'banquet-enquiry') {
    return <BanquetEnquiryView onOpenEnquiry={onOpenBanquetEnquiry} />;
  }

  // Default: Main Banquet Halls Landing Page (/banquet-halls/)
  return <MainBanquetLandingView navigate={navigate} onOpenEnquiry={onOpenBanquetEnquiry} />;
};

/* 1. MAIN BANQUET LANDING PAGE (/banquet-halls/) */
const MainBanquetLandingView: React.FC<{
  navigate: (path: string) => void;
  onOpenEnquiry: (slug?: string) => void;
}> = ({ navigate, onOpenEnquiry }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Event Infrastructure
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Banquet Halls at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            "Hotel Ashoka offers multiple event spaces for meetings, conferences, weddings, celebrations and social gatherings."
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <AEOBox 
          heading="Quick Answer: Banquet Halls at Hotel Ashoka"
          answer="Hotel Ashoka has four listed event-space categories: Board Rooms with capacity for 15–20 guests, Kakatiya Hall for 100 guests, Chalukya Hall for 200 guests and Shubam Hall for 500 guests. All halls offer central air conditioning, in-house catering (pure veg & non-veg), and audiovisual coordination."
        />

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BANQUET_HALLS_DATA.map(hall => (
            <div 
              key={hall.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hall.imageUrl} 
                    alt={`${hall.name} at Hotel Ashoka`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-stone-950/90 text-amber-400 font-mono font-bold px-3 py-1 rounded text-xs border border-amber-400/40">
                    {hall.capacityDisplay}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {hall.name}
                  </h3>
                  <p className="text-xs text-amber-800 font-medium">
                    {hall.tagline}
                  </p>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {hall.description}
                  </p>
                  
                  <div className="pt-2 text-xs text-stone-600 space-y-1 border-t border-stone-100">
                    <div className="font-semibold text-stone-800">Verified Capacity:</div>
                    <div className="text-amber-900 font-mono font-bold">{hall.capacityDisplay}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex flex-col gap-2">
                <button
                  onClick={() => navigate(`/banquet-halls/${hall.slug}/`)}
                  className="w-full py-2 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold"
                >
                  Hall Details & Layouts
                </button>
                <button
                  onClick={() => onOpenEnquiry(hall.slug)}
                  className="w-full py-2 rounded bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold shadow-xs"
                >
                  Enquire About {hall.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Capacity Overview Matrix */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
          <h2 className="text-xl font-serif font-bold text-stone-900">
            Hall Capacity Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-700">
                <tr>
                  <th className="py-2.5 px-4 font-semibold">Hall Name</th>
                  <th className="py-2.5 px-4 font-semibold">Verified Capacity</th>
                  <th className="py-2.5 px-4 font-semibold">Best Suited Event Types</th>
                  <th className="py-2.5 px-4 font-semibold">Catering Support</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {BANQUET_HALLS_DATA.map(h => (
                  <tr key={h.id} className="hover:bg-amber-50/40">
                    <td className="py-3 px-4 font-serif font-bold text-stone-900">
                      <button onClick={() => navigate(`/banquet-halls/${h.slug}/`)} className="hover:text-amber-800">
                        {h.name}
                      </button>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-amber-800">{h.capacityDisplay}</td>
                    <td className="py-3 px-4 text-stone-600">{h.suitableFor.slice(0, 2).join(', ')}</td>
                    <td className="py-3 px-4 text-stone-600">{h.catering}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. DEDICATED INDIVIDUAL HALL PAGE */
const IndividualHallView: React.FC<{
  hall: BanquetHallInfo;
  navigate: (path: string) => void;
  onOpenEnquiry: (slug: string) => void;
}> = ({ hall, navigate, onOpenEnquiry }) => {
  const otherHalls = BANQUET_HALLS_DATA.filter(h => h.id !== hall.id);

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-14 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
            <button onClick={() => navigate('/banquet-halls/')} className="hover:underline">Banquet Halls</button>
            <span>/</span>
            <span>{hall.name}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            {hall.name} at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl leading-relaxed">
            {hall.tagline}
          </p>
          <div className="inline-block bg-amber-500 text-stone-950 font-bold px-3.5 py-1 rounded text-xs font-mono">
            Verified Capacity: {hall.capacityDisplay}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        <AEOBox 
          heading={`Quick Answer: ${hall.name} Specifications`}
          answer={hall.aeoAnswer}
        />

        {/* Photo */}
        <div className="h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-stone-200">
          <img 
            src={hall.imageUrl} 
            alt={`${hall.name} interior setup`} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hall Details */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Venue Overview & Suitable Occasions
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed">
            {hall.description}
          </p>

          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2">Suitable Events & Gatherings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {hall.suitableFor.map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded bg-amber-50/50 border border-amber-100">
                  <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2">Seating Configurations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {hall.seatingLayouts.map((l, idx) => (
                <div key={idx} className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex justify-between items-center">
                  <span className="font-semibold text-stone-800">{l.style}</span>
                  <span className="font-mono font-bold text-amber-800">{l.capacity}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2">Key Hall Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {hall.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-xl border border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-amber-400">
              {hall.id === 'shubam-hall' ? 'Plan Your Event at Shubam Hall' : `Enquire About ${hall.name}`}
            </h3>
            <p className="text-xs text-stone-300 mt-1">
              Connect with our banquet coordinators to check dates and customize menu packages.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry(hall.slug)}
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md uppercase tracking-wider"
            >
              {hall.id === 'shubam-hall' ? 'Plan Your Event at Shubam Hall' : `Enquire About ${hall.name}`}
            </button>
            <a
              href={`tel:${HOTEL_ENTITY.phone}`}
              className="px-4 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs border border-stone-700 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Events Desk</span>
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 space-y-4">
          <h2 className="text-xl font-serif font-bold text-stone-900">
            {hall.name} Frequently Asked Questions
          </h2>
          <div className="divide-y divide-stone-100 text-xs">
            {hall.faqs.map((faq, idx) => (
              <div key={idx} className="py-3 space-y-1">
                <h3 className="font-semibold text-stone-900">{faq.question}</h3>
                <p className="text-stone-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. DEDICATED BANQUET ENQUIRY VIEW (/banquet-enquiry/) */
const BanquetEnquiryView: React.FC<{
  onOpenEnquiry: () => void;
}> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900 py-12 px-4 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Banquet & Event Enquiry
        </h1>
        <p className="text-stone-600 text-sm">
          Plan your celebrations, weddings, conferences and executive meetings at Hotel Ashoka.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-md text-center space-y-6">
        <p className="text-sm text-stone-700 max-w-xl mx-auto">
          Whether you need Board Rooms for 15–20 guests or the grand Shubam Hall for up to 500 guests, our event planning team is ready to curate your complete venue and catering arrangements.
        </p>
        <button
          onClick={() => onOpenEnquiry()}
          className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-stone-950 font-bold text-sm shadow-md uppercase tracking-wider"
        >
          Open Banquet Enquiry Form
        </button>
      </div>
    </div>
  );
};
