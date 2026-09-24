import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Send,
  Navigation
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { HOTEL_ENTITY } from '../data/hotelData';

interface ContactPageProps {
  navigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenBanquetEnquiry: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  navigate,
  onOpenBooking,
  onOpenBanquetEnquiry
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Room Reservation Query');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Reach Out Directly
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Contact Hotel Ashoka
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Connect with our reservation front desk, banquet coordinators, or management team.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <AEOBox 
          heading="Quick Answer: How to Contact Hotel Ashoka"
          answer="Hotel Ashoka's front desk is staffed 24/7. Call reservations at +91 94480 12345 or +91 80 2234 5678, send a WhatsApp message to +91 94480 12345, or email reservations@hotelashoka.in. Address: Hotel Ashoka, Main Commercial Hub, City Center."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details & Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-5">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Official Hotel Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-amber-50 text-amber-800 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-serif text-base">Hotel Address:</strong>
                    <span>{HOTEL_ENTITY.address}, {HOTEL_ENTITY.city} - {HOTEL_ENTITY.postalCode}, {HOTEL_ENTITY.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-amber-50 text-amber-800 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-serif text-base">Telephone / Mobile:</strong>
                    <div className="font-mono mt-0.5 text-stone-800">
                      <span>{HOTEL_ENTITY.phone}</span> / <span>{HOTEL_ENTITY.mobile}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-amber-50 text-amber-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-serif text-base">Electronic Mail:</strong>
                    <span className="font-mono text-stone-800">{HOTEL_ENTITY.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-amber-50 text-amber-800 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-serif text-base">Front Desk Operations:</strong>
                    <span>Open 24 Hours • 7 Days a Week • Year-Round</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${HOTEL_ENTITY.phone}`}
                  className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Reception Now</span>
                </a>
                <a
                  href={`https://wa.me/${HOTEL_ENTITY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-stone-900 text-stone-100 rounded-xl p-6 border border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-amber-400">Interactive Map Location</h3>
                <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800 font-mono">
                  Coordinates: 12.9716° N, 77.5946° E
                </span>
              </div>
              <p className="text-xs text-stone-300">
                Opposite Central Metro Station & Main Railway Terminal corridor. Complimentary parking on premises.
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Hotel+Ashoka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-semibold flex items-center justify-center gap-2 border border-stone-700"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Turn-by-Turn GPS Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div>
              <div className="text-xs uppercase font-semibold tracking-wider text-amber-800">
                Direct Enquiry Form
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-0.5">
                Send Us a Message
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Our front desk replies promptly within 1 business hour.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900">Message Delivered</h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Your enquiry regarding "{subject}" has been forwarded to the Hotel Ashoka front desk. We will call you on <strong>{phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-amber-800 hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kulkarni"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Phone / Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98860 12345"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. anand@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">Enquiry Department</label>
                  <select
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:border-amber-500"
                  >
                    <option value="Room Reservation Query">Room Reservation Query (Direct Tariffs)</option>
                    <option value="Banquet Hall Booking (15 to 500 Pax)">Banquet Hall Booking (15 to 500 Pax)</option>
                    <option value="Restaurant Dining / Table Reservation">Restaurant Dining / Table Reservation</option>
                    <option value="Corporate Tie-Up & Long Stay">Corporate Tie-Up & Long Stay</option>
                    <option value="General Guest Feedback / Billing">General Guest Feedback / Billing</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">Detailed Message</label>
                  <textarea
                    rows={4}
                    placeholder="Provide event date, guest count, or room requirements..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-900 focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md hover:from-amber-400 hover:to-amber-600 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message to Hotel Ashoka</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
