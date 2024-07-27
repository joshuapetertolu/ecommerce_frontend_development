"use client";

import Image from "next/image";
import LandingNavigation from "@/components/navigations/LandingNavigation";
import LandingHero from "@/components/hero/LandingHero";
import FooterNavigation from "@/components/navigations/FooterNavigation";
import { motion } from "framer-motion";
import ProductHero from "@/components/hero/ProductsHero";

export default function Products() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <LandingNavigation />
        <ProductHero />
      </main>

      <FooterNavigation />
    </>
  );
}
