"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import MenuSection from "@/components/MenuSection";
import { categories, menuItems } from "@/data/menu";
import { useLanguage } from "@/context/LanguageContext";

/* ==========================================================
   Home Page — assembles the full digital menu experience
   ========================================================== */

export default function HomePage() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].id
  );

  /* Refs for each section so IntersectionObserver can track them */
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* --- Intersection Observer: highlight tab of visible section --- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("section-", "");
            setActiveCategory(id);
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0.1 }
    );

    const refs = sectionRefs.current;
    for (const key of Object.keys(refs)) {
      const el = refs[key];
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  /* --- Click handler for category tabs --- */
  const handleCategoryClick = useCallback((id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  /* --- Group menu items by category --- */
  const itemsByCategory = categories.map((cat) => ({
    category: cat,
    items: menuItems.filter((item) => item.category === cat.id),
  }));

  return (
    <div className="mx-auto min-h-screen max-w-lg bg-background">
      {/* Sticky header */}
      <Header />

      {/* Sticky category tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      {/* Main menu content */}
      <main className="flex flex-col gap-10 px-4 py-6 pb-16">
        {itemsByCategory.map(({ category, items }) => (
          <MenuSection
            key={category.id}
            ref={(el) => {
              sectionRefs.current[category.id] = el;
            }}
            category={category}
            items={items}
          />
        ))}

        {/* Footer */}
        <footer className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {language === "en"
              ? "Prices are in Ethiopian Birr (ETB) and inclusive of all taxes."
              : "ዋጋዎች በኢትዮጵያ ብር (ETB) ሲሆኑ ሁሉንም ታክስ ያካትታሉ።"}
          </p>
          <p className="mt-2 font-[var(--font-playfair)] text-sm font-semibold text-foreground">
            {language === "en" ? "Addis Grand Hotel" : "አዲስ ግራንድ ሆቴል"}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
            {language === "en"
              ? "Taste the tradition"
              : "ባህሉን ይቅመሱ"}
          </p>
        </footer>
      </main>
    </div>
  );
}
