import React from 'react';
import { SPAM_AUDIT_DATA, HOTEL_ENTITY } from '../data/hotelData';

interface LegalPagesProps {
  pageType: 'privacy-policy' | 'terms-and-conditions' | 'cancellation-policy' | 'refund-policy' | 'cookie-policy' | 'sitemap';
  navigate: (path: string) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ pageType, navigate }) => {
  if (pageType === 'sitemap') {
    return (
      <div className="bg-[#faf8f5] min-h-screen text-stone-900 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              HTML Website Sitemap
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Index of all canonical pages published on official domain: <strong className="font-mono text-stone-800">hotelashoka.in</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl border border-stone-200 shadow-xs text-xs">
            <div className="space-y-3">
              <h2 className="font-serif font-bold text-base text-stone-900 border-b border-stone-100 pb-1.5">
                Core & Accommodations
              </h2>
              <ul className="space-y-2 text-stone-600">
                <li><button onClick={() => navigate('/')} className="hover:text-amber-800 hover:underline">/ (Home - Hotel Ashoka)</button></li>
                <li><button onClick={() => navigate('/about-us/')} className="hover:text-amber-800 hover:underline">/about-us/ (About Hotel Ashoka)</button></li>
                <li><button onClick={() => navigate('/rooms/')} className="hover:text-amber-800 hover:underline">/rooms/ (Hotel Rooms at Hotel Ashoka)</button></li>
                <li><button onClick={() => navigate('/rooms/presidential-suite/')} className="hover:text-amber-800 hover:underline">/rooms/presidential-suite/ (Presidential Suite - ₹4,500/-)</button></li>
                <li><button onClick={() => navigate('/rooms/executive-suite/')} className="hover:text-amber-800 hover:underline">/rooms/executive-suite/ (Executive Suite - ₹3,450/-)</button></li>
                <li><button onClick={() => navigate('/rooms/executive-room/')} className="hover:text-amber-800 hover:underline">/rooms/executive-room/ (Executive Room - ₹3,100/-)</button></li>
                <li><button onClick={() => navigate('/rooms/deluxe-room/')} className="hover:text-amber-800 hover:underline">/rooms/deluxe-room/ (Deluxe Room - ₹2,200/-)</button></li>
                <li><button onClick={() => navigate('/rooms/room-tariff/')} className="hover:text-amber-800 hover:underline">/rooms/room-tariff/ (Published Tariff Schedule)</button></li>
                <li><button onClick={() => navigate('/rooms/compare-rooms/')} className="hover:text-amber-800 hover:underline">/rooms/compare-rooms/ (Compare Rooms)</button></li>
                <li><button onClick={() => navigate('/rooms/amenities/')} className="hover:text-amber-800 hover:underline">/rooms/amenities/ (Room Amenities)</button></li>
                <li><button onClick={() => navigate('/rooms/booking-policy/')} className="hover:text-amber-800 hover:underline">/rooms/booking-policy/ (Booking Policy)</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif font-bold text-base text-stone-900 border-b border-stone-100 pb-1.5">
                Restaurants & Banquets
              </h2>
              <ul className="space-y-2 text-stone-600">
                <li><button onClick={() => navigate('/restaurants/')} className="hover:text-amber-800 hover:underline">/restaurants/ (Restaurants at Hotel Ashoka)</button></li>
                <li><button onClick={() => navigate('/restaurants/kanishka-coffee-shop/')} className="hover:text-amber-800 hover:underline">/restaurants/kanishka-coffee-shop/ (Kanishka - Pure Veg)</button></li>
                <li><button onClick={() => navigate('/restaurants/kadhambari/')} className="hover:text-amber-800 hover:underline">/restaurants/kadhambari/ (Kadhambari - Non-Veg)</button></li>
                <li><button onClick={() => navigate('/restaurants/classic-restaurant-bar/')} className="hover:text-amber-800 hover:underline">/restaurants/classic-restaurant-bar/ (Classic - Restaurant & Bar)</button></li>
                <li><button onClick={() => navigate('/banquet-halls/')} className="hover:text-amber-800 hover:underline">/banquet-halls/ (Banquet Halls Overview)</button></li>
                <li><button onClick={() => navigate('/banquet-halls/board-rooms/')} className="hover:text-amber-800 hover:underline">/banquet-halls/board-rooms/ (Board Rooms - 15-20 Pax)</button></li>
                <li><button onClick={() => navigate('/banquet-halls/kakatiya-hall/')} className="hover:text-amber-800 hover:underline">/banquet-halls/kakatiya-hall/ (Kakatiya Hall - 100 Pax)</button></li>
                <li><button onClick={() => navigate('/banquet-halls/chalukya-hall/')} className="hover:text-amber-800 hover:underline">/banquet-halls/chalukya-hall/ (Chalukya Hall - 200 Pax)</button></li>
                <li><button onClick={() => navigate('/banquet-halls/shubam-hall/')} className="hover:text-amber-800 hover:underline">/banquet-halls/shubam-hall/ (Shubam Hall - 500 Pax)</button></li>
                <li><button onClick={() => navigate('/banquet-enquiry/')} className="hover:text-amber-800 hover:underline">/banquet-enquiry/ (Banquet & Event Enquiry)</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const titles: Record<string, string> = {
    'privacy-policy': 'Privacy Policy',
    'terms-and-conditions': 'Terms and Conditions',
    'cancellation-policy': 'Cancellation & No-Show Policy',
    'refund-policy': 'Refund Policy',
    'cookie-policy': 'Cookie Policy'
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-b border-stone-200 pb-4">
          <div className="text-xs uppercase font-semibold tracking-wider text-amber-800">
            Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-1">
            {titles[pageType] || 'Hotel Policy'}
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Entity: Hotel Ashoka • Canonical Domain: hotelashoka.in • Effective Year: 2026
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-xs space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {pageType === 'privacy-policy' && (
            <>
              <p>
                Hotel Ashoka values your privacy and is committed to protecting your personal data in accordance with applicable laws in India. This Privacy Policy describes how we collect, store, and utilize information provided when visiting hotelashoka.in or reserving accommodations and banquet services.
              </p>
              <h2 className="font-serif font-bold text-base text-stone-900">Information We Collect</h2>
              <p>
                We collect your name, phone number, email address, government photo identity particulars (at check-in), and reservation preferences strictly for billing, identification compliance, and guest communication.
              </p>
              <h2 className="font-serif font-bold text-base text-stone-900">Zero Data Monetization</h2>
              <p>
                We do not sell, license, or lease your personal information to third-party advertising brokers or unaffiliated commercial marketers.
              </p>
            </>
          )}

          {pageType === 'terms-and-conditions' && (
            <>
              <p>
                By accessing hotelashoka.in or reserving accommodations and banquet services at Hotel Ashoka, you agree to comply with these terms and conditions.
              </p>
              <h2 className="font-serif font-bold text-base text-stone-900">Tariffs and Billing</h2>
              <p>
                "Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking." All published tariffs are subject to government GST slabs.
              </p>
              <h2 className="font-serif font-bold text-base text-stone-900">Guest Conduct</h2>
              <p>
                Guests must conduct themselves with decorum. The management reserves the right to refuse service or evict persons who breach safety, alcohol licensing laws, or property hygiene standards.
              </p>
            </>
          )}

          {pageType === 'cancellation-policy' && (
            <>
              <p>
                We understand plans can change. Hotel Ashoka offers clear cancellation conditions for resident room bookings and banquet halls.
              </p>
              <h2 className="font-serif font-bold text-base text-stone-900">Room Reservation Cancellations</h2>
              <p>
                Cancellations received at least 24 hours before the 12:00 PM check-in date will be processed without standard retention fees. Cancellations made within 24 hours or no-shows incur a retention fee equal to the first night's room charge.
              </p>
              <h2 className="font-serif font-bold text-base text-stone-900">Banquet Hall Cancellations</h2>
              <p>
                Banquet dates require significant kitchen and venue preparation. Cancellation schedules are governed by the specific banquet contract agreed at the time of deposit payment.
              </p>
            </>
          )}

          {pageType === 'refund-policy' && (
            <>
              <p>
                Eligible refunds resulting from authorized cancellations or billing adjustments are credited back to the original method of payment within 5 to 7 business banking days.
              </p>
              <p>
                In case of any payment query or refund escalation, please contact our accounts department with your booking reference at <strong>{HOTEL_ENTITY.email}</strong>.
              </p>
            </>
          )}

          {pageType === 'cookie-policy' && (
            <>
              <p>
                hotelashoka.in uses strictly necessary and functional cookies to remember your preferred room selection, date choices, and security session parameters. We do not use intrusive cross-site tracking cookies.
              </p>
            </>
          )}

          <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs">
            <span className="text-stone-500">Contact: {HOTEL_ENTITY.phone}</span>
            <button onClick={() => navigate('/')} className="text-amber-800 font-semibold hover:underline">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
