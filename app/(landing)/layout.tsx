import React from "react";
import LandingNavigation from "@/components/navigations/LandingNavigation";
import FooterNavigation from "@/components/navigations/FooterNavigation";

function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
      <LandingNavigation />

      {children}

      <FooterNavigation />
    </main>
  );
}

export default LandingPageLayout;
