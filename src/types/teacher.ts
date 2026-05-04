export type TeachersResponse = {
  status: "success" | "error";
  message: string;
  data: Teacher[];
};

export type Teacher = {
  id: string;
  name: string;
  imageUrl: string | null;
  createdAt: string;
  followerCounts: number;
  followingCounts: number;
  isFollowed: boolean;
  phone: string;
  postCounts: number;
  role: string;
  teacher: {
    id: string;
    experienceYear: string;
    star: number;
    educationalQualification: string;
    bio: string;
    studySystem: string[];
    classRoom: string[];
    studyMaterial: string;
    centersWhereHeStudie: [];
    courseCounts: number;
    educationalStage: null;
    examCounts: number;
    homeworkCounts: number;
    lessonCounts: number;
    noteCounts: number;
    sharePrice: number;
  };
};
