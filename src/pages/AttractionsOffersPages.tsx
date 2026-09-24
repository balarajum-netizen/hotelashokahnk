import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Tag, 
  Gift, 
  Calendar, 
  Check, 
  ChevronRight,
  Train,
  Plane,
  Car
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { ATTRACTIONS_DATA, OFFERS_DATA, HOTEL_ENTITY } from '../data/hotelData';

interface AttractionsOffersProps {
  type: 'attractions' | 'offers';
  subPath: string;
  navigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenBanquetEnquiry: () => void;
}

export const AttractionsOffersPages: React.FC<AttractionsOffersProps> = ({
  type,
  subPath,
  navigate,
  onOpenBooking,
  onOpenBanquetEnquiry
}) => {
  const isOffers = type === 'offers';
  const cleanSub = subPath.replace(/^\/|\/$/g, '');

  if (cleanSub === 'how-to-reach-hotel-ashoka') {
    return (
      <div className="bg-[#faf8f5] min-h-screen text-stone-900">
        <div className="bg-stone-950 text-white py-14 px-4 border-b border-amber-900/40">
          <div className="max-w-5xl mx-auto space-y-2">
            <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
              Transit & Directions
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
              How to Reach Hotel Ashoka
            </h1>
            <p className="text-stone-300 text-sm max-w-xl">
              Easy transit directions from railway terminals, regional bus hubs, and the international airport.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
          <AEOBox 
            heading="Quick Answer: Reaching Hotel Ashoka"
            answer="Hotel Ashoka is located centrally at Hotel Ashoka, Main Commercial Hub. It is approximately 1.5 km from the Central Railway Station (5–8 minutes by cab/auto), 800 meters from the nearest Metro Station, and 34 km from the International Airport (45–60 minutes via the express corridor)."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
              <Train className="w-8 h-8 text-amber-700" />
              <h3 className="font-serif font-bold text-base text-stone-900">By Train / Rail</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Central Railway Station is approximately 1.5 km away. Prepaid autorickshaws and app cabs are available 24/7 right outside platform exits.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
              <Plane className="w-8 h-8 text-amber-700" />
              <h3 className="font-serif font-bold text-base text-stone-900">From the Airport</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The International Airport is 34 km away via the arterial highway. Airport taxis and ride-hailing services provide direct connectivity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
              <Car className="w-8 h-8 text-amber-700" />
              <h3 className="font-serif font-bold text-base text-stone-900">By Metro / Bus</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The central metro interchange is 800m away on foot, connecting all commercial IT corridors and shopping streets.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">Need Airport or Station Transfer Advice?</h3>
              <p className="text-xs text-stone-600">Contact our 24-hour reception desk for verified cab rates.</p>
            </div>
            <a
              href={`tel:${HOTEL_ENTITY.phone}`}
              className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs"
            >
              Call Front Desk
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (isOffers) {
    return (
      <div className="bg-[#faf8f5] min-h-screen text-stone-900">
        <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
          <div className="max-w-5xl mx-auto text-center space-y-3">
            <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
              Direct Booking Advantages
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
              Special Offers & Packages
            </h1>
            <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
              Transparent packages with zero booking commissions. Always book direct on hotelashoka.in for the best genuine rates.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFERS_DATA.map(offer => (
              <div 
                key={offer.id}
                className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded">
                    {offer.tag}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-stone-900">{offer.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{offer.description}</p>
                  <div className="pt-2 text-xs font-mono font-bold text-amber-800">
                    Promo Code: <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-300">{offer.code}</span>
                  </div>
                  <div className="text-[11px] text-stone-400">Valid until: {offer.validity}</div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider"
                  >
                    Claim Offer & Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Local Attractions page
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Destination & Neighborhood
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Local Attractions Near Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Conveniently situated close to historical monuments, botanical gardens, central bazaars, and business zones.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <AEOBox 
          heading="Quick Answer: Attractions Near Hotel Ashoka"
          answer="Prominent attractions near Hotel Ashoka include the Historic Fort & Palace (2.8 km), Central Botanical Gardens (3.5 km), Heritage Market & Silk Emporium (1.2 km), and Science Museum & Planetarium (4.2 km). All are readily reachable within 10–20 minutes by auto or cab."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ATTRACTIONS_DATA.map((att, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs flex flex-col sm:flex-row">
              <div className="sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                <img src={att.imageUrl} alt={att.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-bold text-lg text-stone-900">{att.name}</h3>
                    <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                      {att.distance}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">{att.description}</p>
                </div>
                <div className="text-[11px] text-stone-500 font-medium pt-2 border-t border-stone-100">
                  Transit Time: ~{att.driveTime} from Hotel Ashoka
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={() => navigate('/local-attractions/how-to-reach-hotel-ashoka/')}
            className="text-xs font-semibold text-amber-800 hover:underline inline-flex items-center gap-1"
          >
            <span>View Full Transit Guide (How to Reach Hotel Ashoka)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
