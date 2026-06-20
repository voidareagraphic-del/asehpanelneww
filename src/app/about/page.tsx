"use client";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Mail, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandBar } from "@/components/ui/BrandBar";
import { AnimateIn, staggerItem } from "@/components/ui/AnimateIn";
import { BRAND_COLORS } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const PHONE = "02175092";
const MOBILE = "09108112496";
const EMAIL = "digital@asehtejaratasia.co";

const PRINCIPLES = [
  {
    fa: "تعهد در قبال کیفیت محصول",
    en: "Commitment to product quality",
    color: BRAND_COLORS.green,
  },
  {
    fa: "شفافیت در ارائه اطلاعات فنی",
    en: "Transparency in technical information",
    color: BRAND_COLORS.blue,
  },
  {
    fa: "مسئولیت‌پذیری در همراهی با پروژه‌های مشتریان",
    en: "Accountability in supporting customer projects",
    color: BRAND_COLORS.purple,
  },
];

const PRODUCTS_LIST = [
  { fa: "ساندویچ پانل سقفی", en: "Roof Panels", slug: "asp-ro", color: BRAND_COLORS.green },
  { fa: "ساندویچ پانل دیواری", en: "Wall Panels", slug: "asp-wa", color: BRAND_COLORS.blue },
  { fa: "ساندویچ پانل دیواری پیچ مخفی", en: "Secret Fix Panels", slug: "asp-sf", color: BRAND_COLORS.purple },
  { fa: "ساندویچ پانل سردخانه‌ای", en: "Cold Storage Panels", slug: "asp-cs", color: BRAND_COLORS.ice },
  { fa: "ساندویچ پانل کلین‌روم", en: "Clean Room Panels", slug: "asp-cr", color: BRAND_COLORS.ice },
];

const BRANDS = ["Bitzer", "Copeland", "Danfoss", "Embraco"];

