"use client";

import { useLanguage } from "@/context/LanguageContext";

/* --------------------------------------------------------
   Language Toggle — switches between English and Amharic
   -------------------------------------------------------- */

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={`Switch language to ${language === "en" ? "Amharic" : "English"}`}
      className="flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:bg-secondary"
    >
      <span
        className={`transition-colors ${language === "en" ? "text-primary font-semibold" : "text-muted-foreground"}`}
      >
        EN
      </span>
      <span className="mx-1.5 text-border">|</span>
      <span
        className={`font-[var(--font-ethiopic)] transition-colors ${language === "am" ? "text-primary font-semibold" : "text-muted-foreground"}`}
      >
        {"አማ"}
      </span>
    </button>
  );
}
