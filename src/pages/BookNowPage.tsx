import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Bed, 
  Clock, 
  CreditCard,
  AlertCircle
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { ROOMS_DATA, HOTEL_ENTITY } from '../data/hotelData';

interface BookNowPageProps {
  navigate: (path: string) => void;
}

export const BookNowPage: React.FC<BookNowPageProps> = ({ navigate }) => {
  const [selectedSlug, setSelectedSlug] = useState('presidential-suite');
  const [checkIn, setCheckIn] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const selectedRoom = ROOMS_DATA.find(r => r.slug === selectedSlug) || ROOMS_DATA[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(d2.getTime() - d1.getTime(), 0);
  const nights = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 1);

  const baseTotal = selectedRoom.tariff * nights * roomsCount;
  const estimatedTax = Math.round(baseTotal * 0.12);
  const grandTotal = baseTotal + estimatedTax;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    const ref = `ASH-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
  };

  const getWhatsAppMessage = () => {
    const text = `*Direct Booking Request - Hotel Ashoka*
Reference: ${bookingRef || 'Pending'}
Guest Name: ${guestName}
Phone: ${guestPhone}
Room Category: ${selectedRoom.name} (${selectedRoom.tariffDisplay})
Rooms: ${roomsCount} | Nights: ${nights}
Dates: ${checkIn} to ${checkOut}
Guests: ${adults} Adults, ${children} Children
Estimated Total: ₹${grandTotal.toLocaleString('en-IN')} (incl. est. tax)
Notes: ${specialRequests || 'None'}

Please confirm availability and booking hold.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-14 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Guaranteed Direct Reservations
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Book Your Stay at Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-xl mx-auto">
            Direct reservation engine with official published tariffs and instant confirmation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <AEOBox 
          heading="Quick Answer: Booking Rooms at Hotel Ashoka"
          answer="Direct bookings through hotelashoka.in feature published tariffs: Presidential Suite (₹4,500/-), Executive Suite (₹3,450/-), Executive Room (₹3,100/-), and Deluxe Room (₹2,200/-) per night. Standard check-in is 12:00 PM and check-out is 11:00 AM."
        />

        {bookingRef ? (
          <div className="bg-white rounded-xl p-8 sm:p-10 border-2 border-emerald-600 shadow-xl max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Reservation Request Transmitted!
              </h2>
              <div className="text-xs text-stone-500">
                Booking Reference ID: <span className="font-mono font-bold text-amber-800 text-sm px-2 py-0.5 bg-amber-50 rounded border border-amber-200">{bookingRef}</span>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-4 border border-stone-200 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500">Room Class:</span>
                <span className="font-semibold text-stone-900">{selectedRoom.name} ({roomsCount} Room{roomsCount > 1 ? 's' : ''})</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500">Dates:</span>
                <span className="text-stone-900">{checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500">Guests:</span>
                <span className="text-stone-900">{adults} Adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} Child` : ''}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold text-stone-900">
                <span>Estimated Payable:</span>
                <span className="font-mono text-amber-800">₹{grandTotal.toLocaleString('en-IN')}*</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Our front desk reservation specialist is reviewing room availability and will contact you directly on <strong>{guestPhone}</strong> to confirm your reservation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${HOTEL_ENTITY.whatsapp}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Confirmation</span>
              </a>
              <a
                href={`tel:${HOTEL_ENTITY.phone}`}
                className="flex-1 py-3 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-300 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Reservations Desk</span>
              </a>
            </div>

            <p className="text-[11px] text-stone-400 italic">
              "Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking."
            </p>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Form */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6 text-xs sm:text-sm">
              <div>
                <h2 className="text-xl font-serif font-bold text-stone-900">1. Select Room Tier</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  {ROOMS_DATA.map(r => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setSelectedSlug(r.slug)}
                      className={`p-3.5 rounded-lg border text-left transition-all ${
                        selectedSlug === r.slug
                          ? 'border-amber-600 bg-amber-50/70 ring-1 ring-amber-600 text-stone-900'
                          : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-serif font-bold text-sm">{r.name}</span>
                        <span className="font-mono font-bold text-amber-800 text-xs">{r.tariffDisplay}</span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">{r.subtitle}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-stone-900">2. Stay Dates & Rooms</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Check-In Date *</label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={e => setCheckIn(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Check-Out Date *</label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={e => setCheckOut(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Rooms</label>
                    <select
                      value={roomsCount}
                      onChange={e => setRoomsCount(Number(e.target.value))}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                    >
                      {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Adults</label>
                    <select
                      value={adults}
                      onChange={e => setAdults(Number(e.target.value))}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                    >
                      {[1, 2, 3, 4, 6, 8].map(n => <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Children (Under 10)</label>
                    <select
                      value={children}
                      onChange={e => setChildren(Number(e.target.value))}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                    >
                      {[0, 1, 2, 3].map(n => <option key={n} value={n}>{n} Child{n > 1 ? 'ren' : ''}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-stone-900">3. Primary Guest Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rao"
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 94480 00000"
                      value={guestPhone}
                      onChange={e => setGuestPhone(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. vikram@company.com"
                    value={guestEmail}
                    onChange={e => setGuestEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                  />
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Special Preferences / Requests</label>
                  <textarea
                    rows={2}
                    placeholder="Late arrival, quiet floor, extra pillows, vegetarian breakfast..."
                    value={specialRequests}
                    onChange={e => setSpecialRequests(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs text-stone-900 focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Col: Price Summary & Confirmation */}
            <div className="bg-stone-900 text-stone-100 rounded-xl p-6 border border-amber-800 shadow-md space-y-6 h-fit">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Tariff Breakdown
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Reservation Summary
                </h3>
              </div>

              <div className="space-y-3 text-xs border-y border-stone-800 py-4">
                <div className="flex justify-between">
                  <span className="text-stone-400">Selected Room:</span>
                  <span className="font-semibold text-white">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Rate per Night:</span>
                  <span className="font-mono text-amber-300 font-bold">{selectedRoom.tariffDisplay}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Duration:</span>
                  <span className="text-stone-200">{nights} Night{nights > 1 ? 's' : ''} ({roomsCount} Room{roomsCount > 1 ? 's' : ''})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Base Tariff:</span>
                  <span className="font-mono text-stone-200">₹{baseTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Estimated Taxes (12% GST):</span>
                  <span className="font-mono text-stone-200">₹{estimatedTax.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-800 font-bold text-sm text-white">
                  <span>Total Estimated Tariff:</span>
                  <span className="font-mono text-amber-400 text-base">₹{grandTotal.toLocaleString('en-IN')}*</span>
                </div>
              </div>

              <div className="text-[11px] text-stone-400 leading-relaxed italic">
                * "Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking."
              </div>

              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md hover:from-amber-400 hover:to-amber-500 transition-all"
                >
                  Submit Reservation Request
                </button>

                <div className="text-center">
                  <span className="text-[10px] text-stone-500">Need instant assistance?</span>
                  <a
                    href={`tel:${HOTEL_ENTITY.phone}`}
                    className="block text-xs font-semibold text-amber-400 hover:underline mt-0.5"
                  >
                    Call Reservations Desk: {HOTEL_ENTITY.phone}
                  </a>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
