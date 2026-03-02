"use client";

import { useRef, useEffect, useCallback } from "react";
import { categories } from "@/data/menu";
import { useLanguage } from "@/context/LanguageContext";

/* --------------------------------------------------------
   Category Tabs — horizontally scrollable, sticky below header.
   Clicking a tab smooth-scrolls to that section.
   -------------------------------------------------------- */

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

export default function CategoryTabs({
  activeCategory,
  onCategoryClick,
}: CategoryTabsProps) {
  const { language } = useLanguage();
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  /* Keep the active tab scrolled into view */
  const scrollActiveIntoView = useCallback(() => {
    if (activeTabRef.current && tabsRef.current) {
      const container = tabsRef.current;
      const tab = activeTabRef.current;
      const scrollLeft =
        tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollActiveIntoView();
  }, [activeCategory, scrollActiveIntoView]);

  return (
    <nav
      className="sticky top-[57px] z-40 border-b border-border bg-card/95 backdrop-blur-md"
      aria-label="Menu categories"
    >
      <div
        ref={tabsRef}
        className="hide-scrollbar mx-auto flex max-w-lg gap-1 overflow-x-auto px-4 py-2"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              ref={isActive ? activeTabRef : null}
              onClick={() => onCategoryClick(cat.id)}
              className={`relative shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {cat.label[language]}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
