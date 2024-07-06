import {
  agadir,
  chefchaouen,
  casablanca,
  rabat,
  tetouan,
  marrakech,
  martil,
  merzouga,
  ifrane,
  fez,
  kasbah,
  meknes,
  legzira,
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
  trending2,
  trending3,
  trending4,
  trending5,
} from "@/assets/images";

import {
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor4,
  sponsor5,
  sponsor6,
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
  payment1,
  payment2,
  payment3,
  payment4,
  payment5,
  achievement1,
  achievement2,
  achievement3,
  achievement4,
  achievement5,
  achievement6,
  achievement7,
  achievement8,
  property1,
  property2,
  property3,
} from "@/assets/icons";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/collection", label: "Collection" },
];

export const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/booking", label: "Booking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/collection", label: "Collection" },
  { href: "/register", label: "Register" },
  { href: "/sign-in", label: "Sign in" },
];

export const destinations = [
  {
    img: casablanca,
    name: "The Heart of Morocco",
    place: "Casablanca",
    rate: "4.6",
    type: "popular",
  },
  {
    img: marrakech,
    name: "The Red City",
    place: "Marrakech",
    rate: "4.9",
    type: "popular",
  },
  {
    img: fez,
    name: "The Spiritual Capital",
    place: "Fez",
    rate: "4.8",
    type: "popular",
  },
  {
    img: merzouga,
    name: "Gateway to the Sahara Desert",
    place: "Merzouga",
    rate: "4.9",
    type: "popular",
  },
  {
    img: chefchaouen,
    name: "The Blue Pearl of Morocco",
    place: "Chefchaouen",
    rate: "5.0",
    type: "adventure",
  },
  {
    img: kasbah,
    name: "Historic Fortresses",
    place: "kasbah",
    rate: "4.8",
    type: "adventure",
  },
  {
    img: agadir,
    name: "The Modern Seaside Resort",
    place: "Agadir",
    rate: "4.7",
    type: "adventure",
  },
  {
    img: legzira,
    name: "Spectacular Coastal Cliffs",
    place: "Legzira",
    rate: "4.6",
    type: "adventure",
  },
  {
    img: ifrane,
    name: "The Little Switzerland of Morocco",
    place: "Ifrane",
    rate: "5.0",
    type: "calm",
  },
  {
    img: tetouan,
    name: "The White Dove of the Mediterranean",
    place: "Tetouan",
    rate: "4.8",
    type: "calm",
  },
  {
    img: rabat,
    name: "Capital of Morocco",
    place: "Rabat",
    rate: "4.8",
    type: "calm",
  },
  {
    img: martil,
    name: "Charming Coastal Town",
    place: "Martil",
    rate: "4.7",
    type: "calm",
  },
];

export const footerLinks = [
  {
    label: "Product",
    links: [
      "Overview",
      "Features",
      "Solution",
      "Tutorials",
      "Pricing",
      "Release",
    ],
  },
  {
    label: "Company",
    links: ["Home", "About us", "Carriere", "Press", "News", "Media Kit"],
  },
  {
    label: "Ressources",
    links: [
      "Blog",
      "Newsletter",
      "Events",
      "Help Center",
      "Tutorials",
      "Support",
    ],
  },
  {
    label: "Legal",
    links: ["Terms", "Privacy", "Cokkies", "Licenses", "Settings", "Contact"],
  },
];

export const sponsors = [
  { id: 1, icon: sponsor1 },
  { id: 2, icon: sponsor2 },
  { id: 3, icon: sponsor3 },
  { id: 4, icon: sponsor4 },
  { id: 5, icon: sponsor5 },
  { id: 6, icon: sponsor6 },
];

export const budgets = [
  { label: "$ 0 - $ 50", min: 0, max: 50 },
  { label: "$ 50 - $ 100", min: 50, max: 10 },
  { label: "$ 100 - $ 300", min: 100, max: 300 },
  { label: "$ 300 - $ 500", min: 300, max: 500 },
  { label: "$ 500 - $ 2,000", min: 500, max: 2000 },
];

export const filters = [
  {
    id: 1,
    label: "Free cancellation",
  },
  {
    id: 2,
    label: "Spa",
  },
  {
    id: 3,
    label: "Beach front",
  },
  {
    id: 4,
    label: "Hot tub",
  },
  {
    id: 5,
    label: "Madina",
  },
];

