"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

/* --------------------------------------------------------
   Theme Context — provides light / dark toggle across the app
   -------------------------------------------------------- */

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    /* Persist and apply theme on mount */
    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "dark" || stored === "light") {
            setTheme(stored);
            document.documentElement.classList.toggle("dark", stored === "dark");
        }
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => {
            const next: Theme = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme", next);
            document.documentElement.classList.toggle("dark", next === "dark");
            return next;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
