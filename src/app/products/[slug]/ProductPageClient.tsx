"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { getProduct, PRODUCTS } from "@/lib/productData";
import { BRAND_COLORS } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandBar } from "@/components/ui/BrandBar";
import { AnimateIn, staggerItem } from "@/components/ui/AnimateIn";
import { AsteriskMark } from "@/components/ui/AsteriskMark";

export default function ProductPageClient({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = getProduct(slug);
  if (!product) notFound();

  const { lang, isRTL } = useLanguage();
  const color = BRAND_COLORS[product.accent];

  const name = product.name[lang];
  const subtitle = product.subtitle[lang];
  const description = product.description[lang];
  const heroTagline = product.heroTagline[lang];

  const otherProducts = PRODUCTS.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={name}
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(8,8,8,0.35) 0%, rgba(8,8,8,0.82) 55%, #080808 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${color}14 0%, transparent 70%)` }}
          />
        </div>

        {/* Back link */}
        <motion.div
          className="absolute top-24 left-6 lg:left-12 z-10"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/#products"
            className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200 cursor-pointer group"
          >
            {isRTL
              ? <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              : <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
            }
            <span>{lang === "fa" ? "بازگشت به محصولات" : "Back to Products"}</span>
          </Link>
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-20 w-full">
          <motion.div
            className="flex items-center gap-2.5 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <AsteriskMark size={14} />
            <span
              className="font-mono text-[0.7rem] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full border"
              style={{ color, borderColor: `${color}40`, background: `${color}14` }}
            >
              {product.code}
            </span>
            <div className="h-px w-10 opacity-35" style={{ background: color }} />
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-white/35">
              {product.thickness}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-black leading-tight mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {name}
          </motion.h1>

          <motion.p
            className="text-lg text-white/45 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>

          <motion.p
            className="text-base text-white/65 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            {heroTagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mt-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            {product.certBadges.map((badge) => (
              <span
                key={badge}
                className="font-mono text-[0.62rem] uppercase tracking-wider px-2.5 py-1 rounded border border-white/10 text-white/45"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SPECS GRID ── */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimateIn className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 rounded-full" style={{ background: color }} />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                {lang === "fa" ? "مشخصات فنی" : "Technical Specifications"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black">
              {lang === "fa" ? "داده‌های عملکردی" : "Performance Data"}
            </h2>
          </AnimateIn>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } } as Variants}
          >
            {product.specs.map((spec) => (
              <motion.div
                key={spec.label}
                variants={staggerItem as Variants}
                className="rounded-xl border border-white/[0.06] bg-[#141414] p-4 hover:border-white/10 transition-colors duration-200"
              >
                <div className="font-mono text-[0.58rem] uppercase tracking-wider text-white/30 mb-2">
                  {lang === "fa" ? spec.labelFa : spec.label}
                </div>
                <div className="font-mono text-sm font-semibold" style={{ color }}>
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimateIn className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 rounded-full" style={{ background: color }} />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                {lang === "fa" ? "ویژگی‌های کلیدی" : "Key Features"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black">
              {lang === "fa" ? "چرا " + name + "؟" : "Why " + name + "?"}
            </h2>
            <p className="text-base text-white/45 mt-3 max-w-xl leading-relaxed">
              {description}
            </p>
          </AnimateIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } } as Variants}
          >
            {product.features.map((feat) => (
              <motion.div
                key={feat.title}
                variants={staggerItem as Variants}
                className="group rounded-2xl border border-white/[0.06] bg-[#141414] p-7 hover:border-white/10 transition-all duration-300 hover:bg-[#181818]"
              >
                <div
                  className="w-8 h-[3px] rounded-full mb-5 transition-all duration-300 group-hover:w-14"
                  style={{ background: color }}
                />
                <h3 className="text-lg font-bold mb-3 text-white">
                  {lang === "fa" ? feat.titleFa : feat.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {lang === "fa" ? feat.bodyFa : feat.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      {product.whatIsIt && (
        <section className="py-20 bg-[#0C0C0C]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 rounded-full" style={{ background: color }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                  {lang === "fa" ? "درباره محصول" : "About the Product"}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                {lang === "fa" ? `ساندویچ پانل دیواری آسه چیست؟` : `What is ${name}?`}
              </h2>
              <p className="text-base text-white/60 max-w-3xl leading-relaxed">
                {product.whatIsIt[lang]}
              </p>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── PIR vs PUR COMPARISON ── */}
      {product.coreComparison && (
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimateIn className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 rounded-full" style={{ background: color }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                  {lang === "fa" ? "مقایسه هسته" : "Core Comparison"}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black">
                {lang === "fa" ? "پانل دیواری PIR و PUR چه تفاوتی دارند؟" : "PIR vs PUR — What's the Difference?"}
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {(["pur", "pir"] as const).map((type) => (
                <AnimateIn key={type}>
                  <div className="rounded-2xl border border-white/[0.06] bg-[#141414] p-7">
                    <div className="w-8 h-[3px] rounded-full mb-5" style={{ background: color }} />
                    <h3 className="text-lg font-bold mb-3 text-white">
                      {product.coreComparison![type].title[lang]}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {product.coreComparison![type].body[lang]}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn>
              <p className="text-sm text-white/45 leading-relaxed border-r-2 pr-4 max-w-2xl" style={{ borderColor: color }}>
                {product.coreComparison.note[lang]}
              </p>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── PRODUCT VARIANTS ── */}
      {product.productVariants && product.productVariants.length > 0 && (
        <section className="py-20 bg-[#0C0C0C]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimateIn className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 rounded-full" style={{ background: color }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                  {lang === "fa" ? "انواع محصول" : "Product Types"}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black">
                {lang === "fa" ? `انواع ${name} آسه` : `Types of Aseh ${name}`}
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {product.productVariants.map((variant) => (
                <AnimateIn key={variant.code}>
                  <div className="rounded-2xl border border-white/[0.06] bg-[#141414] p-7">
                    <span
                      className="font-mono text-[0.62rem] uppercase tracking-wider px-2.5 py-1 rounded border mb-5 inline-block"
                      style={{ color, borderColor: `${color}40`, background: `${color}14` }}
                    >
                      {variant.code}
                    </span>
                    <h3 className="text-lg font-bold mt-3 mb-3 text-white">
                      {variant.name[lang]}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-5">
                      {variant.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(lang === "fa" ? variant.applications.fa : variant.applications.en).map((app, i) => (
                        <span
                          key={i}
                          className="text-xs text-white/40 px-2.5 py-1 rounded border border-white/[0.06] bg-white/[0.03]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── APPLICATIONS ── */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimateIn className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 rounded-full" style={{ background: color }} />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                {lang === "fa" ? "کاربردها" : "Applications"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black">
              {lang === "fa" ? "کجا استفاده می‌شود" : "Where It's Used"}
            </h2>
          </AnimateIn>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } } as Variants}
          >
            {(lang === "fa" ? product.applications.fa : product.applications.en).map((app, i) => (
              <motion.div
                key={i}
                variants={staggerItem as Variants}
                className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-[#141414] px-5 py-4"
              >
                <CheckCircle2 size={15} style={{ color, flexShrink: 0 }} />
                <span className="text-sm text-white/70">{app}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY SPECIALIZED ── */}
      {product.whySpecialized && (
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimateIn>
              <div className="rounded-2xl border border-white/[0.06] bg-[#141414] p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 rounded-full" style={{ background: color }} />
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                    {lang === "fa" ? "چرا پانل تخصصی؟" : "Why Specialised Panels?"}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-white mb-5">
                  {lang === "fa"
                    ? "چرا سردخانه‌های صنعتی به پانل‌های تخصصی نیاز دارند؟"
                    : "Why Do Industrial Cold Rooms Need Specialised Panels?"}
                </h2>
                <p className="text-sm text-white/55 leading-relaxed max-w-3xl">
                  {product.whySpecialized[lang]}
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── SHEET QUALITY NOTE ── */}
      {product.qualityNote && (
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimateIn>
              <div className="rounded-2xl border border-white/[0.06] bg-[#141414] p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="h-px w-8 rounded-full mb-3" style={{ background: color }} />
                  <h2 className="text-xl font-black text-white">
                    {lang === "fa" ? "کیفیت ورق‌ها؛ عامل تعیین‌کننده در دوام پانل" : "Sheet Quality — The Deciding Factor in Panel Durability"}
                  </h2>
                </div>
                <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
                  {product.qualityNote[lang]}
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── WHY BUY + PRICE FACTORS ── */}
      {(product.whyBuy || product.priceFactors) && (
        <section className="py-20 bg-[#0C0C0C]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {product.whyBuy && (
                <AnimateIn>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-px w-8 rounded-full" style={{ background: color }} />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                      {lang === "fa" ? "چرا آسه پانل" : "Why Aseh"}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black mb-6">
                    {lang === "fa" ? "چرا از آسه پانل خرید کنیم؟" : "Why Buy from Aseh?"}
                  </h2>
                  <ul className="space-y-3">
                    {(lang === "fa" ? product.whyBuy.fa : product.whyBuy.en).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={15} style={{ color, flexShrink: 0, marginTop: 2 }} />
                        <span className="text-sm text-white/65">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              )}
              {product.priceFactors && (
                <AnimateIn>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-px w-8 rounded-full" style={{ background: color }} />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                      {lang === "fa" ? "استعلام قیمت" : "Pricing"}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black mb-3">
                    {lang === "fa" ? "قیمت ساندویچ پانل دیواری آسه" : `${name} Pricing`}
                  </h2>
                  <p className="text-sm text-white/45 mb-6 leading-relaxed">
                    {lang === "fa"
                      ? "قیمت ساندویچ پانل دیواری به عوامل زیر وابسته است:"
                      : "Wall panel pricing depends on the following factors:"}
                  </p>
                  <ul className="space-y-2">
                    {(lang === "fa" ? product.priceFactors.fa : product.priceFactors.en).map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                        <span className="text-sm text-white/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CUSTOM CTA ── */}
      {product.ctaCustom && (
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimateIn>
              <div
                className="rounded-3xl border overflow-hidden relative"
                style={{ borderColor: `${color}30`, background: `${color}0A` }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 70% 80% at 50% 100%, ${color}12 0%, transparent 70%)` }}
                />
                <div className="relative px-8 lg:px-16 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <div className="h-px w-10 rounded-full mb-5" style={{ background: color }} />
                    <h2 className="text-2xl lg:text-3xl font-black mb-3 text-white">
                      {product.ctaCustom.title[lang]}
                    </h2>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {product.ctaCustom.body[lang]}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                    {product.ctaCustom.buttons.map((btn, i) => (
                      <Link
                        key={i}
                        href={btn.href}
                        className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
                        style={btn.primary
                          ? { background: color, color: "#fff" }
                          : { border: `1px solid ${color}40`, color, background: `${color}0D` }
                        }
                      >
                        {btn.label[lang]}
                        {btn.primary && (isRTL ? <ArrowLeft size={15} /> : <ArrowRight size={15} />)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {product.faq && product.faq.length > 0 && (
        <section className="py-20 bg-[#0C0C0C]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <AnimateIn className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 rounded-full" style={{ background: color }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color }}>
                  {lang === "fa" ? "سوالات متداول" : "FAQ"}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black">
                {lang === "fa" ? "سوالات پرتکرار مشتریان" : "Frequently Asked Questions"}
              </h2>
            </AnimateIn>
            <motion.div
              className="flex flex-col gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } } as Variants}
            >
              {product.faq.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem as Variants}
                  className="rounded-2xl border border-white/[0.06] bg-[#141414] p-6 lg:p-8"
                >
                  <h3 className="text-base font-bold text-white mb-3 flex items-start gap-3">
                    <span className="font-mono text-[0.62rem] mt-1 px-2 py-0.5 rounded flex-shrink-0" style={{ color, background: `${color}14` }}>
                      Q{i + 1}
                    </span>
                    {item.q[lang]}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed pr-9">
                    {item.a[lang]}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimateIn>
            <div className="rounded-3xl border border-white/[0.06] bg-[#111] overflow-hidden relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${color}0C 0%, transparent 70%)` }}
              />
              <div className="relative px-8 lg:px-16 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <BrandBar width="60px" height={3} className="mb-5" />
                  <h2 className="text-3xl lg:text-4xl font-black mb-3">
                    {lang === "fa" ? "پروژه‌ای دارید؟" : "Have a project in mind?"}
                  </h2>
                  <p className="text-base text-white/45 leading-relaxed">
                    {lang === "fa"
                      ? "تیم فنی ما آماده ارائه مشاوره تخصصی و پیشنهاد قیمت سریع برای پروژه شماست."
                      : "Our technical team is ready to provide expert consultation and a fast quote tailored to your project requirements."}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Link
                    href="/#contact"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
                    style={{ background: color }}
                  >
                    {lang === "fa" ? "درخواست قیمت" : "Request a Quote"}
                    {isRTL ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                  </Link>
                  <a
                    href="/#contact"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white/65 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                  >
                    {lang === "fa" ? "دانلود دیتاشیت" : "Technical Datasheet"}
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── OTHER PRODUCTS ── */}
      <section className="py-16 bg-[#0C0C0C]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimateIn>
            <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/35 mb-6">
              {lang === "fa" ? "سایر محصولات" : "Other Products"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {otherProducts.map((p) => {
                const pColor = BRAND_COLORS[p.accent];
                return (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-white/[0.05] bg-[#141414] px-4 py-4 hover:border-white/10 transition-all duration-200 cursor-pointer"
                  >
                    <div>
                      <div className="font-mono text-[0.6rem] uppercase tracking-wider mb-1" style={{ color: pColor }}>
                        {p.code}
                      </div>
                      <div className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors duration-200">
                        {p.name[lang]}
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-white/20 group-hover:text-white/55 transition-colors duration-200 flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
