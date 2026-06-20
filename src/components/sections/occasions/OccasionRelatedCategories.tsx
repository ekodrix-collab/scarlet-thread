"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Gifts For Her",
    href: "/gifts-for-her",
    icon: "/images/relatedproduct/scarlet-gift.png",
    description: "Personalised picks she'll adore",
  },
  {
    name: "Gifts For Him",
    href: "/gifts-for-him",
    icon: "/images/relatedproduct/scarlet-pencil.png",
    description: "Thoughtful gifts crafted for him",
  },
  {
    name: "Kids & Babies",
    href: "/kids-babies",
    icon: "/images/relatedproduct/scarlet-teddy.png",
    description: "Adorable keepsakes for little ones",
  },
];

export function OccasionRelatedCategories() {
  return (
    <section className="py-14 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Explore More{" "}
              <span className="text-primary">Categories</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Find the perfect gift for everyone you love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Link
                  href={cat.href}
                  className="group bg-white rounded-xl px-4 py-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all border border-[#F7EAF0] hover:border-primary/20 min-h-[100px]"
                >
                  <div
                    className="w-16 h-16 shrink-0 bg-center bg-contain bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${cat.icon}')` }}
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-sm text-gray-800 group-hover:text-primary transition-colors mb-1">
                      {cat.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-tight mb-2">
                      {cat.description}
                    </p>
                    <span className="text-[11px] font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Shop Now
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
