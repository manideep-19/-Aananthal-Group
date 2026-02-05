"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { WhatIsVFD } from "@/components/home/WhatIsVFD";
import { WhyVFDMatter } from "@/components/home/WhyVFDMatter";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { TrustBuilder } from "@/components/home/TrustBuilder";
import { MakeInIndia } from "@/components/home/MakeInIndia";
import { ContactInfoSection } from "@/components/home/ContactInfoSection";
import { CTASection } from "@/components/home/CTASection";
import { WelcomeSplash } from "@/components/layout/WelcomeSplash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash has already been shown in this session
    const hasSeenSplash = sessionStorage.getItem("splashSeen");
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("splashSeen", "true");
    setShowSplash(false);
  };

  if (showSplash) {
    return <WelcomeSplash onComplete={handleSplashComplete} />;
  }

  return (
    <>
      <Hero />
      <CompanyOverview />
      <WhatIsVFD />
      <WhyVFDMatter />
      <ProductsPreview />
      <TrustBuilder />
      <ContactInfoSection />
      <MakeInIndia />
      <CTASection />
    </>
  );
}
