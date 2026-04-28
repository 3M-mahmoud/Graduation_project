import { Star } from 'lucide-react';
import Image from 'next/image'
import { profileTeacher } from './constant/constant';

const ProfileDashboardTeacher = () => {
  const [imageUrl, name,studyMaterial, starts] = profileTeacher
  return (
    <div className='flex flex-col items-center px-4'>
  
      <div className="relative">
        <Image src={imageUrl} alt={name} width={50} height={50} className='rounded-full' />
          <span className="border-2 border-[#134E4A] bg-[#22C55E] size-3 rounded-full absolute bottom-0 -right-1" ></span>
      </div>
        
      <div className="flex flex-col justify-center items-center mt-2">
        <p className="text-xl font-bold text-[#6B7280]">
          {name}


        </p>
        <p className="text-xl font-semibold text-[#A9363D]">{studyMaterial}</p>
        <p className="flex items-center gap-1 text-md font-bold text-[#F59E0B]">
          <Star color="#F59E0B" size={16} />
          {starts}</p>
      </div>
    </div>
  )
}

export default ProfileDashboardTeacher
