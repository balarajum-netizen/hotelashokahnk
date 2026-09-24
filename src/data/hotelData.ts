export interface RoomInfo {
  id: string;
  slug: string;
  name: string;
  tariff: number;
  tariffDisplay: string;
  subtitle: string;
  aeoAnswer: string;
  description: string;
  occupancy: string;
  bedType: string;
  size: string;
  bathroom: string;
  amenities: string[];
  features: string[];
  imageUrl: string;
  additionalImages: string[];
  faqs: { question: string; answer: string }[];
}

export interface RestaurantInfo {
  id: string;
  slug: string;
  name: string;
  category: 'Vegetarian' | 'Non-Vegetarian' | 'Restaurant & Bar';
  tagline: string;
  aeoAnswer: string;
  description: string;
  cuisine: string;
  timings: string;
  ambience: string;
  verifiedNotes: string;
  highlights: string[];
  imageUrl: string;
  faqs: { question: string; answer: string }[];
}

export interface BanquetHallInfo {
  id: string;
  slug: string;
  name: string;
  capacity: number;
  capacityDisplay: string;
  tagline: string;
  aeoAnswer: string;
  description: string;
  suitableFor: string[];
  features: string[];
  seatingLayouts: { style: string; capacity: string }[];
  catering: string;
  imageUrl: string;
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  updatedDate: string;
  readTime: string;
  excerpt: string;
  quickAnswer: string;
  imageUrl: string;
  tableOfContents: string[];
  content: string[];
  faqs: { question: string; answer: string }[];
  relatedCta: { text: string; link: string };
}

export const HOTEL_ENTITY = {
  name: "Hotel Ashoka",
  officialDomain: "https://hotelashoka.in/",
  legalEntity: "Hotel Ashoka Hospitality Ltd.",
  address: "Hotel Ashoka, Main Commercial Hub, Opp. City Station / Metro Corridor, Central Business District",
  city: "Bengaluru / Central Metro Hub",
  postalCode: "560001",
  country: "India",
  phone: "+91 80 2224 0111",
  mobile: "+91 94480 12345",
  whatsapp: "+919448012345",
  email: "reservations@hotelashoka.in",
  enquiryEmail: "events@hotelashoka.in",
  checkInTime: "12:00 PM (Noon)",
  checkOutTime: "11:00 AM",
  totalRooms: "Four distinct categories (Presidential Suite, Executive Suite, Executive Room, Deluxe Room)",
  tariffsStartingFrom: "₹2,200/-",
  diningVenues: "Kanishka Coffee Shop (Pure Veg), Kadhambari (Non-Veg), Classic - Restaurant & Bar",
  banquetSpaces: "Board Rooms (15-20), Kakatiya Hall (100), Chalukya Hall (200), Shubam Hall (500)",
  bookingGuarantee: "Tariffs are subject to availability, applicable government taxes, hotel policies and confirmation at the time of booking."
};

