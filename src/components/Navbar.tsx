"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Phone,
  Mail,
  ShieldCheck,
  ChevronDown,
  Search,
  ClipboardList,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO, NAV_MEGA_CATEGORIES } from "@/data/company";
import { useQuote } from "@/context/QuoteContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setDrawerOpen } = useQuote();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchOpen(false);
    setMobileOpen(false);
    router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111113] text-white border-b border-zinc-800 shadow-md">
      {/* Top Utility Strip */}
      <div className="bg-black/60 border-b border-zinc-800/80 text-zinc-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <span className="inline-flex items-center gap-1.5 font-semibold text-red-400">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              {COMPANY_INFO.tagline}
            </span>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span className="hidden md:inline tracking-widest uppercase text-[10px] text-zinc-400 font-mono">
              EST. {COMPANY_INFO.established} • {COMPANY_INFO.motto}
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-red-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-red-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-18 flex items-center justify-between gap-6">
          {/* Official Brand Logo (Full Aspect Ratio on Carbon Background) */}
          <Link href="/" className="flex items-center shrink-0 group">
            <img
              src={COMPANY_INFO.images.logo}
              alt="August Industries - The Strut People"
              className="h-11 sm:h-12 w-auto object-contain rounded-md transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "text-white bg-red-600"
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/80"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/about-us"
                  ? "text-white bg-red-600"
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/80"
              }`}
            >
              About Us
            </Link>

            {/* Products Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <Link
                href="/products"
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-white bg-red-600"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-800/80"
                }`}
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    megaOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {megaOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px] z-50 text-zinc-900">
                  <div className="bg-white rounded-2xl shadow-2xl border border-zinc-200 p-6 grid grid-cols-12 gap-6">
                    <div className="col-span-5 border-r border-zinc-100 pr-4">
                      <div className="flex items-center justify-between mb-3">
                        <Link
                          href="/products?category=strut-fittings"
                          onClick={() => setMegaOpen(false)}
                          className="text-sm font-bold text-zinc-900 hover:text-red-600 flex items-center gap-1"
                        >
                          Strut Fittings
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                      <ul className="grid grid-cols-1 gap-1">
                        {NAV_MEGA_CATEGORIES[0].subcategories.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/products?category=${sub.slug}`}
                              onClick={() => setMegaOpen(false)}
                              className="block px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-7 grid grid-cols-2 gap-5 content-start">
                      {NAV_MEGA_CATEGORIES.slice(1).map((cat) => (
                        <div key={cat.slug}>
                          <Link
                            href={`/products?category=${cat.slug}`}
                            onClick={() => setMegaOpen(false)}
                            className="text-sm font-bold text-zinc-900 hover:text-red-600 flex items-center gap-1 mb-1"
                          >
                            {cat.title}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <p className="text-[11px] text-zinc-500 mb-2 leading-snug">
                            {cat.description}
                          </p>
                          {cat.subcategories.length > 0 && (
                            <ul className="space-y-1">
                              {cat.subcategories.map((sub) => (
                                <li key={sub.slug}>
                                  <Link
                                    href={`/products?category=${sub.slug}`}
                                    onClick={() => setMegaOpen(false)}
                                    className="block px-2 py-1 rounded-md text-xs font-medium text-zinc-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                      <div className="col-span-2 mt-2 pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-xs text-zinc-500">
                          89+ Precision Products • HDG, BZP &amp; SS316
                        </span>
                        <Link
                          href="/products"
                          onClick={() => setMegaOpen(false)}
                          className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                        >
                          View Full Catalog
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === "/contact-us"
                  ? "text-white bg-red-600"
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/80"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Search catalog"
              className="p-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white text-sm font-semibold transition-all"
            >
              <ClipboardList className="w-4 h-4 text-red-400" />
              <span className="hidden sm:inline">Quote List</span>
              {totalItems > 0 && (
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-red-600 text-white text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              href="/contact-us"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold transition-colors shadow-xs"
            >
              Get Quote
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 rounded-xl text-zinc-300 hover:bg-zinc-800"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar */}
        {searchOpen && (
          <div className="pb-4 pt-1 border-t border-zinc-800">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by product name or Part No (e.g. AI-007, Channel Nut, Cantilever)..."
                  autoFocus
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#111113] px-4 py-5 space-y-4 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or Part No..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold"
            >
              Go
            </button>
          </form>

          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-zinc-800"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-zinc-800"
            >
              About Us
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-zinc-800"
            >
              All Products (89)
            </Link>
            <div className="pl-4 py-1 space-y-1 border-l-2 border-red-600 ml-3">
              {NAV_MEGA_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1.5 text-xs font-semibold text-zinc-400 hover:text-white"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-zinc-200 hover:bg-zinc-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
