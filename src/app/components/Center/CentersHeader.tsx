import Image from "next/image";
import imgHeroSection from "../../../assets/centerHeroSection.png";
import background from "../../../assets/background.jpeg";

export default function CentersHeader() {
  return (
    <section className="bg-slate-50/50 py-12 px-6 md:px-16 border-b border-slate-100">
      <div className="absolute inset-0 opacity-2 pointer-events-none select-none">
        <Image src={background} alt="background" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-8">
        <div data-aos="fade-left" className="text-right">
          <h1 className="text-3xl md:text-4xl font-black text-black mb-6">
            السناتر التعليمية
          </h1>
          <p className="text-black text-lg lg:text-2xl/12 font-medium">
            أكتشف أفضل السناتر التعليمية في <br /> مصر وأحجز حصصك أونلاين
          </p>
        </div>
        <div data-aos="fade-right" className="relative w-64 h-48 md:w-96 md:h-72">
          <Image
            src={imgHeroSection}
            alt="Centers"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