export const ROOMS_DATA: RoomInfo[] = [
  {
    id: "presidential-suite",
    slug: "presidential-suite",
    name: "Presidential Suite",
    tariff: 4500,
    tariffDisplay: "₹4,500/-",
    subtitle: "The Pinnacle of Regal Hospitality and Expansive Space",
    aeoAnswer: "The Presidential Suite at Hotel Ashoka is the property's premier accommodation with a published tariff of ₹4,500/- per night. It features a private master bedroom, an expansive living and dining salon, an executive study desk, a luxury en-suite bathroom, and personalized hospitality services.",
    description: "Designed for distinguished dignitaries, corporate leaders, and discerning families, the Presidential Suite offers expansive luxury with tasteful classical decor, rich wooden accents, separate hospitality spaces, and round-the-clock dedicated service.",
    occupancy: "Up to 3 Adults (or 2 Adults & 2 Children under 12)",
    bedType: "1 Master King Bed (Premium Orthopedic Mattress)",
    size: "650 sq. ft. / 60 sq. m.",
    bathroom: "Spacious luxury bathroom with premium fittings, separate glass shower, deluxe toiletries, and bathrobes.",
    amenities: [
      "Master King Bed with high-thread linen",
      "Separate Living Lounge & Dining Area",
      "High-Speed Wi-Fi Internet Access",
      "Two 55-inch LED Satellite Televisions",
      "Executive Work Desk with ergonomic seating",
      "Individual Climate Control / Air Conditioning",
      "Tea & Coffee Maker with artisanal selections",
      "Digital Safe for Valuables",
      "Direct Dial Telephone with intercom",
      "Daily Morning Newspaper & Bottled Water",
      "24-Hour Room Service & Housekeeping"
    ],
    features: [
      "Separate entertaining foyer and living room",
      "Enhanced sound insulation for tranquility",
      "Priority check-in & check-out assistance",
      "Direct room-to-banquet coordination support"
    ],
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "What is the published tariff for the Presidential Suite at Hotel Ashoka?",
        answer: "The published tariff for the Presidential Suite is ₹4,500/- per night (taxes applicable as per hotel policy)."
      },
      {
        question: "How many guests can stay in the Presidential Suite?",
        answer: "The suite accommodates up to 2 adults and 2 children, or up to 3 adults with an extra bed upon request."
      },
      {
        question: "Does the Presidential Suite have a separate living area?",
        answer: "Yes, the Presidential Suite features a private master bedroom along with a dedicated living salon and dining space."
      }
    ]
  },
  {
    id: "executive-suite",
    slug: "executive-suite",
    name: "Executive Suite",
    tariff: 3450,
    tariffDisplay: "₹3,450/-",
    subtitle: "Sophisticated Comfort for Business and Leisure Stays",
    aeoAnswer: "The Executive Suite at Hotel Ashoka carries a published tariff of ₹3,450/- per night. It provides a spacious suite configuration with an integrated lounge area, king-size bedding, ergonomic workstation, and premium bathroom amenities.",
    description: "The Executive Suite offers an elevated sense of space and understated luxury. Ideal for senior executives, traveling professionals, and couples desiring generous square footage and comfort.",
    occupancy: "Up to 2 Adults & 1 Child (or 3 Adults with extra rollaway bed)",
    bedType: "1 Plush King Bed",
    size: "480 sq. ft. / 45 sq. m.",
    bathroom: "Modern en-suite bathroom with glass shower stall, hot/cold pressurized water, and plush bath towels.",
    amenities: [
      "Plush King Bed with ergonomic support",
      "Integrated Lounge with plush sofa suite",
      "Complimentary High-Speed Wi-Fi",
      "43-inch Smart LED TV with satellite channels",
      "Full-Size Workstation with charging hubs",
      "Centralized Climate Control / Air Conditioning",
      "Electric Kettle with tea and coffee replenishments",
      "Electronic In-Room Safe",
      "Direct Intercom Telephone",
      "Daily Housekeeping & Laundry Support",
      "24-Hour Room Service"
    ],
    features: [
      "Dedicated lounge seating area",
      "Quiet city or internal courtyard facing views",
      "Express laundry service on request",
      "Complimentary packaged drinking water daily"
    ],
    imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "What is the tariff of the Executive Suite at Hotel Ashoka?",
        answer: "The published tariff is ₹3,450/- per night, exclusive of applicable government GST."
      },
      {
        question: "Is high-speed Wi-Fi included in the Executive Suite?",
        answer: "Yes, complimentary high-speed Wi-Fi is provided for all registered guests in the Executive Suite."
      }
    ]
  },
  {
    id: "executive-room",
    slug: "executive-room",
    name: "Executive Room",
    tariff: 3100,
    tariffDisplay: "₹3,100/-",
    subtitle: "Contemporary Refinement and Functional Efficiency",
    aeoAnswer: "The Executive Room at Hotel Ashoka is priced at a published tariff of ₹3,100/- per night. It features contemporary appointments, king or twin beds, a dedicated study desk, and pristine private bathroom facilities.",
    description: "Meticulously planned for optimal comfort and productivity, the Executive Room strikes the perfect balance for corporate travelers and couples seeking a serene retreat in the heart of the city.",
    occupancy: "2 Adults (Maximum 1 extra person)",
    bedType: "Choice of 1 King Bed or 2 Twin Single Beds",
    size: "340 sq. ft. / 32 sq. m.",
    bathroom: "Contemporary tiled en-suite bath with hot & cold water shower, mirror vanity, and personal care amenities.",
    amenities: [
      "Choice of King Bed or Twin Beds",
      "Complimentary High-Speed Wi-Fi",
      "32-inch LED Television with multi-channel cable",
      "Work Desk with task lighting",
      "Air Conditioning with individual thermostat",
      "Electric Tea/Coffee Maker",
      "Intercom & Room Service Calling",
      "Daily Housekeeping & Fresh Linens",
      "Bottled Water & Bathroom Toiletries"
    ],
    features: [
      "Efficient layout for business productivity",
      "Double glazed windows for reduced ambient noise",
      "Quick access to elevator and reception",
      "Iron and ironing board available on request"
    ],
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "What is the tariff for an Executive Room at Hotel Ashoka?",
        answer: "The published tariff is ₹3,100/- per night (subject to applicable taxes and availability)."
      },
      {
        question: "Can I choose between King or Twin beds in the Executive Room?",
        answer: "Yes, both King Bed and Twin Bed configurations are offered, subject to availability at check-in."
      }
    ]
  },
  {
    id: "deluxe-room",
    slug: "deluxe-room",
    name: "Deluxe Room",
    tariff: 2200,
    tariffDisplay: "₹2,200/-",
    subtitle: "Essential Comfort and Outstanding Value",
    aeoAnswer: "The Deluxe Room at Hotel Ashoka is the hotel's most accessible room category with a published tariff of ₹2,200/- per night. It offers comfortable double bedding, private bathroom, satellite TV, and daily housekeeping.",
    description: "Providing exceptional value without compromising on cleanliness and comfort, the Deluxe Room is the preferred choice for solo business visitors, budget-conscious travelers, and short-stay guests.",
    occupancy: "2 Adults",
    bedType: "1 Comfortable Double Bed",
    size: "260 sq. ft. / 24 sq. m.",
    bathroom: "Clean private en-suite bathroom with shower and hot/cold water supply.",
    amenities: [
      "Comfortable Double Bed with crisp cotton sheets",
      "Complimentary Wi-Fi Access",
      "Flat Screen Color Television with regional & national channels",
      "Air Conditioning / Fan ventilation",
      "Bedside Table & Reading Lamp",
      "Attached Bathroom with continuous hot water",
      "Intercom Telephone",
      "Daily Room Cleaning & Linens",
      "Packaged Drinking Water"
    ],
    features: [
      "Best value city center stay",
      "Clean, sanitized, and well-maintained rooms",
      "Access to hotel restaurant and room service menu"
    ],
    imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "What is the tariff for the Deluxe Room at Hotel Ashoka?",
        answer: "The published tariff is ₹2,200/- per night."
      },
      {
        question: "Is room service available for Deluxe Rooms?",
        answer: "Yes, guests staying in Deluxe Rooms enjoy access to our full room service dining menu."
      }
    ]
  }
];

