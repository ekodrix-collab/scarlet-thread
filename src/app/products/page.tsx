import type { Metadata } from "next";
import { OccasionProductsSection } from "@/components/sections/occasions/OccasionProductsSection";
import { OccasionRelatedCategories } from "@/components/sections/occasions/OccasionRelatedCategories";

export const metadata: Metadata = {
  title: "All Gifts | The Scarlet Thread",
  description: "Browse our complete collection of beautiful, custom embroidered gifts.",
};

export default function AllProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <OccasionProductsSection slug="all" />
      <OccasionRelatedCategories />
    </div>
  );
}