export const Amenities = [
  { id: 0, name: "Wifi" },
  { id: 1, name: "Air conditioning" },
  { id: 2, name: "Kitchen" },
  { id: 3, name: "Washer" },
  { id: 4, name: "Free parking" },
  { id: 5, name: "Pool" },
  { id: 6, name: "TV" },
  { id: 7, name: "Iron" },
  { id: 8, name: "Hot tub" },
  { id: 9, name: "Dryer" },
];

export const properties = [
  { id: 0, name: "House", icon: property1 },
  { id: 1, name: "Apartment", icon: property2 },
  { id: 2, name: "Hotel", icon: property3 },
];

export const activities = [
  {
    id: 1,
    label: "Camel Ride",
  },
  {
    id: 2,
    label: "Hiking",
  },
  {
    id: 3,
    label: "Air Balloon",
  },
  {
    id: 4,
    label: "Kitesurfing",
  },
  {
    id: 5,
    label: "Explore Madina",
  },
];

export const reviews = [
  {
    icon: person1,
    name: "Anas Ajaanan",
    review:
      "We had a fantastic stay! The apartment was spotless, the location was perfect, and the views from the balcony were breathtaking. Highly recommend!",
    rate: "4.88",
    location: "Abu dhabi, UAE",
  },
  {
    icon: person2,
    name: "Sarah Davidson",
    review:
      "This accommodation is ideally located near the heart of the city. The value for money is excellent. The agency was very responsive and helpful throughout our stay.",
    rate: "4.67",
    location: "Frankfurt, Germany",
  },
  {
    icon: person3,
    name: "Yahya el Khayat",
    review:
      "Our experience was wonderful. The place was easy to find thanks to the agency's clear directions. It was close to all the main attractions and very peaceful. The apartment had everything we needed for a comfortable stay. We were greeted with a lovely welcome gift. We'll definitely be back!",
    rate: "4.69",
    location: "Tetouan, Morocco",
  },
  {
    icon: person4,
    name: "Jassica Lawson",
    review:
      "The agency went above and beyond to make our stay enjoyable. The apartment was well-maintained and had a stunning terrace view. If we get the chance, we will certainly return.",
    rate: "4.78",
    location: "London, England",
  },
  {
    icon: person5,
    name: "Olivia Turner",
    review:
      "The apartment was clean and well-equipped, and the location was convenient for exploring the city. The agency was very welcoming and made sure we had everything we needed. Great experience!",
    rate: "4.55",
    location: "Paris, France",
  },
  {
    icon: person6,
    name: "Mossab Aretouk",
    review:
      "We loved our stay here. The flat was modern and comfortable, with all the necessary amenities. The location was superb, close to shops and restaurants, yet quiet and relaxing.",
    rate: "4.87",
    location: "Madrid, Spain",
  },
  {
    icon: person7,
    name: "Emily Harris",
    review:
      "This place exceeded our expectations. It was perfectly situated near the historic center, and the agency provided excellent recommendations for places to visit. The apartment was cozy and had a beautiful view.",
    rate: "4.78",
    location: "Porto, Portugal",
  },
  {
    icon: person8,
    name: "Mossta Ammari",
    review:
      "Our stay was fantastic. The apartment was clean, stylish, and had an amazing terrace. The agency was incredibly accommodating and quick to respond to any questions we had. We would definitely stay here again!",
    rate: "4.62",
    location: "Ottawa, Canada",
  },
  {
    icon: person9,
    name: "Hamza Wiskit",
    review:
      "The apartment was fantastic, located near all major attractions. The agency was professional and made our stay seamless. The terrace view was stunning, and the apartment was very comfortable. We will definitely use this agency again.",
    rate: "4.83",
    location: "Albuquerque, USA",
  },
];

export const paymentCards = [
  { id: 1, icon: payment1 },
  { id: 2, icon: payment2 },
  { id: 3, icon: payment3 },
  { id: 4, icon: payment4 },
  { id: 5, icon: payment5 },
];

export const achievements = [
  {
    icon: achievement1,
    value: "200k",
    label: "Happy Travelers",
  },
  {
    icon: achievement2,
    value: "15",
    label: "Years of Experience",
  },
  {
    icon: achievement3,
    value: "10k",
    label: "Trips Organized",
  },
  {
    icon: achievement4,
    value: "50+",
    label: "Destinations Covered",
  },
  {
    icon: achievement5,
    value: "100%",
    label: "Safe Journeys Ensured",
  },
  {
    icon: achievement6,
    value: "25",
    label: "Industry Awards",
  },
  {
    icon: achievement7,
    value: "98%",
    label: "Client Satisfaction Rate",
  },
  {
    icon: achievement8,
    value: "30",
    label: "Strong Partnerships",
  },
];