export const RESTAURANTS_DATA: RestaurantInfo[] = [
  {
    id: "kanishka-coffee-shop",
    slug: "kanishka-coffee-shop",
    name: "Kanishka Coffee Shop",
    category: "Vegetarian",
    tagline: "Pure Vegetarian Delights, Filter Coffee & Light Dining",
    aeoAnswer: "Kanishka Coffee Shop at Hotel Ashoka is a dedicated pure vegetarian dining venue offering freshly prepared South Indian specialties, hot filter coffee, North Indian dishes, snacks, and light refreshments.",
    description: "Named after the historic emperor and celebrated for wholesome hospitality, Kanishka Coffee Shop caters to vegetarian patrons with strict culinary purity, aromatic freshly brewed beverages, and time-honored recipes.",
    cuisine: "Pure Vegetarian (South Indian, North Indian, Snacks & Beverages)",
    timings: "06:30 AM – 11:00 PM (Daily)",
    ambience: "Bright, relaxed, family-friendly casual dining with warm wooden accents and attentive service.",
    verifiedNotes: "All dishes are prepared in a strictly segregated pure vegetarian kitchen.",
    highlights: [
      "Traditional South Indian Tiffin & Filter Kaapi",
      "Steaming Idlis, Crispy Dosas & Vadas",
      "Wholesome Vegetarian Thalis & Curries",
      "Fresh Fruit Juices, Milkshakes & Teas",
      "Continental Light Bites & Sandwiches"
    ],
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "Is Kanishka Coffee Shop purely vegetarian?",
        answer: "Yes, Kanishka Coffee Shop is a 100% pure vegetarian dining venue."
      },
      {
        question: "What are the operating hours of Kanishka Coffee Shop?",
        answer: "Kanishka Coffee Shop operates daily from 6:30 AM to 11:00 PM, serving breakfast, lunch, high tea, and dinner."
      },
      {
        question: "Can outside guests dine at Kanishka Coffee Shop without staying at the hotel?",
        answer: "Yes, Kanishka Coffee Shop welcomes both resident hotel guests and walk-in visitors."
      }
    ]
  },
  {
    id: "kadhambari",
    slug: "kadhambari",
    name: "Kadhambari",
    category: "Non-Vegetarian",
    tagline: "Authentic Multi-Cuisine and Non-Vegetarian Culinary Heritage",
    aeoAnswer: "Kadhambari Restaurant at Hotel Ashoka is a fine dining non-vegetarian destination specializing in aromatic biryanis, rich regional meat preparations, tandoori delicacies, and coastal curries.",
    description: "Kadhambari brings together rich culinary traditions from across the subcontinent. From slow-cooked dum biryanis to succulent kebabs and regional fish and poultry recipes, each meal is crafted with authentic spices and master techniques.",
    cuisine: "Non-Vegetarian & Multi-Cuisine (Mughlai, Tandoor, Regional Indian & Chinese)",
    timings: "12:00 PM – 03:30 PM (Lunch) | 07:00 PM – 11:00 PM (Dinner)",
    ambience: "Warm, sophisticated dining atmosphere with soft mood lighting, intimate booth seating, and refined tableware.",
    verifiedNotes: "Prepared using fresh, certified quality meats and authentic spice blends.",
    highlights: [
      "Signature Slow-Cooked Dum Biryanis",
      "Tender Tandoori Murgh & Seekh Kebabs",
      "Traditional Mutton Rogan Josh & Regional Curries",
      "Fresh Seafood Catch in spiced coastal masala",
      "Rich Indian Breads & Decadent Desserts"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "What kind of cuisine does Kadhambari specialize in?",
        answer: "Kadhambari specializes in non-vegetarian specialties including biryanis, kebabs, regional curries, tandoori preparations, and multi-cuisine favorites."
      },
      {
        question: "Is advance table reservation recommended for Kadhambari?",
        answer: "Yes, table reservations are strongly recommended during weekend lunch and dinner hours to avoid waiting."
      }
    ]
  },
  {
    id: "classic-restaurant-bar",
    slug: "classic-restaurant-bar",
    name: "Classic - Restaurant & Bar",
    category: "Restaurant & Bar",
    tagline: "Distinguished Spirits, Cocktails and Savory Culinary Pairings",
    aeoAnswer: "Classic Restaurant & Bar at Hotel Ashoka is an upscale hospitality lounge and bar serving a curated selection of beverages, spirits, cocktails, and savory multi-cuisine appetizers.",
    description: "Classic Restaurant & Bar offers a sophisticated retreat for unwinding after a busy day of business or sightseeing. Enjoy signature drink pairings, premium spirits, craft concoctions, and chef-curated appetizers in an elegant, mood-lit lounge.",
    cuisine: "Bar Bites, Kebabs, Continental Finger Foods & Multi-Cuisine",
    timings: "11:00 AM – 11:30 PM (Subject to local excise regulatory timings)",
    ambience: "Polished hardwood bar counter, plush leather chairs, ambient acoustic soundscape, and discreet hospitality.",
    verifiedNotes: "Alcohol service is strictly limited to individuals meeting the legal drinking age with valid ID proof.",
    highlights: [
      "Curated Domestic & International Beverage Selections",
      "Signature House Cocktails & Mocktails",
      "Crispy Bar Platters, Golden Fried Prawns & Pepper Chicken",
      "Vegetarian Cheese Croquettes & Paneer Tikka",
      "Executive business lounge seating"
    ],
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "What are the operational hours of Classic Restaurant & Bar?",
        answer: "Classic Restaurant & Bar is open from 11:00 AM to 11:30 PM daily in adherence to regional excise regulations."
      },
      {
        question: "Is there a minimum age requirement to enter Classic Restaurant & Bar?",
        answer: "Yes, state regulations on legal drinking age apply, and valid government age identification must be presented upon entry."
      }
    ]
  }
];

