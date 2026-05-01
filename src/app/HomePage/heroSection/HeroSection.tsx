import React from "react";
import Image from "next/image";
import HeroSectionImage from "../../../assets/heroSection.png";
import background from "../../../assets/background.jpeg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 pb-0 flex flex-col items-center text-center px-4">
      <div className="absolute inset-0 opacity-2 pointer-events-none select-none">
        <Image src={background} alt="background" />
      </div>

      <div  data-aos="fade-up" className="relative md:absolute z-10 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-black text-[#204658] mb-6 leading-tight">
          منصة سنتر مصر التعليمية
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 font-medium">
          بوابتك الأولى للتعليم في مصر
        </p>
      </div>

      <div data-aos="fade-right" className="w-full max-w-5xl relative">
        <div className="relative w-full aspect-[16/8]">
          <Image
            src={HeroSectionImage}
            alt="Educational Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
