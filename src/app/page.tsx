import DirectorySection from "./HomePage/directorySection/DirectorySection";
import EducationalStagesSection from "./HomePage/educationalStages/EducationalStages";
import FeaturesSection from "./HomePage/featuresSection/FeaturesSection";
import HeroSection from "./HomePage/heroSection/HeroSection";
import SuccessSection from "./HomePage/successSection/SuccessSection";

const page = () => {
  return (
    <div className="HomePage bg-slate-50 text-[#204658]">
      <HeroSection />
      <FeaturesSection />
      <EducationalStagesSection />
      <DirectorySection />
      <SuccessSection />
    </div>
  );
};

export default page;