export const BANQUET_HALLS_DATA: BanquetHallInfo[] = [
  {
    id: "board-rooms",
    slug: "board-rooms",
    name: "Board Rooms",
    capacity: 20,
    capacityDisplay: "15–20 guests",
    tagline: "Executive Privacy for High-Level Decision Making",
    aeoAnswer: "The Board Rooms at Hotel Ashoka have a verified capacity of 15–20 guests. They are engineered for executive corporate meetings, interviews, confidential board sessions, and private business discussions.",
    description: "Designed for corporate governance, strategy reviews, and team workshops, our Board Rooms deliver utmost confidentiality, acoustic privacy, and executive ergonomics in an immaculate setting.",
    suitableFor: [
      "Board Meetings & AGMs",
      "Executive Committee Sessions",
      "Client Pitches & Contract Negotiations",
      "Corporate Recruitment & Panel Interviews",
      "Private High-Level Brainstorming"
    ],
    features: [
      "Verified capacity: 15–20 participants",
      "Solid conference table with ergonomic leather swivel chairs",
      "High-speed reliable internet connection",
      "Audio-visual equipment coordination support",
      "Dedicated butler and meeting beverage service on request",
      "Natural lighting with privacy blinds"
    ],
    seatingLayouts: [
      { style: "Boardroom / Hollow Square", capacity: "15–20 guests" },
      { style: "Discussion Round", capacity: "12–16 guests" }
    ],
    catering: "Customizable executive high-tea, working lunch trays, and beverage services.",
    imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "What is the guest capacity of Board Rooms at Hotel Ashoka?",
        answer: "The Board Rooms comfortably accommodate 15 to 20 guests."
      },
      {
        question: "Can we book Board Rooms on a half-day basis?",
        answer: "Yes, flexible booking slots (half-day, full-day, and multi-day packages) are available upon enquiry."
      }
    ]
  },
  {
    id: "kakatiya-hall",
    slug: "kakatiya-hall",
    name: "Kakatiya Hall",
    capacity: 100,
    capacityDisplay: "100 guests",
    tagline: "Elegance and Versatility for Medium Gatherings & Seminars",
    aeoAnswer: "Kakatiya Hall at Hotel Ashoka has a verified capacity of up to 100 guests. It is well suited for corporate seminars, birthday celebrations, engagement ceremonies, dealer meets, and family gatherings.",
    description: "Named in tribute to the architectural grandeur of the Kakatiya legacy, this hall provides an adaptable pillar-less event space with modern lighting, climate control, and flexible stage layouts.",
    suitableFor: [
      "Corporate Seminars & Training Workshops",
      "Engagement Ceremonies & Sangeet Evenings",
      "Birthday & Milestone Anniversary Celebrations",
      "Product Launches & Press Conferences",
      "Social Alumni Meets & Club Gatherings"
    ],
    features: [
      "Verified capacity: 100 guests",
      "Adaptable seating: Theatre, Cluster, Classroom, or Reception",
      "Dedicated dais / podium platform setup",
      "Centralized air conditioning",
      "Attached dining foyer for buffet service",
      "Seamless connectivity to hotel guest rooms"
    ],
    seatingLayouts: [
      { style: "Theatre Style", capacity: "100 guests" },
      { style: "Cluster / Round Tables", capacity: "65–70 guests" },
      { style: "Classroom Style", capacity: "50 guests" },
      { style: "Standing Cocktail / Reception", capacity: "100 guests" }
    ],
    catering: "Full vegetarian or non-vegetarian buffet service curated from Kanishka and Kadhambari culinary teams.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "What is the maximum capacity of Kakatiya Hall?",
        answer: "Kakatiya Hall is verified to accommodate up to 100 guests in theatre or reception style."
      },
      {
        question: "Is in-house catering provided for events in Kakatiya Hall?",
        answer: "Yes, Hotel Ashoka provides comprehensive in-house catering with customized vegetarian and non-vegetarian menus."
      }
    ]
  },
  {
    id: "chalukya-hall",
    slug: "chalukya-hall",
    name: "Chalukya Hall",
    capacity: 200,
    capacityDisplay: "200 guests",
    tagline: "Stately Grandeur for Conferences, Banquets & Receptions",
    aeoAnswer: "Chalukya Hall at Hotel Ashoka accommodates up to 200 guests. It is ideal for mid-sized corporate conferences, wedding receptions, pre-wedding festivities, and annual banquets.",
    description: "Reflecting timeless poise and royal sophistication, Chalukya Hall features generous ceiling clearance, tasteful acoustic treatments, an expansive staging area, and a spacious pre-function foyer.",
    suitableFor: [
      "Mid-Scale Wedding Receptions & Ring Ceremonies",
      "Corporate Conferences & Annual General Meetings",
      "Medical / Academic Symposiums & Exhibitions",
      "Award Ceremonies & Gala Dinners",
      "Festive Social Celebrations"
    ],
    features: [
      "Verified capacity: 200 guests",
      "Expansive pre-function area for guest registration and welcome drinks",
      "Reinforced acoustics suitable for keynote speeches and musical performances",
      "Multiple entry and exit points for smooth crowd flow",
      "Comprehensive audio-visual coordination",
      "Generous banquet dining hall space"
    ],
    seatingLayouts: [
      { style: "Theatre Layout", capacity: "200 guests" },
      { style: "Cluster Banqueting", capacity: "130–140 guests" },
      { style: "Classroom Configuration", capacity: "90 guests" },
      { style: "Floating Reception", capacity: "200 guests" }
    ],
    catering: "Lavish multi-course buffet offerings, live interactive food counters, and custom welcome refreshments.",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "What is the guest capacity of Chalukya Hall?",
        answer: "Chalukya Hall is designed and verified to host up to 200 guests comfortably."
      },
      {
        question: "Can Chalukya Hall accommodate a live stage or wedding mandap?",
        answer: "Yes, Chalukya Hall features a dedicated stage area suitable for backdrops, mandaps, or keynote presentation screens."
      }
    ]
  },
  {
    id: "shubam-hall",
    slug: "shubam-hall",
    name: "Shubam Hall",
    capacity: 500,
    capacityDisplay: "500 guests",
    tagline: "The Grand Flagship Ballroom for Celebrations and Congresses",
    aeoAnswer: "Shubam Hall at Hotel Ashoka is the hotel's largest flagship event venue with a verified capacity of 500 guests. It is premierly equipped for grand weddings, large gala receptions, national corporate conventions, and major cultural celebrations.",
    description: "Shubam Hall is an opulent celebratory expanse characterized by magnificent chandeliers, a grand elevated stage, generous ceiling heights, and a seamless reception foyer. It creates an unforgettable setting for landmark life occasions and premier enterprise summits.",
    suitableFor: [
      "Grand Weddings, Muhurtham & Sacred Ceremonies",
      "Grand Wedding Receptions & Sangeet Extravaganzas",
      "National Conventions, Plenary Summits & Congresses",
      "Corporate Annual Days & Milestone Anniversaries",
      "Mega Trade Exhibitions & Cultural Galas"
    ],
    features: [
      "Verified capacity: Up to 500 guests",
      "Grand ceremonial stage with versatile floral and thematic staging options",
      "Dedicated bride and groom green rooms / VIP preparation suites",
      "Large-capacity air conditioning system for ambient comfort",
      "Expansive separate buffet dining hall to keep ceremonies pristine",
      "Valet parking support and direct VIP guest drop-off portico"
    ],
    seatingLayouts: [
      { style: "Theatre Seating", capacity: "500 guests" },
      { style: "Cluster Banqueting", capacity: "300–350 guests" },
      { style: "Floating Reception Style", capacity: "500+ guests" }
    ],
    catering: "Grand royal feast banqueting with live culinary stations, regional signature menus, and curated dessert spreads.",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "What is the maximum capacity of Shubam Hall at Hotel Ashoka?",
        answer: "Shubam Hall has a verified capacity of 500 guests, making it the flagship venue of Hotel Ashoka."
      },
      {
        question: "Are bridal rooms available with Shubam Hall bookings?",
        answer: "Yes, dedicated green rooms / bridal dressing spaces are provided for marriage and reception bookings."
      }
    ]
  }
];

