import React, { useState } from 'react';
import { 
  Users, 
  Bed, 
  Maximize2, 
  Bath, 
  Check, 
  Calendar, 
  Phone, 
  MessageSquare, 
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  FileText
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { ROOMS_DATA, HOTEL_ENTITY, RoomInfo } from '../data/hotelData';

interface RoomsPagesProps {
  subPath: string; // e.g. '', 'presidential-suite', 'executive-suite', 'executive-room', 'deluxe-room', 'room-tariff', 'compare-rooms', 'amenities', 'booking-policy'
  navigate: (path: string) => void;
  onOpenBooking: (roomType?: string) => void;
}

export const RoomsPages: React.FC<RoomsPagesProps> = ({
  subPath,
  navigate,
  onOpenBooking
}) => {
  // Normalize path
  const cleanSub = subPath.replace(/^\/|\/$/g, '');

  // If subPath matches an individual room slug
  const matchedRoom = ROOMS_DATA.find(r => r.slug === cleanSub);

  if (matchedRoom) {
    return (
      <IndividualRoomView 
        room={matchedRoom} 
        navigate={navigate} 
        onOpenBooking={onOpenBooking} 
      />
    );
  }

  if (cleanSub === 'room-tariff') {
    return <RoomTariffView navigate={navigate} onOpenBooking={onOpenBooking} />;
  }

  if (cleanSub === 'compare-rooms') {
    return <CompareRoomsView navigate={navigate} onOpenBooking={onOpenBooking} />;
  }

  if (cleanSub === 'amenities') {
    return <RoomAmenitiesView navigate={navigate} onOpenBooking={onOpenBooking} />;
  }

  if (cleanSub === 'booking-policy') {
    return <BookingPolicyView navigate={navigate} onOpenBooking={onOpenBooking} />;
  }

  // Default: Main Rooms Landing Page (/rooms/)
  return <MainRoomsLandingView navigate={navigate} onOpenBooking={onOpenBooking} />;
};

/* 1. MAIN ROOMS LANDING PAGE (/rooms/) */
const MainRoomsLandingView: React.FC<{
  navigate: (path: string) => void;
  onOpenBooking: (slug?: string) => void;
}> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      {/* Header */}
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Accommodations at Hotel Ashoka
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Hotel Rooms at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto">
            Explore our four published room categories ranging from the economical Deluxe Room (₹2,200/-) to the stately Presidential Suite (₹4,500/-).
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* AEO Box */}
        <AEOBox 
          heading="Quick Answer: Rooms & Tariffs at Hotel Ashoka"
          answer="Hotel Ashoka offers four published room categories: Presidential Suite (₹4,500/-), Executive Suite (₹3,450/-), Executive Room (₹3,100/-), and Deluxe Room (₹2,200/-) per night. All rooms feature air conditioning, attached bathrooms, television, and high-speed Wi-Fi. Tariffs are subject to availability and government taxes."
        />

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOMS_DATA.map(room => (
            <div 
              key={room.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.imageUrl} 
                  alt={`${room.name} at Hotel Ashoka`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-stone-950/90 text-amber-400 font-mono font-bold px-3.5 py-1.5 rounded-md text-base border border-amber-400/40 backdrop-blur-xs">
                  {room.tariffDisplay}
                  <span className="text-[10px] text-stone-400 font-sans block text-right">per night</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                    Published Tariff: {room.tariffDisplay}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1 group-hover:text-amber-800 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-stone-100 text-xs text-stone-600">
                    <div><strong>Size:</strong> {room.size}</div>
                    <div><strong>Occupancy:</strong> {room.occupancy}</div>
                    <div><strong>Bed:</strong> {room.bedType}</div>
                    <div><strong>Bath:</strong> Private En-Suite</div>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => navigate(`/rooms/${room.slug}/`)}
                    className="flex-1 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-colors border border-stone-200"
                  >
                    View Room Landing Page
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.slug)}
                    className="flex-1 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors shadow-xs"
                  >
                    Book Now ({room.tariffDisplay})
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links to Sub-pages */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4">
          <button
            onClick={() => navigate('/rooms/room-tariff/')}
            className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 text-left shadow-2xs group"
          >
            <div className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-800">Room Tariff Table →</div>
            <p className="text-[11px] text-stone-500 mt-1">Detailed breakdown of rates and applicable tax guidelines.</p>
          </button>
          <button
            onClick={() => navigate('/rooms/compare-rooms/')}
            className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 text-left shadow-2xs group"
          >
            <div className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-800">Compare Rooms →</div>
            <p className="text-[11px] text-stone-500 mt-1">Side-by-side feature comparison of our four room classes.</p>
          </button>
          <button
            onClick={() => navigate('/rooms/amenities/')}
            className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 text-left shadow-2xs group"
          >
            <div className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-800">Room Amenities →</div>
            <p className="text-[11px] text-stone-500 mt-1">Full list of verified amenities across all rooms.</p>
          </button>
          <button
            onClick={() => navigate('/rooms/booking-policy/')}
            className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 text-left shadow-2xs group"
          >
            <div className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-800">Booking Policy →</div>
            <p className="text-[11px] text-stone-500 mt-1">Check-in timings, ID requirements, and cancellation rules.</p>
          </button>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 space-y-4">
          <h2 className="text-xl font-serif font-bold text-stone-900">
            Frequently Asked Questions About Hotel Ashoka Rooms
          </h2>
          <div className="divide-y divide-stone-100 text-xs">
            <div className="py-3 space-y-1">
              <h3 className="font-semibold text-stone-900">What is the lowest room tariff at Hotel Ashoka?</h3>
              <p className="text-stone-600">The Deluxe Room is our entry category with a published tariff of ₹2,200/- per night (subject to applicable taxes and availability).</p>
            </div>
            <div className="py-3 space-y-1">
              <h3 className="font-semibold text-stone-900">Are all rooms equipped with air conditioning and Wi-Fi?</h3>
              <p className="text-stone-600">Yes, every room category at Hotel Ashoka includes individual climate control / air conditioning and complimentary high-speed Wi-Fi access.</p>
            </div>
            <div className="py-3 space-y-1">
              <h3 className="font-semibold text-stone-900">What are the check-in and check-out times?</h3>
              <p className="text-stone-600">Standard check-in is 12:00 PM (Noon) and standard check-out is 11:00 AM.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

