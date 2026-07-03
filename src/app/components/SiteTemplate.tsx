import React from "react";
import { LocaleProvider } from "./i18n";
import { GlobalNav } from "./GlobalNav";
import { HeroSection } from "./HeroSection";
import { DestinationsSection } from "./DestinationsSection";
import { PremiumSection } from "./PremiumSection";
import { SmartComfortSection } from "./SmartComfortSection";
import { MilesSection } from "./MilesSection";
import { SiteFooter } from "./SiteFooter";
import { SkyChatFloat } from "./SkyChatFloat";

export function SiteTemplate() {
  return (
    <LocaleProvider>
      <div className="bg-background">
        <GlobalNav />
        <main>
          <HeroSection />
          <DestinationsSection />
          <PremiumSection />
          <SmartComfortSection />
          <MilesSection />
        </main>
        <SiteFooter />
        <SkyChatFloat />
      </div>
    </LocaleProvider>
  );
}