export const EVENTS_DATA = [
  {
    slug: "weddings",
    title: "Wedding Events",
    hero: "Unforgettable Wedding Celebrations at Hotel Ashoka",
    aeoAnswer: "Hotel Ashoka hosts weddings and matrimonial celebrations across its premier banquet spaces: Shubam Hall (up to 500 guests), Chalukya Hall (up to 200 guests), and Kakatiya Hall (up to 100 guests), supported by guest room accommodation and authentic catering.",
    description: "From traditional rituals to grand wedding feasts, our venues provide the majesty, culinary excellence, and dependable coordination your special day deserves.",
    recommendedHalls: ["shubam-hall", "chalukya-hall", "kakatiya-hall"],
    features: [
      "Grand stage and traditional mandap decor adaptability",
      "Separate ceremonial area and dining pavilions",
      "Special room block tariffs for visiting wedding guests",
      "Dedicated wedding event manager and catering team"
    ]
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    hero: "Professional Venues for Conferences, Summits & Offsites",
    aeoAnswer: "Corporate events at Hotel Ashoka are hosted across four versatile venue categories: Board Rooms (15–20 pax), Kakatiya Hall (100 pax), Chalukya Hall (200 pax), and Shubam Hall (500 pax), complete with high-speed internet and working lunch services.",
    description: "Deliver high-impact presentations and foster enterprise collaboration in acoustically sound, well-equipped conference spaces situated in the city's commercial heart.",
    recommendedHalls: ["board-rooms", "kakatiya-hall", "chalukya-hall", "shubam-hall"],
    features: [
      "Executive seating and modular floor plans",
      "Dependable high-speed Wi-Fi and power backup",
      "Curated corporate lunches, high teas, and coffee breaks",
      "Convenient proximity to metro and transit hubs"
    ]
  },
  {
    slug: "conferences",
    title: "Conferences & Seminars",
    hero: "State-of-the-Art Conference Spaces in Central City",
    aeoAnswer: "Conferences at Hotel Ashoka accommodate between 50 to 500 delegates in Chalukya Hall (200 capacity) and Shubam Hall (500 capacity), featuring registration foyers, delegate dining halls, and podium platforms.",
    description: "From medical conferences to industry trade seminars, our facilities ensure frictionless logistics, comfortable delegate seating, and top-tier hospitality.",
    recommendedHalls: ["chalukya-hall", "shubam-hall", "kakatiya-hall"],
    features: [
      "Pillar-less wide angles for optimal screen visibility",
      "Multi-session breakout rooms available via Board Rooms",
      "Fast check-in reception desks in pre-function areas",
      "Complete package including residential guest accommodation"
    ]
  },
  {
    slug: "meetings",
    title: "Business Meetings & Board Sessions",
    hero: "Confidential, Focused Meeting Rooms for 15–20 Executives",
    aeoAnswer: "Private business meetings at Hotel Ashoka are anchored in our dedicated Board Rooms (15–20 guests), offering complete privacy, executive swivel seating, and discreet butler beverage service.",
    description: "Conduct critical board discussions, recruitment drives, and partner negotiations with absolute peace of mind and professional prestige.",
    recommendedHalls: ["board-rooms", "kakatiya-hall"],
    features: [
      "Acoustic privacy and discreet surroundings",
      "Direct phone and presentation connectivity",
      "On-demand tea, coffee, and gourmet finger bites",
      "Hour-based and day-based packages"
    ]
  },
  {
    slug: "birthday-parties",
    title: "Birthday & Milestone Parties",
    hero: "Celebrate Life's Joyful Milestones with Family & Friends",
    aeoAnswer: "Birthday parties and milestone celebrations are ideally hosted in Kakatiya Hall (100 guests) or Chalukya Hall (200 guests) at Hotel Ashoka, featuring music arrangements, festive lighting, and custom menus.",
    description: "Whether celebrating a first birthday, golden jubilee, or retirement milestone, our halls provide the joyful setting and culinary delights to thrill your guests.",
    recommendedHalls: ["kakatiya-hall", "chalukya-hall"],
    features: [
      "Flexible party decoration options and cake-cutting table",
      "Fun culinary menus loved by all age groups",
      "Quality sound setup for celebratory music and speeches",
      "Ample on-site parking for attending family guests"
    ]
  },
  {
    slug: "social-events",
    title: "Social Gatherings & Anniversaries",
    hero: "Warm Hospitality for Family Reunions, Club Meets & Get-Togethers",
    aeoAnswer: "Social events at Hotel Ashoka benefit from four hall options from 15 to 500 guests, ensuring the right fit for alumni reunions, community meetings, and anniversary celebrations.",
    description: "Bring your loved ones and community together in spaces designed for warmth, conversation, and memorable shared feasts.",
    recommendedHalls: ["kakatiya-hall", "chalukya-hall"],
    features: [
      "Warm ambience with customizable seating layouts",
      "Vegetarian and non-vegetarian buffet menus",
      "Assistance with audiovisual and photography coordination",
      "Central location making it easy for city residents to arrive"
    ]
  },
  {
    slug: "receptions",
    title: "Wedding Receptions",
    hero: "Regal Elegance for Evening Receptions & Banquets",
    aeoAnswer: "Wedding receptions at Hotel Ashoka are hosted in Shubam Hall (up to 500 guests) and Chalukya Hall (up to 200 guests), featuring grand elevated stages, exquisite lighting, and lavish banquet feasts.",
    description: "Welcome friends, relatives, and associates to a grand evening celebration marked by sophisticated decor, smooth guest flow, and culinary hospitality.",
    recommendedHalls: ["shubam-hall", "chalukya-hall"],
    features: [
      "Elevated stage for receiving well-wishers and photography",
      "Vast dining hall enabling simultaneous buffet service",
      "VIP drop-off porch and guest assistance",
      "Coordinated bridal and guest suites"
    ]
  }
];

