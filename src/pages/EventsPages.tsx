import React from 'react';
import { 
  Building2, 
  Users, 
  Calendar, 
  Check, 
  ChevronRight, 
  ArrowRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { EVENTS_DATA, BANQUET_HALLS_DATA, HOTEL_ENTITY } from '../data/hotelData';

interface EventsPagesProps {
  subPath: string; // e.g. '', 'weddings', 'corporate-events', 'conferences', 'meetings', 'birthday-parties', 'social-events', 'receptions'
  navigate: (path: string) => void;
  onOpenBanquetEnquiry: (hallSlug?: string) => void;
}

export const EventsPages: React.FC<EventsPagesProps> = ({
  subPath,
  navigate,
  onOpenBanquetEnquiry
}) => {
  const cleanSub = subPath.replace(/^\/|\/$/g, '');
  const matchedEvent = EVENTS_DATA.find(e => e.slug === cleanSub);

  if (matchedEvent) {
    const recommendedHalls = BANQUET_HALLS_DATA.filter(h => 
      matchedEvent.recommendedHalls.includes(h.slug)
    );

    return (
      <div className="bg-[#faf8f5] min-h-screen text-stone-900">
        <div className="bg-stone-950 text-white py-14 px-4 border-b border-amber-900/40">
          <div className="max-w-5xl mx-auto space-y-3">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
              <button onClick={() => navigate('/events/')} className="hover:underline">Events</button>
              <span>/</span>
              <span>{matchedEvent.title}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
              {matchedEvent.title} at Hotel Ashoka
            </h1>
            <p className="text-stone-300 text-sm max-w-2xl leading-relaxed">
              {matchedEvent.hero}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
          <AEOBox 
            heading={`Quick Answer: Hosting ${matchedEvent.title}`}
            answer={matchedEvent.aeoAnswer}
          />

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Event Planning & Infrastructure
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed">
              {matchedEvent.description}
            </p>

            <div className="pt-2">
              <h3 className="font-serif font-bold text-base text-stone-900 mb-3">Key Event Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {matchedEvent.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded bg-amber-50/50 border border-amber-100">
                    <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Halls */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Recommended Banquet Halls for {matchedEvent.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recommendedHalls.map(hall => (
                <div 
                  key={hall.id}
                  onClick={() => navigate(`/banquet-halls/${hall.slug}/`)}
                  className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors p-5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono font-bold text-xs text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded inline-block">
                      {hall.capacityDisplay}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-stone-900">{hall.name}</h3>
                    <p className="text-xs text-stone-500 line-clamp-2">{hall.tagline}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-800">
                    <span>View Hall Specs</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry CTA */}
          <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-xl border border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-400">
                Plan Your {matchedEvent.title}
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Reach out to reserve your date and customize menu spreads.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => onOpenBanquetEnquiry(recommendedHalls[0]?.slug)}
                className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md uppercase tracking-wider"
              >
                Banquet Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Events Overview page (/events/)
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Celebrations & Corporate Assemblies
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Events at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            From regal weddings and receptions to corporate conferences and executive meetings, our versatile halls and dedicated banqueting team deliver memorable experiences.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS_DATA.map(ev => (
            <div
              key={ev.slug}
              onClick={() => navigate(`/events/${ev.slug}/`)}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs hover:border-amber-500 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h2 className="font-serif font-bold text-xl text-stone-900">{ev.title}</h2>
                <p className="text-xs text-stone-600 line-clamp-3">{ev.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-800">
                <span>Explore {ev.title} Venues</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
