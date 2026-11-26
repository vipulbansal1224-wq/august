"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Globe2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactUsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello August Industries,\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Export &amp; Domestic Sales Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">
            Let&apos;s Talk With Us
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl text-base">
            Have a custom requirement, bulk export order, or need technical
            specifications? Reach out directly to our Ludhiana manufacturing
            headquarters.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
                <h2 className="text-xl font-extrabold text-slate-900">
                  Get in Touch
                </h2>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Head Office &amp; Works
                    </p>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Call Us
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-sm font-bold text-slate-900 hover:text-amber-600 mt-0.5 block"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Us
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-amber-600 mt-0.5 block break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2.5">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 text-white rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Globe2 className="w-4 h-4" />
                  Worldwide Export Support
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Standard palletized export packing, custom OEM dimensions, and
                  rapid turnaround for international distributors and MEP
                  contractors.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Mon – Sat: 9:00 AM – 6:30 PM IST
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-sm">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-1">
                  Send an Inquiry / Request for Quote
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Fill out the form below and our sales engineering team will
                  respond promptly.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4">
                    <div className="flex items-center gap-3 text-emerald-800">
                      <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                      <div>
                        <h3 className="font-extrabold text-lg">
                          Inquiry Ready to Send!
                        </h3>
                        <p className="text-sm text-emerald-700">
                          Thank you, {firstName || "Valued Customer"}. You can
                          also dispatch this directly to our WhatsApp desk for
                          an immediate response.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Send via WhatsApp Now
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Rajeev"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Sharma"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91-9872727373"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Comment or Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please share part numbers, finishes (HDG/BZP/SS316), and estimated quantities..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-colors shadow-xs"
                      >
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </button>
                      <button
                        type="button"
                        onClick={handleSendWhatsApp}
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        Direct WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-80 sm:h-96 bg-white">
            <iframe
              src={COMPANY_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="August Industries Pvt. Ltd. Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