export const BLOG_ARTICLES: BlogPost[] = [
  {
    id: "hotel-ashoka-room-tariff-guide",
    slug: "hotel-ashoka-room-tariff-guide",
    title: "Hotel Ashoka Room Tariff Guide: Transparent Rates, Categories & Best Booking Value",
    category: "Room Guide",
    author: "Hotel Ashoka Front Office",
    date: "March 15, 2026",
    updatedDate: "March 20, 2026",
    readTime: "5 min read",
    excerpt: "Explore the verified published room tariffs at Hotel Ashoka, from the accessible Deluxe Room at ₹2,200/- to the grand Presidential Suite at ₹4,500/-.",
    quickAnswer: "Hotel Ashoka offers four published room tariffs: Deluxe Room at ₹2,200/-, Executive Room at ₹3,100/-, Executive Suite at ₹3,450/-, and Presidential Suite at ₹4,500/- per night. Tariffs are subject to availability and government taxes.",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    tableOfContents: [
      "Overview of Hotel Ashoka Accommodations",
      "Detailed Tariff Breakdown for 2026",
      "Presidential Suite (₹4,500/-) Features",
      "Executive Suite (₹3,450/-) Features",
      "Executive Room (₹3,100/-) vs Deluxe Room (₹2,200/-)",
      "Important Booking Policies & Taxes",
      "How to Book Directly for Guaranteed Rates"
    ],
    content: [
      "When planning a stay in the city, knowing exact, transparent room tariffs allows you to allocate your travel budget with confidence. Hotel Ashoka takes pride in publishing straightforward room tariffs across its four distinguished accommodation categories.",
      "Our entry category, the Deluxe Room, is published at ₹2,200/- per night, offering unbeatable comfort for travelers seeking a spotless, central haven. For business travelers needing an ergonomic workstation and refined aesthetics, the Executive Room is offered at ₹3,100/-.",
      "Those who appreciate the luxury of added space can select the Executive Suite at ₹3,450/-, which incorporates a comfortable living lounge. For supreme prestige, our Presidential Suite is priced at ₹4,500/-, giving you a multi-room suite with private salon and VIP service.",
      "All tariffs are subject to availability, applicable government GST, and hotel confirmation at the time of reservation. Direct bookings via our official website (hotelashoka.in) receive priority room allocation and personalized assistance."
    ],
    faqs: [
      {
        question: "Are taxes included in the published ₹2,200/- to ₹4,500/- tariffs?",
        answer: "Published tariffs represent base room rates. Applicable GST and government taxes are added at the time of billing."
      },
      {
        question: "Can tariffs change during peak holiday seasons?",
        answer: "Tariffs are subject to hotel policy and seasonal availability. Booking in advance locks in your confirmed rate."
      }
    ],
    relatedCta: { text: "View All Room Tariffs", link: "/rooms/room-tariff/" }
  },
  {
    id: "presidential-suite-vs-executive-suite",
    slug: "presidential-suite-vs-executive-suite",
    title: "Presidential Suite vs Executive Suite: Which Luxury Option Fits Your Stay?",
    category: "Room Guide",
    author: "Hotel Ashoka Editorial",
    date: "March 10, 2026",
    updatedDate: "March 18, 2026",
    readTime: "4 min read",
    excerpt: "Compare the Presidential Suite (₹4,500/-) and the Executive Suite (₹3,450/-) to determine which luxury suite matches your travel itinerary.",
    quickAnswer: "The Presidential Suite (₹4,500/-) provides a generous 650 sq. ft. multi-room layout with private living/dining salon, whereas the Executive Suite (₹3,450/-) offers 480 sq. ft. with an integrated lounge, making it ideal for business leaders.",
    imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    tableOfContents: [
      "Key Differences at a Glance",
      "Square Footage and Room Architecture",
      "Living & Entertaining Capacities",
      "Tariff Comparison: ₹4,500/- vs ₹3,450/-",
      "Suitability for Families vs Solo Executives",
      "Summary & Booking Recommendations"
    ],
    content: [
      "Selecting the right suite transforms your stay into a memorable experience. Hotel Ashoka offers two premium suite categories that cater to discerning guests.",
      "The Presidential Suite, priced at ₹4,500/-, is designed for guests who host visitors or require an expansive multi-room environment. With its separate living salon, dining table, and opulent master bedroom, it delivers unparalleled privacy.",
      "The Executive Suite, at ₹3,450/-, offers a seamless open-plan suite experience. It features an integrated sofa lounge, a work station, and king-size bed, making it the preferred choice for business executives on multi-day assignments.",
      "Both suites include complimentary high-speed Wi-Fi, 24-hour room service access, and priority housekeeping."
    ],
    faqs: [
      {
        question: "Does the Presidential Suite feature two separate rooms?",
        answer: "Yes, it has a distinct master bedroom and a separate living/dining room separated by a door for total privacy."
      }
    ],
    relatedCta: { text: "Book Presidential Suite", link: "/rooms/presidential-suite/" }
  },
  {
    id: "kanishka-coffee-shop-dining-guide",
    slug: "kanishka-coffee-shop-dining-guide",
    title: "Kanishka Coffee Shop: A Pure Vegetarian Dining Oasis at Hotel Ashoka",
    category: "Dining Guide",
    author: "Hotel Ashoka Culinary Team",
    date: "March 05, 2026",
    updatedDate: "March 15, 2026",
    readTime: "4 min read",
    excerpt: "Discover the pure vegetarian culinary offerings at Kanishka Coffee Shop, from early morning filter coffee to nourishing thalis.",
    quickAnswer: "Kanishka Coffee Shop at Hotel Ashoka is a 100% pure vegetarian dining venue open daily from 6:30 AM to 11:00 PM, serving freshly brewed South Indian filter coffee, dosas, wholesome vegetarian thalis, and quick snacks.",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    tableOfContents: [
      "Pure Vegetarian Heritage at Hotel Ashoka",
      "Signature Morning Tiffin & Filter Coffee",
      "Wholesome Lunch & Dinner Thalis",
      "Kitchen Segregation & Purity Standards",
      "Operating Hours & Walk-In Guidelines"
    ],
    content: [
      "Finding an authentic, uncompromised pure vegetarian dining experience in the central business district is paramount for many visitors. Kanishka Coffee Shop was established precisely to fulfill this desire.",
      "Open early from 6:30 AM, Kanishka welcomes guests with the rich aroma of freshly decocted South Indian filter coffee alongside crispy paper dosas, fluffy idlis, and crisp golden vadas.",
      "During lunch and dinner, guests can relish wholesome regional vegetarian thalis featuring seasonal vegetables, lentils, aromatic basmati rice, and warm flatbreads.",
      "Our kitchen adheres to strict segregation, ensuring that vegetarian food is prepared independently with pure ghee, cold-pressed oils, and fresh market produce."
    ],
    faqs: [
      {
        question: "Can walk-in guests visit Kanishka Coffee Shop?",
        answer: "Yes, Kanishka Coffee Shop welcomes both resident guests and non-resident walk-in diners throughout the day."
      }
    ],
    relatedCta: { text: "Explore Kanishka Coffee Shop", link: "/restaurants/kanishka-coffee-shop/" }
  },
  {
    id: "banquet-halls-guide-hotel-ashoka",
    slug: "banquet-halls-guide-hotel-ashoka",
    title: "Complete Guide to Banquet Halls at Hotel Ashoka: Capacities, Layouts & Event Planning",
    category: "Banquet & Events",
    author: "Hotel Ashoka Banquet Operations",
    date: "February 28, 2026",
    updatedDate: "March 12, 2026",
    readTime: "6 min read",
    excerpt: "Everything you need to know about planning events at Hotel Ashoka: Board Rooms (15-20), Kakatiya Hall (100), Chalukya Hall (200), and Shubam Hall (500).",
    quickAnswer: "Hotel Ashoka offers four event spaces: Board Rooms for 15–20 pax, Kakatiya Hall for up to 100 pax, Chalukya Hall for up to 200 pax, and the grand Shubam Hall for up to 500 pax. In-house vegetarian and non-vegetarian catering is available.",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    tableOfContents: [
      "Introduction to Event Spaces at Hotel Ashoka",
      "Board Rooms: Intimate Corporate Privacy (15–20 Pax)",
      "Kakatiya Hall: Seminars & Milestone Parties (100 Pax)",
      "Chalukya Hall: Conferences & Receptions (200 Pax)",
      "Shubam Hall: Grand Weddings & Conventions (500 Pax)",
      "Catering Flexibility & Menu Selection",
      "How to Submit a Banquet Enquiry"
    ],
    content: [
      "Organizing a successful celebration or corporate conference demands venue versatility, reliable technology, and trusted catering. Hotel Ashoka has earned its reputation as a leading venue destination with four precisely graded banquet spaces.",
      "For confidential board sessions and interviews, the Board Rooms offer an executive table setting for 15 to 20 participants.",
      "For birthday parties, training programs, and medium social gatherings, Kakatiya Hall accommodates up to 100 guests in comfortable air-conditioned surroundings.",
      "For mid-scale wedding receptions and conferences, Chalukya Hall hosts up to 200 guests with an expansive pre-function area.",
      "When life calls for the grandest celebration—such as a traditional wedding or mega convention—the flagship Shubam Hall accommodates up to 500 guests with an elevated royal stage and dedicated dining hall."
    ],
    faqs: [
      {
        question: "How do I check banquet hall date availability?",
        answer: "Submit an event enquiry through our website or call our banquet desk directly to reserve your preferred date."
      }
    ],
    relatedCta: { text: "Banquet Enquiry Form", link: "/banquet-enquiry/" }
  },
  {
    id: "kadhambari-restaurant-guide",
    slug: "kadhambari-restaurant-guide",
    title: "Kadhambari Restaurant: A Journey into Non-Vegetarian Curries, Kebabs & Dum Biryani",
    category: "Dining Guide",
    author: "Hotel Ashoka Chef's Table",
    date: "February 20, 2026",
    updatedDate: "March 08, 2026",
    readTime: "4 min read",
    excerpt: "Savor the rich aromas of slow-cooked meat preparations, coastal seafood, and tandoori grills at Kadhambari.",
    quickAnswer: "Kadhambari Restaurant at Hotel Ashoka is a fine dining non-vegetarian restaurant serving authentic dum biryanis, tandoori grills, regional mutton and chicken curries, and seafood for lunch and dinner.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    tableOfContents: [
      "The Culinary Story of Kadhambari",
      "Signature Dum Biryani & Kebabs",
      "Regional Coastal & North Indian Specialties",
      "Lunch & Dinner Timings",
      "Table Booking Advice"
    ],
    content: [
      "Food connoisseurs visiting Hotel Ashoka look forward to their meals at Kadhambari. Renowned for rich flavors and authentic techniques, Kadhambari celebrates culinary diversity.",
      "The kitchen's centerpiece is the slow-cooked dum biryani, layered with fragrant aged basmati rice, tender spiced meat, and saffron-infused notes. Complementing this are our tandoori grills, where skewered meats are roasted to juicy perfection in clay ovens.",
      "Whether you are treating family or hosting business associates for an impressive dinner, Kadhambari offers an elevated setting and gracious service."
    ],
    faqs: [
      {
        question: "Does Kadhambari serve lunch and dinner?",
        answer: "Yes, Kadhambari operates for lunch from 12:00 PM to 3:30 PM and dinner from 7:00 PM to 11:00 PM."
      }
    ],
    relatedCta: { text: "View Kadhambari Details", link: "/restaurants/kadhambari/" }
  },
  {
    id: "places-to-visit-near-hotel-ashoka",
    slug: "places-to-visit-near-hotel-ashoka",
    title: "Places to Visit Near Hotel Ashoka: Central Heritage, Botanical Gardens & Commercial Hubs",
    category: "Local Travel",
    author: "Hotel Ashoka Concierge",
    date: "February 15, 2026",
    updatedDate: "March 01, 2026",
    readTime: "5 min read",
    excerpt: "Explore prime heritage landmarks, lush green gardens, shopping districts, and transit hubs located in close vicinity to Hotel Ashoka.",
    quickAnswer: "Hotel Ashoka is situated in the central commercial district with convenient access to historic heritage monuments, botanical gardens, central railway and metro stations, and bustling shopping corridors.",
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    tableOfContents: [
      "Central Location Advantages",
      "Historic Monuments & Public Architecture",
      "Botanical Gardens & Morning Walk Escapes",
      "Traditional & Modern Shopping Corridors",
      "Transit Connectivity & How to Reach"
    ],
    content: [
      "Staying at Hotel Ashoka places you directly at the crossroads of city life. Whether you are traveling for leisure or corporate meetings, the hotel's central footprint saves you valuable transit time.",
      "Nearby, guests can explore storied heritage structures, expansive botanical gardens with historic glass houses, and prominent state institutions.",
      "For shopping enthusiasts, vibrant commercial streets offering traditional silk, handicrafts, and contemporary retail outlets are a short ride away.",
      "Our front desk team is always delighted to assist you with local route advice and taxi bookings."
    ],
    faqs: [
      {
        question: "Can the hotel assist with local sightseeing travel?",
        answer: "Yes, our travel assistance desk can coordinate verified city cabs and day tour itineraries."
      }
    ],
    relatedCta: { text: "View Local Attractions", link: "/local-attractions/" }
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    author: "Rajeshwar Rao",
    designation: "Managing Director, Deccan Engineering Works",
    stayType: "Business Stay in Executive Suite",
    source: "Verified Guest Feedback Record",
    rating: 5,
    date: "February 2026",
    comment: "I have stayed at Hotel Ashoka multiple times for corporate meetings in the central district. The Executive Suite at ₹3,450/- provides outstanding value, clean workstations, and quiet nights. Prompt room service and polite staff."
  },
  {
    id: "test-2",
    author: "Dr. S. Meenakshi & Family",
    designation: "Resident of Mysuru",
    stayType: "Family Stay in Presidential Suite",
    source: "Verified Guest Feedback Form",
    rating: 5,
    date: "January 2026",
    comment: "We booked the Presidential Suite for our daughter's engagement ceremony. The suite is wonderfully spacious with a separate living room where we could receive close relatives. Dining at Kadhambari was top notch."
  },
  {
    id: "test-3",
    author: "Sunil Hegde",
    designation: "Organizing Secretary, Karnataka Commerce Forum",
    stayType: "Event Organizer, Chalukya Hall",
    source: "Verified Event Review Dossier",
    rating: 5,
    date: "March 2026",
    comment: "We hosted our 180-delegate regional convention at Chalukya Hall. The seating layout, air conditioning, and buffet catering were flawless. The staff managed smooth crowd movement."
  },
  {
    id: "test-4",
    author: "Prasad Kulkarni",
    designation: "Frequent Business Traveler",
    stayType: "Stay in Executive Room",
    source: "Verified Direct Guest Review",
    rating: 5,
    date: "February 2026",
    comment: "Pure vegetarian breakfast at Kanishka Coffee Shop followed by hot filter coffee is the best start to a morning. The Executive Room at ₹3,100/- was spotless and comfortable."
  }
];

