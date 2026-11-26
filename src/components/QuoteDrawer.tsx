"use client";

import React, { useState } from "react";
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Mail,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import { useQuote } from "@/context/QuoteContext";
import { COMPANY_INFO } from "@/data/company";

export default function QuoteDrawer() {
  const {
    items,
    isDrawerOpen,
    setDrawerOpen,
    removeFromQuote,
    updateQuantity,
    clearQuote,
  } = useQuote();

  const [customerName, setCustomerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const buildInquiryText = () => {
    const lines = [
      `Hello August Industries Team,`,
      `I would like to request a quote for the following items:`,
      ``,
      ...items.map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name}${
            item.selectedPartNo ? ` (Part No: ${item.selectedPartNo})` : ""
          } — Qty: ${item.quantity} Box/Unit`
      ),
      ``,
      customerName ? `Name: ${customerName}` : "",
      companyName ? `Company: ${companyName}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleWhatsAppRFQ = () => {
    const text = encodeURIComponent(buildInquiryText());
    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const handleEmailRFQ = () => {
    const subject = encodeURIComponent(
      `RFQ Inquiry - ${customerName || "Customer"} (${items.length} items)`
    );
    const body = encodeURIComponent(buildInquiryText());
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating WhatsApp Quick Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
          "Hello August Industries, I have an inquiry regarding your strut fittings & fasteners."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl hover:scale-105 transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Slide-over Quote Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-950 text-white">
              <div className="flex items-center gap-2.5">
                <ClipboardList className="w-5 h-5 text-amber-400" />
                <div>
                  <h2 className="font-bold text-base">Request for Quote (RFQ)</h2>
                  <p className="text-xs text-slate-400">
                    {items.length} {items.length === 1 ? "product" : "products"}{" "}
                    selected
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <ClipboardList className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="font-bold text-slate-800 mb-1">
                    Your Quote List is Empty
                  </h3>
                  <p className="text-sm text-slate-500">
                    Browse our 89+ strut fittings, fasteners, and clamps and click
                    &ldquo;Add to Quote&rdquo; to build an instant export inquiry.
                  </p>
                </div>
              ) : (
                <>
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50/70"
                    >
                      <div className="w-16 h-16 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center p-1">
                        {item.product.image ? (
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-xs text-slate-400">No Img</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm text-slate-900 truncate">
                          {item.product.name}
                        </h4>
                        {item.selectedPartNo && (
                          <p className="text-xs font-mono text-amber-600 mt-0.5">
                            Part: {item.selectedPartNo}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2.5">
                          <div className="inline-flex items-center border border-slate-300 rounded-lg bg-white">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="p-1.5 text-slate-600 hover:text-slate-900"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="p-1.5 text-slate-600 hover:text-slate-900"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromQuote(item.product.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Optional Contact Details */}
                  <div className="pt-3 border-t border-slate-200 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Your Details (Optional)
                    </p>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Company / Organization"
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Footer Actions */}
            {items.length > 0 && (
              <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-2.5">
                {submitted && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    RFQ prepared! Complete sending in WhatsApp or your Email app.
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleWhatsAppRFQ}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send RFQ via WhatsApp
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleEmailRFQ}
                    className="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    Send via Email
                  </button>
                  <button
                    type="button"
                    onClick={clearQuote}
                    className="py-2.5 rounded-xl border border-slate-300 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    Clear List
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