/* 2. DEDICATED INDIVIDUAL ROOM PAGE */
const IndividualRoomView: React.FC<{
  room: RoomInfo;
  navigate: (path: string) => void;
  onOpenBooking: (slug?: string) => void;
}> = ({ room, navigate, onOpenBooking }) => {
  const otherRooms = ROOMS_DATA.filter(r => r.id !== room.id);

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      {/* Hero */}
      <div className="bg-stone-950 text-white py-14 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
            <button onClick={() => navigate('/rooms/')} className="hover:underline">Rooms</button>
            <span>/</span>
            <span>{room.name}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            {room.name} at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl leading-relaxed">
            {room.subtitle}
          </p>
          <div className="inline-block bg-amber-500 text-stone-950 font-mono font-bold px-4 py-1.5 rounded text-lg shadow-sm">
            Published Tariff: {room.tariffDisplay} per night
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* AEO Box */}
        <AEOBox 
          heading={`Quick Answer: ${room.name} Details`}
          answer={room.aeoAnswer}
        />

        {/* Gallery Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 h-80 sm:h-96 rounded-xl overflow-hidden shadow-md">
            <img 
              src={room.imageUrl} 
              alt={`${room.name} master view`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 h-80 sm:h-96">
            {room.additionalImages.map((img, i) => (
              <div key={i} className="flex-1 rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={img} 
                  alt={`${room.name} detail ${i + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Room Specifications Table */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            {room.name} Room Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <div className="text-stone-500 mb-1">Published Tariff</div>
              <div className="font-mono font-bold text-amber-800 text-base">{room.tariffDisplay}</div>
              <div className="text-[10px] text-stone-400 mt-0.5">Taxes applicable</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <div className="text-stone-500 mb-1">Room Area</div>
              <div className="font-semibold text-stone-900 text-sm">{room.size}</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <div className="text-stone-500 mb-1">Occupancy</div>
              <div className="font-semibold text-stone-900 text-sm">{room.occupancy}</div>
            </div>
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <div className="text-stone-500 mb-1">Bedding Configuration</div>
              <div className="font-semibold text-stone-900 text-sm">{room.bedType}</div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2">Bathroom & Fixtures</h3>
            <p className="text-xs text-stone-700 leading-relaxed">{room.bathroom}</p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 mb-3">Room Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking CTA Bar */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-950 text-white p-6 sm:p-8 rounded-xl border border-amber-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider">Direct Official Rate</div>
            <h3 className="text-2xl font-serif font-bold text-white mt-0.5">
              Reserve {room.name} at {room.tariffDisplay}
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              "Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking."
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking(room.slug)}
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition-all uppercase tracking-wider"
            >
              BOOK NOW
            </button>
            <a
              href={`tel:${HOTEL_ENTITY.phone}`}
              className="px-4 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs border border-stone-700 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Hotel</span>
            </a>
          </div>
        </div>

        {/* FAQs for this room */}
        <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 space-y-4">
          <h2 className="text-xl font-serif font-bold text-stone-900">
            {room.name} Frequently Asked Questions
          </h2>
          <div className="divide-y divide-stone-100 text-xs">
            {room.faqs.map((faq, i) => (
              <div key={i} className="py-3 space-y-1">
                <h3 className="font-semibold text-stone-900">{faq.question}</h3>
                <p className="text-stone-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Rooms */}
        <div>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">
            Explore Other Room Categories at Hotel Ashoka
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherRooms.map(r => (
              <div 
                key={r.id}
                onClick={() => navigate(`/rooms/${r.slug}/`)}
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-500 cursor-pointer transition-colors shadow-2xs space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-serif font-bold text-sm text-stone-900">{r.name}</h4>
                  <span className="font-mono font-bold text-xs text-amber-800">{r.tariffDisplay}</span>
                </div>
                <p className="text-[11px] text-stone-500 line-clamp-2">{r.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. ROOM TARIFF TABLE PAGE (/rooms/room-tariff/) */
const RoomTariffView: React.FC<{
  navigate: (path: string) => void;
  onOpenBooking: (slug?: string) => void;
}> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-14 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-2">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Transparent Hospitality Billing
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Hotel Ashoka Room Tariff
          </h1>
          <p className="text-stone-300 text-sm max-w-xl mx-auto">
            Official published room rates across our four accommodation categories.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <AEOBox 
          heading="Quick Answer: Hotel Ashoka Room Tariffs"
          answer="Hotel Ashoka publishes four transparent room tariffs: Presidential Suite at ₹4,500/-, Executive Suite at ₹3,450/-, Executive Room at ₹3,100/-, and Deluxe Room at ₹2,200/- per night. Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking."
        />

        <div className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-md">
          <div className="p-6 border-b border-stone-200">
            <h2 className="text-xl font-serif font-bold text-stone-900">
              Published Tariff Comparison
            </h2>
            <p className="text-xs text-stone-500 mt-1">Rates listed in Indian Rupees (INR) per room per night.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50 text-stone-700 text-xs border-b border-stone-200">
                <tr>
                  <th className="py-3 px-6 font-semibold">Room</th>
                  <th className="py-3 px-6 font-semibold">Area</th>
                  <th className="py-3 px-6 font-semibold">Max Guests</th>
                  <th className="py-3 px-6 font-semibold text-right">Published Tariff</th>
                  <th className="py-3 px-6 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                {ROOMS_DATA.map(r => (
                  <tr key={r.id} className="hover:bg-amber-50/40">
                    <td className="py-4 px-6 font-serif font-bold text-stone-900">
                      <button onClick={() => navigate(`/rooms/${r.slug}/`)} className="hover:text-amber-800 text-left">
                        {r.name}
                      </button>
                    </td>
                    <td className="py-4 px-6 text-stone-600">{r.size}</td>
                    <td className="py-4 px-6 text-stone-600">{r.occupancy}</td>
                    <td className="py-4 px-6 font-mono font-bold text-amber-800 text-right text-base">
                      {r.tariffDisplay}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => onOpenBooking(r.slug)}
                        className="px-3 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-2xs"
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 space-y-2">
            <p className="font-semibold text-stone-800">
              "Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking."
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-500">
              <li>Goods and Services Tax (GST) will be charged as per applicable government tax slabs.</li>
              <li>Check-in time is 12:00 PM (Noon); Check-out time is 11:00 AM.</li>
              <li>Extra adult charges apply for third guest rollaway bedding where permitted.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 4. COMPARE ROOMS VIEW (/rooms/compare-rooms/) */
const CompareRoomsView: React.FC<{
  navigate: (path: string) => void;
  onOpenBooking: (slug?: string) => void;
}> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900 py-12 px-4 max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Compare Hotel Ashoka Rooms
        </h1>
        <p className="text-stone-600 text-sm">
          Evaluate features, sizes, and tariffs across all four room tiers to select the perfect match for your trip.
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl border border-stone-200 shadow-md">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-stone-100 border-b border-stone-200">
            <tr>
              <th className="p-4 font-semibold text-stone-700">Feature</th>
              {ROOMS_DATA.map(r => (
                <th key={r.id} className="p-4 font-serif font-bold text-stone-900 text-center min-w-[160px]">
                  {r.name}
                  <div className="font-mono text-amber-800 font-bold text-sm mt-0.5">{r.tariffDisplay}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-xs">
            <tr>
              <td className="p-4 font-semibold text-stone-700">Room Area</td>
              {ROOMS_DATA.map(r => <td key={r.id} className="p-4 text-center text-stone-600">{r.size}</td>)}
            </tr>
            <tr>
              <td className="p-4 font-semibold text-stone-700">Bedding</td>
              {ROOMS_DATA.map(r => <td key={r.id} className="p-4 text-center text-stone-600">{r.bedType}</td>)}
            </tr>
            <tr>
              <td className="p-4 font-semibold text-stone-700">Living Lounge</td>
              <td className="p-4 text-center text-emerald-600 font-bold">Dedicated Salon</td>
              <td className="p-4 text-center text-emerald-600 font-bold">Integrated Sofa</td>
              <td className="p-4 text-center text-stone-400">—</td>
              <td className="p-4 text-center text-stone-400">—</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-stone-700">Workstation</td>
              {ROOMS_DATA.map(r => <td key={r.id} className="p-4 text-center text-emerald-600 font-bold">Yes</td>)}
            </tr>
            <tr>
              <td className="p-4 font-semibold text-stone-700">Wi-Fi & AC</td>
              {ROOMS_DATA.map(r => <td key={r.id} className="p-4 text-center text-emerald-600 font-bold">Included</td>)}
            </tr>
            <tr>
              <td className="p-4 font-semibold text-stone-700">Action</td>
              {ROOMS_DATA.map(r => (
                <td key={r.id} className="p-4 text-center">
                  <button
                    onClick={() => onOpenBooking(r.slug)}
                    className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs"
                  >
                    Select
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* 5. ROOM AMENITIES VIEW (/rooms/amenities/) */
const RoomAmenitiesView: React.FC<{
  navigate: (path: string) => void;
  onOpenBooking: () => void;
}> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900 py-12 px-4 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Room Amenities at Hotel Ashoka
        </h1>
        <p className="text-stone-600 text-sm">
          Verified comforts provided for resident guests across all room categories.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm space-y-6 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-700">
          {[
            "Individual Climate Control / Air Conditioning",
            "High-Speed Complimentary Wi-Fi",
            "Flat-screen LED Television with satellite entertainment",
            "Attached Private En-suite Bathrooms with pressurized hot water",
            "Work Desk with ergonomic seating",
            "Direct Dial Telephone and Room Service Calling",
            "Electric Kettle for Tea and Coffee (Suites & Executive)",
            "In-room Electronic Digital Safe (Suites)",
            "Daily Housekeeping and Linen Replacement",
            "Fresh Towels and Complimentary Personal Care Toiletries",
            "Daily Packaged Drinking Water Bottles",
            "24-Hour In-Room Dining Service Support"
          ].map((am, i) => (
            <div key={i} className="flex items-center gap-2.5 p-2 rounded bg-stone-50 border border-stone-100">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{am}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider"
          >
            Reserve Your Room Now
          </button>
        </div>
      </div>
    </div>
  );
};

/* 6. BOOKING POLICY VIEW (/rooms/booking-policy/) */
const BookingPolicyView: React.FC<{
  navigate: (path: string) => void;
  onOpenBooking: () => void;
}> = ({ navigate, onOpenBooking }) => {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900 py-12 px-4 max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Hotel Ashoka Room Booking Policy
        </h1>
        <p className="text-stone-600 text-sm">
          General terms, identification guidelines, and reservation policies.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-stone-200 shadow-sm space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
        <div>
          <h2 className="font-serif font-bold text-base text-stone-900 mb-2">1. Check-In & Check-Out Timings</h2>
          <p>Standard Check-In time is 12:00 PM (Noon). Standard Check-Out time is 11:00 AM. Early check-in or late check-out is subject to room availability and may incur supplemental charges in accordance with hotel policy.</p>
        </div>

        <div>
          <h2 className="font-serif font-bold text-base text-stone-900 mb-2">2. Mandatory Government Identification</h2>
          <p>In accordance with statutory government regulations, all adults must present a valid government-approved photo ID proof with address at check-in (Aadhaar Card, Passport, Driving License, or Voter ID). PAN cards are not accepted as valid identity proof for hotel check-in.</p>
        </div>

        <div>
          <h2 className="font-serif font-bold text-base text-stone-900 mb-2">3. Tariff & Tax Terms</h2>
          <p>"Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking." Goods and Services Tax (GST) will be charged as per applicable government rules.</p>
        </div>

        <div>
          <h2 className="font-serif font-bold text-base text-stone-900 mb-2">4. Cancellation & Modifications</h2>
          <p>Room cancellations made at least 24 hours prior to the standard check-in time will be processed with standard policy parameters. Same-day cancellations or no-shows are subject to full first-night retention.</p>
        </div>

        <div className="pt-4 flex justify-between items-center border-t border-stone-200">
          <button onClick={() => navigate('/rooms/')} className="text-amber-800 font-semibold text-xs hover:underline">
            ← Back to All Rooms
          </button>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs"
          >
            Proceed to Booking
          </button>
        </div>
      </div>
    </div>
  );
};
