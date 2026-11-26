"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "@/data/catalog";

export interface QuoteItem {
  product: Product;
  quantity: number;
  selectedPartNo?: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  addToQuote: (product: Product, partNo?: string) => void;
  removeFromQuote: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearQuote: () => void;
  totalItems: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("august_quote_items");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("august_quote_items", JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items]);

  const addToQuote = (product: Product, partNo?: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? {
                ...i,
                quantity: i.quantity + 1,
                selectedPartNo: partNo || i.selectedPartNo,
              }
            : i
        );
      }
      return [...prev, { product, quantity: 1, selectedPartNo: partNo }];
    });
    setDrawerOpen(true);
  };

  const removeFromQuote = (productId: number) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromQuote(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearQuote = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{
        items,
        isDrawerOpen,
        setDrawerOpen,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        clearQuote,
        totalItems,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return ctx;
}
