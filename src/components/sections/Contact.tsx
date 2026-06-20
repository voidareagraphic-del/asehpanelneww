"use client";
// src/components/sections/Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar, BrandBarFull } from "@/components/ui/BrandBar";
import { Button } from "@/components/ui/Button";
import { AsteriskMark } from "@/components/ui/AsteriskMark";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { BRAND_COLORS } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const CONTACT_ICONS = [Phone, Mail, MapPin];
const CONTACT_PHONE = "02175092";
const CONTACT_MOBILE = "09108112496";
const CONTACT_EMAIL = "digital@asehtejaratasia.co";
const CONTACT_VALUES = [`${CONTACT_PHONE} | ${CONTACT_MOBILE}`, CONTACT_EMAIL, "تهران، ایران"];
const CONTACT_COLORS = [BRAND_COLORS.green, BRAND_COLORS.blue, BRAND_COLORS.purple];

const MAP_DOTS = [
  { top: "30%", left: "48%", color: BRAND_COLORS.green,  label: "IR"  },
  { top: "25%", left: "52%", color: BRAND_COLORS.blue,   label: "AE"  },
  { top: "28%", left: "42%", color: BRAND_COLORS.purple, label: "TR"  },
  { top: "20%", left: "55%", color: BRAND_COLORS.ice,    label: "KZ"  },
  { top: "22%", left: "46%", color: BRAND_COLORS.green,  label: "DE"  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", panels: [] as string[], message: "", email: "" });

  const togglePanel = (code: string) =>
    setFormData((p) => ({
      ...p,
      panels: p.panels.includes(code) ? p.panels.filter((c) => c !== code) : [...p.panels, code],
    }));
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("send_failed");
      setSent(true);
      setFormData({ name: "", company: "", panels: [], message: "", email: "" });
    } catch {
      setError(t.contact.sendError ?? "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full bg-transparent border-b border-white/[0.12] focus:border-[#2D4FA3] text-white text-sm py-3 outline-none transition-colors duration-300 placeholder:text-muted font-light";

  return (
    <section id="contact" className="relative py-32 bg-[#0A0A0A]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <AnimateIn>
            <SectionLabel text={t.contact.label} accent="blue" className="mb-5" />
            <BrandBar width="120px" height={3} className="mb-8" />
            <h2 className="text-display-xl font-black text-white leading-tight mb-6">
              {t.contact.headline1}<br />
              <span className="text-white/30">{t.contact.headline2}</span>
            </h2>
            <p className="text-base text-steel leading-relaxed mb-12 max-w-md">{t.contact.body}</p>

            <div className="flex flex-col gap-6 mb-12">
              {t.contact.contactItems.map((item, i) => {
                const Icon = CONTACT_ICONS[i];
                const color = CONTACT_COLORS[i];
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}14`, border: `1px solid ${color}28` }}>
                      <Icon size={15} color={color} />
                    </div>
                    <div>
                      <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted mb-0.5">{item.label}</div>
                      {i === 0 && (
                        <div className="text-sm font-medium text-frost flex flex-wrap gap-2">
                          <a href={`tel:${CONTACT_PHONE}`} className="hover:text-white transition-colors">{CONTACT_PHONE}</a>
                          <span className="text-white/20">|</span>
                          <a href={`tel:${CONTACT_MOBILE}`} className="hover:text-white transition-colors">{CONTACT_MOBILE}</a>
                        </div>
                      )}
                      {i === 1 && (
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-medium text-frost hover:text-white transition-colors">{CONTACT_EMAIL}</a>
                      )}
                      {i === 2 && (
                        <div className="text-sm font-medium text-frost">{CONTACT_VALUES[i]}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl bg-surface/40 border border-white/[0.05] p-6 relative overflow-hidden">
              <div className="font-mono text-[0.58rem] uppercase tracking-widest text-muted mb-4">{t.contact.exportLabel}</div>
              <div className="h-24 relative">
                {MAP_DOTS.map((dot) => (
                  <div key={dot.label} className="absolute flex flex-col items-center gap-1" style={{ top: dot.top, left: dot.left }}>
                    <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: dot.color }} />
                    <span className="font-mono text-[0.5rem]" style={{ color: dot.color }}>{dot.label}</span>
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <AsteriskMark size={80} />
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right: Form */}
          <AnimateIn delay={0.15} direction="left">
            <div className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(20,20,20,0.8)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <BrandBarFull height={3} />
              <div className="p-8 lg:p-10">
                <h3 className="text-lg font-bold text-white mb-8">{t.contact.formTitle}</h3>

                {sent ? (
                  <motion.div className="flex flex-col items-center gap-4 py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(45,79,163,0.2)", border: "1px solid #2D4FA3" }}>
                      <Send size={20} color="#2D4FA3" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{t.contact.sent}</div>
                      <div className="text-sm text-steel">{t.contact.sentSub}</div>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">{t.contact.name}</label>
                        <input type="text" className={inputClass} placeholder={t.contact.namePlaceholder}
                          value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} required />
                      </div>
                      <div>
                        <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">{t.contact.company}</label>
                        <input type="text" className={inputClass} placeholder={t.contact.companyPlaceholder}
                          value={formData.company} onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))} />
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">{t.contact.email}</label>
                      <input type="email" className={inputClass} placeholder={t.contact.emailPlaceholder}
                        value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} required />
                    </div>

                    <div>
                      <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-3">{t.contact.panelType}</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {t.contact.panelTypes.map(({ label, code }) => {
                          const selected = formData.panels.includes(code);
                          return (
                            <button
                              key={code}
                              type="button"
                              onClick={() => togglePanel(code)}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-start transition-all duration-200"
                              style={selected
                                ? { borderColor: "#2D4FA3", background: "rgba(45,79,163,0.15)", color: "#fff" }
                                : { borderColor: "rgba(255,255,255,0.08)", background: "transparent", color: "rgba(255,255,255,0.45)" }
                              }
                            >
                              <span
                                className="w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-all duration-200"
                                style={selected
                                  ? { background: "#2D4FA3", borderColor: "#2D4FA3" }
                                  : { borderColor: "rgba(255,255,255,0.2)" }
                                }
                              >
                                {selected && (
                                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                )}
                              </span>
                              <span className="flex-1">{label}</span>
                              <span className="font-mono text-[0.55rem] opacity-50">{code}</span>
                            </button>
                          );
                        })}
                      </div>
                      {formData.panels.length === 0 && (
                        <p className="text-[0.65rem] text-white/25 mt-2">{t.contact.panelTypePlaceholder}</p>
                      )}
                    </div>

                    <div>
                      <label className="font-mono text-[0.6rem] uppercase tracking-widest text-muted block mb-2">{t.contact.details}</label>
                      <textarea className={`${inputClass} resize-none`} rows={4} placeholder={t.contact.detailsPlaceholder}
                        value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} required />
                    </div>

                    {error && (
                      <p className="text-xs text-red-400 text-center -mt-2">{error}</p>
                    )}
                    <Button variant="gradient-border" size="lg" type="submit" className="w-full justify-center" disabled={submitting}>
                      <Send size={15} /> {submitting ? "..." : t.contact.submit}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
