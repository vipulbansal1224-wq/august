import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Factory,
  Globe2,
  Award,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata = {
  title: "About Us | August Industries Pvt. Ltd.",
  description:
    "Incorporated in 1998, August Industries is an ISO 9001:2015 certified manufacturer and exporter of strut fittings, fasteners, and clamps.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            {COMPANY_INFO.tagline}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Professionalism &amp; Experience Since{" "}
            <span className="text-amber-400">1998</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            {COMPANY_INFO.motto} — Building a strong global customer base with
            precision-engineered strut accessories, fasteners, and clamps.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                  About Company
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                  Customer Satisfaction Is Our Motto
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {COMPANY_INFO.about.short}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {COMPANY_INFO.about.promise}
              </p>
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80">
                <h3 className="font-extrabold text-slate-900 text-base mb-2">
                  Our Heritage &amp; Global Reach
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {COMPANY_INFO.about.history}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <Factory className="w-6 h-6 text-amber-600 mb-2" />
                  <p className="font-extrabold text-xl text-slate-900">100+</p>
                  <p className="text-xs text-slate-600">
                    Manufactured Products
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <Globe2 className="w-6 h-6 text-amber-600 mb-2" />
                  <p className="font-extrabold text-xl text-slate-900">
                    25+ Years
                  </p>
                  <p className="text-xs text-slate-600">
                    Industry Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src={COMPANY_INFO.images.factoryFront}
                  alt="August Industries Pvt. Ltd. Factory"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-[#510B18]">
                  <img
                    src={COMPANY_INFO.images.heroSlides[1]}
                    alt="Cantilever Arms - August Industries"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-[#111113]">
                  <img
                    src={COMPANY_INFO.images.heroSlides[2]}
                    alt="August Industries Product Range"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "ISO 9001:2015 Certified",
                desc: "Strict quality inspection across raw material procurement, forming, threading, and galvanizing.",
              },
              {
                icon: CheckCircle2,
                title: "Competitive Export Pricing",
                desc: "Direct-from-factory pricing with standardized box and pallet packaging for international shipping.",
              },
              {
                icon: MapPin,
                title: "Ludhiana Manufacturing Hub",
                desc: COMPANY_INFO.address,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs"
                >
                  <Icon className="w-7 h-7 text-amber-600 mb-3" />
                  <h3 className="font-extrabold text-slate-900 text-lg mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Our Manufacturing Facility
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {COMPANY_INFO.address}
              </p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 text-xs font-bold transition-colors"
            >
              Schedule a Visit / Inquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-80 sm:h-96">
            <iframe
              src={COMPANY_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="August Industries Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
