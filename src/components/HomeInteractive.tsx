"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Plus,
  CheckCircle2,
  Layers,
  Factory,
  Compass,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO, NAV_MEGA_CATEGORIES } from "@/data/company";
import { PRODUCTS } from "@/data/catalog";
import { useQuote } from "@/context/QuoteContext";

export default function HomeInteractive() {
  const { addToQuote } = useQuote();

  // 1. Hero Live Part-Number / Product Finder
  const [heroQuery, setHeroQuery] = useState("");
  const heroMatches = useMemo(() => {
    const q = heroQuery.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.specRows.some((r) => r.some((c) => c.toLowerCase().includes(q)))
    ).slice(0, 5);
  }, [heroQuery]);

  // 2. Interactive Category Tab Explorer
  const [activeCatIdx, setActiveCatIdx] = useState(0);
  const categoryTabs = [
    {
      num: "01",
      title: "Strut Fittings",
      slug: "strut-fittings",
      count: "60+ SKUs",
      image: COMPANY_INFO.images.categories["strut-fittings"],
      tagline:
        "Angle brackets, flat plates, channel nuts, cantilever arms, wing & Z brackets.",
      subcategories: NAV_MEGA_CATEGORIES[0].subcategories,
    },
    {
      num: "02",
      title: "Fasteners & Fixings",
      slug: "fasteners",
      count: "12+ SKUs",
      image: COMPANY_INFO.images.categories.fasteners,
      tagline:
        "High-tensile bolts, hex nuts, and precision washers in BZP, HDG & SS316.",
      subcategories: NAV_MEGA_CATEGORIES[1].subcategories,
    },
    {
      num: "03",
      title: "Clamps & Brackets",
      slug: "clamps",
      count: "16+ SKUs",
      image: COMPANY_INFO.images.categories.clamps,
      tagline:
        "Heavy-duty beam clamps, U-bolt brackets, pipe clamps, and window brackets.",
      subcategories: NAV_MEGA_CATEGORIES[2].subcategories,
    },
    {
      num: "04",
      title: "Strut Channel",
      slug: "strut-channel",
      count: "Framing",
      image: COMPANY_INFO.images.categories["strut-channel"],
      tagline:
        "Slotted and plain structural framing channels for MEP, HVAC, and solar installations.",
      subcategories: [],
    },
  ];

  const activeCat = categoryTabs[activeCatIdx];
  const activeCatProducts = useMemo(() => {
    return PRODUCTS.filter((p) =>
      p.categorySlugs.includes(activeCat.slug)
    ).slice(0, 3);
  }, [activeCat.slug]);

  // 3. Interactive Surface Finish Lab
  const [activeFinishIdx, setActiveFinishIdx] = useState(0);
  const activeFinish = COMPANY_INFO.finishes[activeFinishIdx];

  return (
    <div className="bg-white text-zinc-900">
      {/* SECTION 1: ARCHITECTURAL SPLIT HERO + LIVE PART FINDER */}
      <section className="relative bg-[#F7F7F5] border-b border-zinc-200 overflow-hidden">
        {/* Subtle Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E4E4E7 1px, transparent 1px), linear-gradient(to bottom, #E4E4E7 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Copy + Live Part Finder */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-2xs text-xs font-bold text-zinc-800">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                {COMPANY_INFO.tagline} • EST. {COMPANY_INFO.established}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-zinc-950 leading-[1.05]">
                The Strut People.{" "}
                <span className="text-red-600">Precision</span> Built Beyond
                Boundaries.
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
                Manufacturers &amp; global exporters of{" "}
                <span className="font-semibold text-zinc-900">
                  89+ industrial strut fittings, channel nuts, cantilever arms,
                  fasteners &amp; clamps
                </span>
                . Engineered in Ludhiana for worldwide MEP, HVAC, solar &amp;
                construction projects.
              </p>

              {/* Interactive Live Part-Number Finder */}
              <div className="relative max-w-xl">
                <div className="flex items-center bg-white rounded-2xl border-2 border-zinc-900 shadow-lg p-1.5 focus-within:border-red-600 transition-colors">
                  <Search className="w-5 h-5 text-zinc-400 ml-3 shrink-0" />
                  <input
                    type="text"
                    value={heroQuery}
                    onChange={(e) => setHeroQuery(e.target.value)}
                    placeholder="Quick lookup: type Part No (AI-007, QSN-8) or product..."
                    className="flex-1 px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none bg-transparent"
                  />
                  <Link
                    href={
                      heroQuery.trim()
                        ? `/products?q=${encodeURIComponent(heroQuery.trim())}`
                        : "/products"
                    }
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shrink-0"
                  >
                    {heroQuery.trim() ? "View All" : "Catalog (89)"}
                  </Link>
                </div>

                {/* Live Dropdown Results */}
                {heroMatches.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-zinc-200 shadow-2xl z-30 divide-y divide-zinc-100 overflow-hidden">
                    {heroMatches.map((p) => {
                      const partNo = p.specRows?.[0]?.[0];
                      return (
                        <div
                          key={p.id}
                          className="flex items-center justify-between gap-3 p-3 hover:bg-zinc-50 transition-colors"
                        >
                          <Link
                            href={`/products/${p.slug}`}
                            className="flex items-center gap-3 min-w-0 flex-1"
                          >
                            {p.image && (
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-10 h-10 object-contain rounded-lg border border-zinc-200 bg-white p-0.5 shrink-0"
                              />
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-zinc-900 truncate">
                                {p.name}
                              </p>
                              {partNo && (
                                <p className="text-[11px] font-mono text-red-600">
                                  Part No: {partNo}
                                </p>
                              )}
                            </div>
                          </Link>
                          <button
                            type="button"
                            onClick={() => addToQuote(p, partNo)}
                            className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-red-600 text-white text-xs font-bold shrink-0 transition-colors"
                          >
                            + Quote
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Quick Action Row */}
              <div className="flex flex-wrap items-center gap-5 pt-1 text-xs font-bold text-zinc-700">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  HDG, BZP &amp; SS316
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  Custom OEM Dimensions
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  Direct Factory Export
                </span>
              </div>
            </div>

            {/* Right Column: Dynamic 4-Tile Industrial Bento Mosaic */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-3.5">
                <div className="col-span-7 relative rounded-3xl overflow-hidden border border-zinc-200 shadow-lg h-64 group">
                  <img
                    src={COMPANY_INFO.images.showcase.cncMachining}
                    alt="Precision CNC Metal Forming"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-red-400">
                      01 / Precision Forming
                    </span>
                    <p className="text-sm font-bold">
                      In-House Stamping &amp; Threading
                    </p>
                  </div>
                </div>

                <div className="col-span-5 relative rounded-3xl overflow-hidden border border-zinc-200 shadow-lg h-64 group">
                  <img
                    src={COMPANY_INFO.images.showcase.fastenersMacro}
                    alt="Industrial Fasteners & Bolts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-red-400">
                      02 / Fixings
                    </span>
                    <p className="text-sm font-bold">High-Tensile Fasteners</p>
                  </div>
                </div>

                <div className="col-span-5 relative rounded-3xl overflow-hidden border border-zinc-200 shadow-lg h-56 group">
                  <img
                    src={COMPANY_INFO.images.showcase.steelStructure}
                    alt="Structural Steel & Strut Systems"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-red-400">
                      03 / MEP &amp; Solar
                    </span>
                    <p className="text-sm font-bold">Strut &amp; Beam Clamps</p>
                  </div>
                </div>

                <div className="col-span-7 relative rounded-3xl overflow-hidden border border-zinc-200 shadow-lg h-56 group">
                  <img
                    src={COMPANY_INFO.images.factoryFront}
                    alt="August Industries Pvt. Ltd. Factory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-red-400">
                        04 / Ludhiana Works
                      </span>
                      <p className="text-sm font-bold">
                        August Industries Pvt. Ltd.
                      </p>
                    </div>
                    <Link
                      href="/about-us"
                      className="p-2 rounded-full bg-white text-zinc-950 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTINUOUS TECHNICAL TICKER */}
      <div className="bg-[#111113] text-white py-3.5 overflow-hidden border-b border-zinc-800">
        <div className="animate-marquee flex items-center gap-10 text-xs font-mono uppercase tracking-widest">
          {[1, 2].map((loop) => (
            <div key={loop} className="flex items-center gap-10 shrink-0">
              <span className="text-red-500 font-bold">★ ISO 9001:2015 CERTIFIED</span>
              <span>EST. 1998 • LUDHIANA, INDIA</span>
              <span className="text-zinc-400">89+ PRECISION SKUS</span>
              <span className="text-red-400">CHANNEL NUTS • CANTILEVER ARMS</span>
              <span>BEAM CLAMPS • U-BOLTS • BRACKETS</span>
              <span className="text-zinc-400">HDG • BZP • SS316 • PRE-GALV</span>
              <span className="text-white font-bold">BUSINESS BEYOND BOUNDARIES</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: INTERACTIVE CATEGORY EXPLORER (TAB-DRIVEN SPLIT PANEL) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600">
                Interactive Catalog Explorer
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1">
                Explore Our 4 Manufacturing Pillars
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-red-600 text-white text-xs font-bold transition-colors"
            >
              Open Full 89-Product Catalog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Numbered Architectural Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {categoryTabs.map((tab, idx) => {
                const isActive = idx === activeCatIdx;
                return (
                  <button
                    key={tab.slug}
                    type="button"
                    onClick={() => setActiveCatIdx(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                      isActive
                        ? "bg-[#111113] text-white border-zinc-900 shadow-xl"
                        : "bg-[#F7F7F5] text-zinc-800 border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isActive ? "text-red-500" : "text-zinc-400"
                          }`}
                        >
                          {tab.num}
                        </span>
                        <h3 className="text-lg font-extrabold">{tab.title}</h3>
                      </div>
                      <p
                        className={`text-xs leading-relaxed ${
                          isActive ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {tab.tagline}
                      </p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold shrink-0 ${
                        isActive
                          ? "bg-red-600 text-white"
                          : "bg-white text-zinc-700 border border-zinc-200"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Dynamic Showcase Panel */}
            <div className="lg:col-span-7 bg-[#F7F7F5] rounded-3xl border border-zinc-200 p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-zinc-200 bg-white h-44">
                  <img
                    src={activeCat.image}
                    alt={activeCat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:col-span-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-extrabold text-zinc-950">
                      {activeCat.title}
                    </h3>
                    <Link
                      href={`/products?category=${activeCat.slug}`}
                      className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                    >
                      View All
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {activeCat.tagline}
                  </p>
                  {activeCat.subcategories.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {activeCat.subcategories.slice(0, 8).map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/products?category=${sub.slug}`}
                          className="px-2.5 py-1 rounded-lg bg-white border border-zinc-200 hover:border-red-500 hover:text-red-600 text-[11px] font-semibold text-zinc-700 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* 3 Live Products from Active Category */}
              <div className="pt-4 border-t border-zinc-200">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
                  Popular in {activeCat.title}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {activeCatProducts.map((p) => {
                    const partNo = p.specRows?.[0]?.[0];
                    return (
                      <div
                        key={p.id}
                        className="bg-white rounded-2xl border border-zinc-200 p-3.5 flex flex-col justify-between hover:border-red-400 transition-colors"
                      >
                        <Link href={`/products/${p.slug}`} className="block">
                          <div className="h-24 bg-zinc-50 rounded-xl p-2 flex items-center justify-center mb-2.5">
                            {p.image ? (
                              <img
                                src={p.image}
                                alt={p.name}
                                className="h-full w-full object-contain"
                              />
                            ) : (
                              <Layers className="w-8 h-8 text-zinc-300" />
                            )}
                          </div>
                          <h4 className="text-xs font-bold text-zinc-900 line-clamp-2 hover:text-red-600">
                            {p.name}
                          </h4>
                          {partNo && (
                            <p className="text-[10px] font-mono text-zinc-500 mt-1">
                              {partNo}
                            </p>
                          )}
                        </Link>
                        <button
                          type="button"
                          onClick={() => addToQuote(p, partNo)}
                          className="mt-3 w-full py-1.5 rounded-lg bg-zinc-900 hover:bg-red-600 text-white text-[11px] font-bold inline-flex items-center justify-center gap-1 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                          Add to Quote
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE SURFACE FINISH & CORROSION LAB */}
      <section className="py-16 lg:py-20 bg-[#111113] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-red-500">
                <Sparkles className="w-4 h-4" />
                Surface Engineering Lab
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Compare Finishes &amp; Corrosion Ratings
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Select a finish below to inspect coating standards, micron
                thickness, and recommended project environments before
                requesting a quote.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {COMPANY_INFO.finishes.map((fin, idx) => (
                  <button
                    key={fin.code}
                    type="button"
                    onClick={() => setActiveFinishIdx(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      activeFinishIdx === idx
                        ? "bg-red-600 border-red-500 text-white shadow-lg"
                        : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600"
                    }`}
                  >
                    <span className="block font-mono text-sm font-extrabold">
                      {fin.code}
                    </span>
                    <span className="block text-[11px] opacity-85 truncate">
                      {fin.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-7 sm:p-9 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-5">
                <div>
                  <span className="font-mono text-xs text-red-400 uppercase">
                    Selected Specification
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-0.5">
                    {activeFinish.name} ({activeFinish.code})
                  </h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-xl bg-zinc-800 border border-zinc-700 font-mono text-xs font-bold text-white">
                  {activeFinish.standard}
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeFinish.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">
                    Coating / Alloy Spec
                  </span>
                  <p className="text-lg font-extrabold text-white mt-1">
                    {activeFinish.thickness}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-black/40 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">
                    Ideal Environment
                  </span>
                  <p className="text-xs font-semibold text-zinc-200 mt-1.5 leading-snug">
                    {activeFinish.environment}
                  </p>
                </div>
              </div>

              {/* Corrosion Resistance Meter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">
                    CORROSION RESISTANCE INDEX
                  </span>
                  <span className="text-red-400 font-bold">
                    {activeFinish.corrosionScore} / 100
                  </span>
                </div>
                <div className="h-3 w-full rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-500"
                    style={{ width: `${activeFinish.corrosionScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CUSTOM OEM & GLOBAL EXPORT PIPELINE */}
      <section className="py-16 lg:py-20 bg-[#F7F7F5] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600">
                Since 1998 • Business Beyond Boundaries
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950">
                From Custom Drawing to Palletized Global Dispatch
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {COMPANY_INFO.about.history}
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    icon: Compass,
                    step: "01",
                    title: "Share Specs or Custom Dimensions",
                    desc: "Send your part numbers, CAD drawings, or custom bracket sizes.",
                  },
                  {
                    icon: Factory,
                    step: "02",
                    title: "In-House Tooling & ISO 9001:2015 QC",
                    desc: "Manufactured, threaded, and finished (HDG / BZP / SS316) in Ludhiana.",
                  },
                  {
                    icon: PackageCheck,
                    step: "03",
                    title: "Box & Pallet Export Packaging",
                    desc: "Standardized export cartons & pallets shipped reliably worldwide.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-zinc-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-zinc-900">
                          <span className="font-mono text-red-600 mr-2">
                            {item.step}
                          </span>
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-600 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-md h-64">
                <img
                  src={COMPANY_INFO.images.showcase.warehouseLogistics}
                  alt="Global Export Warehouse & Logistics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-[#510B18] shadow-sm">
                <img
                  src={COMPANY_INFO.images.heroSlides[1]}
                  alt="Cantilever Arms - Solid, Slotted and Back to Back Strut"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BOLD EXPORT CTA */}
      <section className="py-14 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-red-100">
              <ShieldCheck className="w-4 h-4" />
              Direct Manufacturer Pricing
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Source Strut Fittings &amp; Fasteners?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="px-6 py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm transition-colors shadow-lg"
            >
              Request Export Quote
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
