import Image from "next/image";
import LandingNavigation from "@/components/navigations/LandingNavigation";
import LandingHero from "@/components/hero/LandingHero";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
      <LandingNavigation />
      <LandingHero />
    </main>
  );
}
