"use client";
// src/app/insights/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandBar } from "@/components/ui/BrandBar";
import { AnimateIn, staggerItem } from "@/components/ui/AnimateIn";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { BRAND_COLORS } from "@/lib/utils";
import { getArticle, ARTICLES } from "@/lib/articleData";
import { useLanguage } from "@/context/LanguageContext";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const { lang, isRTL } = useLanguage();
  const color = BRAND_COLORS[article.accent];

  const category = lang === "fa" ? article.category.fa : article.category.en;
  const title = lang === "fa" ? article.title.fa : article.title.en;
  const excerpt = lang === "fa" ? article.excerpt.fa : article.excerpt.en;
  const author = lang === "fa" ? article.author.fa : article.author.en;
  const date = lang === "fa" ? article.date.fa : article.date.en;
  const readTime = lang === "fa" ? article.readTime.fa : article.readTime.en;
  const sections = lang === "fa" ? article.sections.fa : article.sections.en;

  const related = ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 bg-[#080808]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 55% at 50% 0%, ${color}08 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10"
          >
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {isRTL ? (
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              ) : (
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
              )}
              {lang === "fa" ? "بازگشت به مقالات" : "Back to Insights"}
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
            {/* Main title */}
            <div>
              <motion.div
                className="flex items-center gap-2 mb-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AsteriskMark size={10} />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest" style={{ color }}>
                  {category}
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-black leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {title}
              </motion.h1>

              <motion.p
                className="text-base text-steel leading-relaxed max-w-2xl mb-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {excerpt}
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl border"
                  style={{ borderColor: `${color}25`, background: `${color}0A` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                  <span className="text-xs font-semibold" style={{ color }}>{author}</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                  <Calendar size={11} /> {date}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted font-mono">
                  <Clock size={11} /> {readTime}
                </span>
              </motion.div>
            </div>

            {/* Table of contents */}
            <AnimateIn className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-white/[0.06] bg-panel p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-px w-6" style={{ background: color }} />
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em]" style={{ color }}>
                    {lang === "fa" ? "فهرست مطالب" : "Contents"}
                  </span>
                </div>
                <ol className="flex flex-col gap-2.5">
                  {sections.map((section, i) => (
                    <li key={i}>
                      <a
                        href={`#section-${i}`}
                        className="group flex items-start gap-3 text-sm text-white/45 hover:text-white/80 transition-colors duration-200 cursor-pointer"
                      >
                        <span
                          className="font-mono text-[0.6rem] mt-0.5 min-w-[1.2rem] font-semibold"
                          style={{ color }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-14">
          <BrandBar width="100%" height={1} className="opacity-30" />
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

            {/* Article sections */}
            <motion.div
              className="flex flex-col gap-14"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  id={`section-${i}`}
                  variants={staggerItem}
                  className="scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="font-mono text-[0.62rem] px-2.5 py-1 rounded font-semibold"
                      style={{ color, background: `${color}14` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 max-w-[40px]" style={{ background: `${color}50` }} />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-black text-white mb-5 leading-snug">
                    {section.heading}
                  </h2>
                  <p className="text-base text-white/60 leading-[1.8] max-w-prose">
                    {section.body}
                  </p>
                </motion.div>
              ))}

              {/* End marker */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
                <AsteriskMark size={14} />
                <span className="font-mono text-[0.62rem] uppercase tracking-widest text-muted">
                  {lang === "fa" ? "پایان مقاله" : "End of Article"}
                </span>
                <div className="h-px flex-1 bg-white/[0.04]" />
              </div>
            </motion.div>

            {/* Sidebar */}
            <AnimateIn className="hidden lg:flex flex-col gap-5">
              <div className="sticky top-28 flex flex-col gap-5">
                {/* Related articles */}
                <div className="rounded-2xl border border-white/[0.06] bg-panel p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="h-px w-6 bg-brand-green/50" />
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                      {lang === "fa" ? "مقالات مرتبط" : "Related Articles"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {related.map((rel) => {
                      const relColor = BRAND_COLORS[rel.accent];
                      return (
                        <Link
                          key={rel.slug}
                          href={`/insights/${rel.slug}`}
                          className="group flex items-start gap-3 py-3 border-b border-white/[0.04] last:border-0 cursor-pointer"
                        >
                          <div
                            className="w-1 h-full min-h-[2.5rem] rounded-full flex-shrink-0 mt-0.5"
                            style={{ background: relColor }}
                          />
                          <div className="flex flex-col gap-1">
                            <span
                              className="text-[0.6rem] font-bold uppercase tracking-wider"
                              style={{ color: relColor }}
                            >
                              {lang === "fa" ? rel.category.fa : rel.category.en}
                            </span>
                            <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-200 leading-snug">
                              {lang === "fa" ? rel.title.fa : rel.title.en}
                            </span>
                            <span className="text-[0.6rem] text-muted font-mono">
                              {lang === "fa" ? rel.readTime.fa : rel.readTime.en}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="rounded-2xl border p-6"
                  style={{ borderColor: `${color}25`, background: `${color}08` }}
                >
                  <div className="h-px w-8 rounded-full mb-4" style={{ background: color }} />
                  <h3 className="text-base font-bold text-white mb-2">
                    {lang === "fa" ? "نیاز به مشاوره فنی دارید؟" : "Need technical advice?"}
                  </h3>
                  <p className="text-xs text-steel leading-relaxed mb-4">
                    {lang === "fa"
                      ? "مهندسان ما آماده پاسخ به سوالات تخصصی پروژه شما هستند."
                      : "Our engineers are available to answer your project-specific technical questions."}
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-200 hover:opacity-80"
                    style={{ color }}
                  >
                    {lang === "fa" ? "تماس با تیم مهندسی" : "Contact engineering team"}
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES (mobile) ── */}
      <section className="py-12 bg-[#0D0D0D] lg:hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 rounded-full bg-brand-green/40" />
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
              {lang === "fa" ? "مقالات مرتبط" : "Related Articles"}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {related.map((rel) => {
              const relColor = BRAND_COLORS[rel.accent];
              return (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.05] bg-panel p-4 hover:border-white/10 transition-all duration-200 cursor-pointer"
                >
                  <div
                    className="w-1 self-stretch rounded-full flex-shrink-0"
                    style={{ background: relColor }}
                  />
                  <div className="flex flex-col gap-1 min-w-0">
                    <span
                      className="text-[0.6rem] font-bold uppercase tracking-wider"
                      style={{ color: relColor }}
                    >
                      {lang === "fa" ? rel.category.fa : rel.category.en}
                    </span>
                    <span className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors duration-200 leading-snug">
                      {lang === "fa" ? rel.title.fa : rel.title.en}
                    </span>
                  </div>
                  <ArrowRight size={14} className="flex-shrink-0 text-white/20 group-hover:text-white/50 transition-colors duration-200 ml-auto" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
