import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProductShowcase from "@/components/product-showcase";
import ProductCarousel from "@/components/product-carousel";
import FeaturedBrands from "@/components/featured-brands";
import Editorial from "@/components/editorial";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <ProductCarousel />
      <FeaturedBrands />
      <Editorial />
      <Footer />
    </main>
  );
}
