"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

/* --------------------------------------------------------
   Hero Section — full-width banner with welcome text
   above the menu cards
   -------------------------------------------------------- */

const heroText = {
    welcome: {
        en: "Welcome to Enat Kitchen",
        am: "እንኳን ደህና መጡ — እናት ኪችን",
    },
    tagline: {
        en: "A taste of home, crafted with love",
        am: "የቤት ሙቀት፣ በፍቅር የተዘጋጀ",
    },
    sub: {
        en: "Explore our menu and enjoy an authentic Ethiopian dining experience.",
        am: "ምናሌያችንን ያስሱ እና ዋና የኢትዮጵያ ምግብ ቤት ተሞክሮ ይደሰቱ።",
    },
};

export default function HeroSection() {
    const { language } = useLanguage();

    return (
        <div className="relative w-full overflow-hidden">
            {/* Hero image — 16:9-ish on mobile, fixed height */}
            <div className="relative h-52 w-full sm:h-64">
                <Image
                    src="/hero.jpg"
                    alt="Enat Kitchen hero"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover object-center"
                />
                {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Text block sitting over the bottom of the image */}
            <div className="absolute inset-x-0 bottom-0 px-4 pb-5">
                <h2
                    className={`text-xl font-bold leading-snug text-white sm:text-2xl ${language === "am" ? "font-[var(--font-ethiopic)]" : "font-[var(--font-playfair)]"
                        }`}
                >
                    {heroText.welcome[language]}
                </h2>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-amber-300">
                    {language === "en" ? "Hotel & Restaurant" : "ሆቴልና ሬስቶራንት"}
                </p>
                <p
                    className={`mt-1 text-sm text-white/80 ${language === "am" ? "font-[var(--font-ethiopic)]" : ""
                        }`}
                >
                    {heroText.tagline[language]}
                </p>
                <p
                    className={`mt-1 text-xs leading-relaxed text-white/60 ${language === "am" ? "font-[var(--font-ethiopic)]" : ""
                        }`}
                >
                    {heroText.sub[language]}
                </p>
            </div>
        </div>
    );
}
