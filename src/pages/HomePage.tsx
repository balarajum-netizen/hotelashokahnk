import React, { useState } from 'react';
import { 
  Calendar, 
  Utensils, 
  Building2, 
  Phone, 
  Check, 
  ChevronRight, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Wifi,
  Car,
  Sparkles,
  HelpCircle,
  FileText,
  Star,
  Users
} from 'lucide-react';
import { AEOBox } from '../components/AEOBox';
import { 
  HOTEL_ENTITY, 
  ROOMS_DATA, 
  RESTAURANTS_DATA, 
  BANQUET_HALLS_DATA, 
  BLOG_ARTICLES,
  TESTIMONIALS_DATA,
  GENERAL_FAQS
} from '../data/hotelData';

interface HomePageProps {
  navigate: (path: string) => void;
  onOpenBooking: (roomType?: string) => void;
  onOpenBanquetEnquiry: (hall?: string) => void;
  onOpenRestaurantEnquiry: (restaurant?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
  onOpenBooking,
  onOpenBanquetEnquiry,
  onOpenRestaurantEnquiry
}) => {
  // Quick bar booking state
  const [quickRoom, setQuickRoom] = useState('presidential-suite');
  const [quickCheckIn, setQuickCheckIn] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [quickCheckOut, setQuickCheckOut] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  });
  const [quickGuests, setQuickGuests] = useState('2');

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(quickRoom);
  };

  return (
    <div className="bg-[#faf8f5] text-stone-900">
      
      {/* SECTION 1: HERO & WELCOME */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center bg-stone-950 text-white overflow-hidden">
        {/* Background Hotel Image with Dark Regal Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80" 
            alt="Hotel Ashoka Exterior Grand Entrance" 
            className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-950/60 px-4 py-1.5 text-xs font-semibold text-amber-300 uppercase tracking-widest backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Website • hotelashoka.in</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-stone-50 tracking-tight leading-tight">
            Hotel Ashoka
          </h1>

          <div className="text-xl sm:text-2xl font-serif text-amber-300 italic font-medium">
            "Welcome to Hotel Ashoka"
          </div>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Comfortable Rooms, Dining Experiences and Event Spaces for Every Occasion
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all transform active:scale-95 border border-amber-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A ROOM</span>
            </button>
            <button
              onClick={() => navigate('/restaurants/')}
              className="px-5 py-3.5 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-amber-300 font-semibold text-sm border border-amber-700/60 shadow-lg hover:border-amber-500 transition-all flex items-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>VIEW RESTAURANTS</span>
            </button>
            <button
              onClick={() => navigate('/banquet-halls/')}
              className="px-5 py-3.5 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-amber-300 font-semibold text-sm border border-amber-700/60 shadow-lg hover:border-amber-500 transition-all flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>VIEW BANQUET HALLS</span>
            </button>
            <button
              onClick={() => navigate('/contact-us/')}
              className="px-5 py-3.5 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-stone-200 font-medium text-sm border border-stone-700 shadow-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>CONTACT HOTEL</span>
            </button>
          </div>
        </div>
      </section>

      {/* QUICK RESERVATION BAR (Sticky/Prominent conversion bar) */}
      <section className="relative z-20 max-w-6xl mx-auto -mt-10 px-4">
        <form 
          onSubmit={handleQuickBook}
          className="bg-stone-900 rounded-xl shadow-2xl border-2 border-amber-700/60 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 text-stone-200 items-end"
        >
          <div>
            <label className="block text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
              Room Category
            </label>
            <select
              value={quickRoom}
              onChange={e => setQuickRoom(e.target.value)}
              className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-stone-100 focus:border-amber-500"
            >
              {ROOMS_DATA.map(r => (
                <option key={r.slug} value={r.slug}>
                  {r.name} ({r.tariffDisplay})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
              Check-In Date
            </label>
            <input
              type="date"
              value={quickCheckIn}
              onChange={e => setQuickCheckIn(e.target.value)}
              required
              className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-stone-100 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
              Check-Out Date
            </label>
            <input
              type="date"
              value={quickCheckOut}
              onChange={e => setQuickCheckOut(e.target.value)}
              required
              className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-stone-100 focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
              Guests
            </label>
            <select
              value={quickGuests}
              onChange={e => setQuickGuests(e.target.value)}
              className="w-full bg-stone-950 border border-stone-700 rounded-lg p-2.5 text-xs text-stone-100 focus:border-amber-500"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults (Suite)</option>
              <option value="4">Family (2 Adults + 2 Kids)</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-md transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 h-[38px]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Check Rates</span>
            </button>
          </div>
        </form>
      </section>

      {/* SECTION 1: WELCOME TO HOTEL ASHOKA & AEO ANSWER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <AEOBox 
          heading="Hotel Ashoka – Core Identity & Fact Sheet"
          answer="Hotel Ashoka (official domain: hotelashoka.in) is a premier full-service hospitality landmark located in the central business district. The property features four published room categories: Presidential Suite (₹4,500/-), Executive Suite (₹3,450/-), Executive Room (₹3,100/-) and Deluxe Room (₹2,200/-). Dining includes Kanishka Coffee Shop (Pure Veg), Kadhambari (Non-Veg), and Classic Restaurant & Bar. Event spaces range from Board Rooms (15–20 pax) to Shubam Hall (500 pax)."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
          <div className="space-y-4">
            <div className="text-xs font-semibold tracking-widest text-amber-800 uppercase font-sans">
              Timeless Hospitality
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
              A Stately Heritage in the Heart of the City
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              At Hotel Ashoka, we blend classical warmth with modern convenience. Situated in close proximity to major commercial centers, central transit hubs, and cultural monuments, our hotel serves as the ideal haven for business executives, visiting families, and celebration hosts.
            </p>
            <p className="text-stone-700 leading-relaxed text-sm">
              Our accommodation choices ensure uncompromised privacy, dedicated work ergonomics, and restorative sleep. Meanwhile, our celebrated culinary establishments—including the strictly pure vegetarian Kanishka Coffee Shop and the aromatic non-vegetarian Kadhambari—cater to diverse palates.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-stone-800">
              <span className="flex items-center gap-1.5 bg-amber-100/70 px-3 py-1.5 rounded-md border border-amber-200">
                <Check className="w-3.5 h-3.5 text-amber-800" />
                Published Room Tariffs from ₹2,200/-
              </span>
              <span className="flex items-center gap-1.5 bg-amber-100/70 px-3 py-1.5 rounded-md border border-amber-200">
                <Check className="w-3.5 h-3.5 text-amber-800" />
                Pure Veg & Non-Veg Segregated Kitchens
              </span>
              <span className="flex items-center gap-1.5 bg-amber-100/70 px-3 py-1.5 rounded-md border border-amber-200">
                <Check className="w-3.5 h-3.5 text-amber-800" />
                Banquet Capacity Up to 500 Guests
              </span>
            </div>

            <div className="pt-3">
              <button
                onClick={() => navigate('/about-us/')}
                className="inline-flex items-center gap-1.5 text-amber-900 font-semibold hover:text-amber-700 text-sm group"
              >
                <span>Read Full Hotel Ashoka Story</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-900/20">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80" 
                alt="Hotel Ashoka Lobby and Hospitality Staff" 
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-stone-900 text-stone-100 p-4 rounded-xl shadow-xl border border-amber-600/50 hidden sm:block max-w-xs text-xs">
              <div className="font-serif font-bold text-amber-400 text-sm">Best Rate Guarantee</div>
              <p className="text-stone-300 mt-1">
                Book directly on hotelashoka.in for genuine published tariffs and priority room selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: OUR ROOMS & ROOM TARIFFS */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-semibold tracking-widest text-amber-800 uppercase font-sans">
              Accommodations
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Our Rooms & Published Tariffs
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Transparent rates with no surprise markups. Every room is furnished with comfortable bedding, attached bathrooms, air conditioning, and high-speed Wi-Fi.
            </p>
          </div>

          {/* 4 Room Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOMS_DATA.map(room => (
              <div 
                key={room.id}
                className="rounded-xl overflow-hidden bg-white border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={room.imageUrl} 
                    alt={`${room.name} at Hotel Ashoka`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-stone-950/85 text-amber-400 font-mono font-bold px-3 py-1 rounded-md text-sm border border-amber-400/40 backdrop-blur-xs">
                    {room.tariffDisplay}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {room.subtitle}
                    </p>

                    <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-600">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-700" />
                        <span>{room.occupancy}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{room.bedType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => navigate(`/rooms/${room.slug}/`)}
                      className="w-full py-2 rounded bg-stone-100 hover:bg-amber-50 text-stone-800 hover:text-amber-900 font-semibold text-xs transition-colors border border-stone-200"
                    >
                      View Details & Specs
                    </button>
                    <button
                      onClick={() => onOpenBooking(room.slug)}
                      className="w-full py-2 rounded bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors shadow-xs"
                    >
                      Book Now ({room.tariffDisplay})
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 3: Room Tariff Comparison Table */}
          <div className="mt-12 bg-white rounded-xl p-6 border border-stone-200 shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 border-b border-stone-200 pb-3">
              <div>
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  Published Room Tariff Schedule
                </h3>
                <p className="text-xs text-stone-500">Official base tariffs for 2026</p>
              </div>
              <button
                onClick={() => navigate('/rooms/room-tariff/')}
                className="text-xs font-semibold text-amber-800 hover:underline"
              >
                View Detailed Tariff Policy →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-600">
                    <th className="py-2.5 px-4 font-semibold">Room Category</th>
                    <th className="py-2.5 px-4 font-semibold">Max Occupancy</th>
                    <th className="py-2.5 px-4 font-semibold">Key Advantage</th>
                    <th className="py-2.5 px-4 font-semibold text-right">Published Tariff</th>
                    <th className="py-2.5 px-4 font-semibold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {ROOMS_DATA.map(r => (
                    <tr key={r.id} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-3 px-4 font-serif font-bold text-stone-900">
                        {r.name}
                      </td>
                      <td className="py-3 px-4 text-stone-600">{r.occupancy}</td>
                      <td className="py-3 px-4 text-stone-600">{r.features[0]}</td>
                      <td className="py-3 px-4 font-mono font-bold text-amber-800 text-right">
                        {r.tariffDisplay}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => onOpenBooking(r.slug)}
                          className="px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs"
                        >
                          Reserve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-stone-500 italic mt-4">
              "Tariffs are subject to availability, applicable taxes, hotel policies and confirmation at the time of booking."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESTAURANTS & DINING */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-semibold tracking-widest text-amber-800 uppercase font-sans">
            Culinary Destinations
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Restaurants & Dining at Hotel Ashoka
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Discover our three distinct dining venues offering pure vegetarian heritage, rich non-vegetarian preparations, and a sophisticated restaurant and bar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESTAURANTS_DATA.map(rest => (
            <div 
              key={rest.id}
              className="rounded-xl overflow-hidden bg-white border border-stone-200 shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={rest.imageUrl} 
                    alt={`${rest.name} at Hotel Ashoka`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 text-xs px-2.5 py-1 rounded font-medium border border-amber-700/60 backdrop-blur-xs">
                    {rest.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {rest.name}
                  </h3>
                  <p className="text-xs font-medium text-amber-800">
                    {rest.tagline}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {rest.description}
                  </p>
                  
                  <div className="pt-2 border-t border-stone-100 text-xs text-stone-600 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{rest.timings}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => navigate(`/restaurants/${rest.slug}/`)}
                  className="flex-1 py-2 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-colors"
                >
                  View Restaurant
                </button>
                <button
                  onClick={() => onOpenRestaurantEnquiry(rest.slug)}
                  className="flex-1 py-2 rounded bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors"
                >
                  Enquire Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: BANQUET HALLS */}
      <section className="bg-stone-900 text-stone-100 py-16 border-t border-amber-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-sans">
              Grand Celebrations & Corporate Summits
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">
              Banquet Halls at Hotel Ashoka
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              "Hotel Ashoka offers multiple event spaces for meetings, conferences, weddings, celebrations and social gatherings."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BANQUET_HALLS_DATA.map(hall => (
              <div 
                key={hall.id}
                className="rounded-xl overflow-hidden bg-stone-950 border border-stone-800 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={hall.imageUrl} 
                      alt={`${hall.name} at Hotel Ashoka`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 font-mono font-bold px-3 py-1 rounded text-xs">
                      {hall.capacityDisplay}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-lg font-serif font-bold text-amber-300">
                      {hall.name}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-2">
                      {hall.tagline}
                    </p>

                    <div className="pt-2 text-xs space-y-1 text-stone-400">
                      <div className="font-semibold text-stone-300">Ideal For:</div>
                      <div className="text-[11px] text-amber-400/90">{hall.suitableFor.slice(0, 2).join(' • ')}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex flex-col gap-2">
                  <button
                    onClick={() => navigate(`/banquet-halls/${hall.slug}/`)}
                    className="w-full py-2 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold"
                  >
                    View Hall Specifications
                  </button>
                  <button
                    onClick={() => onOpenBanquetEnquiry(hall.slug)}
                    className="w-full py-2 rounded bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold shadow-xs"
                  >
                    Enquire About {hall.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/banquet-halls/')}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm underline"
            >
              <span>Explore All Banquet Capacities & Floor Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: HOTEL FACILITIES & SERVICES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Facilities */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-widest text-amber-800 uppercase font-sans">
                Property Amenities
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                Hotel Facilities
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => navigate('/facilities/wifi/')}
                className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors"
              >
                <Wifi className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="font-semibold text-sm text-stone-900">High-Speed Wi-Fi</h4>
                <p className="text-xs text-stone-500 mt-1">Complimentary broadband connectivity across guest rooms and banquets.</p>
              </div>

              <div 
                onClick={() => navigate('/facilities/parking/')}
                className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors"
              >
                <Car className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="font-semibold text-sm text-stone-900">On-Site Parking</h4>
                <p className="text-xs text-stone-500 mt-1">Dedicated parking area for resident guests and event visitors.</p>
              </div>

              <div 
                onClick={() => navigate('/facilities/housekeeping/')}
                className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors"
              >
                <Sparkles className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="font-semibold text-sm text-stone-900">Daily Housekeeping</h4>
                <p className="text-xs text-stone-500 mt-1">Pristine sanitation, linen replenishment, and room upkeep.</p>
              </div>

              <div 
                onClick={() => navigate('/facilities/business-facilities/')}
                className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors"
              >
                <Building2 className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="font-semibold text-sm text-stone-900">Business Facilities</h4>
                <p className="text-xs text-stone-500 mt-1">Dedicated board meeting rooms and executive workspace support.</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/facilities/')}
              className="text-xs font-semibold text-amber-900 hover:underline"
            >
              View All Verified Facilities →
            </button>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-widest text-amber-800 uppercase font-sans">
                Round-the-Clock Support
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                Guest Services
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => navigate('/services/guest-assistance/')}
                className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors"
              >
                <Phone className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="font-semibold text-sm text-stone-900">Guest Assistance Desk</h4>
                <p className="text-xs text-stone-500 mt-1">24-hour reception, baggage handling, and wake-up calling.</p>
              </div>

              <div 
                onClick={() => navigate('/services/laundry/')}
                className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors"
              >
                <Check className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="font-semibold text-sm text-stone-900">Laundry & Pressing</h4>
                <p className="text-xs text-stone-500 mt-1">Fast turnaround laundry service for business attire.</p>
              </div>

              <div 
                onClick={() => navigate('/services/travel-assistance/')}
                className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors"
              >
                <MapPin className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="font-semibold text-sm text-stone-900">Travel Assistance</h4>
                <p className="text-xs text-stone-500 mt-1">Verified cab dispatch, airport transfer advice, and local maps.</p>
              </div>

              <div 
                onClick={() => navigate('/restaurants/')}
                className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-amber-500 cursor-pointer transition-colors"
              >
                <Utensils className="w-6 h-6 text-amber-700 mb-2" />
                <h4 className="font-semibold text-sm text-stone-900">In-Room Dining</h4>
                <p className="text-xs text-stone-500 mt-1">Multi-cuisine dishes served freshly directly to your room.</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/services/')}
              className="text-xs font-semibold text-amber-900 hover:underline"
            >
              View All Guest Services →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: EVENTS & CELEBRATIONS */}
      <section className="bg-amber-950 text-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2 className="text-3xl font-serif font-bold text-amber-400">
              Events & Celebrations
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              Tailored event solutions backed by dedicated catering and banquet managers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {[
              { title: "Weddings", path: "/events/weddings/" },
              { title: "Corporate Events", path: "/events/corporate-events/" },
              { title: "Conferences", path: "/events/conferences/" },
              { title: "Meetings", path: "/events/meetings/" },
              { title: "Birthdays", path: "/events/birthday-parties/" },
              { title: "Receptions", path: "/events/receptions/" },
            ].map((ev, i) => (
              <button
                key={i}
                onClick={() => navigate(ev.path)}
                className="p-4 rounded-lg bg-stone-900/80 hover:bg-stone-800 border border-amber-700/50 hover:border-amber-400 text-stone-200 hover:text-amber-300 transition-all font-serif font-medium text-sm"
              >
                {ev.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: GUEST TESTIMONIALS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="text-xs font-semibold tracking-widest text-amber-800 uppercase font-sans">
            Genuine Guest Feedback
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-900">
            Guest Testimonials
          </h2>
          <p className="text-xs text-stone-500">
            Recorded experiences from verified resident guests and banquet organizers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map(t => (
            <div key={t.id} className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-stone-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-4 text-xs">
                <div className="font-serif font-bold text-stone-900">{t.author}</div>
                <div className="text-[11px] text-stone-500">{t.designation}</div>
                <div className="text-[10px] text-amber-700 font-medium mt-1">{t.stayType}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => navigate('/testimonials/')}
            className="text-xs font-semibold text-amber-800 hover:underline"
          >
            View More Verified Testimonials →
          </button>
        </div>
      </section>

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-stone-100 py-16 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-stone-600">
              Factual, verified answers regarding tariffs, restaurants, banquets, and booking policies.
            </p>
          </div>

          <div className="space-y-3">
            {GENERAL_FAQS.slice(0, 6).map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-stone-200 shadow-2xs">
                <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-1">
                  {faq.category}
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900">
                  {faq.question}
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed mt-2">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/faq/')}
              className="px-5 py-2.5 rounded-lg bg-stone-900 text-amber-300 font-semibold text-xs hover:bg-stone-800 shadow-xs"
            >
              Browse Complete Hotel FAQ Center
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 13: LATEST BLOG ARTICLES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-10">
          <div>
            <div className="text-xs font-semibold tracking-widest text-amber-800 uppercase font-sans">
              Hotel Ashoka Travel & Venue Guides
            </div>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">
              Latest Blog & Insights
            </h2>
          </div>
          <button
            onClick={() => navigate('/blog/')}
            className="text-xs font-semibold text-amber-800 hover:underline"
          >
            View All Guides →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_ARTICLES.slice(0, 3).map(post => (
            <div 
              key={post.id}
              onClick={() => navigate(`/blog/${post.slug}/`)}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/85 text-amber-300 text-[10px] px-2 py-0.5 rounded font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-[11px] text-stone-400 font-mono">{post.date} • {post.readTime}</div>
                  <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 text-xs font-semibold text-amber-800 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                <span>Read Full Article</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 14: CONTACT & LOCATION */}
      <section className="bg-stone-900 text-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="text-xs font-semibold tracking-widest text-amber-400 uppercase font-sans">
                Direct Contact
              </div>
              <h2 className="text-3xl font-serif font-bold text-amber-400">
                Contact & Find Hotel Ashoka
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed">
                We are conveniently located in the city's premier commercial hub, providing quick connectivity to central railway terminals, metro stations, and business parks.
              </p>

              <div className="space-y-3 pt-2 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Address:</strong> {HOTEL_ENTITY.address}, {HOTEL_ENTITY.city} - {HOTEL_ENTITY.postalCode}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white">Reservations:</strong> {HOTEL_ENTITY.phone} / {HOTEL_ENTITY.mobile}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white">Standard Check-In:</strong> 12:00 Noon | <strong className="text-white">Check-Out:</strong> 11:00 AM
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${HOTEL_ENTITY.phone}`}
                  className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Front Desk</span>
                </a>
                <a
                  href={`https://wa.me/${HOTEL_ENTITY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2"
                >
                  <span>WhatsApp Message</span>
                </a>
                <button
                  onClick={() => navigate('/contact-us/')}
                  className="px-4 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs border border-stone-700"
                >
                  View Route Directions
                </button>
              </div>
            </div>

            {/* Simulated Map Visual Card */}
            <div className="rounded-2xl overflow-hidden border border-stone-700 shadow-2xl bg-stone-950 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="font-serif font-bold text-amber-400 text-sm">
                  Verified Google Maps Landmark
                </div>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                  Active Coordinates
                </span>
              </div>
              <div className="h-56 bg-stone-900 rounded-lg flex flex-col items-center justify-center p-6 text-center border border-stone-800 space-y-3">
                <MapPin className="w-10 h-10 text-amber-500 animate-bounce" />
                <div className="font-serif font-bold text-stone-200">Hotel Ashoka Landmark Pin</div>
                <p className="text-[11px] text-stone-400 max-w-xs">
                  Opposite Metro Station & Central Station Corridor. Seamless taxi, metro & private car access.
                </p>
                <a
                  href="https://maps.google.com/?q=Hotel+Ashoka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps Application</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 15: FINAL BOOK YOUR STAY CTA */}
      <section className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Book Your Stay at Hotel Ashoka
          </h2>
          <p className="text-amber-100 text-sm max-w-xl mx-auto">
            Experience our refined accommodation, starting from ₹2,200/- per night, with transparent billing and warm hospitality.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-7 py-3 rounded-lg bg-stone-950 hover:bg-stone-900 text-amber-300 font-bold text-sm shadow-xl border border-amber-400"
            >
              RESERVE ROOM NOW
            </button>
            <button
              onClick={() => onOpenBanquetEnquiry()}
              className="px-6 py-3 rounded-lg bg-amber-600/60 hover:bg-amber-600 text-white font-semibold text-sm border border-amber-400/50"
            >
              PLAN AN EVENT
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
