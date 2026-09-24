import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BanquetEnquiryModal } from './components/BanquetEnquiryModal';
import { RestaurantEnquiryModal } from './components/RestaurantEnquiryModal';
import { SpamAuditModal } from './components/SpamAuditModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPages } from './pages/RoomsPages';
import { RestaurantsPages } from './pages/RestaurantsPages';
import { BanquetPages } from './pages/BanquetPages';
import { EventsPages } from './pages/EventsPages';
import { FacilitiesServicesPages } from './pages/FacilitiesServicesPages';
import { AttractionsOffersPages } from './pages/AttractionsOffersPages';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPages } from './pages/BlogPages';
import { TestimonialsFAQPages } from './pages/TestimonialsFAQPages';
import { ContactPage } from './pages/ContactPage';
import { BookNowPage } from './pages/BookNowPage';
import { LegalPages } from './pages/LegalPages';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.pathname) {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Modal controls
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingRoomSlug, setBookingRoomSlug] = useState<string | undefined>();

  const [isBanquetOpen, setIsBanquetOpen] = useState(false);
  const [banquetHallSlug, setBanquetHallSlug] = useState<string | undefined>();

  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);
  const [restaurantSlug, setRestaurantSlug] = useState<string | undefined>();

  const [isSpamAuditOpen, setIsSpamAuditOpen] = useState(false);

  // Navigation handler
  const navigate = (path: string) => {
    // ensure trailing slash consistency where appropriate
    let target = path;
    if (!target.startsWith('/')) target = '/' + target;
    
    try {
      window.history.pushState({}, '', target);
    } catch (e) {
      // Fallback for sandboxed frames
    }
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back / forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync title and canonical on path changes
  useEffect(() => {
    const normalized = currentPath.replace(/\/$/, '') || '/';
    let title = 'Hotel Ashoka | Luxury Stays, Fine Dining & Banquets';

    if (normalized.includes('/rooms/presidential-suite')) {
      title = 'Presidential Suite (₹4,500/-) | Hotel Ashoka';
    } else if (normalized.includes('/rooms/executive-suite')) {
      title = 'Executive Suite (₹3,450/-) | Hotel Ashoka';
    } else if (normalized.includes('/rooms/executive-room')) {
      title = 'Executive Room (₹3,100/-) | Hotel Ashoka';
    } else if (normalized.includes('/rooms/deluxe-room')) {
      title = 'Deluxe Room (₹2,200/-) | Hotel Ashoka';
    } else if (normalized.includes('/rooms/room-tariff')) {
      title = 'Published Room Tariff Schedule | Hotel Ashoka';
    } else if (normalized.includes('/rooms')) {
      title = 'Hotel Rooms & Published Tariffs | Hotel Ashoka';
    } else if (normalized.includes('/restaurants/kanishka-coffee-shop')) {
      title = 'Kanishka Coffee Shop (Pure Veg) | Hotel Ashoka';
    } else if (normalized.includes('/restaurants/kadhambari')) {
      title = 'Kadhambari Restaurant (Non-Veg) | Hotel Ashoka';
    } else if (normalized.includes('/restaurants/classic-restaurant-bar')) {
      title = 'Classic Restaurant & Bar | Hotel Ashoka';
    } else if (normalized.includes('/restaurants')) {
      title = 'Restaurants & Dining Venues | Hotel Ashoka';
    } else if (normalized.includes('/banquet-halls/shubam-hall')) {
      title = 'Shubam Hall (500 Capacity) | Hotel Ashoka';
    } else if (normalized.includes('/banquet-halls')) {
      title = 'Banquet Halls (15 to 500 Capacity) | Hotel Ashoka';
    } else if (normalized.includes('/about-us')) {
      title = 'About Hotel Ashoka | Heritage, Hospitality & Dining';
    } else if (normalized.includes('/contact-us')) {
      title = 'Contact Hotel Ashoka | Phone, WhatsApp & Directions';
    } else if (normalized.includes('/book-now')) {
      title = 'Book Now | Official Direct Reservation - Hotel Ashoka';
    }

    document.title = title;

    // Update canonical link in head
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `https://hotelashoka.in${normalized === '/' ? '/' : normalized + '/'}`;
  }, [currentPath]);

  // Modal open helpers
  const handleOpenBooking = (roomSlug?: string) => {
    setBookingRoomSlug(roomSlug);
    setIsBookingOpen(true);
  };

  const handleOpenBanquet = (hallSlug?: string) => {
    setBanquetHallSlug(hallSlug);
    setIsBanquetOpen(true);
  };

  const handleOpenRestaurant = (slug?: string) => {
    setRestaurantSlug(slug);
    setIsRestaurantOpen(true);
  };

  // Route Dispatcher
  const renderContent = () => {
    const p = currentPath.toLowerCase().replace(/\/$/, '') || '/';

    // 1. Home
    if (p === '/') {
      return (
        <HomePage 
          navigate={navigate} 
          onOpenBooking={handleOpenBooking} 
          onOpenBanquetEnquiry={handleOpenBanquet}
          onOpenRestaurantEnquiry={handleOpenRestaurant}
        />
      );
    }

    // 2. About Us
    if (p === '/about-us') {
      return (
        <AboutPage 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenBanquetEnquiry={() => handleOpenBanquet()} 
        />
      );
    }

    // 3. Rooms & Sub-routes
    if (p.startsWith('/rooms')) {
      const sub = p.replace('/rooms', '');
      return (
        <RoomsPages 
          subPath={sub} 
          navigate={navigate} 
          onOpenBooking={handleOpenBooking} 
        />
      );
    }

    // 4. Restaurants & Sub-routes
    if (p.startsWith('/restaurants')) {
      const sub = p.replace('/restaurants', '');
      return (
        <RestaurantsPages 
          subPath={sub} 
          navigate={navigate} 
          onOpenRestaurantEnquiry={handleOpenRestaurant} 
        />
      );
    }

    // 5. Banquet Halls & Sub-routes
    if (p.startsWith('/banquet-halls') || p === '/banquet-enquiry') {
      const sub = p === '/banquet-enquiry' ? 'banquet-enquiry' : p.replace('/banquet-halls', '');
      return (
        <BanquetPages 
          subPath={sub} 
          navigate={navigate} 
          onOpenBanquetEnquiry={handleOpenBanquet} 
        />
      );
    }

    // 6. Events & Sub-routes
    if (p.startsWith('/events')) {
      const sub = p.replace('/events', '');
      return (
        <EventsPages 
          subPath={sub} 
          navigate={navigate} 
          onOpenBanquetEnquiry={handleOpenBanquet} 
        />
      );
    }

    // 7. Facilities
    if (p.startsWith('/facilities')) {
      const sub = p.replace('/facilities', '');
      return (
        <FacilitiesServicesPages 
          type="facilities" 
          subPath={sub} 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
        />
      );
    }

    // 8. Services
    if (p.startsWith('/services')) {
      const sub = p.replace('/services', '');
      return (
        <FacilitiesServicesPages 
          type="services" 
          subPath={sub} 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
        />
      );
    }

    // 9. Local Attractions
    if (p.startsWith('/local-attractions')) {
      const sub = p.replace('/local-attractions', '');
      return (
        <AttractionsOffersPages 
          type="attractions" 
          subPath={sub} 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenBanquetEnquiry={() => handleOpenBanquet()} 
        />
      );
    }

    // 10. Offers
    if (p === '/offers') {
      return (
        <AttractionsOffersPages 
          type="offers" 
          subPath="" 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenBanquetEnquiry={() => handleOpenBanquet()} 
        />
      );
    }

    // 11. Gallery
    if (p === '/gallery') {
      return (
        <GalleryPage 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenBanquetEnquiry={() => handleOpenBanquet()} 
        />
      );
    }

    // 12. Blog & Articles
    if (p.startsWith('/blog')) {
      const sub = p.replace('/blog', '');
      return (
        <BlogPages 
          subPath={sub} 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenBanquetEnquiry={() => handleOpenBanquet()} 
        />
      );
    }

    // 13. Testimonials
    if (p === '/testimonials') {
      return (
        <TestimonialsFAQPages 
          type="testimonials" 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenBanquetEnquiry={() => handleOpenBanquet()} 
        />
      );
    }

    // 14. FAQ
    if (p === '/faq') {
      return (
        <TestimonialsFAQPages 
          type="faq" 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenBanquetEnquiry={() => handleOpenBanquet()} 
        />
      );
    }

    // 15. Contact
    if (p === '/contact-us') {
      return (
        <ContactPage 
          navigate={navigate} 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenBanquetEnquiry={() => handleOpenBanquet()} 
        />
      );
    }

    // 16. Book Now
    if (p === '/book-now') {
      return <BookNowPage navigate={navigate} />;
    }

    // 17. Legal Pages
    if (['/privacy-policy', '/terms-and-conditions', '/cancellation-policy', '/refund-policy', '/cookie-policy', '/sitemap'].includes(p)) {
      const legalType = p.replace('/', '') as any;
      return <LegalPages pageType={legalType} navigate={navigate} />;
    }

    // Fallback: Home
    return (
      <HomePage 
        navigate={navigate} 
        onOpenBooking={handleOpenBooking} 
        onOpenBanquetEnquiry={handleOpenBanquet}
        onOpenRestaurantEnquiry={handleOpenRestaurant}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Universal Header */}
      <Header 
        currentPath={currentPath} 
        navigate={navigate} 
        onOpenBooking={handleOpenBooking} 
        onOpenBanquetEnquiry={handleOpenBanquet}
        onOpenRestaurantEnquiry={handleOpenRestaurant}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Universal Footer */}
      <Footer 
        navigate={navigate} 
        onOpenSpamAudit={() => setIsSpamAuditOpen(true)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedRoomSlug={bookingRoomSlug}
      />

      {/* Banquet Enquiry Modal */}
      <BanquetEnquiryModal
        isOpen={isBanquetOpen}
        onClose={() => setIsBanquetOpen(false)}
        selectedHallSlug={banquetHallSlug}
      />

      {/* Restaurant Table Enquiry Modal */}
      <RestaurantEnquiryModal
        isOpen={isRestaurantOpen}
        onClose={() => setIsRestaurantOpen(false)}
        selectedRestaurantSlug={restaurantSlug}
      />

      {/* Spam Cleanup & Technical SEO Audit Console */}
      <SpamAuditModal
        isOpen={isSpamAuditOpen}
        onClose={() => setIsSpamAuditOpen(false)}
      />
    </div>
  );
}
