"use client";
// src/components/layout/Navbar.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { BrandBarFull } from "@/components/ui/BrandBar";
import { Menu, X, Languages, ChevronDown } from "lucide-react";
import { cn, BRAND_COLORS } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS } from "@/lib/productData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  const NAV_LINKS = [
    { label: t.nav.technology,  href: "#technology"   },
    { label: t.nav.fireShield,  href: "#fire-shield"  },
    { label: t.nav.coldStorage, href: "#cold-storage" },

    { label: t.nav.insights,    href: "/insights"     },
    { label: t.nav.about,       href: "/about"        },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <BrandBarFull className="fixed top-0 left-0 right-0 z-[60]" height={3} />

      <motion.header
        className={cn(
          "fixed top-[3px] left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-nav" : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between rtl:flex-row-reverse lg:rtl:flex-row">
          <a href="/" className="group flex-shrink-0">
            <Logo size="md" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Products dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                onClick={() => setProductsOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium text-[#A8CCE0] hover:text-white transition-colors duration-200 tracking-wide cursor-pointer"
              >
                {t.nav.products}
                <ChevronDown
                  size={13}
                  className={cn("transition-transform duration-200 mt-px", productsOpen && "rotate-180")}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full pt-3 left-1/2 -translate-x-1/2 w-64"
                    style={{ marginTop: 0 }}
                  >
                  <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden"
                    style={{ background: "rgba(16,16,16,0.96)", backdropFilter: "blur(20px)", boxShadow: "0 16px 48px rgba(0,0,0,0.6)" }}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t border-white/[0.08]" style={{ background: "rgba(16,16,16,0.96)" }} />

                    <div className="p-2">
                      {PRODUCTS.map((product) => {
                        const color = BRAND_COLORS[product.accent];
                        return (
                          <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            onClick={() => setProductsOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150 group cursor-pointer"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: color }}
                            />
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors duration-150 leading-tight">
                                {product.name[lang]}
                              </span>
                              <span className="font-mono text-[0.58rem] uppercase tracking-wider mt-0.5" style={{ color }}>
                                {product.code}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="px-2 pb-2">
                      <a
                        href="/#products"
                        onClick={() => setProductsOpen(false)}
                        className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl border border-white/[0.07] text-xs text-white/40 hover:text-white/70 hover:border-white/15 transition-all duration-150"
                      >
                        {lang === "fa" ? "مشاهده همه محصولات" : "View all products"}
                      </a>
                    </div>
                  </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium text-[#A8CCE0] transition-colors duration-200 tracking-wide",
                  link.href === "#fire-shield"  && "hover:text-[#ef4444]",
                  link.href === "#cold-storage" && "hover:text-[#7dd3fc]",
                  link.href !== "#fire-shield" && link.href !== "#cold-storage" && "hover:text-white"
                )}
              >
                {link.href === "#fire-shield" && (
                  <span className="flame-icon" aria-hidden="true">
                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 13C5.5 13 1 10 1 6C1 4 2.5 2.5 4 2C3.8 3.2 4.5 4 5.5 4C5.5 4 5 2.5 6 1C7.5 2.5 10 4.5 10 7C10 10.5 5.5 13 5.5 13Z" fill="#F97316" />
                      <path d="M5.5 13C5.5 13 3 10.5 3 8C3 6.5 4 5.5 5 5C4.9 5.8 5.3 6.5 6 6.5C5.8 5.8 6.2 5 7 4.5C8 5.5 8.5 6.5 8.5 8C8.5 10.5 5.5 13 5.5 13Z" fill="#FDE68A" />
                    </svg>
                  </span>
                )}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + lang toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "fa" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/25 transition-colors duration-200 text-xs font-semibold text-[#A8CCE0] hover:text-white"
              aria-label="Toggle language"
            >
              <Languages size={13} />
              <span>{lang === "en" ? "FA" : "EN"}</span>
            </button>

            <a
              href="#contact"
              className="text-sm font-semibold text-[#A8CCE0] hover:text-white transition-colors tracking-wide"
            >
              {t.nav.contact}
            </a>
            <Button variant="gradient-border" size="sm" href="#contact">
              {t.nav.requestQuote}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex flex-col pt-24 px-6 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-1">
              {/* Mobile products accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-2xl font-bold text-white/90 hover:text-white py-3 cursor-pointer"
                >
                  <span>{t.nav.products}</span>
                  <ChevronDown
                    size={20}
                    className={cn("transition-transform duration-200", mobileProductsOpen && "rotate-180")}
                  />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 pl-4 pb-3 border-l border-white/10 ml-2 mt-1">
                        {PRODUCTS.map((product) => {
                          const color = BRAND_COLORS[product.accent];
                          return (
                            <Link
                              key={product.slug}
                              href={`/products/${product.slug}`}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-center gap-3 py-2.5 cursor-pointer group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                              <div>
                                <div className="text-base font-semibold text-white/80 group-hover:text-white transition-colors">
                                  {product.name[lang]}
                                </div>
                                <div className="font-mono text-[0.6rem] uppercase tracking-wider" style={{ color }}>
                                  {product.code}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-bold text-white/90 hover:text-white py-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setLang(lang === "en" ? "fa" : "en")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-sm font-semibold text-[#A8CCE0] hover:text-white transition-colors"
              >
                <Languages size={15} />
                {lang === "en" ? "فارسی" : "English"}
              </button>
            </div>

            <div className="mt-6 mb-8">
              <Button variant="gradient-border" size="lg" href="#contact" className="w-full justify-center">
                {t.nav.requestQuote}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
