"use client";

import { forwardRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Category, MenuItem } from "@/data/menu";
import MenuCard from "./MenuCard";

/* --------------------------------------------------------
   Menu Section — a single category block with title + grid
   -------------------------------------------------------- */

interface MenuSectionProps {
  category: Category;
  items: MenuItem[];
}

const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(
  ({ category, items }, ref) => {
    const { language } = useLanguage();

    return (
      <section ref={ref} id={`section-${category.id}`} className="scroll-mt-28">
        {/* Section heading */}
        <div className="mb-4 flex items-center gap-3">
          <h2 className="font-[var(--font-playfair)] text-xl font-bold text-foreground">
            {category.label[language]}
          </h2>
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">
            {items.length} {language === "en" ? "items" : "ዓይነቶች"}
          </span>
        </div>

        {/* Item grid — 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    );
  }
);

MenuSection.displayName = "MenuSection";

export default MenuSection;
