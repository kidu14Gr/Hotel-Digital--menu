"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import type { MenuItem } from "@/data/menu";

/* --------------------------------------------------------
   Menu Card — displays a single menu item with image,
   name, description, price, and optional "Out of Stock" badge.
   -------------------------------------------------------- */

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { language } = useLanguage();

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
        item.outOfStock ? "opacity-75" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name[language]}
          fill
          sizes="(max-width: 640px) 50vw, 250px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Out of Stock badge */}
        {item.outOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
            <span className="rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground">
              {language === "en" ? "Out of Stock" : "አልቋል"}
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1.5 p-3.5">
        <h3 className="text-sm font-semibold leading-snug text-card-foreground">
          {item.name[language]}
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {item.description[language]}
        </p>
        <p className="mt-1 text-base font-bold text-primary">
          {item.price} <span className="text-xs font-medium">ETB</span>
        </p>
      </div>
    </article>
  );
}
