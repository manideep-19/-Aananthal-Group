import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { WhatIsVFD } from "@/components/home/WhatIsVFD";
import { WhyVFDMatter } from "@/components/home/WhyVFDMatter";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { TrustBuilder } from "@/components/home/TrustBuilder";
import { MakeInIndia } from "@/components/home/MakeInIndia";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsVFD />
      <WhyVFDMatter />
      <ProductsPreview />
      <TrustBuilder />
      <MakeInIndia />
      <CTASection />
    </>
  );
}
