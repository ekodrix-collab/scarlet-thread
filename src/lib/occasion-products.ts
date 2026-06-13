export type OccasionProduct = {
  id: number;
  name: string;
  type: string;
  category: "Gifts For Him" | "Gifts For Her" | "Kids & Babies" | "Special Occasions";
  price: number;
  rating: number;
  reviews: number;
  image: string;
  occasions: string[];
  bestSeller?: boolean;
  tag?: string;
};

export const allOccasionProducts: OccasionProduct[] = [
  // Hoodies
  {
    id: 1,
    name: "Embroidered Hoodie",
    type: "Hoodies",
    category: "Gifts For Him",
    price: 1499,
    rating: 4.9,
    reviews: 102,
    image: "/images/forhimpage/scarlet-hoodie.png",
    occasions: ["birthday", "anniversary", "wedding", "eid", "ramadan", "corporate"],
    bestSeller: true,
  },
  {
    id: 2,
    name: "King Embroidered Hoodie",
    type: "Hoodies",
    category: "Gifts For Him",
    price: 1599,
    rating: 4.8,
    reviews: 78,
    image: "/images/forhimpage/scarlet-kinghoodie.png",
    occasions: ["birthday", "anniversary"],
    bestSeller: false,
    tag: "New",
  },
  {
    id: 3,
    name: "Papa Embroidered Hoodie",
    type: "Hoodies",
    category: "Gifts For Him",
    price: 1499,
    rating: 4.9,
    reviews: 91,
    image: "/images/forhimpage/scarlet-papahoodie.png",
    occasions: ["birthday", "wedding"],
    bestSeller: true,
  },
  {
    id: 4,
    name: "Hubby Embroidered Hoodie",
    type: "Hoodies",
    category: "Gifts For Him",
    price: 1499,
    rating: 4.7,
    reviews: 55,
    image: "/images/forhimpage/scarlet-hubbyhoodie.png",
    occasions: ["anniversary", "wedding"],
    bestSeller: false,
  },
  {
    id: 5,
    name: "Pink Embroidered Hoodie",
    type: "Hoodies",
    category: "Gifts For Her",
    price: 1499,
    rating: 4.9,
    reviews: 87,
    image: "/images/forherproduct/scarlet-pinkhoodie.png",
    occasions: ["birthday", "anniversary", "eid", "wedding"],
    bestSeller: true,
  },

  // Mugs
  {
    id: 6,
    name: "Personalized Mug",
    type: "Mugs",
    category: "Gifts For Him",
    price: 449,
    rating: 4.8,
    reviews: 120,
    image: "/images/forhimpage/scarlet-mug.png",
    occasions: ["birthday", "anniversary", "corporate", "eid", "ramadan", "new-baby", "under-200"],
    bestSeller: true,
  },

  // Towels
  {
    id: 7,
    name: "Embroidered Towel",
    type: "Towels",
    category: "Gifts For Him",
    price: 899,
    rating: 4.8,
    reviews: 86,
    image: "/images/forhimpage/scarlet-towel.png",
    occasions: ["birthday", "anniversary", "new-baby", "wedding", "eid"],
    bestSeller: true,
  },

  // Pouches
  {
    id: 8,
    name: "Travel Pouch",
    type: "Pouches",
    category: "Gifts For Him",
    price: 699,
    rating: 4.9,
    reviews: 44,
    image: "/images/forhimpage/scarlet-pouch.png",
    occasions: ["birthday", "anniversary", "corporate", "under-200"],
    bestSeller: true,
  },
  {
    id: 9,
    name: "Bride Cosmetic Pouch",
    type: "Pouches",
    category: "Gifts For Her",
    price: 699,
    rating: 4.9,
    reviews: 60,
    image: "/images/scarlet-lovedgift3.png",
    occasions: ["birthday", "anniversary", "wedding", "under-200"],
    bestSeller: false,
  },
  {
    id: 10,
    name: "Papa Embroidered Pouch",
    type: "Pouches",
    category: "Gifts For Him",
    price: 749,
    rating: 4.7,
    reviews: 38,
    image: "/images/forhimpage/scarlet-papapouch.png",
    occasions: ["birthday"],
    bestSeller: false,
  },

  // Caps
  {
    id: 11,
    name: "Embroidered Cap",
    type: "Caps",
    category: "Gifts For Him",
    price: 499,
    rating: 4.7,
    reviews: 30,
    image: "/images/forhimpage/scarlet-cap.png",
    occasions: ["birthday", "corporate", "under-200"],
    bestSeller: false,
    tag: "New",
  },

  // Tote Bags
  {
    id: 12,
    name: "Personalized Tote Bag",
    type: "Tote Bags",
    category: "Gifts For Her",
    price: 599,
    rating: 4.8,
    reviews: 65,
    image: "/images/forherproduct/scarlet-totebag.png",
    occasions: ["birthday", "anniversary", "corporate", "eid", "under-200"],
    bestSeller: true,
  },
  {
    id: 13,
    name: "Embroidered Handbag",
    type: "Tote Bags",
    category: "Gifts For Her",
    price: 799,
    rating: 4.6,
    reviews: 28,
    image: "/images/forherproduct/scarlet-bag.png",
    occasions: ["birthday", "anniversary", "wedding"],
    bestSeller: false,
  },

  // Gift Boxes
  {
    id: 14,
    name: "Occasion Gift Box",
    type: "Gift Boxes",
    category: "Special Occasions",
    price: 1299,
    rating: 4.9,
    reviews: 74,
    image: "/images/occassion/scarlet-occasionbox.png",
    occasions: ["birthday", "anniversary", "eid", "ramadan", "wedding", "new-baby", "corporate"],
    bestSeller: true,
  },
  {
    id: 15,
    name: "Premium Gift Box",
    type: "Gift Boxes",
    category: "Special Occasions",
    price: 1499,
    rating: 4.9,
    reviews: 52,
    image: "/images/occassion/scarlet-occasionbox2.png",
    occasions: ["birthday", "anniversary", "wedding", "corporate"],
    bestSeller: false,
    tag: "Premium",
  },
  {
    id: 16,
    name: "Festive Gift Box",
    type: "Gift Boxes",
    category: "Special Occasions",
    price: 999,
    rating: 4.8,
    reviews: 41,
    image: "/images/occassion/scarlet-occasionbox3.png",
    occasions: ["eid", "ramadan", "birthday"],
    bestSeller: false,
  },
  {
    id: 17,
    name: "Special Occasion Box",
    type: "Gift Boxes",
    category: "Special Occasions",
    price: 1199,
    rating: 4.7,
    reviews: 33,
    image: "/images/occassion/scarlet-occasionbox4.png",
    occasions: ["wedding", "anniversary", "new-baby"],
    bestSeller: false,
  },

  // Tumblers
  {
    id: 18,
    name: "Personalized Tumbler",
    type: "Tumblers",
    category: "Gifts For Her",
    price: 849,
    rating: 4.8,
    reviews: 58,
    image: "/images/forherproduct/scarlet-trumbler.png",
    occasions: ["birthday", "corporate", "anniversary", "under-200"],
    bestSeller: true,
  },

  // Notebooks
  {
    id: 19,
    name: "Personalized Notebook",
    type: "Notebooks",
    category: "Gifts For Him",
    price: 449,
    rating: 4.7,
    reviews: 32,
    image: "/images/scarlet-lovedgift4.png",
    occasions: ["birthday", "corporate", "under-200"],
    bestSeller: false,
  },

  // Kids & Babies
  {
    id: 21,
    name: "Hooded Towel",
    type: "Towels",
    category: "Kids & Babies",
    price: 899,
    rating: 4.9,
    reviews: 128,
    image: "/images/scarlet-babie1.png",
    occasions: ["birthday", "new-baby", "wedding"],
    bestSeller: true,
  },
  {
    id: 22,
    name: "Embroidered Onesie",
    type: "Onesies",
    category: "Kids & Babies",
    price: 699,
    rating: 4.8,
    reviews: 95,
    image: "/images/scarlet-babie2.png",
    occasions: ["birthday", "new-baby", "eid", "wedding"],
    bestSeller: false,
  },
  {
    id: 23,
    name: "Personalized Teddy",
    type: "Toys",
    category: "Kids & Babies",
    price: 999,
    rating: 4.9,
    reviews: 112,
    image: "/images/scarlet-babie3.png",
    occasions: ["birthday", "new-baby", "wedding"],
    bestSeller: true,
  },
  {
    id: 24,
    name: "Kids Backpack",
    type: "Bags",
    category: "Kids & Babies",
    price: 1299,
    rating: 4.8,
    reviews: 74,
    image: "/images/scarlet-babie4.png",
    occasions: ["birthday", "corporate", "new-baby"],
    bestSeller: false,
  },
  {
    id: 25,
    name: "Baby Blanket",
    type: "Blankets",
    category: "Kids & Babies",
    price: 1099,
    rating: 4.9,
    reviews: 86,
    image: "/images/scarlet-babie5.png",
    occasions: ["birthday", "new-baby", "anniversary", "wedding"],
    bestSeller: false,
  },
];

