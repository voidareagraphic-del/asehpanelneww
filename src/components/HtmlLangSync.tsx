"use client";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function HtmlLangSync() {
  const { lang, isRTL } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);
  return null;
}
