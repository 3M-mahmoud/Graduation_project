import { MapPin, UserPlus, MessageCircle, Share2, Plus } from "lucide-react";
import Image from "next/image";

export const ProfileHeader = ({ data }: any) => {
  return (
    <div className="relative bg-white shadow-sm pb-4">

      <div className="h-48 md:h-72 w-full overflow-hidden">
        <Image
          src={data.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

    
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16 md:-mt-20">
     
          <div data-aos="zoom-in" className="relative group">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white bg-white shadow-md overflow-hidden z-20">
              <Image
                src={data.coverImage}
                alt="Center Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

     
          <div data-aos="fade-up" className="flex-1 text-center md:text-right pb-2">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold text-[#2E637C]">
                {data.name}
              </h1>
             
            </div>
            
            <p className="text-[#2E637C] text-xl">1 ألف متابع</p>
          </div>

        
          <div data-aos="fade-right" className="flex gap-2 pb-2">
            <button className="bg-[#2E637C] hover:bg-[#1c5570] text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-200 flex items-center gap-2 cursor-pointer">
              <Plus size={18} /> متابعة
            </button>
            <button className="bg-[#E5E7EB] hover:bg-[#d9dadb] text-[#343A40] p-2.5 rounded-xl transition cursor-pointer flex items-center gap-2">
              <MessageCircle size={22} /> مراسلة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
