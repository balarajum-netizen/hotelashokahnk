import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare,
  Lock,
  SearchCheck
} from 'lucide-react';
import { HOTEL_ENTITY } from '../data/hotelData';

interface FooterProps {
  navigate: (path: string) => void;
  onOpenSpamAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onOpenSpamAudit }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t-2 border-amber-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-stone-800">
          
          {/* Column 1: HOTEL ASHOKA */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-amber-600 flex items-center justify-center text-white font-serif font-bold text-lg">
                A
              </div>
              <span className="font-regal text-lg font-bold text-amber-400 tracking-wider">
                HOTEL ASHOKA
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Official website of Hotel Ashoka (hotelashoka.in). Centrally situated hospitality landmark offering comfortable rooms, presidential suites, multi-cuisine dining, and banqueting for up to 500 guests.
            </p>
            <div className="text-xs space-y-1.5 text-stone-300 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                <span>Central Business District, Metro Corridor</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`tel:${HOTEL_ENTITY.phone}`} className="hover:text-amber-400">{HOTEL_ENTITY.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <a href={`mailto:${HOTEL_ENTITY.email}`} className="hover:text-amber-400">{HOTEL_ENTITY.email}</a>
              </div>
            </div>
            <ul className="text-xs space-y-1 text-stone-400 pt-2">
              <li><button onClick={() => navigate('/about-us/')} className="hover:text-amber-400">About Us</button></li>
              <li><button onClick={() => navigate('/rooms/')} className="hover:text-amber-400">Rooms Overview</button></li>
              <li><button onClick={() => navigate('/restaurants/')} className="hover:text-amber-400">Restaurants Overview</button></li>
              <li><button onClick={() => navigate('/banquet-halls/')} className="hover:text-amber-400">Banquet Halls</button></li>
              <li><button onClick={() => navigate('/facilities/')} className="hover:text-amber-400">Facilities</button></li>
              <li><button onClick={() => navigate('/services/')} className="hover:text-amber-400">Services</button></li>
              <li><button onClick={() => navigate('/contact-us/')} className="hover:text-amber-400">Contact</button></li>
            </ul>
          </div>

          {/* Column 2: ROOMS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-sans mb-4 border-b border-stone-800 pb-2">
              ROOMS & SUITES
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button onClick={() => navigate('/rooms/presidential-suite/')} className="hover:text-amber-400 text-left flex justify-between w-full">
                  <span>Presidential Suite</span>
                  <span className="text-amber-500 font-mono font-medium">₹4,500/-</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/rooms/executive-suite/')} className="hover:text-amber-400 text-left flex justify-between w-full">
                  <span>Executive Suite</span>
                  <span className="text-amber-500 font-mono font-medium">₹3,450/-</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/rooms/executive-room/')} className="hover:text-amber-400 text-left flex justify-between w-full">
                  <span>Executive Room</span>
                  <span className="text-amber-500 font-mono font-medium">₹3,100/-</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/rooms/deluxe-room/')} className="hover:text-amber-400 text-left flex justify-between w-full">
                  <span>Deluxe Room</span>
                  <span className="text-amber-500 font-mono font-medium">₹2,200/-</span>
                </button>
              </li>
              <li className="pt-2 border-t border-stone-800/80">
                <button onClick={() => navigate('/rooms/room-tariff/')} className="hover:text-amber-400 font-medium text-amber-300">
                  Room Tariff Comparison →
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/rooms/compare-rooms/')} className="hover:text-amber-400">
                  Compare Room Features
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/rooms/amenities/')} className="hover:text-amber-400">
                  Room Amenities List
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/rooms/booking-policy/')} className="hover:text-amber-400">
                  Room Booking Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: RESTAURANTS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-sans mb-4 border-b border-stone-800 pb-2">
              RESTAURANTS
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button onClick={() => navigate('/restaurants/kanishka-coffee-shop/')} className="hover:text-amber-400 text-left block w-full">
                  <div className="font-medium text-stone-200">Kanishka Coffee Shop</div>
                  <div className="text-[11px] text-amber-500/90">Pure Vegetarian</div>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/restaurants/kadhambari/')} className="hover:text-amber-400 text-left block w-full">
                  <div className="font-medium text-stone-200">Kadhambari</div>
                  <div className="text-[11px] text-amber-500/90">Non-Vegetarian & Biryani</div>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/restaurants/classic-restaurant-bar/')} className="hover:text-amber-400 text-left block w-full">
                  <div className="font-medium text-stone-200">Classic - Restaurant & Bar</div>
                  <div className="text-[11px] text-amber-500/90">Lounge & Bar</div>
                </button>
              </li>
              <li className="pt-2 border-t border-stone-800/80">
                <button onClick={() => navigate('/restaurants/')} className="hover:text-amber-400">
                  Dining Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/restaurants/dining-faq/')} className="hover:text-amber-400">
                  Food & Dining FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: BANQUET HALLS */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-sans mb-4 border-b border-stone-800 pb-2">
              BANQUET HALLS
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button onClick={() => navigate('/banquet-halls/board-rooms/')} className="hover:text-amber-400 text-left flex justify-between w-full">
                  <span>Board Rooms</span>
                  <span className="text-stone-400">15–20 pax</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/banquet-halls/kakatiya-hall/')} className="hover:text-amber-400 text-left flex justify-between w-full">
                  <span>Kakatiya Hall</span>
                  <span className="text-stone-400">100 pax</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/banquet-halls/chalukya-hall/')} className="hover:text-amber-400 text-left flex justify-between w-full">
                  <span>Chalukya Hall</span>
                  <span className="text-stone-400">200 pax</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/banquet-halls/shubam-hall/')} className="hover:text-amber-400 text-left flex justify-between w-full">
                  <span>Shubam Hall</span>
                  <span className="text-amber-400">500 pax</span>
                </button>
              </li>
              <li className="pt-2 border-t border-stone-800/80">
                <button onClick={() => navigate('/banquet-enquiry/')} className="hover:text-amber-400 font-medium text-amber-300">
                  Banquet & Event Enquiry →
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/events/weddings/')} className="hover:text-amber-400">
                  Wedding Celebrations
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/events/corporate-events/')} className="hover:text-amber-400">
                  Corporate Conferences
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: TRAVEL & CONTENT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 font-sans mb-4 border-b border-stone-800 pb-2">
              TRAVEL & CONTENT
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => navigate('/local-attractions/')} className="hover:text-amber-400">
                  Local Attractions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/local-attractions/places-to-visit-near-hotel/')} className="hover:text-amber-400">
                  Places to Visit Near Hotel
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/local-attractions/how-to-reach-hotel-ashoka/')} className="hover:text-amber-400">
                  How to Reach Hotel Ashoka
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/gallery/')} className="hover:text-amber-400">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/blog/')} className="hover:text-amber-400">
                  Hotel Guides & Blog
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/testimonials/')} className="hover:text-amber-400">
                  Guest Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/faq/')} className="hover:text-amber-400">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/offers/')} className="hover:text-amber-400">
                  Current Special Offers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Notice on Verifiable Accuracy */}
        <div className="py-6 border-b border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Factual Verification Guarantee:</strong> All published tariffs (₹2,200/-, ₹3,100/-, ₹3,450/-, ₹4,500/-) and banquet capacities (15–500) are sourced directly from Hotel Ashoka administration.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSpamAudit}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-900 border border-stone-700 text-stone-300 hover:text-amber-400 hover:border-amber-600 transition-colors text-xs"
            >
              <SearchCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>Domain Spam & Technical SEO Console</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Hotel Ashoka. Official Domain: <span className="text-stone-400">https://hotelashoka.in/</span>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => navigate('/privacy-policy/')} className="hover:text-stone-300">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => navigate('/terms-and-conditions/')} className="hover:text-stone-300">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => navigate('/cancellation-policy/')} className="hover:text-stone-300">
              Cancellation Policy
            </button>
            <span>•</span>
            <button onClick={() => navigate('/refund-policy/')} className="hover:text-stone-300">
              Refund Policy
            </button>
            <span>•</span>
            <button onClick={() => navigate('/cookie-policy/')} className="hover:text-stone-300">
              Cookie Policy
            </button>
            <span>•</span>
            <button onClick={() => navigate('/sitemap/')} className="hover:text-stone-300">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
