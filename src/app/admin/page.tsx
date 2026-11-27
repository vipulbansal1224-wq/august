"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Lock,
  Package,
  Type,
  Menu as MenuIcon,
  Database,
  Plus,
  Pencil,
  Trash2,
  Save,
  RotateCcw,
  Download,
  Upload,
  ExternalLink,
  Search,
  X,
  CheckCircle2,
  LogOut,
} from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";
import type { Product } from "@/data/catalog";

type AdminTab = "products" | "content" | "menus" | "backup";

export default function AdminPanelPage() {
  const {
    products,
    categories,
    navMenu,
    megaCategories,
    content,
    addProduct,
    updateProduct,
    deleteProduct,
    updateContent,
    addNavMenuItem,
    updateNavMenuItem,
    deleteNavMenuItem,
    addMegaCategory,
    deleteMegaCategory,
    resetToDefaults,
    importSiteData,
  } = useSiteData();

  const [isAuthed, setIsAuthed] = useState(false);
  const [pin, setPin] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<AdminTab>("products");
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // Product Search & Modal State
  const [prodSearch, setProdSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const [formName, setFormName] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formCategory, setFormCategory] = useState("strut-fittings");
  const [formImage, setFormImage] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formSpecRows, setFormSpecRows] = useState<string[][]>([
    ["AI-NEW-01", "Standard", "HDG", "25", "1000"],
  ]);

  const openAddProduct = () => {
    setIsAddingProduct(true);
    setEditingProduct(null);
    setFormName("");
    setFormSlug("");
    setFormCategory("strut-fittings");
    setFormImage("/images/cat-strut.jpg");
    setFormDesc("");
    setFormSpecRows([["AI-NEW-01", "Standard", "HDG", "25", "1000"]]);
  };

  const openEditProduct = (p: Product) => {
    setEditingProduct(p);
    setIsAddingProduct(false);
    setFormName(p.name);
    setFormSlug(p.slug);
    setFormCategory(p.categorySlugs[0] || "strut-fittings");
    setFormImage(p.image || "");
    setFormDesc(p.description || "");
    setFormSpecRows(
      p.specRows.length > 0
        ? p.specRows.map((r) => [...r])
        : [["", "", "", "", ""]]
    );
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const catObj = categories.find((c) => c.slug === formCategory);
    const slug =
      formSlug.trim() ||
      formName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const cleanSpecs = formSpecRows.filter((r) => r.some((c) => c.trim() !== ""));

    if (isAddingProduct) {
      addProduct({
        name: formName.trim(),
        slug,
        categories: [catObj ? catObj.name : formCategory],
        categorySlugs: [formCategory],
        image: formImage.trim(),
        description: formDesc.trim(),
        specHeaders:
          cleanSpecs.length > 0
            ? ["Part No", "Size", "Finish", "Box Qty", "Pallet Qty"]
            : [],
        specRows: cleanSpecs,
        permalink: `/products/${slug}`,
      });
      showToast(`Added product "${formName}"!`);
    } else if (editingProduct) {
      updateProduct(editingProduct.id, {
        name: formName.trim(),
        slug,
        categories: [catObj ? catObj.name : formCategory],
        categorySlugs: [formCategory],
        image: formImage.trim(),
        description: formDesc.trim(),
        specHeaders:
          editingProduct.specHeaders.length > 0
            ? editingProduct.specHeaders
            : cleanSpecs.length > 0
            ? ["Part No", "Size", "Finish", "Box Qty", "Pallet Qty"]
            : [],
        specRows: cleanSpecs,
      });
      showToast(`Updated "${formName}"!`);
    }
    setIsAddingProduct(false);
    setEditingProduct(null);
  };

  // Content Form State
  const [contentDraft, setContentDraft] = useState(content);
  React.useEffect(() => {
    setContentDraft(content);
  }, [content]);

  // Menu Form State
  const [newMenuLabel, setNewMenuLabel] = useState("");
  const [newMenuHref, setNewMenuHref] = useState("");
  const [newMegaTitle, setNewMegaTitle] = useState("");
  const [newMegaSlug, setNewMegaSlug] = useState("");
  const [newMegaDesc, setNewMegaDesc] = useState("");

  // Auth Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === "august1998" || pin.trim() === "admin123") {
      setIsAuthed(true);
      setAuthError("");
    } else {
      setAuthError("Invalid passcode. Please try again.");
    }
  };

  if (!isAuthed) {
    return (
      <div className="min-h-[75vh] bg-[#F7F7F5] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl border border-zinc-200 shadow-xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#111113] text-red-500 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-zinc-950">
                August Industries CMS
              </h1>
              <p className="text-xs text-zinc-500">
                Admin Panel for Products, Headings &amp; Menus
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                Admin Passcode
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter passcode..."
                autoFocus
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              {authError && (
                <p className="text-xs text-red-600 font-semibold mt-1.5">
                  {authError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors"
            >
              Unlock Admin Panel
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredProducts = products.filter((p) => {
    const q = prodSearch.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.specRows.some((r) => r.some((c) => c.toLowerCase().includes(q)))
    );
  });

  const handleExportJson = () => {
    const data = JSON.stringify(
      { products, categories, navMenu, megaCategories, content },
      null,
      2
    );
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `august-industries-cms-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Exported JSON backup!");
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string" && importSiteData(reader.result)) {
        showToast("Imported site data successfully!");
      } else {
        showToast("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-24 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xl">
          <CheckCircle2 className="w-4 h-4" />
          {toast}
        </div>
      )}

      {/* Admin Top Bar */}
      <div className="bg-[#111113] text-white border-b border-zinc-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-red-400">
              Live Site Content Management
            </span>
            <h1 className="text-2xl font-extrabold">
              August Industries Admin Panel
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold transition-colors"
            >
              View Live Site
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setIsAuthed(false)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-bold transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Lock
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-2 py-3">
          {[
            { id: "products", label: `Products (${products.length})`, icon: Package },
            { id: "content", label: "Headings & Site Text", icon: Type },
            { id: "menus", label: "Navigation & Menus", icon: MenuIcon },
            { id: "backup", label: "Import / Export & Reset", icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as AdminTab)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-colors ${
                  active
                    ? "bg-[#111113] text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                <Icon className="w-4 h-4 text-red-500" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TAB 1: PRODUCTS CRUD */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={prodSearch}
                  onChange={(e) => setProdSearch(e.target.value)}
                  placeholder="Search products or Part No..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <button
                type="button"
                onClick={openAddProduct}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add New Product
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-950 text-white">
                      <th className="px-4 py-3 font-bold">Product</th>
                      <th className="px-4 py-3 font-bold">Category</th>
                      <th className="px-4 py-3 font-bold">Part No / Variants</th>
                      <th className="px-4 py-3 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-zinc-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg border border-zinc-200 bg-white p-1 shrink-0 flex items-center justify-center">
                              {p.image ? (
                                <img
                                  src={p.image}
                                  alt={p.name}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <Package className="w-4 h-4 text-zinc-300" />
                              )}
                            </div>
                            <div>
                              <p className="font-bold text-zinc-900">{p.name}</p>
                              <p className="text-[11px] font-mono text-zinc-400">
                                /{p.slug}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-zinc-700 font-medium">
                          {p.categories.join(", ")}
                        </td>
                        <td className="px-4 py-3 font-mono text-zinc-600">
                          {p.specRows[0]?.[0] || "—"} ({p.specRows.length} rows)
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => openEditProduct(p)}
                              className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                              title="Edit Product"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                deleteProduct(p.id);
                                showToast(`Deleted "${p.name}"`);
                              }}
                              className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600"
                              title="Delete Product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HEADINGS & SITE TEXT */}
        {activeTab === "content" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateContent(contentDraft);
              showToast("Saved all headings & site text!");
            }}
            className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 space-y-6 shadow-xs"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <div>
                <h2 className="text-lg font-extrabold text-zinc-950">
                  Headings, Copy &amp; Contact Info
                </h2>
                <p className="text-xs text-zinc-500">
                  Changes reflect immediately on Home, Navbar, and Footer.
                </p>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Hero Top Tagline Badge
                </label>
                <input
                  type="text"
                  value={contentDraft.heroTagline}
                  onChange={(e) =>
                    setContentDraft({
                      ...contentDraft,
                      heroTagline: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Hero Title Prefix
                </label>
                <input
                  type="text"
                  value={contentDraft.heroTitlePrefix}
                  onChange={(e) =>
                    setContentDraft({
                      ...contentDraft,
                      heroTitlePrefix: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Hero Highlight Word (Red)
                </label>
                <input
                  type="text"
                  value={contentDraft.heroTitleHighlight}
                  onChange={(e) =>
                    setContentDraft({
                      ...contentDraft,
                      heroTitleHighlight: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Hero Title Suffix
                </label>
                <input
                  type="text"
                  value={contentDraft.heroTitleSuffix}
                  onChange={(e) =>
                    setContentDraft({
                      ...contentDraft,
                      heroTitleSuffix: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Hero Subtitle Description
                </label>
                <textarea
                  rows={3}
                  value={contentDraft.heroSubtitle}
                  onChange={(e) =>
                    setContentDraft({
                      ...contentDraft,
                      heroSubtitle: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Bottom CTA Banner Heading
                </label>
                <input
                  type="text"
                  value={contentDraft.ctaTitle}
                  onChange={(e) =>
                    setContentDraft({ ...contentDraft, ctaTitle: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={contentDraft.phone}
                  onChange={(e) =>
                    setContentDraft({ ...contentDraft, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={contentDraft.email}
                  onChange={(e) =>
                    setContentDraft({ ...contentDraft, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Head Office Address
                </label>
                <input
                  type="text"
                  value={contentDraft.address}
                  onChange={(e) =>
                    setContentDraft({ ...contentDraft, address: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-sm"
                />
              </div>
            </div>
          </form>
        )}

        {/* TAB 3: NAVIGATION MENU & CATEGORIES */}
        {activeTab === "menus" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Navbar Links */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 space-y-5 shadow-xs">
              <h2 className="text-lg font-extrabold text-zinc-950">
                Top Header Menu Links
              </h2>

              <div className="space-y-2.5">
                {navMenu.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200"
                  >
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) =>
                        updateNavMenuItem(item.id, { label: e.target.value })
                      }
                      className="flex-1 px-3 py-1.5 rounded-lg border border-zinc-300 text-xs font-bold bg-white"
                    />
                    <input
                      type="text"
                      value={item.href}
                      onChange={(e) =>
                        updateNavMenuItem(item.id, { href: e.target.value })
                      }
                      className="w-36 px-3 py-1.5 rounded-lg border border-zinc-300 text-xs font-mono bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        deleteNavMenuItem(item.id);
                        showToast(`Removed menu "${item.label}"`);
                      }}
                      className="p-2 rounded-lg text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-100 space-y-2">
                <p className="text-xs font-bold text-zinc-700">
                  Add New Header Link
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMenuLabel}
                    onChange={(e) => setNewMenuLabel(e.target.value)}
                    placeholder="Label (e.g. Export)"
                    className="flex-1 px-3 py-2 rounded-xl border border-zinc-300 text-xs"
                  />
                  <input
                    type="text"
                    value={newMenuHref}
                    onChange={(e) => setNewMenuHref(e.target.value)}
                    placeholder="/products"
                    className="w-32 px-3 py-2 rounded-xl border border-zinc-300 text-xs font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!newMenuLabel.trim() || !newMenuHref.trim()) return;
                      addNavMenuItem({
                        label: newMenuLabel.trim(),
                        href: newMenuHref.trim(),
                      });
                      setNewMenuLabel("");
                      setNewMenuHref("");
                      showToast("Added menu item!");
                    }}
                    className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Mega Menu Categories */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 space-y-5 shadow-xs">
              <h2 className="text-lg font-extrabold text-zinc-950">
                Products Mega-Menu Categories
              </h2>

              <div className="space-y-2.5">
                {megaCategories.map((cat) => (
                  <div
                    key={cat.slug}
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-200"
                  >
                    <div>
                      <p className="text-xs font-bold text-zinc-900">
                        {cat.title}{" "}
                        <span className="font-mono text-zinc-400">
                          ({cat.slug})
                        </span>
                      </p>
                      <p className="text-[11px] text-zinc-500">
                        {cat.subcategories.length} subcategories
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        deleteMegaCategory(cat.slug);
                        showToast(`Removed category "${cat.title}"`);
                      }}
                      className="p-2 rounded-lg text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-100 space-y-2">
                <p className="text-xs font-bold text-zinc-700">
                  Add Mega-Menu Category
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={newMegaTitle}
                    onChange={(e) => setNewMegaTitle(e.target.value)}
                    placeholder="Title (e.g. Solar Clamps)"
                    className="px-3 py-2 rounded-xl border border-zinc-300 text-xs"
                  />
                  <input
                    type="text"
                    value={newMegaSlug}
                    onChange={(e) => setNewMegaSlug(e.target.value)}
                    placeholder="Slug (e.g. solar-clamps)"
                    className="px-3 py-2 rounded-xl border border-zinc-300 text-xs font-mono"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMegaDesc}
                    onChange={(e) => setNewMegaDesc(e.target.value)}
                    placeholder="Short description..."
                    className="flex-1 px-3 py-2 rounded-xl border border-zinc-300 text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!newMegaTitle.trim() || !newMegaSlug.trim()) return;
                      addMegaCategory({
                        title: newMegaTitle.trim(),
                        slug: newMegaSlug.trim(),
                        description: newMegaDesc.trim(),
                        subcategories: [],
                      });
                      setNewMegaTitle("");
                      setNewMegaSlug("");
                      setNewMegaDesc("");
                      showToast("Added mega-menu category!");
                    }}
                    className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BACKUP / IMPORT / RESET */}
        {activeTab === "backup" && (
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 max-w-2xl space-y-6 shadow-xs">
            <div>
              <h2 className="text-lg font-extrabold text-zinc-950">
                Backup, Restore &amp; Reset
              </h2>
              <p className="text-xs text-zinc-500 mt-1">
                All edits are saved live in your browser. Export JSON to share or
                back up your changes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleExportJson}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#111113] hover:bg-zinc-800 text-white text-xs font-bold"
              >
                <Download className="w-4 h-4 text-red-400" />
                Export Site Data (.JSON)
              </button>

              <label className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-50 text-zinc-800 text-xs font-bold cursor-pointer">
                <Upload className="w-4 h-4 text-red-600" />
                Import JSON Backup
                <input
                  type="file"
                  accept="application/json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>

              <button
                type="button"
                onClick={() => {
                  resetToDefaults();
                  showToast("Reset all data to factory defaults!");
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold"
              >
                <RotateCcw className="w-4 h-4" />
                Reset to Defaults
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ADD / EDIT PRODUCT MODAL */}
      {(isAddingProduct || editingProduct) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => {
              setIsAddingProduct(false);
              setEditingProduct(null);
            }}
          />
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl border border-zinc-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 bg-[#111113] text-white flex items-center justify-between">
              <h3 className="font-extrabold text-base">
                {isAddingProduct ? "Add New Product" : `Edit: ${editingProduct?.name}`}
              </h3>
              <button
                type="button"
                onClick={() => {
                  setIsAddingProduct(false);
                  setEditingProduct(null);
                }}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={handleSaveProduct}
              className="p-6 overflow-y-auto space-y-4 text-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 bg-white"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    URL Slug (auto if blank)
                  </label>
                  <input
                    type="text"
                    value={formSlug}
                    onChange={(e) => setFormSlug(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Image Path / Upload
                  </label>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={formImage}
                      onChange={(e) => setFormImage(e.target.value)}
                      placeholder="/images/products/..."
                      className="flex-1 px-3.5 py-2 rounded-xl border border-zinc-300 text-xs font-mono"
                    />
                    <label className="px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-xs font-bold text-zinc-800 cursor-pointer shrink-0 flex items-center gap-1">
                      <Upload className="w-3.5 h-3.5" />
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          const reader = new FileReader();
                          reader.onload = () => {
                            if (typeof reader.result === "string") {
                              setFormImage(reader.result);
                            }
                          };
                          reader.readAsDataURL(file);
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-300 text-xs"
                />
              </div>

              {/* Spec Rows Editor */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-zinc-700">
                    Specs (Part No | Size | Finish | Box Qty | Pallet Qty)
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setFormSpecRows([...formSpecRows, ["", "", "HDG", "", ""]])
                    }
                    className="text-xs font-bold text-red-600 hover:text-red-700"
                  >
                    + Add Row
                  </button>
                </div>
                {formSpecRows.map((row, rIdx) => (
                  <div key={rIdx} className="flex gap-1.5 items-center">
                    {[0, 1, 2, 3, 4].map((cIdx) => (
                      <input
                        key={cIdx}
                        type="text"
                        value={row[cIdx] || ""}
                        onChange={(e) => {
                          const copy = formSpecRows.map((r) => [...r]);
                          copy[rIdx][cIdx] = e.target.value;
                          setFormSpecRows(copy);
                        }}
                        placeholder={
                          ["Part No", "Size", "Finish", "Box", "Pallet"][cIdx]
                        }
                        className="w-full px-2 py-1.5 rounded-lg border border-zinc-300 text-xs font-mono"
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        setFormSpecRows(
                          formSpecRows.filter((_, i) => i !== rIdx)
                        )
                      }
                      className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-zinc-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingProduct(false);
                    setEditingProduct(null);
                  }}
                  className="px-4 py-2 rounded-xl border border-zinc-300 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
