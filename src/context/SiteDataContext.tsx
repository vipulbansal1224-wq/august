"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PRODUCTS, CATEGORIES, type Product, type Category } from "@/data/catalog";
import { COMPANY_INFO, NAV_MEGA_CATEGORIES } from "@/data/company";

export interface NavMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface SiteContentConfig {
  heroTagline: string;
  heroTitlePrefix: string;
  heroTitleHighlight: string;
  heroTitleSuffix: string;
  heroSubtitle: string;
  ctaTitle: string;
  ctaBadge: string;
  aboutShort: string;
  aboutPromise: string;
  aboutHistory: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  tickerItems: string[];
}

export interface MegaCategoryItem {
  title: string;
  slug: string;
  description: string;
  subcategories: { name: string; slug: string }[];
}

interface SiteDataState {
  products: Product[];
  categories: Category[];
  navMenu: NavMenuItem[];
  megaCategories: MegaCategoryItem[];
  content: SiteContentConfig;
}

interface SiteDataContextType extends SiteDataState {
  // Product CRUD
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: number, updates: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  // Content / Headings CRUD
  updateContent: (updates: Partial<SiteContentConfig>) => void;
  // Menu CRUD
  addNavMenuItem: (item: Omit<NavMenuItem, "id">) => void;
  updateNavMenuItem: (id: string, updates: Partial<NavMenuItem>) => void;
  deleteNavMenuItem: (id: string) => void;
  // Mega Category CRUD
  addMegaCategory: (cat: MegaCategoryItem) => void;
  updateMegaCategory: (slug: string, updates: Partial<MegaCategoryItem>) => void;
  deleteMegaCategory: (slug: string) => void;
  // Backup / Reset
  resetToDefaults: () => void;
  importSiteData: (jsonString: string) => boolean;
}

const DEFAULT_NAV_MENU: NavMenuItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about-us" },
  { id: "products", label: "Products", href: "/products" },
  { id: "contact", label: "Contact Us", href: "/contact-us" },
];

const DEFAULT_CONTENT: SiteContentConfig = {
  heroTagline: `${COMPANY_INFO.tagline} • EST. ${COMPANY_INFO.established}`,
  heroTitlePrefix: "The Strut People.",
  heroTitleHighlight: "Precision",
  heroTitleSuffix: "Built Beyond Boundaries.",
  heroSubtitle:
    "Manufacturers & global exporters of 89+ industrial strut fittings, channel nuts, cantilever arms, fasteners & clamps. Engineered in Ludhiana for worldwide MEP, HVAC, solar & construction projects.",
  ctaTitle: "Ready to Source Strut Fittings & Fasteners?",
  ctaBadge: "Direct Manufacturer Pricing",
  aboutShort: COMPANY_INFO.about.short,
  aboutPromise: COMPANY_INFO.about.promise,
  aboutHistory: COMPANY_INFO.about.history,
  phone: COMPANY_INFO.phone,
  whatsappNumber: COMPANY_INFO.whatsappNumber,
  email: COMPANY_INFO.email,
  address: COMPANY_INFO.address,
  tickerItems: [
    "★ ISO 9001:2015 CERTIFIED",
    "EST. 1998 • LUDHIANA, INDIA",
    "89+ PRECISION SKUS",
    "CHANNEL NUTS • CANTILEVER ARMS",
    "BEAM CLAMPS • U-BOLTS • BRACKETS",
    "HDG • BZP • SS316 • PRE-GALV",
    "BUSINESS BEYOND BOUNDARIES",
  ],
};

const DEFAULT_STATE: SiteDataState = {
  products: PRODUCTS,
  categories: CATEGORIES,
  navMenu: DEFAULT_NAV_MENU,
  megaCategories: NAV_MEGA_CATEGORIES,
  content: DEFAULT_CONTENT,
};

const STORAGE_KEY = "august_cms_data_v1";

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export function SiteDataProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SiteDataState>(DEFAULT_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setState({
          products: parsed.products || PRODUCTS,
          categories: parsed.categories || CATEGORIES,
          navMenu: parsed.navMenu || DEFAULT_NAV_MENU,
          megaCategories: parsed.megaCategories || NAV_MEGA_CATEGORIES,
          content: { ...DEFAULT_CONTENT, ...(parsed.content || {}) },
        });
      }
    } catch {
      // ignore parse errors
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage quota errors
    }
  }, [state, hydrated]);

  const addProduct = (product: Omit<Product, "id">) => {
    setState((prev) => {
      const maxId = prev.products.reduce((m, p) => Math.max(m, p.id), 1000);
      return {
        ...prev,
        products: [{ ...product, id: maxId + 1 }, ...prev.products],
      };
    });
  };

  const updateProduct = (id: number, updates: Partial<Product>) => {
    setState((prev) => ({
      ...prev,
      products: prev.products.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    }));
  };

  const deleteProduct = (id: number) => {
    setState((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p.id !== id),
    }));
  };

  const updateContent = (updates: Partial<SiteContentConfig>) => {
    setState((prev) => ({
      ...prev,
      content: { ...prev.content, ...updates },
    }));
  };

  const addNavMenuItem = (item: Omit<NavMenuItem, "id">) => {
    setState((prev) => ({
      ...prev,
      navMenu: [
        ...prev.navMenu,
        { ...item, id: `nav_${Date.now()}` },
      ],
    }));
  };

  const updateNavMenuItem = (id: string, updates: Partial<NavMenuItem>) => {
    setState((prev) => ({
      ...prev,
      navMenu: prev.navMenu.map((m) =>
        m.id === id ? { ...m, ...updates } : m
      ),
    }));
  };

  const deleteNavMenuItem = (id: string) => {
    setState((prev) => ({
      ...prev,
      navMenu: prev.navMenu.filter((m) => m.id !== id),
    }));
  };

  const addMegaCategory = (cat: MegaCategoryItem) => {
    setState((prev) => ({
      ...prev,
      megaCategories: [...prev.megaCategories, cat],
    }));
  };

  const updateMegaCategory = (
    slug: string,
    updates: Partial<MegaCategoryItem>
  ) => {
    setState((prev) => ({
      ...prev,
      megaCategories: prev.megaCategories.map((c) =>
        c.slug === slug ? { ...c, ...updates } : c
      ),
    }));
  };

  const deleteMegaCategory = (slug: string) => {
    setState((prev) => ({
      ...prev,
      megaCategories: prev.megaCategories.filter((c) => c.slug !== slug),
    }));
  };

  const resetToDefaults = () => {
    setState(DEFAULT_STATE);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const importSiteData = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== "object") return false;
      setState({
        products: Array.isArray(parsed.products) ? parsed.products : PRODUCTS,
        categories: Array.isArray(parsed.categories)
          ? parsed.categories
          : CATEGORIES,
        navMenu: Array.isArray(parsed.navMenu)
          ? parsed.navMenu
          : DEFAULT_NAV_MENU,
        megaCategories: Array.isArray(parsed.megaCategories)
          ? parsed.megaCategories
          : NAV_MEGA_CATEGORIES,
        content: { ...DEFAULT_CONTENT, ...(parsed.content || {}) },
      });
      return true;
    } catch {
      return false;
    }
  };

  return (
    <SiteDataContext.Provider
      value={{
        ...state,
        addProduct,
        updateProduct,
        deleteProduct,
        updateContent,
        addNavMenuItem,
        updateNavMenuItem,
        deleteNavMenuItem,
        addMegaCategory,
        updateMegaCategory,
        deleteMegaCategory,
        resetToDefaults,
        importSiteData,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) {
    throw new Error("useSiteData must be used within SiteDataProvider");
  }
  return ctx;
}
