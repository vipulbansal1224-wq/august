import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Factory,
  Award,
  Wrench,
  BadgeDollarSign,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { COMPANY_INFO, NAV_MEGA_CATEGORIES } from "@/data/company";
import { PRODUCTS } from "@/data/catalog";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  // Featured products: Channel Nuts + Cantilever Arms + Flat/Angle Brackets
  const featuredSlugs = [
    "channel-nut-without-spring",
    "channel-nut-with-short-spring",
    "channel-nut-with-long-spring",
    "quick-channel-nut-with-plastic",
    "back-to-back-cantilever-arms",
    "slotted-cantilever-arms",
    "solid-cantilever-arms",
    "flat-plate-tee-4-hole-bracket",
  ];

  const featuredProducts = featuredSlugs
    .map((slug) => PRODUCTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const categoryCards = [
    {
      title: "Strut Fittings",
      slug: "strut-fittings",
      count: "60+ Products",
      image: COMPANY_INFO.images.categories["strut-fittings"],
      description:
        "Angle brackets, flat plates, channel bases, cantilever arms, wing & Z brackets.",
      sublinks: NAV_MEGA_CATEGORIES[0].subcategories.slice(0, 5),
    },
    {
      title: "Fasteners & Fixings",
      slug: "fasteners",
      count: "12+ Products",
      image: COMPANY_INFO.images.categories.fasteners,
      description:
        "Precision-engineered high-tensile bolts, nuts, and washers in BZP, HDG & SS316.",
      sublinks: NAV_MEGA_CATEGORIES[1].subcategories,
    },
    {
      title: "Clamps & Brackets",
      slug: "clamps",
      count: "16+ Products",
      image: COMPANY_INFO.images.categories.clamps,
      description:
        "Heavy-duty beam clamps, U-bolt brackets, pipe clamps, and window brackets.",
      sublinks: NAV_MEGA_CATEGORIES[2].subcategories,
    },
    {
      title: "Strut Channel",
      slug: "strut-channel",
      count: "Structural Framing",
      image: COMPANY_INFO.images.categories["strut-channel"],
      description:
        "Slotted and plain structural framing channels for MEP, HVAC, and solar installations.",
      sublinks: [],
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Subtle Engineering Grid Background */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                {COMPANY_INFO.tagline} • Est. {COMPANY_INFO.established}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Precision{" "}
                <span className="text-amber-400">Strut Fittings</span>,
                Fasteners &amp; Clamps.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Manufacturers &amp; global exporters of industrial strut
                accessories, channel nuts, cantilever arms, and custom fixings.
                Engineered in Ludhiana, India for{" "}
                <span className="text-white font-semibold">
                  {COMPANY_INFO.motto}
                </span>
                .
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-amber-500/20"
                >
                  Explore 89+ Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all"
                >
                  Request Bulk Quote
                </Link>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <p className="text-2xl font-extrabold text-white">1998</p>
                  <p className="text-xs text-slate-400">Year Incorporated</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-amber-400">100+</p>
                  <p className="text-xs text-slate-400">Product Range</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">ISO 9001</p>
                  <p className="text-xs text-slate-400">2015 Certified</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">Global</p>
                  <p className="text-xs text-slate-400">Export Network</p>
                </div>
              </div>
            </div>

            {/* Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={COMPANY_INFO.images.heroSlides[0]}
                  alt="August Industries Manufacturing & Products"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between gap-4 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-2xl p-4">
                    <div>
                      <p className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                        In-House Manufacturing
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        HDG • BZP • SS316 Finishes
                      </p>
                    </div>
                    <Link
                      href="/about-us"
                      className="px-3.5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold shrink-0 hover:bg-amber-400 transition-colors"
                    >
                      Our Factory
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES GRID */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Core Manufacturing Lines
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                Product Categories
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors"
            >
              Browse All 89 Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards.map((cat) => (
              <div
                key={cat.slug}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="relative h-48 bg-slate-100 overflow-hidden block"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/85 text-amber-400 text-[11px] font-bold">
                    {cat.count}
                  </span>
                </Link>
                <div className="p-5 flex-1 flex flex-col">
                  <Link href={`/products?category=${cat.slug}`}>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {cat.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>

                  {cat.sublinks.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cat.sublinks.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/products?category=${sub.slug}`}
                          className="px-2 py-1 rounded-md bg-slate-100 hover:bg-amber-100 text-[11px] font-semibold text-slate-700 hover:text-amber-800 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    Explore {cat.title}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                High-Demand Export Items
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                Featured Strut Accessories &amp; Nuts
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors"
            >
              View Full Catalog (89)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY & FACILITY */}
      <section className="py-16 lg:py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={COMPANY_INFO.images.factoryFront}
                  alt="August Industries Pvt. Ltd. Facility"
                  className="w-full h-80 sm:h-[420px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {COMPANY_INFO.legalName}
                    </p>
                    <p className="text-xs text-slate-400">
                      Ludhiana, Punjab, India • In-House Manufacturing &amp; Warehouse
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                About Company • Since 1998
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Welcome to August Industries
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {COMPANY_INFO.about.short}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                {COMPANY_INFO.about.promise}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "ISO 9001:2015 Quality Management",
                  "Own Manufacturing & Warehouse",
                  "100+ Export-Grade Products",
                  "Custom OEM Shapes & Sizes",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5 text-sm font-semibold text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
                >
                  Read Our Full Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              The August Advantage
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Why Global Buyers Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, ...COMPANY_INFO.whyChooseUs[0] },
              { icon: Wrench, ...COMPANY_INFO.whyChooseUs[1] },
              { icon: BadgeDollarSign, ...COMPANY_INFO.whyChooseUs[2] },
              { icon: Globe2, ...COMPANY_INFO.whyChooseUs[3] },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SURFACE FINISHES STRIP */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-extrabold text-slate-900">
              Available Industrial Finishes &amp; Materials
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_INFO.finishes.map((f) => (
              <div
                key={f.code}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70"
              >
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-900 text-amber-400 font-mono text-xs font-bold mb-2">
                  {f.code}
                </span>
                <h4 className="font-bold text-sm text-slate-900">{f.name}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT CTA BANNER */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Need Custom Dimensions or Bulk Export Pricing?
            </h2>
            <p className="text-slate-900/80 text-sm sm:text-base mt-1 font-medium">
              Send us your bill of materials or part numbers for a fast factory-direct quotation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-md"
            >
              Request Export Quote
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm transition-colors"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
