"use client";
// src/app/insights/page.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandBar } from "@/components/ui/BrandBar";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimateIn, StaggerChildren, staggerItem } from "@/components/ui/AnimateIn";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { BRAND_COLORS, type BrandColor } from "@/lib/utils";
import { ARTICLES } from "@/lib/articleData";
import { useLanguage } from "@/context/LanguageContext";

const ACCENT_ORDER: BrandColor[] = ["purple", "green", "blue"];

function ArticleCard({
  slug,
  category,
  title,
  excerpt,
  author,
  date,
  readTime,
  accent,
  featured = false,
  lang,
}: {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  accent: BrandColor;
  featured?: boolean;
  lang: "en" | "fa";
}) {
  const color = BRAND_COLORS[accent];

  if (featured) {
    return (
      <motion.article
        variants={staggerItem}
        className="group col-span-full rounded-2xl bg-panel border border-white/[0.05] overflow-hidden hover:border-white/10 transition-all duration-400 cursor-pointer"
      >
        <Link href={`/insights/${slug}`} className="flex flex-col lg:flex-row">
          {/* Visual side */}
          <div
            className="relative lg:w-[420px] flex-shrink-0 h-52 lg:h-auto overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)`,
              borderBottom: `3px solid ${color}`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border"
                  style={{
                    width: 50 + i * 30,
                    height: 50 + i * 30,
                    borderColor: `${color}${Math.max(5, 22 - i * 3).toString(16).padStart(2, "0")}`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
              <AsteriskMark size={40} />
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${color}18 0%, transparent 70%)`,
              }}
            />
            {/* Featured badge */}
            <div
              className="absolute top-4 left-4 font-mono text-[0.58rem] uppercase tracking-widest px-2.5 py-1 rounded border"
              style={{ color, borderColor: `${color}40`, background: `${color}14` }}
            >
              {lang === "fa" ? "ویژه" : "Featured"}
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col flex-1 p-8 lg:p-10 gap-5">
            <div className="flex items-center gap-2">
              <AsteriskMark size={10} />
              <span
                className="text-[0.65rem] font-bold uppercase tracking-widest"
                style={{ color }}
              >
                {category}
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-white leading-snug group-hover:text-frost transition-colors duration-200">
              {title}
            </h2>
            <p className="text-sm text-steel leading-relaxed flex-1 max-w-2xl">{excerpt}</p>
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
              <div className="flex items-center gap-4 text-[0.65rem] text-muted font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={10} /> {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={10} /> {readTime}
                </span>
              </div>
              <span
                className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
                style={{ color }}
              >
                {lang === "fa" ? "ادامه مطلب" : "Read article"}
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col rounded-2xl bg-panel border border-white/[0.05] overflow-hidden hover:border-white/10 transition-all duration-400 cursor-pointer"
    >
      <Link href={`/insights/${slug}`} className="flex flex-col flex-1">
        {/* Visual header */}
        <div
          className="relative h-44 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #141414 0%, #1C1C1C 100%)`,
            borderBottom: `3px solid ${color}`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: 40 + i * 25,
                  height: 40 + i * 25,
                  borderColor: `${color}${Math.max(5, 20 - i * 3).toString(16).padStart(2, "0")}`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
            <AsteriskMark size={32} />
          </div>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${color}10 0%, transparent 70%)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 gap-4">
          <div className="flex items-center gap-2">
            <AsteriskMark size={10} />
            <span
              className="text-[0.65rem] font-bold uppercase tracking-widest"
              style={{ color }}
            >
              {category}
            </span>
          </div>
          <h3 className="text-base font-bold text-white leading-snug group-hover:text-frost transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-steel leading-relaxed flex-1">{excerpt}</p>
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
            <div className="flex items-center gap-3 text-[0.65rem] text-muted font-mono">
              <span className="flex items-center gap-1">
                <Calendar size={10} /> {date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={10} /> {readTime}
              </span>
            </div>
            <span
              className="flex items-center gap-1 text-xs font-semibold transition-all duration-200"
              style={{ color }}
            >
              {lang === "fa" ? "ادامه" : "Read"}
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function InsightsPage() {
  const { lang, isRTL } = useLanguage();

  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);
  const latest = [...ARTICLES].reverse().slice(0, 3);

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 bg-[#080808]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(168,204,224,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimateIn>
            <SectionLabel
              text={lang === "fa" ? "بینش‌ها" : "Insights"}
              accent="ice"
              className="mb-5"
            />
            <BrandBar width="120px" height={3} className="mb-6" />
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight max-w-2xl">
                {lang === "fa" ? (
                  <>
                    دانشی که در
                    <br />
                    <span className="text-white/25">هر پانل وجود دارد.</span>
                  </>
                ) : (
                  <>
                    Knowledge built
                    <br />
                    <span className="text-white/25">into every panel.</span>
                  </>
                )}
              </h1>
              <p className="text-sm text-steel leading-relaxed max-w-xs">
                {lang === "fa"
                  ? "مقالات فنی، راهنماها و تحلیل‌های مهندسی از تیم آسه پانل"
                  : "Technical articles, guides and engineering analysis from the ASEH Panel team."}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FEATURED + LATEST ── */}
      <section className="py-12 bg-[#0D0D0D]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col xl:flex-row gap-8">

            {/* Left: articles grid */}
            <div className="flex-1 min-w-0">
              <AnimateIn className="mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 rounded-full bg-brand-ice/40" />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    {lang === "fa" ? "همه مقالات" : "All Articles"}
                  </span>
                </div>
              </AnimateIn>

              <StaggerChildren className="grid grid-cols-1 gap-5" stagger={0.1}>
                {/* Featured article */}
                <ArticleCard
                  key={featured.slug}
                  slug={featured.slug}
                  category={lang === "fa" ? featured.category.fa : featured.category.en}
                  title={lang === "fa" ? featured.title.fa : featured.title.en}
                  excerpt={lang === "fa" ? featured.excerpt.fa : featured.excerpt.en}
                  author={lang === "fa" ? featured.author.fa : featured.author.en}
                  date={lang === "fa" ? featured.date.fa : featured.date.en}
                  readTime={lang === "fa" ? featured.readTime.fa : featured.readTime.en}
                  accent={featured.accent}
                  featured
                  lang={lang}
                />

                {/* Rest as grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {rest.map((article, i) => (
                    <ArticleCard
                      key={article.slug}
                      slug={article.slug}
                      category={lang === "fa" ? article.category.fa : article.category.en}
                      title={lang === "fa" ? article.title.fa : article.title.en}
                      excerpt={lang === "fa" ? article.excerpt.fa : article.excerpt.en}
                      author={lang === "fa" ? article.author.fa : article.author.en}
                      date={lang === "fa" ? article.date.fa : article.date.en}
                      readTime={lang === "fa" ? article.readTime.fa : article.readTime.en}
                      accent={ACCENT_ORDER[i + 1] as BrandColor}
                      lang={lang}
                    />
                  ))}
                </div>
              </StaggerChildren>
            </div>

            {/* Right: latest sidebar */}
            <AnimateIn className="xl:w-[340px] flex-shrink-0">
              <div className="sticky top-28">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 rounded-full bg-brand-green/40" />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    {lang === "fa" ? "آخرین مقالات" : "Latest Articles"}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {latest.map((article, i) => {
                    const color = BRAND_COLORS[article.accent];
                    return (
                      <Link
                        key={article.slug}
                        href={`/insights/${article.slug}`}
                        className="group flex items-start gap-4 rounded-xl border border-white/[0.05] bg-panel p-4 hover:border-white/10 hover:bg-[#222] transition-all duration-200 cursor-pointer"
                      >
                        {/* Index */}
                        <span
                          className="font-mono text-[0.65rem] mt-0.5 min-w-[1.5rem] font-bold"
                          style={{ color }}
                        >
                          0{i + 1}
                        </span>
                        <div className="flex flex-col gap-1.5 min-w-0">
                          <span
                            className="text-[0.6rem] font-bold uppercase tracking-widest"
                            style={{ color }}
                          >
                            {lang === "fa" ? article.category.fa : article.category.en}
                          </span>
                          <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200 leading-snug">
                            {lang === "fa" ? article.title.fa : article.title.en}
                          </span>
                          <div className="flex items-center gap-2 text-[0.6rem] text-muted font-mono">
                            <span>{lang === "fa" ? article.date.fa : article.date.en}</span>
                            <span>·</span>
                            <span>{lang === "fa" ? article.readTime.fa : article.readTime.en}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* CTA card */}
                <div
                  className="mt-6 rounded-2xl border p-6"
                  style={{
                    borderColor: `${BRAND_COLORS.ice}25`,
                    background: `${BRAND_COLORS.ice}08`,
                  }}
                >
                  <div
                    className="h-px w-8 rounded-full mb-4"
                    style={{ background: BRAND_COLORS.ice }}
                  />
                  <h3 className="text-base font-bold text-white mb-2">
                    {lang === "fa" ? "پروژه‌ای دارید؟" : "Have a project?"}
                  </h3>
                  <p className="text-xs text-steel leading-relaxed mb-4">
                    {lang === "fa"
                      ? "تیم فنی ما آماده مشاوره و ارائه قیمت برای پروژه شماست."
                      : "Our engineering team is ready to spec and quote your project."}
                  </p>
                  <Link
                    href="/#contact"
                    className="flex items-center gap-2 text-xs font-semibold transition-colors duration-200 hover:opacity-80"
                    style={{ color: BRAND_COLORS.ice }}
                  >
                    {lang === "fa" ? "درخواست قیمت" : "Request a quote"}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
