"use client";

import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

/* --------------------------------------------------------
   Sticky Header — hotel name + language toggle
   -------------------------------------------------------- */

export default function Header() {
  const { language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
        {/* Hotel branding */}
        <div className="flex items-center gap-2.5">
          {/* Decorative icon */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary-foreground"
            >
              <path d="M3 11l19-9-9 19-2-8-8-2z" />
            </svg>
          </div>
          <div>
            <h1 className="font-[var(--font-playfair)] text-lg font-bold leading-tight tracking-tight text-foreground">
              {language === "en" ? "Addis Grand" : "አዲስ ግራንድ"}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {language === "en" ? "Hotel & Restaurant" : "ሆቴልና ሬስቶራንት"}
            </p>
          </div>
        </div>

        {/* Language toggle */}
        <LanguageToggle />
      </div>
    </header>
  );
}
