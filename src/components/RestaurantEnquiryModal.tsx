import React, { useState } from 'react';
import { 
  X, 
  Utensils, 
  Clock, 
  Users, 
  Phone, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { RESTAURANTS_DATA, HOTEL_ENTITY } from '../data/hotelData';

interface RestaurantEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRestaurantSlug?: string;
}

export const RestaurantEnquiryModal: React.FC<RestaurantEnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedRestaurantSlug
}) => {
  const [restaurantSlug, setRestaurantSlug] = useState<string>(selectedRestaurantSlug || 'kadhambari');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [diningDate, setDiningDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('07:30 PM (Dinner)');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const currentRest = RESTAURANTS_DATA.find(r => r.slug === restaurantSlug) || RESTAURANTS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }
    setConfirmed(true);
  };

  const getWhatsAppMessage = () => {
    const text = `*Table Enquiry - Hotel Ashoka*
Venue: ${currentRest.name} (${currentRest.category})
Guest Name: ${name}
Phone: ${phone}
Date: ${diningDate}
Time: ${timeSlot}
Guests: ${guests} Person${guests > 1 ? 's' : ''}
Notes: ${notes || 'Standard table'}

Please confirm table reservation.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-xl bg-stone-900 border border-amber-800 shadow-2xl p-6 sm:p-8 text-stone-100 my-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-serif font-bold text-amber-400">
              Dining Reservation Received
            </h3>
            <p className="text-xs text-stone-300">
              Thank you {name}. We have logged your request for <strong>{currentRest.name}</strong> on {diningDate} at {timeSlot}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                href={`https://wa.me/${HOTEL_ENTITY.whatsapp}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Confirm</span>
              </a>
              <a
                href={`tel:${HOTEL_ENTITY.phone}`}
                className="flex-1 py-2.5 px-4 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-medium text-xs flex items-center justify-center gap-2 border border-stone-700"
              >
                <Phone className="w-4 h-4" />
                <span>Call F&B Desk</span>
              </a>
            </div>
            <button onClick={onClose} className="text-xs text-stone-500 hover:text-stone-300 pt-2 underline">
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-stone-800 pb-3 mb-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                Hotel Ashoka Dining
              </div>
              <h2 className="text-xl font-serif font-bold text-amber-400">
                Table Reservation & Dining Enquiry
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-stone-300 mb-1">
                  Select Dining Venue
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {RESTAURANTS_DATA.map(r => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRestaurantSlug(r.slug)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        restaurantSlug === r.slug
                          ? 'border-amber-500 bg-amber-950/40 text-amber-300 ring-1 ring-amber-500'
                          : 'border-stone-800 bg-stone-950 text-stone-400'
                      }`}
                    >
                      <div className="font-bold text-stone-200 truncate">{r.name}</div>
                      <div className="text-[10px] text-amber-500 mt-0.5">{r.category}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-stone-300 mb-1">Date</label>
                  <input
                    type="date"
                    value={diningDate}
                    onChange={e => setDiningDate(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-stone-300 mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map(n => (
                      <option key={n} value={n}>{n} Person{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-stone-300 mb-1">Preferred Time</label>
                <input
                  type="text"
                  placeholder="e.g. 1:00 PM (Lunch) or 8:00 PM (Dinner)"
                  value={timeSlot}
                  onChange={e => setTimeSlot(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-stone-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Radhika Sharma"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-stone-300 mb-1">Phone *</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98860 00000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-stone-300 mb-1">Special Preferences / Requests</label>
                <textarea
                  rows={2}
                  placeholder="Quiet booth, birthday celebration, high chair needed, etc."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-stone-950 font-bold text-sm hover:from-amber-400"
                >
                  Reserve Table
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
