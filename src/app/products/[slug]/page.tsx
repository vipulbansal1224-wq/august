"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ClipboardList,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useQuote } from "@/context/QuoteContext";
import { useSiteData } from "@/context/SiteDataContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const { addToQuote } = useQuote();
  const { products: PRODUCTS } = useSiteData();

  const product = PRODUCTS.find((p) => p.slug === slug);
  const [selectedPartNo, setSelectedPartNo] = useState<string | undefined>(
    product?.specRows?.[0]?.[0]
  );

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2">
          Product Not Found
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          The product you are looking for may have moved or been updated.
        </p>
        <Link
          href="/products"
          className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
        >
          Back to Catalog
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter(
    (p) =>
      p.id !== product.id &&
      p.categorySlugs.some((c) => product.categorySlugs.includes(c))
  ).slice(0, 4);

  const whatsappUrl = `https://wa.me/${
    COMPANY_INFO.whatsappNumber
  }?text=${encodeURIComponent(
    `Hello August Industries, I would like a quote for: ${product.name}${
      selectedPartNo ? ` (Part No: ${selectedPartNo})` : ""
    }`
  )}`;

  return (
    <div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Product Catalog
          </Link>
          <div className="flex flex-wrap gap-1.5">
            {product.categories.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-700"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Product Main */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Image Box */}
            <div className="lg:col-span-5 bg-slate-50 rounded-3xl border border-slate-200 p-8 flex items-center justify-center aspect-square">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Layers className="w-20 h-20 text-slate-300" />
              )}
            </div>

            {/* Info & Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  ISO 9001:2015 Certified Manufacturing
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {product.name}
                </h1>
              </div>

              {product.description && (
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
              )}

              {/* Spec Table */}
              {product.specHeaders.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                      Technical Specifications &amp; Packaging
                    </h2>
                    <span className="text-xs text-slate-500">
                      Click a row to select Part No for quote
                    </span>
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-950 text-white">
                          {product.specHeaders.map((h, i) => (
                            <th key={i} className="px-4 py-3 font-bold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {product.specRows.map((row, rIdx) => {
                          const partNo = row[0];
                          const isSelected = selectedPartNo === partNo;
                          return (
                            <tr
                              key={rIdx}
                              onClick={() => setSelectedPartNo(partNo)}
                              className={`cursor-pointer transition-colors ${
                                isSelected
                                  ? "bg-amber-50"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-4 py-3 ${
                                    cIdx === 0
                                      ? "font-mono font-bold text-slate-900"
                                      : "text-slate-700"
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => addToQuote(product, selectedPartNo)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-extrabold text-sm transition-colors shadow-sm"
                >
                  <ClipboardList className="w-4 h-4" />
                  Add to Quote List
                  {selectedPartNo ? ` (${selectedPartNo})` : ""}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Inquire on WhatsApp
                </a>
              </div>

              {/* Assurance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  Custom sizes &amp; OEM branding available
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  Available in HDG, BZP &amp; SS316 finishes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
