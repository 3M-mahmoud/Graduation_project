export type TeachersResponse = {
  status: "success" | "error";
  message: string;
  data: Teacher[];
};

export type Teacher = {
  id: string;
  name: string;
  imageUrl: string | null;
  teacher: {
    id: string;
    classRoom: string | null;
    studyMaterial: string | null;
  };
};