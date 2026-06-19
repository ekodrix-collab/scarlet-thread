"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getProductsByOccasion,
  getCategoriesForOccasion,
  OccasionProduct,
  occasionMeta,
} from "@/lib/occasion-products";

interface OccasionProductsSectionProps {
  slug: string;
}

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
  { label: "Most Reviewed", value: "reviews" },
];

export function OccasionProductsSection({
  slug,
}: OccasionProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState("featured");
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const allProducts = useMemo(() => getProductsByOccasion(slug), [slug]);
  const categories = useMemo(() => getCategoriesForOccasion(slug), [slug]);

  const filtered = useMemo(() => {
    let result =
      selectedCategory === "All"
        ? allProducts
        : allProducts.filter((p) => p.category === selectedCategory);

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case "reviews":
        result = [...result].sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }
    return result;
  }, [allProducts, selectedCategory, sortBy]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* ── DESKTOP FILTER SIDEBAR ─────────────────────── */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-800 text-sm mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-primary" />
                Filter by Occasion
              </h3>
              <div className="flex flex-col gap-1">
                <Link
                  href="/products"
                  className={`text-left text-sm px-3 py-2.5 rounded-lg font-medium transition-all duration-200 block ${
                    slug === "all"
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:bg-violet-50 hover:text-primary"
                  }`}
                >
                  All Gifts
                </Link>
                {Object.entries(occasionMeta).map(([key, meta]) => {
                  const isActive = slug === key;
                  return (
                    <Link
                      key={key}
                      href={`/products/${key}`}
                      className={`text-left text-sm px-3 py-2.5 rounded-lg font-medium transition-all duration-200 block ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "text-gray-600 hover:bg-violet-50 hover:text-primary"
                      }`}
                    >
                      {meta.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ──────────────────────────────── */}
        <div className="flex-1 min-w-0">
          {/* Top bar: mobile filter + sort */}
          <div className="flex items-center justify-between gap-3 mb-5">
            {/* Mobile: filter button */}
            <button
              onClick={() => setFilterDrawerOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm font-semibold border border-gray-200 rounded-lg px-4 py-2 bg-white hover:border-primary hover:text-primary transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Occasions
            </button>

            {/* Mobile Filter chips */}
            <div className="hidden sm:flex lg:flex flex-1 overflow-x-auto gap-2 scrollbar-hide">
              {["All", ...categories].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Count + Sort */}
            <div className="flex items-center gap-2 shrink-0 ml-auto">
              <span className="text-xs text-gray-400 hidden sm:block">
                {filtered.length} products
              </span>
              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortDropdownOpen((p) => !p)}
                  className="flex items-center gap-1.5 text-xs font-semibold border border-gray-200 rounded-lg px-3 py-2 bg-white hover:border-primary hover:text-primary transition-colors"
                >
                  Sort
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {sortDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setSortDropdownOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-20 min-w-[170px] py-1 overflow-hidden"
                      >
                        {sortOptions.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => {
                              setSortBy(opt.value);
                              setSortDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                              sortBy === opt.value
                                ? "text-primary bg-violet-50"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Filter Chips (below top bar) */}
          <div className="sm:hidden flex gap-2 overflow-x-auto scrollbar-hide pb-3 -mx-4 px-4">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-5xl mb-4">🎁</span>
              <h3 className="font-bold text-gray-700 text-lg mb-2">
                No products found
              </h3>
              <p className="text-gray-400 text-sm">
                Try selecting a different category filter.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    wishlisted={wishlist.has(product.id)}
                    onWishlist={() => toggleWishlist(product.id)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {filterDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setFilterDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed left-0 top-0 bottom-0 w-72 bg-white z-50 shadow-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-800 text-base flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-primary" />
                  Filter by Occasion
                </h3>
                <button
                  onClick={() => setFilterDrawerOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="flex flex-col gap-1.5 flex-1 overflow-y-auto">
                <Link
                  href="/products"
                  onClick={() => setFilterDrawerOpen(false)}
                  className={`text-left text-sm px-4 py-3 rounded-xl font-medium transition-all duration-200 block ${
                    slug === "all"
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-600 hover:bg-violet-50 hover:text-primary"
                  }`}
                >
                  All Gifts
                </Link>
                {Object.entries(occasionMeta).map(([key, meta]) => {
                  const isActive = slug === key;
                  return (
                    <Link
                      key={key}
                      href={`/products/${key}`}
                      onClick={() => setFilterDrawerOpen(false)}
                      className={`text-left text-sm px-4 py-3 rounded-xl font-medium transition-all duration-200 block ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "text-gray-600 hover:bg-violet-50 hover:text-primary"
                      }`}
                    >
                      {meta.label}
                    </Link>
                  );
                })}
              </div>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">
                  Showing {filtered.length} products
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

// ── Product Card ────────────────────────────────────────────────────────────

interface ProductCardProps {
  product: OccasionProduct;
  index: number;
  wishlisted: boolean;
  onWishlist: () => void;
}

function ProductCard({
  product,
  index,
  wishlisted,
  onWishlist,
}: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </motion.div>

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onWishlist();
          }}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted
                ? "fill-rose-500 text-rose-500"
                : "text-gray-400 hover:text-rose-500"
            }`}
          />
        </button>

        {/* Badge */}
        {(product.bestSeller || product.tag) && (
          <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full border border-gray-100 shadow-sm">
            <span className="text-[10px] font-semibold text-primary italic">
              {product.bestSeller ? "Best Seller" : product.tag}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5 flex flex-col flex-1">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 mb-1">
          {product.type}
        </span>
        <h3 className="font-bold text-sm text-gray-800 line-clamp-1 group-hover:text-primary transition-colors mb-1.5">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-gray-600">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-base text-primary">
            ₹{product.price}
          </span>
          <Link href={`/product/${product.id}`}>
            <Button
              size="sm"
              className="rounded-lg text-xs h-8 px-3 bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Personalise
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