export default function AboutPage() {
  const { lang, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${BRAND_COLORS.blue}10 0%, transparent 70%)` }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors group"
            >
              {isRTL
                ? <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                : <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />}
              {lang === "fa" ? "بازگشت به صفحه اصلی" : "Back to Home"}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 rounded-full" style={{ background: BRAND_COLORS.blue }} />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: BRAND_COLORS.blue }}>
              {lang === "fa" ? "درباره ما" : "About Us"}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-black leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {lang === "fa" ? (
              <>تجربه‌ای که<br /><span style={{ color: BRAND_COLORS.blue }}>به تولید رسیده است</span></>
            ) : (
              <>Experience that<br /><span style={{ color: BRAND_COLORS.blue }}>became production</span></>
            )}
          </motion.h1>

          <motion.p
            className="text-base text-white/50 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {lang === "fa"
              ? "داستان آسه پانل از جایی شروع می‌شود که بسیاری از پروژه‌های صنعتی با آن درگیرند: انتخاب تجهیزات و مصالحی که واقعاً قابل اعتماد باشند."
              : "Aseh Panel's story begins where many industrial projects struggle: choosing equipment and materials that are truly reliable."}
          </motion.p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 rounded-full" style={{ background: BRAND_COLORS.green }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: BRAND_COLORS.green }}>
                  {lang === "fa" ? "تاریخچه" : "History"}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                {lang === "fa" ? "از تأمین تجهیزات تا ارائه راهکارهای مهندسی" : "From Equipment Supply to Engineering Solutions"}
              </h2>
              <div className="space-y-5 text-sm text-white/55 leading-relaxed">
                <p>
                  {lang === "fa"
                    ? "مجموعه آسه تجارت آسیا فعالیت خود را بیش از دو دهه پیش در حوزه تأمین تجهیزات و قطعات صنعت برودت و تهویه مطبوع آغاز کرد. در طول این سال‌ها، همکاری با برندهای معتبر بین‌المللی باعث شد این مجموعه در پروژه‌های صنعتی و برودتی به‌عنوان یک تأمین‌کننده تخصصی شناخته شود."
                    : "Aseh Tejarat Asia began operations over two decades ago in the supply of refrigeration and HVAC equipment. Through years of collaboration with leading international brands, the group became known as a specialist supplier in industrial and refrigeration projects."}
                </p>
                <p>
                  {lang === "fa"
                    ? "تجربه‌ی حضور در پروژه‌های مختلف یک نکته مهم را روشن کرد؛ بسیاری از پروژه‌ها تنها به یک تأمین‌کننده محصول نیاز ندارند، بلکه به یک شریک فنی احتیاج دارند که بتواند راهکار مناسب ارائه دهد."
                    : "Extensive project experience revealed an important truth: many projects don't simply need a product supplier — they need a technical partner capable of providing the right solution."}
                </p>
                <p>
                  {lang === "fa"
                    ? "این تجربه عملی دید دقیق‌تری نسبت به نیازهای واقعی بازار ایجاد کرد؛ نیازهایی مانند عایق‌کاری مؤثر، دوام سازه، ایمنی در برابر آتش و کاهش مصرف انرژی. همین شناخت، زمینه‌ساز شکل‌گیری واحد تولیدی آسه پانل شد."
                    : "This hands-on experience created a clearer view of real market needs — effective insulation, structural durability, fire safety, and reduced energy consumption. This understanding led to the founding of the Aseh Panel manufacturing unit."}
                </p>
              </div>

              {/* Brand partners */}
              <div className="mt-10">
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-white/25 mb-4">
                  {lang === "fa" ? "برندهای همکار" : "Partner Brands"}
                </div>
                <div className="flex flex-wrap gap-3">
                  {BRANDS.map((b) => (
                    <span key={b} className="font-mono text-xs text-white/40 border border-white/[0.08] rounded-lg px-3 py-1.5">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Timeline */}
            <AnimateIn delay={0.15}>
              <div className="flex flex-col gap-6">
                {[
                  {
                    fa: "آغاز فعالیت در حوزه برودت و تهویه",
                    en: "Began operations in refrigeration & HVAC",
                    sub: { fa: "بیش از ۲۰ سال پیش", en: "Over 20 years ago" },
                    color: BRAND_COLORS.green,
                  },
                  {
                    fa: "گسترش به مشاوره مهندسی و خدمات فنی",
                    en: "Expanded into engineering consulting & technical services",
                    sub: { fa: "توسعه حوزه فعالیت", en: "Scope expansion" },
                    color: BRAND_COLORS.blue,
                  },
                  {
                    fa: "راه‌اندازی واحد تولیدی آسه پانل",
                    en: "Launched Aseh Panel manufacturing unit",
                    sub: { fa: "تولید ساندویچ پانل تخصصی", en: "Specialist sandwich panel production" },
                    color: BRAND_COLORS.purple,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1">
                      <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: item.color, background: `${item.color}22` }} />
                      {i < 2 && <div className="w-px flex-1 min-h-[40px]" style={{ background: `${item.color}30` }} />}
                    </div>
                    <div className="pb-6">
                      <p className="text-sm font-semibold text-white mb-1">{item.fa}</p>
                      <p className="text-xs text-white/35 font-mono">{item.sub.fa}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── ASEH PANEL UNIT ── */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimateIn className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: BRAND_COLORS.blue }} />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: BRAND_COLORS.blue }}>
                {lang === "fa" ? "واحد تولیدی" : "Manufacturing Unit"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              {lang === "fa" ? "آسه پانل؛ واحد تخصصی تولید ساندویچ پانل" : "Aseh Panel — Specialist Sandwich Panel Producer"}
            </h2>
            <p className="text-sm text-white/50 max-w-2xl leading-relaxed">
              {lang === "fa"
                ? "آسه پانل با هدف تکمیل زنجیره خدمات و پاسخ‌گویی دقیق‌تر به نیاز پروژه‌های ساختمانی، صنعتی و سردخانه‌ای راه‌اندازی شد. تولید ساندویچ پانل در آسه پانل تنها یک فرآیند صنعتی نیست، بلکه بخشی از یک راهکار مهندسی برای ساخت سازه‌های مدرن است."
                : "Aseh Panel was established to complete the service chain and respond more precisely to the needs of building, industrial, and cold storage projects. Sandwich panel production here is not merely an industrial process — it is part of an engineering solution for modern construction."}
            </p>
          </AnimateIn>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } } as Variants}
          >
            {PRODUCTS_LIST.map((p) => (
              <motion.div key={p.slug} variants={staggerItem as Variants}>
                <Link
                  href={`/products/${p.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-[#141414] p-6 hover:border-white/10 hover:bg-[#181818] transition-all duration-300"
                >
                  <div className="h-px w-6 rounded-full transition-all duration-300 group-hover:w-10" style={{ background: p.color }} />
                  <span className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors leading-snug">
                    {lang === "fa" ? p.fa : p.en}
                  </span>
                  <ArrowRight size={12} className="text-white/20 group-hover:text-white/50 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── QUALITY VIEW ── */}
      <section className="py-20 bg-[#0C0C0C]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 rounded-full" style={{ background: BRAND_COLORS.purple }} />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: BRAND_COLORS.purple }}>
                  {lang === "fa" ? "نگاه ما به کیفیت" : "Our Quality Philosophy"}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                {lang === "fa" ? "تعهد، شفافیت، مسئولیت‌پذیری" : "Commitment, Transparency, Accountability"}
              </h2>
              <p className="text-sm text-white/50 leading-relaxed mb-10">
                {lang === "fa"
                  ? "در پروژه‌های امروزی، مصالح ساختمانی تنها نقش سازه‌ای ندارند؛ بلکه باید در بهره‌وری انرژی، ایمنی و دوام ساختمان نیز نقش مهمی ایفا کنند. آسه پانل با بهره‌گیری از خط تولید پیوسته و استفاده از مواد اولیه باکیفیت، تلاش می‌کند محصولاتی تولید کند که از نظر عملکرد فنی، دوام و کیفیت ساخت قابل اعتماد باشند."
                  : "In today's projects, building materials don't only play a structural role — they must also contribute significantly to energy efficiency, safety, and building durability. Aseh Panel uses continuous production lines and high-quality raw materials to produce products that are reliable in technical performance, durability, and build quality."}
              </p>
              <div className="flex flex-col gap-4">
                {PRINCIPLES.map((p) => (
                  <div key={p.fa} className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: p.color, flexShrink: 0 }} />
                    <span className="text-sm text-white/70">{lang === "fa" ? p.fa : p.en}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/30 mt-6 leading-relaxed">
                {lang === "fa"
                  ? "برای ما این موارد صرفاً شعار نیستند، بلکه بخشی از هویت برند آسه پانل محسوب می‌شوند."
                  : "For us, these are not merely slogans — they are part of the Aseh Panel brand identity."}
              </p>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="rounded-2xl border border-white/[0.06] bg-[#141414] p-8 lg:p-10">
                <h3 className="text-xl font-black mb-6">
                  {lang === "fa" ? "همراهی در مسیر اجرای پروژه" : "Partnership Throughout Project Execution"}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">
                  {lang === "fa"
                    ? "ما در آسه پانل معتقدیم موفقیت یک پروژه تنها به کیفیت محصول وابسته نیست. انتخاب درست محصول، بررسی شرایط پروژه، اقلیم، الزامات فنی و استانداردهای ایمنی همگی در نتیجه نهایی تأثیر دارند."
                    : "At Aseh Panel we believe project success doesn't depend solely on product quality. The right product selection, project conditions, climate, technical requirements, and safety standards all affect the final outcome."}
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  {lang === "fa"
                    ? "به همین دلیل، رویکرد ما ارائه راهکار متناسب با هر پروژه است؛ راهکاری که علاوه بر کیفیت محصول، اجرای مطمئن و عملکرد بلندمدت سازه را نیز در نظر بگیرد."
                    : "For this reason, our approach is to provide a tailored solution for each project — one that considers not only product quality but also reliable execution and long-term structural performance."}
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimateIn>
            <div
              className="rounded-3xl border border-white/[0.06] bg-[#111] overflow-hidden relative"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${BRAND_COLORS.blue}0C 0%, transparent 70%)` }}
              />
              <div className="relative px-8 lg:px-16 py-16">
                <BrandBar width="60px" height={3} className="mb-6" />
                <h2 className="text-3xl lg:text-4xl font-black mb-3">
                  {lang === "fa" ? "تماس با آسه پانل" : "Contact Aseh Panel"}
                </h2>
                <p className="text-sm text-white/45 mb-10 max-w-xl leading-relaxed">
                  {lang === "fa"
                    ? "اگر برای پروژه خود به دنبال انتخاب مناسب‌ترین ساندویچ پانل هستید یا به مشاوره فنی نیاز دارید، کارشناسان آسه پانل آماده پاسخ‌گویی هستند."
                    : "If you're looking for the right sandwich panel for your project or need technical consultation, Aseh Panel experts are ready to help."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {[
                    {
                      icon: Phone,
                      label: lang === "fa" ? "تلفن تماس" : "Phone",
                      value: PHONE,
                      href: `tel:${PHONE}`,
                      color: BRAND_COLORS.green,
                    },
                    {
                      icon: MessageCircle,
                      label: lang === "fa" ? "موبایل / واتساپ" : "Mobile / WhatsApp",
                      value: MOBILE,
                      href: `https://wa.me/98${MOBILE.slice(1)}`,
                      color: BRAND_COLORS.blue,
                    },
                    {
                      icon: Mail,
                      label: lang === "fa" ? "ایمیل" : "Email",
                      value: EMAIL,
                      href: `mailto:${EMAIL}`,
                      color: BRAND_COLORS.purple,
                    },
                  ].map(({ icon: Icon, label, value, href, color }) => (
                    <a
                      key={href}
                      href={href}
                      target={href.startsWith("https") ? "_blank" : undefined}
                      rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#141414] p-5 hover:border-white/10 hover:bg-[#181818] transition-all duration-200 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}14`, border: `1px solid ${color}28` }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <div className="font-mono text-[0.58rem] uppercase tracking-widest text-white/30 mb-0.5">{label}</div>
                        <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#contact"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90"
                    style={{ background: BRAND_COLORS.blue }}
                  >
                    {lang === "fa" ? "ثبت درخواست مشاوره" : "Submit Consultation Request"}
                    {isRTL ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                  </Link>
                  <Link
                    href="/#products"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    {lang === "fa" ? "مشاهده سایر محصولات" : "View All Products"}
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
