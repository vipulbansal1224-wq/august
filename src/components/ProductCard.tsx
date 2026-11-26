"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Eye,
  ArrowUpRight,
  X,
  ClipboardList,
  Layers,
} from "lucide-react";
import type { Product } from "@/data/catalog";
import { useQuote } from "@/context/QuoteContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToQuote } = useQuote();
  const [specOpen, setSpecOpen] = useState(false);

  const firstPartNo =
    product.specRows.length > 0 && product.specRows[0].length > 0
      ? product.specRows[0][0]
      : undefined;

  const primaryCategory =
    product.categories.find(
      (c) => !["Strut Fittings", "Fasteners & Fixings", "Clamps"].includes(c)
    ) || product.categories[0];

  return (
    <>
      <div className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
        {/* Image Container */}
        <Link
          href={`/products/${product.slug}`}
          className="relative aspect-[4/3] bg-slate-50 border-b border-slate-100 p-5 flex items-center justify-center overflow-hidden"
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <Layers className="w-12 h-12 text-slate-300" />
          )}

          {primaryCategory && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200 text-[11px] font-bold text-slate-700 shadow-2xs">
              {primaryCategory}
            </span>
          )}

          {product.specRows.length > 0 && (
            <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-slate-900/85 text-amber-400 font-mono text-[10px] font-semibold">
              {product.specRows.length}{" "}
              {product.specRows.length === 1 ? "Size" : "Sizes"}
            </span>
          )}
        </Link>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors text-base leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {firstPartNo && (
            <p className="mt-1.5 text-xs font-mono text-slate-500">
              Part No:{" "}
              <span className="text-slate-800 font-semibold">{firstPartNo}</span>
            </p>
          )}

          {product.description && (
            <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}

          <div className="mt-auto pt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => addToQuote(product, firstPartNo)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 text-xs font-bold transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Add to Quote
            </button>

            {product.specRows.length > 0 ? (
              <button
                type="button"
                onClick={() => setSpecOpen(true)}
                title="Quick View Specs"
                className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href={`/products/${product.slug}`}
                title="View Details"
                className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Spec Quick-View Modal */}
      {specOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            onClick={() => setSpecOpen(false)}
          />
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                  Technical Specifications
                </span>
                <h3 className="font-extrabold text-lg text-slate-900">
                  {product.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSpecOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5">
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                {product.image && (
                  <div className="w-36 h-36 rounded-xl border border-slate-200 bg-slate-50 p-3 shrink-0 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex flex-wrap gap-1.5">
                    {product.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  {product.description && (
                    <p className="leading-relaxed">{product.description}</p>
                  )}
                </div>
              </div>

              {product.specHeaders.length > 0 && (
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        {product.specHeaders.map((h, i) => (
                          <th key={i} className="px-3.5 py-2.5 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {product.specRows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className="hover:bg-amber-50/50 transition-colors"
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-3.5 py-2.5 ${
                                cIdx === 0
                                  ? "font-mono font-bold text-slate-900"
                                  : "text-slate-700"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
              <Link
                href={`/products/${product.slug}`}
                onClick={() => setSpecOpen(false)}
                className="text-xs font-bold text-slate-700 hover:text-amber-600 inline-flex items-center gap-1"
              >
                Open Full Product Page
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  addToQuote(product, firstPartNo);
                  setSpecOpen(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
              >
                <ClipboardList className="w-4 h-4" />
                Add to Quote List
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
