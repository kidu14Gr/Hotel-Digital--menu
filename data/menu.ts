/* ==========================================================
   Menu Data — bilingual (English / Amharic)
   Each item carries both translations so the UI can switch
   languages without re-fetching data.
   ========================================================== */

export type Language = "en" | "am";

export interface MenuItem {
  id: number;
  category: "food" | "drinks" | "fruits" | "coffee";
  name: { en: string; am: string };
  description: { en: string; am: string };
  price: number;
  image: string;
  outOfStock?: boolean;
}

export interface Category {
  id: "food" | "drinks" | "fruits" | "coffee";
  label: { en: string; am: string };
}

/* ---------- Categories ---------- */
export const categories: Category[] = [
  { id: "food", label: { en: "Food", am: "ምግብ" } },
  { id: "drinks", label: { en: "Drinks", am: "መጠጦች" } },
  { id: "fruits", label: { en: "Fruits", am: "ፍራፍሬ" } },
  { id: "coffee", label: { en: "Coffee", am: "ቡና" } },
];

/* ---------- Menu Items ---------- */
export const menuItems: MenuItem[] = [
  // ---- Food ----
  {
    id: 1,
    category: "food",
    name: { en: "Grilled Chicken", am: "የተጠበሰ ዶሮ" },
    description: {
      en: "Served with rice and fresh salad",
      am: "ከሩዝና ሳላጣ ጋር",
    },
    price: 350,
    image: "/images/chicken.jpg",
  },
  {
    id: 2,
    category: "food",
    name: { en: "Doro Wot", am: "ዶሮ ወጥ" },
    description: {
      en: "Traditional spicy chicken stew with injera",
      am: "ባህላዊ የዶሮ ወጥ ከእንጀራ ጋር",
    },
    price: 420,
    image: "/images/doro-wot.jpg",
  },
  {
    id: 3,
    category: "food",
    name: { en: "Kitfo", am: "ክትፎ" },
    description: {
      en: "Minced raw beef with spiced butter and cheese",
      am: "ከቅቤና አይብ ጋር",
    },
    price: 380,
    image: "/images/kitfo.jpg",
  },
  {
    id: 4,
    category: "food",
    name: { en: "Tibs", am: "ጥብስ" },
    description: {
      en: "Sauteed beef tips with vegetables",
      am: "ከአትክልት ጋር የተጠበሰ ስጋ",
    },
    price: 400,
    image: "/images/tibs.jpg",
  },
  {
    id: 5,
    category: "food",
    name: { en: "Shiro", am: "ሽሮ" },
    description: {
      en: "Ground chickpea stew, perfect for fasting",
      am: "የሽሮ ወጥ፣ ለፆም ተስማሚ",
    },
    price: 180,
    image: "/images/shiro.jpg",
  },
  {
    id: 6,
    category: "food",
    name: { en: "Lamb Chops", am: "የበግ ጥብስ" },
    description: {
      en: "Grilled lamb chops with herb butter",
      am: "ከቅቤና ቅጠላ ቅጠል ጋር",
    },
    price: 520,
    image: "/images/lamb.jpg",
    outOfStock: true,
  },

  // ---- Drinks ----
  {
    id: 7,
    category: "drinks",
    name: { en: "Fresh Mango Juice", am: "የማንጎ ጭማቂ" },
    description: {
      en: "Freshly squeezed mango juice",
      am: "ትኩስ የማንጎ ጭማቂ",
    },
    price: 80,
    image: "/images/mango-juice.jpg",
  },
  {
    id: 8,
    category: "drinks",
    name: { en: "Avocado Smoothie", am: "የአቮካዶ ጭማቂ" },
    description: {
      en: "Creamy avocado blended with honey",
      am: "ከማር ጋር የተቀላቀለ",
    },
    price: 100,
    image: "/images/avocado-smoothie.jpg",
  },
  {
    id: 9,
    category: "drinks",
    name: { en: "Tej (Honey Wine)", am: "ጠጅ" },
    description: {
      en: "Traditional Ethiopian honey wine",
      am: "ባህላዊ የኢትዮጵያ ጠጅ",
    },
    price: 150,
    image: "/images/tej.jpg",
  },
  {
    id: 10,
    category: "drinks",
    name: { en: "Sprite", am: "ስፕራይት" },
    description: {
      en: "Chilled lemon-lime soda",
      am: "ቀዝቃዛ ለስላሳ መጠጥ",
    },
    price: 50,
    image: "/images/sprite.jpg",
  },

  // ---- Fruits ----
  {
    id: 11,
    category: "fruits",
    name: { en: "Mixed Fruit Platter", am: "የተቀላቀለ ፍራፍሬ" },
    description: {
      en: "Seasonal selection of fresh fruits",
      am: "ትኩስ ወቅታዊ ፍራፍሬዎች",
    },
    price: 120,
    image: "/images/fruit-platter.jpg",
  },
  {
    id: 12,
    category: "fruits",
    name: { en: "Watermelon Slice", am: "ሀባብ" },
    description: {
      en: "Fresh chilled watermelon",
      am: "ትኩስ ቀዝቃዛ ሀባብ",
    },
    price: 60,
    image: "/images/watermelon.jpg",
  },
  {
    id: 13,
    category: "fruits",
    name: { en: "Papaya Bowl", am: "ፓፓያ" },
    description: {
      en: "Ripe papaya served with lime",
      am: "ከሎሚ ጋር የተቀረበ ፓፓያ",
    },
    price: 70,
    image: "/images/papaya.jpg",
  },

  // ---- Coffee ----
  {
    id: 14,
    category: "coffee",
    name: { en: "Ethiopian Coffee", am: "ቡና" },
    description: {
      en: "Traditional Jebena coffee ceremony",
      am: "ባህላዊ የጀበና ቡና",
    },
    price: 60,
    image: "/images/ethiopian-coffee.jpg",
  },
  {
    id: 15,
    category: "coffee",
    name: { en: "Macchiato", am: "ማኪያቶ" },
    description: {
      en: "Rich espresso with a dash of milk",
      am: "ከወተት ጋር የተቀላቀለ ኤስፕሬሶ",
    },
    price: 70,
    image: "/images/macchiato.jpg",
  },
  {
    id: 16,
    category: "coffee",
    name: { en: "Spris (Layered)", am: "ስፕሪስ" },
    description: {
      en: "Half tea, half coffee — an Ethiopian favourite",
      am: "ግማሽ ሻይ ግማሽ ቡና",
    },
    price: 55,
    image: "/images/spris.jpg",
  },
];
