// src/app/products/[slug]/page.tsx
import { PRODUCTS } from "@/lib/productData";
import ProductPageClient from "./ProductPageClient";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductPageClient params={params} />;
}