export const occasionMeta: Record<
  string,
  { label: string; description: string; icon: string; color: string }
> = {
  birthday: {
    label: "Birthday Gifts",
    description:
      "Make their birthday unforgettable with a gift that's crafted just for them.",
    icon: "/images/gift-occasion/birthday-gift.png",
    color: "from-violet-50 to-pink-50",
  },
  anniversary: {
    label: "Anniversary Gifts",
    description:
      "Celebrate your love story with personalised keepsakes they'll cherish forever.",
    icon: "/images/gift-occasion/anniversary-gift.png",
    color: "from-rose-50 to-pink-50",
  },
  "new-baby": {
    label: "New Baby Gifts",
    description:
      "Welcome the newest member with a keepsake gift made with love.",
    icon: "/images/gift-occasion/baby-gift.png",
    color: "from-sky-50 to-violet-50",
  },
  eid: {
    label: "Eid Gifts",
    description:
      "Spread the joy of Eid with a thoughtful personalised present.",
    icon: "/images/gift-occasion/eid-gift.png",
    color: "from-emerald-50 to-teal-50",
  },
  wedding: {
    label: "Wedding Gifts",
    description:
      "Gift the couple a memory they'll treasure for a lifetime.",
    icon: "/images/gift-occasion/wedding-gift.png",
    color: "from-amber-50 to-rose-50",
  },
  ramadan: {
    label: "Ramadan Gifts",
    description:
      "Celebrate the holy month with a gift that carries meaning and warmth.",
    icon: "/images/gift-occasion/ramdan-gift.png",
    color: "from-emerald-50 to-yellow-50",
  },
  corporate: {
    label: "Corporate Gifts",
    description:
      "Impress clients and colleagues with premium, branded personalised gifts.",
    icon: "/images/gift-occasion/corporate-gift.png",
    color: "from-slate-50 to-violet-50",
  },
  "under-200": {
    label: "Gifts Under ₹200",
    description:
      "Thoughtful, personalised gifts that won't break the bank.",
    icon: "/images/gift-occasion/gift-under-aed-200.png",
    color: "from-orange-50 to-yellow-50",
  },
};

export function getProductsByOccasion(slug: string): OccasionProduct[] {
  if (slug === "under-200") {
    return allOccasionProducts.filter(
      (p) => p.occasions.includes(slug) && p.price <= 200
    );
  }
  return allOccasionProducts.filter((p) => p.occasions.includes(slug));
}

export function getTypesForOccasion(slug: string): string[] {
  const products = getProductsByOccasion(slug);
  const types = Array.from(new Set(products.map((p) => p.type)));
  return types;
}

export function getCategoriesForOccasion(slug: string): string[] {
  const products = getProductsByOccasion(slug);
  const categories = Array.from(new Set(products.map((p) => p.category)));
  return categories;
}
