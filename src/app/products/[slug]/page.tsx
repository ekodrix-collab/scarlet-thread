import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { OccasionHero } from "@/components/sections/occasions/OccasionHero";
import { OccasionProductsSection } from "@/components/sections/occasions/OccasionProductsSection";
import { OccasionRelatedCategories } from "@/components/sections/occasions/OccasionRelatedCategories";
import { occasionMeta } from "@/lib/occasion-products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const meta = occasionMeta[slug];
  if (!meta) return { title: "Occasion Gifts | The Scarlet Thread" };

  return {
    title: `${meta.label} | The Scarlet Thread`,
    description: meta.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(occasionMeta).map((slug) => ({ slug }));
}

export default async function OccasionProductsPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // If slug is not in known occasions, 404
  if (!occasionMeta[slug]) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <OccasionHero slug={slug} />
      <OccasionProductsSection slug={slug} />
      <OccasionRelatedCategories />
    </div>
  );
}