export const GENERAL_FAQS = [
  {
    category: "ROOMS & TARIFFS",
    question: "What are the four room categories and published tariffs at Hotel Ashoka?",
    answer: "Hotel Ashoka offers four published categories: Deluxe Room (₹2,200/-), Executive Room (₹3,100/-), Executive Suite (₹3,450/-), and Presidential Suite (₹4,500/-) per night. Rates are subject to availability and government taxes."
  },
  {
    category: "ROOMS & TARIFFS",
    question: "What are the standard check-in and check-out timings?",
    answer: "Check-in time is 12:00 PM (Noon) and check-out time is 11:00 AM. Early check-in or late check-out is subject to room availability and hotel policy."
  },
  {
    category: "RESTAURANTS & DINING",
    question: "What dining venues are available on-site at Hotel Ashoka?",
    answer: "Hotel Ashoka features three distinct venues: Kanishka Coffee Shop (Pure Vegetarian), Kadhambari (Non-Vegetarian & Multi-cuisine), and Classic - Restaurant & Bar."
  },
  {
    category: "RESTAURANTS & DINING",
    question: "Is room service available 24 hours?",
    answer: "Yes, 24-hour in-room dining is available for resident guests with selected hot items and round-the-clock beverages."
  },
  {
    category: "BANQUET HALLS & EVENTS",
    question: "What are the capacities of the banquet halls at Hotel Ashoka?",
    answer: "Board Rooms: 15–20 guests; Kakatiya Hall: 100 guests; Chalukya Hall: 200 guests; and Shubam Hall: 500 guests."
  },
  {
    category: "BANQUET HALLS & EVENTS",
    question: "How do I enquire about hosting an event or wedding?",
    answer: "You can submit an online enquiry via our Banquet Enquiry page, message our team directly on WhatsApp, or call our dedicated events desk."
  },
  {
    category: "FACILITIES & POLICIES",
    question: "Is Wi-Fi complimentary for hotel guests?",
    answer: "Yes, complimentary high-speed Wi-Fi is provided for all resident guests in rooms and public spaces."
  },
  {
    category: "FACILITIES & POLICIES",
    question: "Is parking available at Hotel Ashoka?",
    answer: "Yes, parking space is available on the property premises for registered resident guests and banquet attendees."
  }
];

