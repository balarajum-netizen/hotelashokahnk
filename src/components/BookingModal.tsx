import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { ROOMS_DATA, HOTEL_ENTITY } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomSlug?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomSlug
}) => {
  const initialRoom = ROOMS_DATA.find(r => r.slug === selectedRoomSlug) || ROOMS_DATA[0];

  // Form states
  const [selectedSlug, setSelectedSlug] = useState<string>(initialRoom.slug);
  const [checkIn, setCheckIn] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [confirmedBookingId, setConfirmedBookingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find(r => r.slug === selectedSlug) || ROOMS_DATA[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(1, d2.getTime() - d1.getTime());
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const baseTariff = currentRoom.tariff * nights * roomsCount;
  const estimatedTax = Math.round(baseTariff * 0.12);
  const totalAmount = baseTariff + estimatedTax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      alert("Please provide your name and contact phone number.");
      return;
    }
    const bookingRef = `ASH-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBookingId(bookingRef);
  };

  const constructWhatsAppMessage = () => {
    const msg = `*Booking Request - Hotel Ashoka*
Reference: ${confirmedBookingId || 'New Enquiry'}
Guest: ${guestName}
Phone: ${guestPhone}
Room Type: ${currentRoom.name} (${currentRoom.tariffDisplay})
Check-In: ${checkIn}
Check-Out: ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})
Rooms: ${roomsCount} | Adults: ${adults} | Children: ${children}
Estimated Total: ₹${totalAmount.toLocaleString('en-IN')}/- (incl. GST)
Special Request: ${specialRequest || 'None'}

Please confirm availability and booking.`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-xl bg-stone-900 border border-amber-700/60 shadow-2xl p-6 sm:p-8 text-stone-100 my-8">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBookingId ? (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-amber-400">
                Reservation Request Generated
              </h3>
              <p className="text-sm text-stone-300 mt-1">
                Booking Reference: <span className="font-mono font-bold text-white bg-stone-800 px-2 py-0.5 rounded">{confirmedBookingId}</span>
              </p>
            </div>

            <div className="bg-stone-950 rounded-lg p-5 border border-stone-800 text-left text-sm space-y-2">
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Room Category:</span>
                <span className="font-semibold text-amber-400">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Dates:</span>
                <span className="text-stone-200">{checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Guests & Rooms:</span>
                <span className="text-stone-200">{adults} Adults, {children} Children | {roomsCount} Room(s)</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-stone-400">Estimated Total (with 12% GST):</span>
                <span className="font-bold text-lg text-emerald-400 font-mono">₹{totalAmount.toLocaleString('en-IN')}/-</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-lg mx-auto">
              Our reservation manager will verify current room allocation and contact you at <strong>{guestPhone}</strong>. You can also directly forward this request to our front desk team via WhatsApp for instant priority confirmation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${HOTEL_ENTITY.whatsapp}?text=${constructWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>
              <a
                href={`tel:${HOTEL_ENTITY.phone}`}
                className="flex-1 py-3 px-4 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold flex items-center justify-center gap-2 border border-stone-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Front Desk ({HOTEL_ENTITY.phone})</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-stone-500 hover:text-stone-300 pt-2 underline"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form State */
          <div>
            <div className="border-b border-amber-900/50 pb-4 mb-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                Direct Official Reservation
              </div>
              <h2 className="text-2xl font-serif font-bold text-amber-400">
                Book Your Stay at Hotel Ashoka
              </h2>
              <p className="text-xs text-stone-400 mt-1">
                Official Best Rate Guarantee • No Hidden Reservation Fees • Transparent Published Tariffs
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Room Category Select */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5 uppercase tracking-wider">
                  Select Room Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {ROOMS_DATA.map(room => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setSelectedSlug(room.slug)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        selectedSlug === room.slug
                          ? 'border-amber-500 bg-amber-950/40 text-amber-300 ring-1 ring-amber-500'
                          : 'border-stone-800 bg-stone-950/60 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{room.name}</div>
                      <div className="text-sm font-mono font-bold text-amber-400 mt-1">{room.tariffDisplay}</div>
                      <div className="text-[10px] text-stone-400 mt-0.5">per night</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates & Quantities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={e => setAdults(Number(e.target.value))}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    {[1, 2, 3, 4].map(n => (
                      <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Children (under 12)
                  </label>
                  <select
                    value={children}
                    onChange={e => setChildren(Number(e.target.value))}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    {[0, 1, 2].map(n => (
                      <option key={n} value={n}>{n} Child{n !== 1 ? 'ren' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    No. of Rooms
                  </label>
                  <select
                    value={roomsCount}
                    onChange={e => setRoomsCount(Number(e.target.value))}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Guest Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Kumar"
                    value={guestName}
                    onChange={e => setGuestName(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500 placeholder-stone-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={guestPhone}
                    onChange={e => setGuestPhone(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500 placeholder-stone-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="anand@example.com"
                  value={guestEmail}
                  onChange={e => setGuestEmail(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500 placeholder-stone-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Special Requests (Arrival time, bed preference, etc.)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Late check-in around 6 PM, king bed preferred"
                  value={specialRequest}
                  onChange={e => setSpecialRequest(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-sm text-stone-200 focus:outline-none focus:border-amber-500 placeholder-stone-600"
                />
              </div>

              {/* Price Calculation Box */}
              <div className="bg-stone-950/80 p-3.5 rounded-lg border border-amber-900/40 text-xs space-y-1.5">
                <div className="flex justify-between text-stone-400">
                  <span>{currentRoom.name} ({currentRoom.tariffDisplay} × {nights} night{nights > 1 ? 's' : ''} × {roomsCount} room):</span>
                  <span className="font-mono text-stone-200">₹{baseTariff.toLocaleString('en-IN')}/-</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Estimated Government GST (12%):</span>
                  <span className="font-mono text-stone-200">₹{estimatedTax.toLocaleString('en-IN')}/-</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-amber-400 pt-1.5 border-t border-stone-800">
                  <span>Total Estimated Payable:</span>
                  <span className="font-mono text-base font-bold text-emerald-400">₹{totalAmount.toLocaleString('en-IN')}/-</span>
                </div>
                <p className="text-[10px] text-stone-500 italic pt-1">
                  * Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3 px-4 rounded-lg shadow-md transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Instant Reservation</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
