import { ProductBreadcrumbs } from "@/components/product/ProductBreadcrumbs"
import { ProductGallery } from "@/components/product/ProductGallery"
import { ProductInfoAccordion } from "@/components/product/ProductInfoAccordion"
import { ProductConfigurator } from "@/components/product/ProductConfigurator"
import { ProductLivePreview } from "@/components/product/ProductLivePreview"
import { ProductFeaturesRow } from "@/components/product/ProductFeaturesRow"
import { ProductOccasionsGrid } from "@/components/product/ProductOccasionsGrid"
import { ProductDetailsReviewsSplit } from "@/components/product/ProductDetailsReviewsSplit"
import { RelatedProductsCarousel } from "@/components/product/RelatedProductsCarousel"
import { ValueProps } from "@/components/sections/gifts-for-him/ValueProps"

export default function ProductDetailPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <ProductBreadcrumbs />
        
        {/* Top Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mt-4 mb-16">
          
          {/* Left: Gallery & Accordion */}
          <div className="flex-1 lg:w-1/2">
             <ProductGallery />
             {/* <ProductInfoAccordion /> */}
          </div>

          {/* Right: Configurator */}
          <div className="flex-1 lg:w-1/2">
             <ProductConfigurator />
          </div>
          
        </div>
      </div>

      {/* <ProductLivePreview /> */}
      {/* <ProductFeaturesRow /> */}
      {/* <ProductOccasionsGrid /> */}
      {/* <ProductDetailsReviewsSplit /> */}
      <RelatedProductsCarousel />
      
      {/* Footer Trust Badges (Reusing from Him for similar styling) */}
      {/* <ValueProps /> */}
    </div>
  )
}
