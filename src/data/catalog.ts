export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  count: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  categories: string[];
  categorySlugs: string[];
  image: string;
  description: string;
  specHeaders: string[];
  specRows: string[][];
  permalink: string;
}

export const CATEGORIES: Category[] = [
  {
    "id": 26,
    "name": "Angle Brackets",
    "slug": "angle-brackets",
    "parent": 19,
    "count": 20
  },
  {
    "id": 39,
    "name": "Beam Clamp",
    "slug": "beam-clamp",
    "parent": 21,
    "count": 4
  },
  {
    "id": 34,
    "name": "Bolts",
    "slug": "bolts",
    "parent": 20,
    "count": 3
  },
  {
    "id": 38,
    "name": "Bracket with U-Bolt",
    "slug": "bracket-with-u-bolt",
    "parent": 21,
    "count": 2
  },
  {
    "id": 31,
    "name": "C Bracket",
    "slug": "c-bracket",
    "parent": 19,
    "count": 1
  },
  {
    "id": 23,
    "name": "Cantilever Arms",
    "slug": "cantilever-arms",
    "parent": 19,
    "count": 3
  },
  {
    "id": 32,
    "name": "Channel Base",
    "slug": "channel-base",
    "parent": 19,
    "count": 7
  },
  {
    "id": 22,
    "name": "Channel Nuts",
    "slug": "channel-nuts",
    "parent": 19,
    "count": 4
  },
  {
    "id": 21,
    "name": "Clamps",
    "slug": "clamps",
    "parent": 0,
    "count": 16
  },
  {
    "id": 20,
    "name": "Fasteners & Fixings",
    "slug": "fasteners",
    "parent": 0,
    "count": 12
  },
  {
    "id": 25,
    "name": "Flat Brackets",
    "slug": "flat-brackets",
    "parent": 19,
    "count": 10
  },
  {
    "id": 37,
    "name": "Nuts",
    "slug": "nuts",
    "parent": 20,
    "count": 4
  },
  {
    "id": 19,
    "name": "Strut Fittings",
    "slug": "strut-fittings",
    "parent": 0,
    "count": 62
  },
  {
    "id": 33,
    "name": "Strut Joiners",
    "slug": "strut-joiners",
    "parent": 19,
    "count": 4
  },
  {
    "id": 30,
    "name": "U Shape Brackets",
    "slug": "u-shape-brackets",
    "parent": 19,
    "count": 4
  },
  {
    "id": 36,
    "name": "Washers",
    "slug": "washers",
    "parent": 20,
    "count": 4
  },
  {
    "id": 40,
    "name": "Window Brackets",
    "slug": "window-brackets",
    "parent": 21,
    "count": 3
  },
  {
    "id": 27,
    "name": "Wing Brackets",
    "slug": "wing-brackets",
    "parent": 19,
    "count": 6
  },
  {
    "id": 29,
    "name": "Z Brackets",
    "slug": "z-brackets-strut-fittings",
    "parent": 19,
    "count": 3
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": 1346,
    "name": "AI022 – OBTUSE ANGLE BRACKET",
    "slug": "ai022-obtuse-angle-bracket-2",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI022.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Angle",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-022",
        "45 deg 1/1 HOLE",
        "HDG",
        "25",
        "5000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai022-obtuse-angle-bracket-2/"
  },
  {
    "id": 1275,
    "name": "AI048-WINDOW BRACKETS + CPSS",
    "slug": "ai048-window-brackets-cpss",
    "categories": [
      "Clamps",
      "Window Brackets"
    ],
    "categorySlugs": [
      "clamps",
      "window-brackets"
    ],
    "image": "/images/products/AI048.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "82mm",
        "HDG",
        "15",
        "1875"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai048-window-brackets-cpss/"
  },
  {
    "id": 1274,
    "name": "AI047-WINDOW BRACKETS + CPSS",
    "slug": "ai047-window-brackets-cpss",
    "categories": [
      "Clamps",
      "Window Brackets"
    ],
    "categorySlugs": [
      "clamps",
      "window-brackets"
    ],
    "image": "/images/products/AI047.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "21mm",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai047-window-brackets-cpss/"
  },
  {
    "id": 1273,
    "name": "AI044-WINDOW BRACKETS + CPSS",
    "slug": "ai044-window-brackets-cpss",
    "categories": [
      "Clamps",
      "Window Brackets"
    ],
    "categorySlugs": [
      "clamps",
      "window-brackets"
    ],
    "image": "/images/products/AI044.png",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "41mm",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai044-window-brackets-cpss/"
  },
  {
    "id": 1271,
    "name": "AI043-TAPPED Z SUPPORT + CPSS",
    "slug": "ai043-tapped-z-support-cpss",
    "categories": [
      "Beam Clamp",
      "Clamps"
    ],
    "categorySlugs": [
      "beam-clamp",
      "clamps"
    ],
    "image": "/images/products/AI043.png",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "TBC",
        "HDG",
        "25",
        "4000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai043-tapped-z-support-cpss/"
  },
  {
    "id": 1270,
    "name": "AI042-BEAM CLAMP TAPPED + CPSS",
    "slug": "ai042-beam-clamp-tapped-cpss",
    "categories": [
      "Beam Clamp",
      "Clamps"
    ],
    "categorySlugs": [
      "beam-clamp",
      "clamps"
    ],
    "image": "/images/products/AI042.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "TBC",
        "HDG",
        "25",
        "4500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai042-beam-clamp-tapped-cpss/"
  },
  {
    "id": 1269,
    "name": "AI041-BEAM CLAMP TAPPED + CPSS",
    "slug": "ai041-beam-clamp-tapped-cpss",
    "categories": [
      "Beam Clamp",
      "Clamps"
    ],
    "categorySlugs": [
      "beam-clamp",
      "clamps"
    ],
    "image": "/images/products/AI041.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "42mm",
        "HDG",
        "10",
        "1800"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai041-beam-clamp-tapped-cpss/"
  },
  {
    "id": 1267,
    "name": "AI040-TOP BEAM CLAMP",
    "slug": "ai040-top-beam-clamp",
    "categories": [
      "Beam Clamp",
      "Clamps"
    ],
    "categorySlugs": [
      "beam-clamp",
      "clamps"
    ],
    "image": "/images/products/AI040.png",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "50×32",
        "HDG",
        "25",
        "6000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai040-top-beam-clamp/"
  },
  {
    "id": 1266,
    "name": "END CAPS",
    "slug": "end-caps",
    "categories": [
      "Clamps"
    ],
    "categorySlugs": [
      "clamps"
    ],
    "image": "/images/products/end-caps.jpg",
    "description": "",
    "specHeaders": [
      "Color",
      "Size",
      "Finish",
      "Box Qty"
    ],
    "specRows": [
      [
        "Black & White",
        "41×41 41×21",
        "PVC",
        "1200"
      ]
    ],
    "permalink": "https://augustindustry.com/product/end-caps/"
  },
  {
    "id": 1264,
    "name": "SADDLE CLAMP",
    "slug": "saddle-clamp",
    "categories": [
      "Clamps"
    ],
    "categorySlugs": [
      "clamps"
    ],
    "image": "/images/products/saddle-clamps.jpg",
    "description": "",
    "specHeaders": [],
    "specRows": [],
    "permalink": "https://augustindustry.com/product/saddle-clamp/"
  },
  {
    "id": 1262,
    "name": "STRUT CLAMP",
    "slug": "strut-clamp",
    "categories": [
      "Clamps"
    ],
    "categorySlugs": [
      "clamps"
    ],
    "image": "/images/products/strut-clamps.jpg",
    "description": "",
    "specHeaders": [],
    "specRows": [],
    "permalink": "https://augustindustry.com/product/strut-clamp/"
  },
  {
    "id": 1261,
    "name": "AI046-BRACKET WITH U BOLT",
    "slug": "ai046-bracket-with-u-bolt",
    "categories": [
      "Bracket with U-Bolt",
      "Clamps"
    ],
    "categorySlugs": [
      "bracket-with-u-bolt",
      "clamps"
    ],
    "image": "/images/products/AI046.png",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "82mm",
        "HDG",
        "15",
        "1875"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai046-bracket-with-u-bolt/"
  },
  {
    "id": 1260,
    "name": "AI045-BRACKET WITH U BOLT",
    "slug": "ai045-bracket-with-u-bolt",
    "categories": [
      "Bracket with U-Bolt",
      "Clamps"
    ],
    "categorySlugs": [
      "bracket-with-u-bolt",
      "clamps"
    ],
    "image": "/images/products/AI045.png",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "41mm",
        "HDG",
        "20",
        "2500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai045-bracket-with-u-bolt/"
  },
  {
    "id": 1259,
    "name": "AI072-BOSS PLATE",
    "slug": "ai072-boss-plate",
    "categories": [
      "Clamps"
    ],
    "categorySlugs": [
      "clamps"
    ],
    "image": "/images/products/AI072.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M8 & M10",
        "HDG",
        "50",
        "9000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai072-boss-plate/"
  },
  {
    "id": 1257,
    "name": "AI077-SWIVEL HANGER",
    "slug": "ai077-swivel-hanger",
    "categories": [
      "Clamps"
    ],
    "categorySlugs": [
      "clamps"
    ],
    "image": "/images/products/AI077.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M10",
        "BZP",
        "100",
        "TBC"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai077-swivel-hanger/"
  },
  {
    "id": 1255,
    "name": "AI053- PURLIN CLIP",
    "slug": "ai053-purlin-clip",
    "categories": [
      "Clamps"
    ],
    "categorySlugs": [
      "clamps"
    ],
    "image": "/images/products/Purlin-Clip.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "85mm",
        "BZP",
        "100",
        "7000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai053-purlin-clip/"
  },
  {
    "id": 1254,
    "name": "AI076 – G CLAMP",
    "slug": "ai076-g-clamp",
    "categories": [
      "Clamps"
    ],
    "categorySlugs": [
      "clamps"
    ],
    "image": "/images/products/AI076.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M8",
        "BZP",
        "TBC",
        "TBC"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai076-g-clamp/"
  },
  {
    "id": 1253,
    "name": "MINI-MINI WEDGE NUTS",
    "slug": "mini-mini-wedge-nuts",
    "categories": [
      "Nuts"
    ],
    "categorySlugs": [
      "nuts"
    ],
    "image": "/images/products/Wedge-Nuts-2.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M6-M12",
        "BZP",
        "100",
        "24000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/mini-mini-wedge-nuts/"
  },
  {
    "id": 1251,
    "name": "MINI WEDGE NUTS",
    "slug": "mini-wedge-nuts",
    "categories": [
      "Nuts"
    ],
    "categorySlugs": [
      "nuts"
    ],
    "image": "/images/products/Wedge-Nuts-2.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M6-M12",
        "BZP",
        "100",
        "24000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/mini-wedge-nuts/"
  },
  {
    "id": 1249,
    "name": "WEDGE NUTS",
    "slug": "wedge-nuts",
    "categories": [
      "Nuts"
    ],
    "categorySlugs": [
      "nuts"
    ],
    "image": "/images/products/Wedge-Nuts.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M6-M12",
        "BZP",
        "100",
        "24000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/wedge-nuts/"
  },
  {
    "id": 1248,
    "name": "HEX NUTS",
    "slug": "hex-nuts",
    "categories": [
      "Nuts"
    ],
    "categorySlugs": [
      "nuts"
    ],
    "image": "/images/products/Hex-Nuts.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M6-M16",
        "BZP",
        "100",
        "24000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/hex-nuts/"
  },
  {
    "id": 1247,
    "name": "AI074 – CLIP WASHER",
    "slug": "ai074-clip-washer",
    "categories": [
      "Fasteners & Fixings",
      "Washers"
    ],
    "categorySlugs": [
      "fasteners",
      "washers"
    ],
    "image": "/images/products/Clip-Washer.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M12",
        "BZP",
        "100",
        "TBC"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai074-clip-washer/"
  },
  {
    "id": 1246,
    "name": "AI073 – CLIP WASHER",
    "slug": "ai073-clip-washer",
    "categories": [
      "Fasteners & Fixings",
      "Washers"
    ],
    "categorySlugs": [
      "fasteners",
      "washers"
    ],
    "image": "/images/products/Clip-Washer.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M10",
        "BZP",
        "100",
        "TBC"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai073-clip-washer/"
  },
  {
    "id": 1245,
    "name": "REPAIR WASHERS",
    "slug": "repair-washers",
    "categories": [
      "Fasteners & Fixings",
      "Washers"
    ],
    "categorySlugs": [
      "fasteners",
      "washers"
    ],
    "image": "/images/products/Penny-washer-2.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M6-M12 (30MM)",
        "BZP & HDG",
        "500",
        "120,000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/repair-washers/"
  },
  {
    "id": 1244,
    "name": "PENNY WASHERS",
    "slug": "penny-washers",
    "categories": [
      "Fasteners & Fixings",
      "Washers"
    ],
    "categorySlugs": [
      "fasteners",
      "washers"
    ],
    "image": "/images/products/Penny-washer-2.jpg",
    "description": "",
    "specHeaders": [
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "M6-M12 (25MM)",
        "BZP & HDG",
        "500",
        "120,000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/penny-washers/"
  },
  {
    "id": 1242,
    "name": "SQUARE PLATE WASHERS",
    "slug": "square-plate-washers",
    "categories": [
      "Fasteners & Fixings",
      "Flat Brackets"
    ],
    "categorySlugs": [
      "fasteners",
      "flat-brackets"
    ],
    "image": "/images/products/square-washer.jpg",
    "description": "",
    "specHeaders": [
      "Thickness",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "3mm",
        "M6-M12 40mm & 50mm",
        "BZP & HDG",
        "100",
        "20000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/square-plate-washers/"
  },
  {
    "id": 1232,
    "name": "THREADED STUDS",
    "slug": "threaded-studs",
    "categories": [
      "Bolts",
      "Fasteners & Fixings"
    ],
    "categorySlugs": [
      "bolts",
      "fasteners"
    ],
    "image": "/images/products/stud-bolt.jpg",
    "description": "A channel nut without a spring is a type of fastener used in the construction industry to attach threaded rod or other hardware to channel strut. It is also known as a plain channel nut. Unlike a channel nut with a spring, which has a built-in spring that provides constant pressure and grip, a plain channel nut does not have a spring and relies on the friction between the nut and the channel strut to stay in place.",
    "specHeaders": [],
    "specRows": [],
    "permalink": "https://augustindustry.com/product/threaded-studs/"
  },
  {
    "id": 1230,
    "name": "ROOFING BOLTS",
    "slug": "roofing-bolts",
    "categories": [
      "Bolts",
      "Fasteners & Fixings"
    ],
    "categorySlugs": [
      "bolts",
      "fasteners"
    ],
    "image": "/images/products/Roofing-Bolts.jpg",
    "description": "A channel nut without a spring is a type of fastener used in the construction industry to attach threaded rod or other hardware to channel strut. It is also known as a plain channel nut. Unlike a channel nut with a spring, which has a built-in spring that provides constant pressure and grip, a plain channel nut does not have a spring and relies on the friction between the nut and the channel strut to stay in place.",
    "specHeaders": [],
    "specRows": [],
    "permalink": "https://augustindustry.com/product/roofing-bolts/"
  },
  {
    "id": 1229,
    "name": "HEX HEAD SET SCREWS",
    "slug": "hex-head-set-screws",
    "categories": [
      "Bolts",
      "Fasteners & Fixings"
    ],
    "categorySlugs": [
      "bolts",
      "fasteners"
    ],
    "image": "/images/products/Hex-Head-Set-Screws.jpg",
    "description": "A channel nut without a spring is a type of fastener used in the construction industry to attach threaded rod or other hardware to channel strut. It is also known as a plain channel nut. Unlike a channel nut with a spring, which has a built-in spring that provides constant pressure and grip, a plain channel nut does not have a spring and relies on the friction between the nut and the channel strut to stay in place.",
    "specHeaders": [],
    "specRows": [],
    "permalink": "https://augustindustry.com/product/hex-head-set-screws/"
  },
  {
    "id": 1228,
    "name": "AI052 – INTERNAL JOINT PLATE",
    "slug": "ai052-internal-joint-plate",
    "categories": [
      "Strut Fittings",
      "Strut Joiners"
    ],
    "categorySlugs": [
      "strut-fittings",
      "strut-joiners"
    ],
    "image": "/images/products/AI052.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-052",
        "41×21",
        "PREGAL",
        "100",
        "7000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai052-internal-joint-plate/"
  },
  {
    "id": 1227,
    "name": "AI051 – INTERNAL JOINT PLATE",
    "slug": "ai051-internal-joint-plate",
    "categories": [
      "Strut Fittings",
      "Strut Joiners"
    ],
    "categorySlugs": [
      "strut-fittings",
      "strut-joiners"
    ],
    "image": "/images/products/AI051.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-051",
        "41×41",
        "PREGAL",
        "25",
        "1750"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai051-internal-joint-plate/"
  },
  {
    "id": 1226,
    "name": "AI050 – EXTERNAL JOINT PLATE",
    "slug": "ai050-external-joint-plate",
    "categories": [
      "Strut Fittings",
      "Strut Joiners"
    ],
    "categorySlugs": [
      "strut-fittings",
      "strut-joiners"
    ],
    "image": "/images/products/AI050.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-050",
        "41×21",
        "HDG",
        "10",
        "1250"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai050-external-joint-plate/"
  },
  {
    "id": 1225,
    "name": "AI049 – EXTERNAL JOINT PLATE",
    "slug": "ai049-external-joint-plate",
    "categories": [
      "Strut Fittings",
      "Strut Joiners"
    ],
    "categorySlugs": [
      "strut-fittings",
      "strut-joiners"
    ],
    "image": "/images/products/AI049.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-049",
        "41×41",
        "HDG",
        "10",
        "1280"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai049-external-joint-plate/"
  },
  {
    "id": 1224,
    "name": "AI071 – OFFSET DOUBLE BASE PLATE",
    "slug": "ai071-offset-double-base-plate",
    "categories": [
      "Channel Base",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-base",
      "strut-fittings"
    ],
    "image": "/images/products/AI071.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-071",
        "152x89x6",
        "HDG",
        "10",
        "300"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai071-offset-double-base-plate/"
  },
  {
    "id": 1223,
    "name": "AI070 – OFFSET SINGLE BASE PLATE",
    "slug": "ai070-offset-single-base-plate",
    "categories": [
      "Channel Base",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-base",
      "strut-fittings"
    ],
    "image": "/images/products/AI070.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-070",
        "152x89x6",
        "HDG",
        "10",
        "320"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai070-offset-single-base-plate/"
  },
  {
    "id": 1221,
    "name": "AI038 – DOUBLE GUSSETED BASE PLATE",
    "slug": "ai038-double-gusseted-base-plate",
    "categories": [
      "Channel Base",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-base",
      "strut-fittings"
    ],
    "image": "/images/products/FB64-2.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-038",
        "240×150",
        "HDG",
        "8",
        "240"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai038-double-gusseted-base-plate/"
  },
  {
    "id": 1220,
    "name": "AI037 – SINGLE GUSSETED BASE PLATE",
    "slug": "ai037-single-gusseted-base-plate",
    "categories": [
      "Channel Base",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-base",
      "strut-fittings"
    ],
    "image": "/images/products/FB63.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-037",
        "198×150",
        "HDG",
        "12",
        "360"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai037-single-gusseted-base-plate/"
  },
  {
    "id": 1219,
    "name": "AI036 – DOUBLE BASE PLATE",
    "slug": "ai036-double-base-plate",
    "categories": [
      "Channel Base",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-base",
      "strut-fittings"
    ],
    "image": "/images/products/AI036.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-036",
        "97.5×26.5",
        "HDG",
        "25",
        "750"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai036-double-base-plate/"
  },
  {
    "id": 1218,
    "name": "AI035 – SINGLE BASE PLATE",
    "slug": "ai035-single-base-plate-2",
    "categories": [
      "Channel Base",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-base",
      "strut-fittings"
    ],
    "image": "/images/products/AI035.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-035",
        "93x45x5",
        "HDG",
        "50",
        "1500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai035-single-base-plate-2/"
  },
  {
    "id": 1217,
    "name": "AI034 – SINGLE BASE PLATE",
    "slug": "ai035-single-base-plate",
    "categories": [
      "Channel Base",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-base",
      "strut-fittings"
    ],
    "image": "/images/products/AI034.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-034",
        "93×43.5×5",
        "HDG",
        "50",
        "1500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai035-single-base-plate/"
  },
  {
    "id": 1216,
    "name": "AI033 – C BRACKET",
    "slug": "ai033-c-bracket",
    "categories": [
      "C Bracket",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "c-bracket",
      "strut-fittings"
    ],
    "image": "/images/products/AI033.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-033",
        "80mm",
        "HDG",
        "25",
        "3000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai033-c-bracket/"
  },
  {
    "id": 1215,
    "name": "AI032 – U BRACKET 80mm",
    "slug": "ai032-u-bracket-80mm",
    "categories": [
      "Strut Fittings",
      "U Shape Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "u-shape-brackets"
    ],
    "image": "/images/products/AI032.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-032",
        "178x42x80",
        "HDG",
        "20",
        "1400"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai032-u-bracket-80mm/"
  },
  {
    "id": 1214,
    "name": "AI030 – U BRACKET 40mm",
    "slug": "ai030-u-bracket-40mm-2",
    "categories": [
      "Strut Fittings",
      "U Shape Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "u-shape-brackets"
    ],
    "image": "/images/products/AI030.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-030",
        "137x43x40",
        "HDG",
        "25",
        "1750"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai030-u-bracket-40mm-2/"
  },
  {
    "id": 1212,
    "name": "AI031 – U BRACKET 80mm",
    "slug": "ai030-u-bracket-40mm",
    "categories": [
      "Strut Fittings",
      "U Shape Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "u-shape-brackets"
    ],
    "image": "/images/products/AI031.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-031",
        "137x43x80",
        "HDG",
        "15",
        "1050"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai030-u-bracket-40mm/"
  },
  {
    "id": 1210,
    "name": "AI029 – U BRACKET 20mm",
    "slug": "ai029-u-bracket-20mm",
    "categories": [
      "Strut Fittings",
      "U Shape Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "u-shape-brackets"
    ],
    "image": "/images/products/AI029.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-029",
        "135x40x20",
        "HDG",
        "50",
        "3500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai029-u-bracket-20mm/"
  },
  {
    "id": 1209,
    "name": "AI027 – Z BRACKET 40mm",
    "slug": "ai027-z-bracket-40mm-2",
    "categories": [
      "Strut Fittings",
      "Z Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "z-brackets-strut-fittings"
    ],
    "image": "/images/products/AI027.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-027",
        "40mm",
        "HDG",
        "50",
        "6250"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai027-z-bracket-40mm-2/"
  },
  {
    "id": 1207,
    "name": "AI028 – Z BRACKET 80mm",
    "slug": "ai027-z-bracket-40mm",
    "categories": [
      "Strut Fittings",
      "Z Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "z-brackets-strut-fittings"
    ],
    "image": "/images/products/AI028.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-028",
        "80mm",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai027-z-bracket-40mm/"
  },
  {
    "id": 1206,
    "name": "AI026 – Z BRACKET 20mm",
    "slug": "ai026-z-bracket-20mm",
    "categories": [
      "Strut Fittings",
      "Z Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "z-brackets-strut-fittings"
    ],
    "image": "/images/products/ai026.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-026",
        "20mm",
        "HDG",
        "50",
        "6250"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai026-z-bracket-20mm/"
  },
  {
    "id": 1205,
    "name": "AI068 – WING FITTING RIGHT HAND",
    "slug": "ai068-wing-fitting-right-hand",
    "categories": [
      "Strut Fittings",
      "Wing Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "wing-brackets"
    ],
    "image": "/images/products/AI068.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-068",
        "HDG",
        "TBC",
        "1500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai068-wing-fitting-right-hand/"
  },
  {
    "id": 1204,
    "name": "AI067 – WING FITTING LEFT HAND",
    "slug": "ai067-wing-fitting-left-hand",
    "categories": [
      "Strut Fittings",
      "Wing Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "wing-brackets"
    ],
    "image": "/images/products/AI067.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-067",
        "HDG",
        "TBC",
        "1500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai067-wing-fitting-left-hand/"
  },
  {
    "id": 1201,
    "name": "AI066 – RIGHT ANGLE BEND LEFT HAND",
    "slug": "ai066-right-angle-bend-left-hand",
    "categories": [
      "Strut Fittings",
      "Wing Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "wing-brackets"
    ],
    "image": "/images/products/AI066.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-066",
        "90x48x51",
        "HDG",
        "TBC",
        "TBC"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai066-right-angle-bend-left-hand/"
  },
  {
    "id": 1200,
    "name": "AI065 – RIGHT ANGLE BEND RIGHT HAND",
    "slug": "ai065-right-angle-bend-right-hand",
    "categories": [
      "Strut Fittings",
      "Wing Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "wing-brackets"
    ],
    "image": "/images/products/AI065-1.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-065",
        "90x48x51",
        "HDG",
        "TBC",
        "TBC"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai065-right-angle-bend-right-hand/"
  },
  {
    "id": 1198,
    "name": "AI064 – RIGHT ANGLE WING BRACKET",
    "slug": "ai064-right-angle-wing-bracket",
    "categories": [
      "Strut Fittings",
      "Wing Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "wing-brackets"
    ],
    "image": "/images/products/AI064.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-064",
        "50x50x40",
        "HDG",
        "15",
        "1875"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai064-right-angle-wing-bracket/"
  },
  {
    "id": 1197,
    "name": "AI039 – 2 LUG WING BRACKET",
    "slug": "ai039-2-lug-wing-bracket",
    "categories": [
      "Strut Fittings",
      "Wing Brackets"
    ],
    "categorySlugs": [
      "strut-fittings",
      "wing-brackets"
    ],
    "image": "/images/products/AI039.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-039",
        "98x47x43x41",
        "HDG",
        "15",
        "1050"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai039-2-lug-wing-bracket/"
  },
  {
    "id": 1194,
    "name": "AI075 – HINGE BRACKET",
    "slug": "ai075-hinge-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/hinge-brackets-bzp-box-of-25-pcs-1.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-075",
        "102×102",
        "BZP",
        "25",
        "2500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai075-hinge-bracket/"
  },
  {
    "id": 1193,
    "name": "AI025 – ANGLE TEE CENTRE 45 deg",
    "slug": "ai025-angle-tee-centre-45-deg",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/45-Deg-Angle-Tee-centre-FB125-P1032-1.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-025",
        "138mm",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai025-angle-tee-centre-45-deg/"
  },
  {
    "id": 1192,
    "name": "AI024 – ACUTE ANGLE BRACKET",
    "slug": "ai024-acute-angle-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI024.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-024",
        "HDG",
        "25",
        "4500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai024-acute-angle-bracket/"
  },
  {
    "id": 1191,
    "name": "AI023 – OBTUSE ANGLE BRACKET",
    "slug": "ai023-obtuse-angle-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI023.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Angle",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-023",
        "15 deg 1/1 HOLE",
        "HDG",
        "25",
        "3000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai023-obtuse-angle-bracket/"
  },
  {
    "id": 1190,
    "name": "AI022A – OBTUSE ANGLE BRACKET",
    "slug": "ai022-obtuse-angle-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI022A.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Angle",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-022A",
        "45 deg 2/2 HOLE",
        "HDG",
        "25",
        "4500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai022-obtuse-angle-bracket/"
  },
  {
    "id": 1189,
    "name": "AI021 – OBTUSE ANGLE BRACKET",
    "slug": "ai021-obtuse-angle-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/ai023.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Angle",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-021",
        "22.5 deg 1/1 HOLE",
        "HDG",
        "25",
        "5000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai021-obtuse-angle-bracket/"
  },
  {
    "id": 1187,
    "name": "AI020 – GUSSETED RIGHT ANGLE BRACKET",
    "slug": "ai020-gusseted-right-angle-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI020.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-020",
        "102×102",
        "HDG",
        "10",
        "1250"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai020-gusseted-right-angle-bracket/"
  },
  {
    "id": 1186,
    "name": "AI019 – DELTA PLATE RIGHT ANGLE",
    "slug": "ai019-delta-plate-right-angle",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI019.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-019",
        "1/1 Hole",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai019-delta-plate-right-angle/"
  },
  {
    "id": 1185,
    "name": "AI018 – DELTA PLATE RIGHT ANGLE",
    "slug": "ai018-delta-plate-right-angle",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI018.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-018",
        "2/2 Hole",
        "HDG",
        "50",
        "3000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai018-delta-plate-right-angle/"
  },
  {
    "id": 1183,
    "name": "AI017 – RIGHT ANGLE TEE BRACKET",
    "slug": "ai017-right-angle-tee-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI017.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Right Angle",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-017",
        "Centre",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai017-right-angle-tee-bracket/"
  },
  {
    "id": 1181,
    "name": "AI016 – RIGHT ANGLE TEE BRACKET",
    "slug": "ai016-right-angle-tee-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI016.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Right Angle",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-016",
        "Right Hand",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai016-right-angle-tee-bracket/"
  },
  {
    "id": 1179,
    "name": "AI014 – RIGHT ANGLE BRACKET – 4 HOLE",
    "slug": "ai014-right-angle-bracket-4-hole",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI014.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-014",
        "56×137",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai014-right-angle-bracket-4-hole/"
  },
  {
    "id": 1178,
    "name": "AI012 – RIGHT ANGLE BRACKET – 3 HOLE",
    "slug": "ai012-right-angle-bracket-3-hole",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI012.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-012",
        "57x90x40",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai012-right-angle-bracket-3-hole/"
  },
  {
    "id": 1177,
    "name": "AI011 – RIGHT ANGLE BRACKET – 3 HOLE",
    "slug": "ai011-right-angle-bracket-3-hole",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI011.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-011",
        "42x102x40",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai011-right-angle-bracket-3-hole/"
  },
  {
    "id": 1175,
    "name": "AI009 – RIGHT ANGLE BRACKET – 2 HOLE",
    "slug": "ai009-right-angle-bracket-2-hole",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI009.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-009",
        "41x57x40",
        "HDG",
        "50",
        "6250"
      ]
    ],
    "permalink": "https://augustindustry.com/product/ai009-right-angle-bracket-2-hole/"
  },
  {
    "id": 1147,
    "name": "AI013 – RIGHT ANGLE BRACKET – 4 HOLE",
    "slug": "right-angle-bracket-4-hole",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI013.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-013",
        "89×104",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/right-angle-bracket-4-hole/"
  },
  {
    "id": 1146,
    "name": "AI015 – RIGHT ANGLE TEE BRACKET",
    "slug": "right-angle-tee-bracket",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI015.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Right Angle",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-015",
        "Left Hand",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/right-angle-tee-bracket/"
  },
  {
    "id": 1145,
    "name": "AI010 – RIGHT ANGLE BRACKET – 3 HOLE",
    "slug": "right-angle-bracket-3-hole",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI010.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-010",
        "47x96x40",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/right-angle-bracket-3-hole/"
  },
  {
    "id": 1143,
    "name": "AI008 – RIGHT ANGLE BRACKET – 2 HOLE",
    "slug": "right-angle-bracket-2-hole",
    "categories": [
      "Angle Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "angle-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI008.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-008",
        "50x47x40",
        "HDG",
        "50",
        "6250"
      ]
    ],
    "permalink": "https://augustindustry.com/product/right-angle-bracket-2-hole/"
  },
  {
    "id": 1142,
    "name": "AI055 – FLAT GUSSET",
    "slug": "flat-gusset",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI055.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-055",
        "136×90",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/flat-gusset/"
  },
  {
    "id": 1139,
    "name": "AI007 – FLAT PLATE TEE 4 HOLE BRACKET",
    "slug": "flat-plate-tee-4-hole-bracket",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI007.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-007",
        "138×90",
        "HDG",
        "25",
        "3125"
      ]
    ],
    "permalink": "https://augustindustry.com/product/flat-plate-tee-4-hole-bracket/"
  },
  {
    "id": 1138,
    "name": "AI006 – FLAT PLATE L 3 HOLE BRACKET",
    "slug": "flat-plate-l-3-hole-bracket",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI006.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-006",
        "90×90",
        "HDG",
        "25",
        "4000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/flat-plate-l-3-hole-bracket/"
  },
  {
    "id": 1140,
    "name": "AI054 – FLAT CROSS",
    "slug": "flat-cross",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI054.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-054",
        "120×120",
        "HDG",
        "25",
        "2350"
      ]
    ],
    "permalink": "https://augustindustry.com/product/flat-cross/"
  },
  {
    "id": 1112,
    "name": "AI005 – 5 HOLE FLAT PLATE BRACKET",
    "slug": "5-hole-flat-plate-bracket",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI005.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-005",
        "200mm",
        "HDG",
        "25",
        "2500"
      ]
    ],
    "permalink": "https://augustindustry.com/product/5-hole-flat-plate-bracket/"
  },
  {
    "id": 1110,
    "name": "AI004 – 4 HOLE FLAT PLATE BRACKET",
    "slug": "4-hole-flat-plate-bracket",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI004.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-004",
        "160mm",
        "HDG",
        "50",
        "5000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/4-hole-flat-plate-bracket/"
  },
  {
    "id": 1035,
    "name": "AI003 – 3 HOLE FLAT PLATE BRACKET",
    "slug": "3-hole-flat-plate-bracket",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI003.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-003",
        "120mm",
        "HDG",
        "50",
        "5000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/3-hole-flat-plate-bracket/"
  },
  {
    "id": 1034,
    "name": "AI002 – 2 HOLE FLAT PLATE BRACKET",
    "slug": "2-hole-flat-plate-bracket",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/AI002.png",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-002",
        "80mm",
        "HDG",
        "50",
        "8000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/2-hole-flat-plate-bracket/"
  },
  {
    "id": 1033,
    "name": "AI001 – 1 HOLE FLAT PLATE BRACKET",
    "slug": "1-hole-flat-plate-bracket",
    "categories": [
      "Flat Brackets",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "flat-brackets",
      "strut-fittings"
    ],
    "image": "/images/products/001.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI-001",
        "M6-M12",
        "BZP, HDG & SS316",
        "100",
        "20000"
      ]
    ],
    "permalink": "https://augustindustry.com/product/1-hole-flat-plate-bracket/"
  },
  {
    "id": 932,
    "name": "BACK TO BACK CANTILEVER ARMS",
    "slug": "back-to-back-cantilever-arms",
    "categories": [
      "Cantilever Arms",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "cantilever-arms",
      "strut-fittings"
    ],
    "image": "/images/products/back-to-back-cantilever-arm-two-hole-150-mm-hdg-1.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Finish",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI063BB150mm",
        "HDG",
        "300"
      ],
      [
        "AI063BB300mm",
        "HDG",
        "260"
      ],
      [
        "AI063BB450mm",
        "HDG",
        "225"
      ],
      [
        "AI063BB600mm",
        "HDG",
        "180"
      ],
      [
        "AI063BB750mm",
        "HDG",
        "200"
      ],
      [
        "AI063BB900mm",
        "HDG",
        "80"
      ],
      [
        "AI063BB1000mm",
        "HDG",
        "TBC"
      ]
    ],
    "permalink": "https://augustindustry.com/product/back-to-back-cantilever-arms/"
  },
  {
    "id": 930,
    "name": "SLOTTED CANTILEVER ARMS",
    "slug": "slotted-cantilever-arms",
    "categories": [
      "Cantilever Arms",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "cantilever-arms",
      "strut-fittings"
    ],
    "image": "/images/products/slotted-cantilever-arm-two-hole-150-mm-hdg-box-of-one-piece.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Finish",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI063S150mm",
        "HDG",
        "600"
      ],
      [
        "AI063S300mm",
        "HDG",
        "520"
      ],
      [
        "AI063S450mm",
        "HDG",
        "450"
      ],
      [
        "AI063S600mm",
        "HDG",
        "360"
      ],
      [
        "AI063S750mm",
        "HDG",
        "200"
      ],
      [
        "AI063S900mm",
        "HDG",
        "160"
      ],
      [
        "AI063S1000mm",
        "HDG",
        "200"
      ]
    ],
    "permalink": "https://augustindustry.com/product/slotted-cantilever-arms/"
  },
  {
    "id": 927,
    "name": "SOLID CANTILEVER ARMS",
    "slug": "solid-cantilever-arms",
    "categories": [
      "Cantilever Arms",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "cantilever-arms",
      "strut-fittings"
    ],
    "image": "/images/products/cantilever-arm-two-hole-150-mm-hdg-box-of-one-piece.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Finish",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "AI063150mm",
        "HDG",
        "600"
      ],
      [
        "AI063300mm",
        "HDG",
        "520"
      ],
      [
        "AI063450mm",
        "HDG",
        "450"
      ],
      [
        "AI063600mm",
        "HDG",
        "360"
      ],
      [
        "AI063750mm",
        "HDG",
        "200"
      ],
      [
        "AI063900mm",
        "HDG",
        "160"
      ],
      [
        "AI0631000mm",
        "HDG",
        "200"
      ]
    ],
    "permalink": "https://augustindustry.com/product/solid-cantilever-arms/"
  },
  {
    "id": 668,
    "name": "Quick Channel Nut With Plastic",
    "slug": "quick-channel-nut-with-plastic",
    "categories": [
      "Channel Nuts",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-nuts",
      "strut-fittings"
    ],
    "image": "/images/products/quick-channel-nut.jpg",
    "description": "",
    "specHeaders": [
      "Part No",
      "Size",
      "Finish",
      "Box Qty",
      "Pallet Qty"
    ],
    "specRows": [
      [
        "QSN-8",
        "M8",
        "BZP",
        "TBA",
        "TBA"
      ],
      [
        "QSN-10",
        "M10",
        "BZP",
        "TBA",
        "TBA"
      ]
    ],
    "permalink": "https://augustindustry.com/product/quick-channel-nut-with-plastic/"
  },
  {
    "id": 665,
    "name": "Channel Nut – With Long Spring",
    "slug": "channel-nut-with-long-spring",
    "categories": [
      "Channel Nuts",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-nuts",
      "strut-fittings"
    ],
    "image": "/images/products/channel-nuts-long-spring-1-1.jpg",
    "description": "Channel nuts are also often known as spring nuts, strut nuts, zebs or zebedees . They are manufactured to the highest quality and are available in a range of from M6 to M12. Don’t forget to order your setscrews or threaded rod to use with these channel nuts!",
    "specHeaders": [],
    "specRows": [],
    "permalink": "https://augustindustry.com/product/channel-nut-with-long-spring/"
  },
  {
    "id": 662,
    "name": "Channel Nut – With Short Spring",
    "slug": "channel-nut-with-short-spring",
    "categories": [
      "Channel Nuts",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-nuts",
      "strut-fittings"
    ],
    "image": "/images/products/channel-nuts-short-spring-1.jpg",
    "description": "Short Spring Nuts are manufactured with a spring and serrated grooves that grip the lip of the strut channel. This provides a secure mounting point for screws or bolts. Short spring nuts are intended to be used in shallow channel.",
    "specHeaders": [],
    "specRows": [],
    "permalink": "https://augustindustry.com/product/channel-nut-with-short-spring/"
  },
  {
    "id": 657,
    "name": "Channel-Nut Without Spring",
    "slug": "channel-nut-without-spring",
    "categories": [
      "Channel Nuts",
      "Strut Fittings"
    ],
    "categorySlugs": [
      "channel-nuts",
      "strut-fittings"
    ],
    "image": "/images/products/channel-nut-without-spring.jpg",
    "description": "A channel nut without a spring is a type of fastener used in the construction industry to attach threaded rod or other hardware to channel strut. It is also known as a plain channel nut. Unlike a channel nut with a spring, which has a built-in spring that provides constant pressure and grip, a plain channel nut does not have a spring and relies on the friction between the nut and the channel strut to stay in place.",
    "specHeaders": [],
    "specRows": [],
    "permalink": "https://augustindustry.com/product/channel-nut-without-spring/"
  }
];
