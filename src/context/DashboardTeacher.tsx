"use client";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

type UserType = {
  dataProfile: {
    id: string;
    email: string;
    name: string;
    imageUrl: string | null;
    role: string;
    phone: string | null;
    followerCounts: number;
    followingCounts: number;
    postCounts: number;
    createdAt: Date;
  };
};

type ValueType = {
  dataProfile: object | null;
};

const CreateDashBoardTeacherContext = createContext<ValueType | null>(null);

export const useDashboardTeacherContext = () => {
  const context = useContext(CreateDashBoardTeacherContext);
  if (!context)
    throw new Error("useSocket must be used within a SocketProvider");
  return context;
};

const DashBoardTeacherContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dataProfile, setDataProfile] = useState<UserType | null>(null);

  const handleGetProfileData = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${DOMAIN}auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setDataProfile(res?.data?.data);
  };
  useEffect(() => {
    handleGetProfileData();
  }, []);

  const value: ValueType = {
    dataProfile,
  };

  return (
    <CreateDashBoardTeacherContext.Provider value={value}>
      {children}
    </CreateDashBoardTeacherContext.Provider>
  );
};

export default DashBoardTeacherContext;
