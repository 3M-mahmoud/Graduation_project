"use client";
import { MapPin } from "lucide-react";

export default function LocationTab() {
 
  const mapUrl = "https://maps.app.goo.gl/qe1AGLPuLa44V8gE9";


  const address = "شارع المجزر الالي، الهرم, الجيزة، مصر";

  return (
    <div className="space-y-6 animate-in fade-in duration-500 py-4" dir="rtl">

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-4 shadow-sm">
          <MapPin size={22} className="text-[#204658]" />
          <span className="text-[#4B5563] text-sm md:text-base">
            {address}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-2 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border border-slate-100">
        
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.7679361845183!2d31.1565!3d29.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzQ4LjAiTiAzMcKwMDknMjMuNCJF!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          ></iframe>

       
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-xl border border-slate-200 pointer-events-auto">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E637C] font-bold text-sm md:text-lg hover:underline transition-all"
              >
                {mapUrl}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
