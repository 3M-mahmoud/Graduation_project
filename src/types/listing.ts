import {
  classRoom,
  studyMaterial,
} from "@/app/components/dashboardTeacher/constant/constant";
import { StaticImageData } from "next/image";
export interface BaseItem {
  id: number;
  name: string;
  rating: string;
  stages: string[];
  systems: string[];
}

export interface Center extends BaseItem {
  location: string;
  image: StaticImageData;
}

export interface Teacher extends BaseItem {
  subject: string;
  avatar: StaticImageData;
  experience: string;
  bio: string;
}

type ClassRoomDashboardTeacher = keyof typeof classRoom;
type StudyMaterialDashboardTeacher = keyof typeof studyMaterial;

export type { ClassRoomDashboardTeacher, StudyMaterialDashboardTeacher };