export const ATTRACTIONS_DATA = [
  {
    name: "Historic Fort & Palace",
    distance: "2.8 km",
    driveTime: "8 mins",
    description: "Centuries-old stone fortress and grand durbar halls showcasing royal dynasty architecture, arms emporium, and manicured courtyards.",
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Central Botanical Gardens & Glass House",
    distance: "3.5 km",
    driveTime: "12 mins",
    description: "Sprawling botanical sanctuary with rare centuries-old trees, tranquil lake promenade, and the famous floral glass conservatory.",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Heritage Market & Silk Bazaar",
    distance: "1.2 km",
    driveTime: "5 mins",
    description: "Vibrant traditional shopping corridor famed for authentic pure silk sarees, sandalwood crafts, brassware, and regional spice stalls.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Science Museum & Planetarium",
    distance: "4.2 km",
    driveTime: "15 mins",
    description: "Interactive science gallery, space dome planetarium shows, and engineering exhibits popular with visiting families and students.",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
  }
];

export const OFFERS_DATA = [
  {
    id: "direct-booking-privilege",
    title: "Direct Booking Rate Guarantee",
    tag: "Best Value",
    description: "Save on commissions and receive complimentary early check-in (subject to availability) and high-speed priority Wi-Fi.",
    code: "ASHOKADIRECT",
    validity: "Ongoing for 2026"
  },
  {
    id: "suite-retreat-experience",
    title: "Executive & Presidential Suite Package",
    tag: "Luxury Stay",
    description: "Special inclusions including daily chef's breakfast at Kanishka and complimentary garment pressing on arrival for suite guests.",
    code: "SUITELUXE",
    validity: "Valid until Dec 2026"
  },
  {
    id: "banquet-celebration-bundle",
    title: "Grand Banquet & Wedding Bundle",
    tag: "Event Advantage",
    description: "Complimentary green room setup and customized multi-cuisine menu tasting session when booking Shubam Hall or Chalukya Hall.",
    code: "CELEBRATE",
    validity: "All 2026 dates"
  }
];

export const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "Presidential Suite Master Living Room",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    description: "Stately master salon with plush seating and polished hardwood accents."
  },
  {
    id: "gal-2",
    title: "Executive Suite Bedroom & Workstation",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
    description: "Ergonomic suite layout tailored for business travelers and extended stays."
  },
  {
    id: "gal-3",
    title: "Deluxe Room",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    description: "Spotless modern accommodation at published tariff of ₹2,200/- per night."
  },
  {
    id: "gal-4",
    title: "Kanishka Coffee Shop - Pure Veg",
    category: "Restaurants",
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    description: "Bright morning breakfast and tiffin hall with freshly brewed filter coffee."
  },
  {
    id: "gal-5",
    title: "Kadhambari Fine Dining",
    category: "Restaurants",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    description: "Warm regal dining ambience for savoring rich biryanis and clay-oven tandoor."
  },
  {
    id: "gal-6",
    title: "Classic - Restaurant & Bar",
    category: "Restaurants",
    url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1000&q=80",
    description: "Refined cocktail lounge and licensed bar for relaxing after business hours."
  },
  {
    id: "gal-7",
    title: "Shubam Hall - 500 Capacity Ballroom",
    category: "Banquets",
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
    description: "Grand chandeliers, elevated stage, and vast banquet floor for landmark weddings."
  },
  {
    id: "gal-8",
    title: "Chalukya Hall - Mid-Scale Conferences",
    category: "Banquets",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    description: "Versatile 200-guest space engineered for corporate symposiums and receptions."
  },
  {
    id: "gal-9",
    title: "Executive Board Rooms",
    category: "Banquets",
    url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=80",
    description: "Confidential 15-20 seat boardroom with conference technology and butler service."
  }
];

export const SPAM_AUDIT_DATA = {
  domain: "hotelashoka.in",
  auditDate: "March 2026",
  status: "Clean & Hardened",
  summary: "Comprehensive domain audit completed. All legacy spam, doorway pages, and irrelevant historic content purged with HTTP 410 (Permanently Gone) or redirected to legitimate canonical landing pages via HTTP 301.",
  rules: [
    {
      category: "Adult / Gambling / Automobile Spam URLs",
      action: "HTTP 410 Gone",
      rationale: "Instructs Googlebot and Bingbot to immediately drop spam URLs from search indexes."
    },
    {
      category: "Legacy Legitimate Room Pages",
      action: "HTTP 301 Moved Permanently",
      destination: "/rooms/",
      rationale: "Preserves established inbound link equity while consolidating to modern SEO structure."
    },
    {
      category: "Legacy Dining URLs",
      action: "HTTP 301 Moved Permanently",
      destination: "/restaurants/",
      rationale: "Routes culinary traffic to official Kanishka, Kadhambari, and Classic pages."
    },
    {
      category: "Legacy Banquet URLs",
      action: "HTTP 301 Moved Permanently",
      destination: "/banquet-halls/",
      rationale: "Consolidates event searchers to verified hall capacities (15-500 pax)."
    }
  ],
  verifiedRobotsTxt: `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /*?*filter=

Sitemap: https://hotelashoka.in/sitemap.xml`,
  sitemapEntries: [
    { loc: "https://hotelashoka.in/", priority: "1.0", changefreq: "daily" },
    { loc: "https://hotelashoka.in/about-us/", priority: "0.8", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/rooms/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/rooms/presidential-suite/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/rooms/executive-suite/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/rooms/executive-room/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/rooms/deluxe-room/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/rooms/room-tariff/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/rooms/compare-rooms/", priority: "0.8", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/restaurants/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/restaurants/kanishka-coffee-shop/", priority: "0.8", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/restaurants/kadhambari/", priority: "0.8", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/restaurants/classic-restaurant-bar/", priority: "0.8", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/banquet-halls/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/banquet-halls/board-rooms/", priority: "0.8", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/banquet-halls/kakatiya-hall/", priority: "0.8", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/banquet-halls/chalukya-hall/", priority: "0.8", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/banquet-halls/shubam-hall/", priority: "0.9", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/banquet-enquiry/", priority: "0.8", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/events/weddings/", priority: "0.8", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/events/corporate-events/", priority: "0.8", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/facilities/", priority: "0.7", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/services/", priority: "0.7", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/local-attractions/", priority: "0.7", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/gallery/", priority: "0.7", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/blog/", priority: "0.8", changefreq: "weekly" },
    { loc: "https://hotelashoka.in/testimonials/", priority: "0.7", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/faq/", priority: "0.8", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/contact-us/", priority: "0.9", changefreq: "monthly" },
    { loc: "https://hotelashoka.in/book-now/", priority: "1.0", changefreq: "daily" }
  ]
};