export const questions = [
  {
    id: 1,
    question: "What services does your travel agency offer?",
    answer:
      "We offer a wide range of services, including customized travel itineraries, flight and hotel bookings, transportation arrangements, and assistance with travel documentation.",
  },
  {
    id: 2,
    question: "How do I book a vacation package with your agency?",
    answer:
      "Booking with us is easy! You can browse our website for available packages and use our secure online booking system. Alternatively, you can contact our experienced travel consultants for personalized assistance. ",
  },
  {
    id: 3,
    question:
      "Can our agency help with visa applications and travel insurance?",
    answer:
      "Yes, we provide assistance with visa applications and can recommend suitable travel insurance options to ensure a worry-free journey. ",
  },
];

export const agencyReviews = [
  {
    icon: person1,
    name: "Marsh Carter",
    review:
      "I recently booked a vacation package with Morocco Marvel Travels, and I couldn't be happier with the service. The travel consultants were friendly, knowledgeable, and helped me create the perfect itinerary. Thanks to them, my vacation was amazing!",
    rate: "5.00",
  },
  {
    icon: person2,
    name: "Emily Rodriguez",
    review:
      "Booking my trip with Morocco Marvel Travels was a breeze. The website is user-friendly, and the booking process was smooth. Plus, I got a fantastic discount on my package! I highly recommend this agency for hassle-free travel planning.",
    rate: "4.5",
  },
  {
    icon: person3,
    name: "Mustapha bounuar",
    review:
      "What sets Morocco Marvel Travels apart is their exceptional customer support. I had a few questions and needed assistance with my travel plans, and their team was available 24/7 to help. It's great to know that they prioritize their customers' needs.",
    rate: "4.60",
  },
  {
    icon: person4,
    name: "Amanda Foster",
    review:
      "Safety is a top priority for MMT. I appreciate that they provide regular travel alerts and updates, keeping me informed about any changes or concerns. It shows their commitment to the well-being of their clients and how proffesional they are.",
    rate: "4.82",
  },
  {
    icon: person5,
    name: "Isabella Wright",
    review:
      "I appreciate the transparency in pricing from Morocco Marvel Travel . What you see is what you get, and there are no hidden fees. It made budgeting for my trip straightforward, and I knew exactly what to expect. A reliable and trustworthy agency!",
    rate: "5.00",
  },
  {
    icon: person6,
    name: "Ryan Mitchell",
    review:
      "Booking with Morocco Marvel Travel comes with perks! They have exclusive deals with top hotels and airlines, and I felt like a VIP throughout my trip. If you're looking for a travel agency that goes the extra mile, look no further!.Highly Recommanded",
    rate: "4.54",
  },
  {
    icon: person7,
    name: "Brandon Kelly",
    review:
      "I wanted a unique and personalized travel experience, and MMT delivered! The travel consultants took the time to understand my preferences and created a customized itinerary that exceeded my expectations. I had a fantastic and unforgettable getaway!",
    rate: "4.78",
  },
  {
    icon: person8,
    name: "Abigail Turner",
    review:
      "I recently organized a group trip through MMT, and the experience was effortless. They handled everything from accommodations to activities, and our group received special discounts. If you're planning an event, MMT is the best choice",
    rate: "4.43",
  },
];

export const team = [
  { img: member1, name: "Grace Parker", position: "Founder" },
  { img: member2, name: "Sophie Mitchell", position: "Co Founder" },
  { img: member3, name: "Nathan Hayes", position: "CEO" },
  {
    img: member4,
    name: "Matthew Turner",
    position: "Chief Technology Officer",
  },

  {
    img: member5,
    name: "Chloe Williams",
    position: "Operations",
  },
  {
    img: member6,
    name: "Ava Thompson",
    position: "Administrative Assistant",
  },
  {
    img: member7,
    name: "Jacob Taylor",
    position: "Chief Financial Officer",
  },
  {
    img: member8,
    name: "Mia Anderson",
    position: "Manager",
  },
];

export const trending = [
  { img: trending2, city: "Marrakech", classes: "col-span-2" },
  { img: trending3, city: "Oujda", classes: "col-span-1" },
  { img: trending5, city: "Chefchaouen", classes: "col-span-1" },
  { img: trending4, city: "Fez", classes: "col-span-2" },
];
