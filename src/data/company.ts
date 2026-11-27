export const COMPANY_INFO = {
  name: "August Industries",
  legalName: "August Industries Pvt. Ltd.",
  tagline: "ISO 9001:2015 Certified Company",
  subTagline: "the strut people",
  motto: "BUSINESS BEYOND BOUNDARIES",
  established: 1998,
  productCountLabel: "100+",
  phone: "+91-9872727373",
  whatsappNumber: "919872727373",
  email: "Rajeevnanchahal@gmail.com",
  address: "Village Gaunspur, Noorpur Bet, Humbran, Ludhiana - 141110, Punjab, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54759.327971106824!2d75.62120763125003!3d30.929770700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a7dcbffffffbf%3A0xf4aca6107c2cd00!2sAugust%20Industries%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1679565313801!5m2!1sen!2sin",
  images: {
    logo: "/images/logo.jpg",
    factoryFront: "/images/factory.jpg",
    heroSlides: ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"],
    // Diverse high-resolution industrial/manufacturing/metalwork visuals for homepage
    showcase: {
      cncMachining:
        "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1000&q=80",
      steelStructure:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
      fastenersMacro:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      warehouseLogistics:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    },
    categories: {
      "strut-fittings": "/images/cat-strut.jpg",
      fasteners: "/images/cat-fasteners.jpg",
      clamps: "/images/cat-clamps.jpg",
      "strut-channel":
        "/images/products/slotted-cantilever-arm-two-hole-150-mm-hdg-box-of-one-piece.jpg",
    },
  },
  about: {
    short:
      "We August Industries are manufacturers & exporters of various strut accessories & fasteners. Our achievements have been quite remarkable, attributed to our deep knowledge of the building industry, continuous improvements in quality & products, team of professionals, and above all, customer satisfaction.",
    promise:
      "We strongly believe that the foundation of success of any business is to ultimately satisfy the customers & we promise this with our products, which must function with ease, have the desired appearance & emphasis on good quality for long lasting services, and priced well within reach.",
    history:
      "August Industries was incorporated in 1998. Since then we have built up a strong customer base worldwide with the motive BUSINESS BEYOND BOUNDARIES. We have our own manufacturing capacity, warehouse & have a range of over more than 100 products. Progressing with our continuously increasing yearly sales, it is our philosophy to please the customer with quality products, competitive prices & effective communication.",
  },
  finishes: [
    {
      code: "HDG",
      name: "Hot-Dip Galvanized",
      standard: "BS EN ISO 1461",
      thickness: "45–85 µm",
      corrosionScore: 92,
      environment: "Outdoor, Solar, Infrastructure & Heavy Industrial",
      desc: "Immersion zinc coating providing superior sacrificial protection against harsh weather and industrial atmospheres.",
    },
    {
      code: "BZP",
      name: "Bright Zinc Plated",
      standard: "BS EN ISO 2081",
      thickness: "5–12 µm",
      corrosionScore: 68,
      environment: "Indoor MEP, HVAC, Commercial & Dry Warehousing",
      desc: "Smooth, bright electro-galvanized finish with clean aesthetics and reliable indoor corrosion resistance.",
    },
    {
      code: "SS316",
      name: "Stainless Steel 316",
      standard: "AISI 316 / A4",
      thickness: "Solid Alloy",
      corrosionScore: 99,
      environment: "Marine, Coastal, Chemical Plants & Food Processing",
      desc: "Molybdenum-alloyed austenitic stainless steel engineered for extreme chloride and chemical resistance.",
    },
    {
      code: "PG",
      name: "Pre-Galvanized",
      standard: "BS EN 10346",
      thickness: "15–25 µm",
      corrosionScore: 76,
      environment: "Interior Cable Trays, Framing & Light Support Systems",
      desc: "Consistent mill-applied zinc coating ideal for high-volume strut channels and precision-punched brackets.",
    },
  ],
};

export const NAV_MEGA_CATEGORIES = [
  {
    title: "Strut Fittings",
    slug: "strut-fittings",
    description: "Brackets, channel nuts, joiners, bases & cantilever arms",
    subcategories: [
      { name: "Angle Brackets", slug: "angle-brackets" },
      { name: "C Bracket", slug: "c-bracket" },
      { name: "Cantilever Arms", slug: "cantilever-arms" },
      { name: "Channel Base", slug: "channel-base" },
      { name: "Channel Nuts", slug: "channel-nuts" },
      { name: "Flat Brackets", slug: "flat-brackets" },
      { name: "Strut Joiners", slug: "strut-joiners" },
      { name: "U Shape Brackets", slug: "u-shape-brackets" },
      { name: "Wing Brackets", slug: "wing-brackets" },
      { name: "Z Brackets", slug: "z-brackets-strut-fittings" },
    ],
  },
  {
    title: "Fasteners & Fixings",
    slug: "fasteners",
    description: "High-tensile bolts, nuts & precision washers",
    subcategories: [
      { name: "Bolts", slug: "bolts" },
      { name: "Nuts", slug: "nuts" },
      { name: "Washers", slug: "washers" },
    ],
  },
  {
    title: "Clamps",
    slug: "clamps",
    description: "Heavy-duty beam clamps, U-bolt brackets & window brackets",
    subcategories: [
      { name: "Beam Clamp", slug: "beam-clamp" },
      { name: "Bracket with U-Bolt", slug: "bracket-with-u-bolt" },
      { name: "Window Brackets", slug: "window-brackets" },
    ],
  },
  {
    title: "Strut Channel",
    slug: "strut-channel",
    description: "Slotted & plain structural framing channels",
    subcategories: [],
  },
];
