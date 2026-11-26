import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#111113] text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src={COMPANY_INFO.images.logo}
                alt="August Industries - The Strut People"
                className="h-12 w-auto object-contain rounded-md"
              />
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {COMPANY_INFO.about.short}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-red-400">
              EST. {COMPANY_INFO.established} • {COMPANY_INFO.motto}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-red-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-red-400 transition-colors"
                >
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-red-400 transition-colors"
                >
                  Contact &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Product Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products?category=strut-fittings"
                  className="hover:text-red-400 transition-colors"
                >
                  Strut Fittings &amp; Brackets
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=channel-nuts"
                  className="hover:text-red-400 transition-colors"
                >
                  Channel &amp; Spring Nuts
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=fasteners"
                  className="hover:text-red-400 transition-colors"
                >
                  Fasteners &amp; Fixings
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=clamps"
                  className="hover:text-red-400 transition-colors"
                >
                  Beam, Pipe &amp; U-Bolt Clamps
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=cantilever-arms"
                  className="hover:text-red-400 transition-colors"
                >
                  Cantilever Arms
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Head Office &amp; Works
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-zinc-400">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-1" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2.5 text-sm text-zinc-300 hover:text-red-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2.5 text-sm text-zinc-300 hover:text-red-400 transition-colors break-all"
            >
              <Mail className="w-4 h-4 text-red-500 shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
            >
              WhatsApp Export Desk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName} All rights
            reserved.
          </p>
          <p>Manufacturers &amp; Exporters of Strut Accessories &amp; Fasteners</p>
        </div>
      </div>
    </footer>
  );
}
