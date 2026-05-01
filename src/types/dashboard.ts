export type UserResponse = {
  status: "success" | "error";
  message: string;
  data: UserData;
};
export type UserData = {
  id: string;
  name: string;
  imageUrl: string | null;
  role: "student" | "teacher" | "center" | string;
  phone: string | null;
  address: string | null;
  followerCounts: number;
  createdAt: string;

  student?: StudentProfile;
};
export type StudentProfile = {
  id: string;
  educationalStage: string | null;
  classRoom: string | null;
};
