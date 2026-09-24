import React from 'react';
import { 
  Wifi, 
  Car, 
  Sparkles, 
  Building2, 
  Phone, 
  Check, 
  MapPin, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { HOTEL_ENTITY } from '../data/hotelData';

interface FacilitiesServicesProps {
  type: 'facilities' | 'services';
  subPath: string;
  navigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const FacilitiesServicesPages: React.FC<FacilitiesServicesProps> = ({
  type,
  subPath,
  navigate,
  onOpenBooking
}) => {
  const cleanSub = subPath.replace(/^\/|\/$/g, '');

  const isFacility = type === 'facilities';

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            {isFacility ? 'Hotel Ashoka Infrastructure' : 'Hospitality Operations'}
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            {isFacility ? 'Hotel Facilities' : 'Guest Services'} at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            {isFacility 
              ? 'Only verified property facilities including high-speed Wi-Fi, premises parking, business board rooms, and daily housekeeping.'
              : 'Attentive guest services ensuring smooth business and leisure stays from arrival to departure.'}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <AEOBox 
          heading={isFacility ? "Quick Answer: Hotel Facilities" : "Quick Answer: Guest Services"}
          answer={isFacility 
            ? "Hotel Ashoka provides verified facilities including high-speed complimentary Wi-Fi across rooms and banquets, on-site premises parking, daily housekeeping, central business board rooms (15-20 capacity), and 24-hour reception."
            : "Hotel Ashoka offers round-the-clock guest services including 24-hour reception and baggage assistance, laundry and pressing, travel and taxi desk assistance, and 24-hour in-room dining."}
        />

        {isFacility ? (
          /* Facilities List */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Wifi className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">High-Speed Wi-Fi Internet</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Complimentary high-speed Wi-Fi connectivity is provided throughout all guest rooms, suites, restaurant venues, and banquet halls, enabling seamless remote work, video calls, and streaming.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">Premises Parking</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Secure on-site parking is available for registered resident guests and banquet attendees, managed with 24/7 security surveillance and parking attendants.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">Daily Housekeeping & Upkeep</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Daily professional housekeeping ensures fresh linens, sanitized bathrooms, replenished toiletries, and pristine bedroom upkeep for every guest.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">Business & Board Facilities</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Dedicated Board Rooms (capacity 15–20 guests) provide executive privacy, comfortable seating, and presentation support for corporate visitors.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Services List */
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">Guest Assistance Desk</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  24-hour reception staff to assist with early morning wake-up calls, secure luggage storage, parcel delivery, and general city inquiries.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">Laundry & Garment Care</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Professional washing, pressing, and dry-cleaning services with prompt return to keep your business shirts and occasion wear impeccable.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">Travel & Cab Assistance</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Assistance with booking reliable city cabs, airport transfers, railway station pick-ups, and regional sightseeing tour information.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">24-Hour In-Room Dining</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Hot vegetarian and non-vegetarian selections freshly prepared from our culinary kitchens delivered promptly to your room or suite.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-xl border border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-amber-400">
              Experience Hotel Ashoka Hospitality
            </h3>
            <p className="text-xs text-stone-300 mt-1">
              Book your room starting from ₹2,200/- per night with complete access to all hotel facilities.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md uppercase tracking-wider shrink-0"
          >
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
};
