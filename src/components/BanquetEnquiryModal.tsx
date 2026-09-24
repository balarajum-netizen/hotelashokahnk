import React, { useState } from 'react';
import { 
  X, 
  Users, 
  Calendar, 
  Clock, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  AlertTriangle,
  Building2
} from 'lucide-react';
import { BANQUET_HALLS_DATA, HOTEL_ENTITY } from '../data/hotelData';

interface BanquetEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedHallSlug?: string;
}

export const BanquetEnquiryModal: React.FC<BanquetEnquiryModalProps> = ({
  isOpen,
  onClose,
  selectedHallSlug
}) => {
  const [preferredHall, setPreferredHall] = useState<string>(selectedHallSlug || 'shubam-hall');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('Wedding Reception');
  const [eventDate, setEventDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split('T')[0];
  });
  const [guestCount, setGuestCount] = useState<number>(150);
  const [preferredTime, setPreferredTime] = useState('Evening (6:00 PM – 11:00 PM)');
  const [cateringRequirement, setCateringRequirement] = useState('Both Vegetarian & Non-Vegetarian Buffet');
  const [message, setMessage] = useState('');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentHall = BANQUET_HALLS_DATA.find(h => h.slug === preferredHall) || BANQUET_HALLS_DATA[3];
  const isOverCapacity = guestCount > currentHall.capacity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setSubmittedId(`BNQ-${Math.floor(10000 + Math.random() * 90000)}`);
  };

  const getWhatsAppMessage = () => {
    const text = `*Banquet Enquiry - Hotel Ashoka*
Reference: ${submittedId || 'New Enquiry'}
Name: ${name}
Phone: ${phone}
Preferred Hall: ${currentHall.name} (Max: ${currentHall.capacityDisplay})
Event Type: ${eventType}
Event Date: ${eventDate}
Guest Count: ${guestCount} attendees
Timing Slot: ${preferredTime}
Catering Preference: ${cateringRequirement}
Notes: ${message || 'Standard banquet package'}

Kindly send availability and quotation.`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-xl bg-stone-900 border border-amber-800 shadow-2xl p-6 sm:p-8 text-stone-100 my-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedId ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto border border-amber-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-amber-400">
              Banquet Enquiry Submitted
            </h3>
            <p className="text-sm text-stone-300">
              Enquiry Reference: <span className="font-mono font-bold text-white bg-stone-800 px-2.5 py-1 rounded">{submittedId}</span>
            </p>

            <div className="bg-stone-950 rounded-lg p-4 border border-stone-800 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-stone-800 pb-1.5">
                <span className="text-stone-400">Preferred Hall:</span>
                <span className="font-semibold text-amber-300">{currentHall.name} ({currentHall.capacityDisplay})</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-1.5">
                <span className="text-stone-400">Event & Date:</span>
                <span className="text-stone-200">{eventType} on {eventDate}</span>
              </div>
              <div className="flex justify-between border-b border-stone-800 pb-1.5">
                <span className="text-stone-400">Expected Guests:</span>
                <span className="text-stone-200">{guestCount} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Catering:</span>
                <span className="text-stone-200">{cateringRequirement}</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Our Senior Banquet Manager will review your requirements and reach out on <strong>{phone}</strong> with hall availability and custom menu estimates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${HOTEL_ENTITY.whatsapp}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Banquet Team</span>
              </a>
              <a
                href={`tel:${HOTEL_ENTITY.phone}`}
                className="flex-1 py-3 px-4 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold flex items-center justify-center gap-2 border border-stone-700"
              >
                <Phone className="w-4 h-4" />
                <span>Call Events Desk</span>
              </a>
            </div>

            <button onClick={onClose} className="text-xs text-stone-500 hover:text-stone-300 pt-2 underline">
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="border-b border-stone-800 pb-3 mb-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-500">
                Plan Your Event At Hotel Ashoka
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-400">
                Banquet & Event Enquiry
              </h2>
              <p className="text-xs text-stone-400 mt-1">
                Versatile event spaces from 15 to 500 guests with dedicated catering & coordination.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              {/* Select Hall */}
              <div>
                <label className="block font-semibold text-stone-300 mb-1">
                  Select Banquet Hall
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BANQUET_HALLS_DATA.map(h => (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setPreferredHall(h.slug)}
                      className={`p-2 rounded-lg border text-left transition-all ${
                        preferredHall === h.slug
                          ? 'border-amber-500 bg-amber-950/40 text-amber-300 ring-1 ring-amber-500'
                          : 'border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="font-bold text-stone-200 truncate">{h.name}</div>
                      <div className="text-amber-400 font-mono mt-0.5">{h.capacityDisplay}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Over capacity warning */}
              {isOverCapacity && (
                <div className="p-2.5 rounded-md bg-amber-950/60 border border-amber-600/70 text-amber-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>
                    Note: Your {guestCount} guest estimate exceeds {currentHall.name}'s verified capacity ({currentHall.capacityDisplay}). We recommend selecting a larger hall or discussing split configurations.
                  </span>
                </div>
              )}

              {/* Event Type & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-stone-300 mb-1">
                    Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={e => setEventType(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                  >
                    <option value="Wedding / Vivah">Wedding Ceremony / Vivah</option>
                    <option value="Wedding Reception">Wedding Reception</option>
                    <option value="Corporate Conference / Summit">Corporate Conference / Summit</option>
                    <option value="Board Meeting / Strategy Session">Board Meeting / Strategy Session</option>
                    <option value="Birthday / Anniversary Party">Birthday / Anniversary Party</option>
                    <option value="Engagement / Sangeet">Engagement / Sangeet Ceremony</option>
                    <option value="Alumni / Social Gathering">Alumni / Social Gathering</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-stone-300 mb-1">
                    Tentative Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Guests & Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-stone-300 mb-1">
                    Approximate Number of Guests
                  </label>
                  <input
                    type="number"
                    min={10}
                    max={1000}
                    value={guestCount}
                    onChange={e => setGuestCount(Number(e.target.value))}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-stone-300 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={e => setPreferredTime(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                  >
                    <option value="Morning / Lunch (09:00 AM – 03:00 PM)">Morning / Lunch (09:00 AM – 03:00 PM)</option>
                    <option value="Evening (06:00 PM – 11:00 PM)">Evening (06:00 PM – 11:00 PM)</option>
                    <option value="Full Day (09:00 AM – 10:00 PM)">Full Day (09:00 AM – 10:00 PM)</option>
                    <option value="Multi-Day Event">Multi-Day Event</option>
                  </select>
                </div>
              </div>

              {/* Catering */}
              <div>
                <label className="block font-medium text-stone-300 mb-1">
                  Food & Catering Requirement
                </label>
                <select
                  value={cateringRequirement}
                  onChange={e => setCateringRequirement(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500"
                >
                  <option value="Pure Vegetarian Buffet (Kanishka culinary team)">Pure Vegetarian Buffet (from Kanishka kitchen)</option>
                  <option value="Non-Vegetarian & Biryani Buffet (Kadhambari team)">Non-Vegetarian & Biryani Buffet (from Kadhambari kitchen)</option>
                  <option value="Both Vegetarian & Non-Vegetarian Counters">Both Vegetarian & Non-Vegetarian Counters</option>
                  <option value="High Tea & Executive Refreshments Only">High Tea & Executive Refreshments Only</option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block font-medium text-stone-300 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. S. Narayanan"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500 placeholder-stone-600"
                  />
                </div>
                <div>
                  <label className="block font-medium text-stone-300 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 94480 00000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500 placeholder-stone-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-stone-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="contact@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500 placeholder-stone-600"
                />
              </div>

              <div>
                <label className="block font-medium text-stone-300 mb-1">
                  Additional Details & Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Audio visual needs, stage decoration, guest accommodation requirement, etc."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 focus:border-amber-500 placeholder-stone-600"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-stone-950 font-bold text-sm hover:from-amber-400 hover:to-amber-600 transition-all shadow-md"
                >
                  Submit Event Enquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
