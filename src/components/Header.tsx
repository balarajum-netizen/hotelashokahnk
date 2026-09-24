import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageSquare, 
  Calendar,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { HOTEL_ENTITY, ROOMS_DATA, RESTAURANTS_DATA, BANQUET_HALLS_DATA } from '../data/hotelData';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
  onOpenBooking: (roomType?: string) => void;
  onOpenBanquetEnquiry: (hall?: string) => void;
  onOpenRestaurantEnquiry: (restaurant?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  navigate,
  onOpenBooking,
  onOpenBanquetEnquiry,
  onOpenRestaurantEnquiry
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close dropdowns when path changes
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification / Utility Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 hidden md:block border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Central Business Hub, City Center
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              Check-in: 12:00 PM | Check-out: 11:00 AM
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-amber-400 font-medium">Official Website: hotelashoka.in</span>
            <span className="text-stone-600">|</span>
            <a 
              href={`tel:${HOTEL_ENTITY.phone}`} 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              {HOTEL_ENTITY.phone}
            </a>
            <a 
              href={`https://wa.me/${HOTEL_ENTITY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Help
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        ref={navRef} 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg py-2.5 border-b border-amber-900/40 text-stone-100' 
            : 'bg-stone-900 text-stone-100 py-3.5 border-b border-amber-950'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleLinkClick('/')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-xl shadow-md border border-amber-300/40 group-hover:scale-105 transition-transform">
              A
            </div>
            <div>
              <div className="font-regal text-xl sm:text-2xl font-bold tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors">
                HOTEL ASHOKA
              </div>
              <div className="text-[10px] tracking-widest uppercase text-stone-400 font-medium -mt-0.5">
                hotelashoka.in • Bengaluru
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] font-medium tracking-wide">
            {/* HOME */}
            <button 
              onClick={() => handleLinkClick('/')}
              className={`px-2.5 py-1.5 rounded-sm transition-colors ${
                currentPath === '/' ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
              }`}
            >
              HOME
            </button>

            {/* ABOUT US */}
            <button 
              onClick={() => handleLinkClick('/about-us/')}
              className={`px-2.5 py-1.5 rounded-sm transition-colors ${
                currentPath === '/about-us/' ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
              }`}
            >
              ABOUT US
            </button>

            {/* ROOMS ▼ */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('rooms')}
                onMouseEnter={() => setActiveDropdown('rooms')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-sm transition-colors ${
                  currentPath.startsWith('/rooms') ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                <span>ROOMS</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'rooms' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-64 rounded-md bg-stone-900 border border-amber-800/60 shadow-2xl py-2 z-50 text-stone-200 animate-fadeIn"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-amber-500 uppercase tracking-wider border-b border-stone-800 mb-1">
                    Room Categories & Tariffs
                  </div>
                  {ROOMS_DATA.map(room => (
                    <button
                      key={room.id}
                      onClick={() => handleLinkClick(`/rooms/${room.slug}/`)}
                      className="w-full text-left px-3.5 py-2 hover:bg-stone-800 hover:text-amber-400 transition-colors flex justify-between items-center"
                    >
                      <span className="text-sm font-medium">{room.name}</span>
                      <span className="text-xs text-amber-500/90 font-mono font-bold">{room.tariffDisplay}</span>
                    </button>
                  ))}
                  <div className="border-t border-stone-800 my-1"></div>
                  <button
                    onClick={() => handleLinkClick('/rooms/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-stone-300 hover:text-amber-400"
                  >
                    View All Rooms Overview
                  </button>
                  <button
                    onClick={() => handleLinkClick('/rooms/room-tariff/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-amber-400 font-medium"
                  >
                    Room Tariff Comparison
                  </button>
                  <button
                    onClick={() => handleLinkClick('/rooms/compare-rooms/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-stone-300"
                  >
                    Compare Rooms
                  </button>
                  <button
                    onClick={() => handleLinkClick('/rooms/amenities/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-stone-300"
                  >
                    Room Amenities
                  </button>
                  <button
                    onClick={() => handleLinkClick('/rooms/booking-policy/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-stone-300"
                  >
                    Booking Policy
                  </button>
                </div>
              )}
            </div>

            {/* RESTAURANTS ▼ */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('restaurants')}
                onMouseEnter={() => setActiveDropdown('restaurants')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-sm transition-colors ${
                  currentPath.startsWith('/restaurants') ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                <span>RESTAURANTS</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'restaurants' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-64 rounded-md bg-stone-900 border border-amber-800/60 shadow-2xl py-2 z-50 text-stone-200 animate-fadeIn"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-amber-500 uppercase tracking-wider border-b border-stone-800 mb-1">
                    Dining Venues
                  </div>
                  {RESTAURANTS_DATA.map(rest => (
                    <button
                      key={rest.id}
                      onClick={() => handleLinkClick(`/restaurants/${rest.slug}/`)}
                      className="w-full text-left px-3.5 py-2 hover:bg-stone-800 hover:text-amber-400 transition-colors block"
                    >
                      <div className="text-sm font-medium">{rest.name}</div>
                      <div className="text-[11px] text-stone-400">{rest.category}</div>
                    </button>
                  ))}
                  <div className="border-t border-stone-800 my-1"></div>
                  <button
                    onClick={() => handleLinkClick('/restaurants/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-stone-300"
                  >
                    Dining Overview
                  </button>
                  <button
                    onClick={() => handleLinkClick('/restaurants/dining-faq/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-stone-300"
                  >
                    Food & Dining FAQ
                  </button>
                  <button
                    onClick={() => onOpenRestaurantEnquiry()}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-amber-400 font-medium"
                  >
                    Table & Dining Enquiry
                  </button>
                </div>
              )}
            </div>

            {/* BANQUET HALLS ▼ */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('banquet')}
                onMouseEnter={() => setActiveDropdown('banquet')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-sm transition-colors ${
                  currentPath.startsWith('/banquet-halls') ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                <span>BANQUET HALLS</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'banquet' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-64 rounded-md bg-stone-900 border border-amber-800/60 shadow-2xl py-2 z-50 text-stone-200 animate-fadeIn"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-amber-500 uppercase tracking-wider border-b border-stone-800 mb-1">
                    Event Venues & Capacities
                  </div>
                  {BANQUET_HALLS_DATA.map(hall => (
                    <button
                      key={hall.id}
                      onClick={() => handleLinkClick(`/banquet-halls/${hall.slug}/`)}
                      className="w-full text-left px-3.5 py-2 hover:bg-stone-800 hover:text-amber-400 transition-colors flex justify-between items-center"
                    >
                      <span className="text-sm font-medium">{hall.name}</span>
                      <span className="text-xs text-stone-400">{hall.capacityDisplay}</span>
                    </button>
                  ))}
                  <div className="border-t border-stone-800 my-1"></div>
                  <button
                    onClick={() => handleLinkClick('/banquet-halls/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-stone-300"
                  >
                    Banquet Overview
                  </button>
                  <button
                    onClick={() => handleLinkClick('/banquet-enquiry/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs text-amber-400 font-medium"
                  >
                    Banquet Enquiry
                  </button>
                </div>
              )}
            </div>

            {/* FACILITIES ▼ */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('facilities')}
                onMouseEnter={() => setActiveDropdown('facilities')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-sm transition-colors ${
                  currentPath.startsWith('/facilities') ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                <span>FACILITIES</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'facilities' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-56 rounded-md bg-stone-900 border border-amber-800/60 shadow-2xl py-2 z-50 text-stone-200 animate-fadeIn text-sm"
                >
                  <button
                    onClick={() => handleLinkClick('/facilities/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs font-semibold text-amber-400 border-b border-stone-800 mb-1"
                  >
                    All Facilities Overview
                  </button>
                  <button
                    onClick={() => handleLinkClick('/facilities/wifi/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    High-Speed Wi-Fi
                  </button>
                  <button
                    onClick={() => handleLinkClick('/facilities/parking/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Premises Parking
                  </button>
                  <button
                    onClick={() => handleLinkClick('/facilities/housekeeping/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Daily Housekeeping
                  </button>
                  <button
                    onClick={() => handleLinkClick('/facilities/business-facilities/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Business Facilities
                  </button>
                  <button
                    onClick={() => handleLinkClick('/facilities/guest-services/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Guest Services & Reception
                  </button>
                </div>
              )}
            </div>

            {/* SERVICES ▼ */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => setActiveDropdown('services')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-sm transition-colors ${
                  currentPath.startsWith('/services') ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                <span>SERVICES</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'services' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-56 rounded-md bg-stone-900 border border-amber-800/60 shadow-2xl py-2 z-50 text-stone-200 animate-fadeIn text-sm"
                >
                  <button
                    onClick={() => handleLinkClick('/services/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs font-semibold text-amber-400 border-b border-stone-800 mb-1"
                  >
                    Hotel Services
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/guest-assistance/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Guest Assistance Desk
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/laundry/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Laundry & Dry Cleaning
                  </button>
                  <button
                    onClick={() => handleLinkClick('/services/travel-assistance/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Travel & Cab Assistance
                  </button>
                </div>
              )}
            </div>

            {/* EVENTS ▼ */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('events')}
                onMouseEnter={() => setActiveDropdown('events')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-sm transition-colors ${
                  currentPath.startsWith('/events') ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                <span>EVENTS</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'events' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-56 rounded-md bg-stone-900 border border-amber-800/60 shadow-2xl py-2 z-50 text-stone-200 animate-fadeIn text-sm"
                >
                  <button
                    onClick={() => handleLinkClick('/events/weddings/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Wedding Events
                  </button>
                  <button
                    onClick={() => handleLinkClick('/events/corporate-events/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Corporate Events
                  </button>
                  <button
                    onClick={() => handleLinkClick('/events/conferences/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Conferences & Seminars
                  </button>
                  <button
                    onClick={() => handleLinkClick('/events/meetings/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Meetings & Discussions
                  </button>
                  <button
                    onClick={() => handleLinkClick('/events/birthday-parties/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Birthday Parties
                  </button>
                  <button
                    onClick={() => handleLinkClick('/events/receptions/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Receptions & Galas
                  </button>
                </div>
              )}
            </div>

            {/* LOCAL ATTRACTIONS ▼ */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('local')}
                onMouseEnter={() => setActiveDropdown('local')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-sm transition-colors ${
                  currentPath.startsWith('/local-attractions') ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                <span>LOCAL ATTRACTIONS</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>

              {activeDropdown === 'local' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-64 rounded-md bg-stone-900 border border-amber-800/60 shadow-2xl py-2 z-50 text-stone-200 animate-fadeIn text-sm"
                >
                  <button
                    onClick={() => handleLinkClick('/local-attractions/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 text-xs font-semibold text-amber-400 border-b border-stone-800 mb-1"
                  >
                    Area Overview
                  </button>
                  <button
                    onClick={() => handleLinkClick('/local-attractions/places-to-visit-near-hotel/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Places to Visit Near Hotel
                  </button>
                  <button
                    onClick={() => handleLinkClick('/local-attractions/things-to-do-near-hotel/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    Things to Do Near Hotel
                  </button>
                  <button
                    onClick={() => handleLinkClick('/local-attractions/how-to-reach-hotel-ashoka/')}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-stone-800 hover:text-amber-400"
                  >
                    How to Reach Hotel Ashoka
                  </button>
                </div>
              )}
            </div>

            {/* OFFERS */}
            <button 
              onClick={() => handleLinkClick('/offers/')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                currentPath === '/offers/' ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
              }`}
            >
              OFFERS
            </button>

            {/* GALLERY */}
            <button 
              onClick={() => handleLinkClick('/gallery/')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                currentPath === '/gallery/' ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
              }`}
            >
              GALLERY
            </button>

            {/* BLOG */}
            <button 
              onClick={() => handleLinkClick('/blog/')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                currentPath.startsWith('/blog') ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
              }`}
            >
              BLOG
            </button>

            {/* TESTIMONIALS */}
            <button 
              onClick={() => handleLinkClick('/testimonials/')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                currentPath === '/testimonials/' ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
              }`}
            >
              REVIEWS
            </button>

            {/* FAQ */}
            <button 
              onClick={() => handleLinkClick('/faq/')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                currentPath === '/faq/' ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
              }`}
            >
              FAQ
            </button>

            {/* CONTACT */}
            <button 
              onClick={() => handleLinkClick('/contact-us/')}
              className={`px-2 py-1.5 rounded-sm transition-colors ${
                currentPath === '/contact-us/' ? 'text-amber-400 font-semibold' : 'text-stone-200 hover:text-amber-300'
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Desktop Call to Action BOOK NOW button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-bold px-5 py-2.5 rounded-md text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-2 border border-amber-300/60"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Right Bar: Call, WhatsApp, Book Now & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href={`tel:${HOTEL_ENTITY.phone}`} 
              className="p-2 rounded-md bg-stone-800 text-stone-200 border border-stone-700 active:scale-95"
              title="Call Hotel"
            >
              <Phone className="w-4 h-4 text-amber-400" />
            </a>
            <a 
              href={`https://wa.me/${HOTEL_ENTITY.whatsapp}?text=Hello%20Hotel%20Ashoka,%20I%20would%20like%20to%20enquire%20about%20room%20and%20hall%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800/80 active:scale-95"
              title="WhatsApp Hotel"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-md bg-amber-500 text-stone-950 font-bold text-xs shadow-xs border border-amber-300"
            >
              BOOK NOW
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md bg-stone-800 text-amber-400 border border-stone-700 ml-1"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-stone-950/95 backdrop-blur-md overflow-y-auto px-5 py-6 lg:hidden border-t border-amber-900/40 text-stone-200">
          <div className="flex flex-col space-y-3 divide-y divide-stone-800">
            <div className="space-y-1.5 pb-2">
              <button 
                onClick={() => handleLinkClick('/')}
                className="w-full text-left py-2 text-base font-medium text-amber-400"
              >
                HOME
              </button>
              <button 
                onClick={() => handleLinkClick('/about-us/')}
                className="w-full text-left py-2 text-base font-medium text-stone-200"
              >
                ABOUT US
              </button>
            </div>

            {/* Mobile ROOMS */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
                ROOMS & TARIFFS
              </div>
              <div className="grid grid-cols-1 gap-1.5 pl-2">
                <button onClick={() => handleLinkClick('/rooms/')} className="text-left text-sm py-1 text-stone-300">
                  All Rooms Overview
                </button>
                <button onClick={() => handleLinkClick('/rooms/presidential-suite/')} className="text-left text-sm py-1 text-stone-300 flex justify-between">
                  <span>Presidential Suite</span>
                  <span className="text-amber-400 font-mono">₹4,500/-</span>
                </button>
                <button onClick={() => handleLinkClick('/rooms/executive-suite/')} className="text-left text-sm py-1 text-stone-300 flex justify-between">
                  <span>Executive Suite</span>
                  <span className="text-amber-400 font-mono">₹3,450/-</span>
                </button>
                <button onClick={() => handleLinkClick('/rooms/executive-room/')} className="text-left text-sm py-1 text-stone-300 flex justify-between">
                  <span>Executive Room</span>
                  <span className="text-amber-400 font-mono">₹3,100/-</span>
                </button>
                <button onClick={() => handleLinkClick('/rooms/deluxe-room/')} className="text-left text-sm py-1 text-stone-300 flex justify-between">
                  <span>Deluxe Room</span>
                  <span className="text-amber-400 font-mono">₹2,200/-</span>
                </button>
                <button onClick={() => handleLinkClick('/rooms/room-tariff/')} className="text-left text-sm py-1 text-amber-400 font-medium">
                  Room Tariff Table
                </button>
              </div>
            </div>

            {/* Mobile RESTAURANTS */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
                RESTAURANTS & DINING
              </div>
              <div className="grid grid-cols-1 gap-1.5 pl-2">
                <button onClick={() => handleLinkClick('/restaurants/')} className="text-left text-sm py-1 text-stone-300">
                  Restaurants Overview
                </button>
                <button onClick={() => handleLinkClick('/restaurants/kanishka-coffee-shop/')} className="text-left text-sm py-1 text-stone-300">
                  Kanishka Coffee Shop (Pure Veg)
                </button>
                <button onClick={() => handleLinkClick('/restaurants/kadhambari/')} className="text-left text-sm py-1 text-stone-300">
                  Kadhambari (Non-Veg Dining)
                </button>
                <button onClick={() => handleLinkClick('/restaurants/classic-restaurant-bar/')} className="text-left text-sm py-1 text-stone-300">
                  Classic - Restaurant & Bar
                </button>
                <button onClick={() => handleLinkClick('/restaurants/dining-faq/')} className="text-left text-sm py-1 text-stone-400">
                  Food & Dining FAQ
                </button>
              </div>
            </div>

            {/* Mobile BANQUET HALLS */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">
                BANQUET HALLS & EVENT SPACES
              </div>
              <div className="grid grid-cols-1 gap-1.5 pl-2">
                <button onClick={() => handleLinkClick('/banquet-halls/')} className="text-left text-sm py-1 text-stone-300">
                  Banquet Overview
                </button>
                <button onClick={() => handleLinkClick('/banquet-halls/board-rooms/')} className="text-left text-sm py-1 text-stone-300 flex justify-between">
                  <span>Board Rooms</span>
                  <span className="text-stone-400">15–20 pax</span>
                </button>
                <button onClick={() => handleLinkClick('/banquet-halls/kakatiya-hall/')} className="text-left text-sm py-1 text-stone-300 flex justify-between">
                  <span>Kakatiya Hall</span>
                  <span className="text-stone-400">100 pax</span>
                </button>
                <button onClick={() => handleLinkClick('/banquet-halls/chalukya-hall/')} className="text-left text-sm py-1 text-stone-300 flex justify-between">
                  <span>Chalukya Hall</span>
                  <span className="text-stone-400">200 pax</span>
                </button>
                <button onClick={() => handleLinkClick('/banquet-halls/shubam-hall/')} className="text-left text-sm py-1 text-stone-300 flex justify-between">
                  <span>Shubam Hall</span>
                  <span className="text-amber-400">500 pax</span>
                </button>
                <button onClick={() => handleLinkClick('/banquet-enquiry/')} className="text-left text-sm py-1 text-amber-400 font-medium">
                  Submit Banquet Enquiry
                </button>
              </div>
            </div>

            {/* General Navigation */}
            <div className="pt-2 grid grid-cols-2 gap-2 text-sm">
              <button onClick={() => handleLinkClick('/facilities/')} className="text-left py-1 text-stone-300">
                Facilities
              </button>
              <button onClick={() => handleLinkClick('/services/')} className="text-left py-1 text-stone-300">
                Services
              </button>
              <button onClick={() => handleLinkClick('/events/weddings/')} className="text-left py-1 text-stone-300">
                Wedding Events
              </button>
              <button onClick={() => handleLinkClick('/events/corporate-events/')} className="text-left py-1 text-stone-300">
                Corporate Events
              </button>
              <button onClick={() => handleLinkClick('/local-attractions/')} className="text-left py-1 text-stone-300">
                Local Attractions
              </button>
              <button onClick={() => handleLinkClick('/offers/')} className="text-left py-1 text-stone-300">
                Special Offers
              </button>
              <button onClick={() => handleLinkClick('/gallery/')} className="text-left py-1 text-stone-300">
                Photo Gallery
              </button>
              <button onClick={() => handleLinkClick('/blog/')} className="text-left py-1 text-stone-300">
                Hotel Blog
              </button>
              <button onClick={() => handleLinkClick('/testimonials/')} className="text-left py-1 text-stone-300">
                Testimonials
              </button>
              <button onClick={() => handleLinkClick('/faq/')} className="text-left py-1 text-stone-300">
                Hotel FAQ
              </button>
              <button onClick={() => handleLinkClick('/contact-us/')} className="text-left py-1 text-amber-400 font-medium">
                Contact & Location
              </button>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-4 pb-6 space-y-2">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                BOOK A ROOM NOW
              </button>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBanquetEnquiry();
                }}
                className="w-full py-2.5 rounded-lg bg-stone-800 text-amber-300 font-medium text-center border border-amber-900/60"
              >
                ENQUIRE ABOUT BANQUET HALLS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
