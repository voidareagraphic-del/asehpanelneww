// src/app/insights/[slug]/page.tsx
import { ARTICLES } from "@/lib/articleData";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return <ArticlePageClient params={params} />;
}
