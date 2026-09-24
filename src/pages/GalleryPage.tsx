import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/hotelData';

interface GalleryPageProps {
  navigate: (path: string) => void;
  onOpenBooking: () => void;
  onOpenBanquetEnquiry: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ 
  navigate, 
  onOpenBooking, 
  onOpenBanquetEnquiry 
}) => {
  const [filter, setFilter] = useState<'All' | 'Rooms' | 'Restaurants' | 'Banquets'>('All');

  const filteredItems = filter === 'All' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <div className="bg-[#faf8f5] min-h-screen text-stone-900">
      <div className="bg-stone-950 text-white py-16 px-4 border-b border-amber-900/40">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="text-xs uppercase font-semibold tracking-widest text-amber-400">
            Visual Tour
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            Hotel Ashoka Photo Gallery
          </h1>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our guest suites, restaurants, and grand banquet venues.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {(['All', 'Rooms', 'Restaurants', 'Banquets'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-amber-600 text-stone-950 shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat === 'Banquets' ? 'Banquet Halls' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-stone-950/80 text-amber-400 text-[10px] px-2.5 py-1 rounded font-medium border border-amber-400/30">
                  {item.category}
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-serif font-bold text-sm text-stone-900">{item.title}</h3>
                <p className="text-[11px] text-stone-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="bg-stone-900 text-stone-100 rounded-xl p-8 text-center space-y-4 max-w-3xl mx-auto border border-amber-800/60 mt-12">
          <h2 className="text-2xl font-serif font-bold text-amber-400">
            Experience Hotel Ashoka in Person
          </h2>
          <p className="text-xs text-stone-300 max-w-md mx-auto">
            Reserve your suite starting from ₹2,200/- per night or plan your celebration with our banquet team.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md uppercase tracking-wider"
            >
              Book Room
            </button>
            <button
              onClick={onOpenBanquetEnquiry}
              className="px-6 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs border border-stone-700"
            >
              Plan Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
