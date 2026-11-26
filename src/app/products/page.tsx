"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, SlidersHorizontal, X, PackageCheck } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import ProductCard from "@/components/ProductCard";

function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "all";
  const initialQuery = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedFinish, setSelectedFinish] = useState("ALL");

  // Sync if URL param changes via Navbar
  React.useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "all");
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    const params = new URLSearchParams();
    if (slug !== "all") params.set("category", slug);
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    router.replace(`/products${params.toString() ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
  };

  const parentCategories = useMemo(
    () => CATEGORIES.filter((c) => c.parent === 0),
    []
  );

  const childCategoriesByParent = useMemo(() => {
    const map: Record<number, typeof CATEGORIES> = {};
    for (const c of CATEGORIES) {
      if (c.parent !== 0) {
        if (!map[c.parent]) map[c.parent] = [];
        map[c.parent].push(c);
      }
    }
    return map;
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== "all") {
        if (!p.categorySlugs.includes(selectedCategory)) {
          return false;
        }
      }

      // Finish filter
      if (selectedFinish !== "ALL") {
        const specText = JSON.stringify(p.specRows).toUpperCase() + " " + p.description.toUpperCase() + " " + p.name.toUpperCase();
        if (!specText.includes(selectedFinish)) {
          return false;
        }
      }

      // Search query (name, description, or Part No)
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const inName = p.name.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inSpecs = p.specRows.some((row) =>
          row.some((cell) => cell.toLowerCase().includes(q))
        );
        if (!inName && !inDesc && !inSpecs) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery, selectedFinish]);

  const activeCategoryName =
    selectedCategory === "all"
      ? "All Products"
      : CATEGORIES.find((c) => c.slug === selectedCategory)?.name ||
        selectedCategory;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                ISO 9001:2015 Certified Manufacturing
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
                {activeCategoryName}
              </h1>
              <p className="text-sm text-slate-400 mt-2">
                Showing{" "}
                <span className="text-white font-bold">
                  {filteredProducts.length}
                </span>{" "}
                of {PRODUCTS.length} precision-engineered industrial products
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-96 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Part No (AI-007) or product..."
                className="w-full pl-10 pr-9 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Finish Filter */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <SlidersHorizontal className="w-4 h-4 text-amber-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  Filter by Finish
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["ALL", "HDG", "BZP", "SS316"].map((fin) => (
                  <button
                    key={fin}
                    type="button"
                    onClick={() => setSelectedFinish(fin)}
                    className={`px-3 py-2 rounded-lg text-xs font-bold font-mono transition-colors border ${
                      selectedFinish === fin
                        ? "bg-slate-900 text-amber-400 border-slate-900"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {fin === "ALL" ? "All Finishes" : fin}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Tree */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-3">
                Product Categories
              </h3>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => handleCategoryChange("all")}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    selectedCategory === "all"
                      ? "bg-amber-500 text-slate-950"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>All Products</span>
                  <span>{PRODUCTS.length}</span>
                </button>

                {parentCategories.map((parent) => {
                  const children = childCategoriesByParent[parent.id] || [];
                  return (
                    <div key={parent.id} className="pt-1">
                      <button
                        type="button"
                        onClick={() => handleCategoryChange(parent.slug)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                          selectedCategory === parent.slug
                            ? "bg-amber-500 text-slate-950"
                            : "text-slate-800 hover:bg-slate-100"
                        }`}
                      >
                        <span>{parent.name}</span>
                        <span className="text-[11px] opacity-75">
                          {parent.count}
                        </span>
                      </button>

                      {children.length > 0 && (
                        <div className="ml-3 pl-2.5 mt-1 border-l border-slate-200 space-y-1">
                          {children.map((child) => (
                            <button
                              key={child.id}
                              type="button"
                              onClick={() => handleCategoryChange(child.slug)}
                              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                                selectedCategory === child.slug
                                  ? "bg-amber-100 text-amber-900 font-bold"
                                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                              }`}
                            >
                              <span className="truncate">{child.name}</span>
                              <span className="text-[10px] opacity-70 ml-2">
                                {child.count}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <PackageCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900">
                  No matching products found
                </h3>
                <p className="text-sm text-slate-500 mt-1 mb-5">
                  Try clearing your search query or switching to &ldquo;All
                  Products&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedFinish("ALL");
                    handleCategoryChange("all");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600 text-sm font-semibold">
          Loading August Industries Catalog...
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
