"use client";

import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

/* --------------------------------------------------------
   Sticky Header — hotel logo + language toggle + theme toggle
   -------------------------------------------------------- */

export default function Header() {
  const { language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-2">
        {/* Hotel branding — logo image */}
        <div className="flex items-center gap-2.5">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="Enat Kitchen Logo"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="font-[var(--font-playfair)] text-lg font-bold leading-tight tracking-tight text-foreground">
              {language === "en" ? "Enat Kitchen" : "እናት ኪችን"}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {language === "en" ? "Hotel & Restaurant" : "ሆቴልና ሬስቶራንት"}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
