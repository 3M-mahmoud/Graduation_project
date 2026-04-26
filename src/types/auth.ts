export interface AuthResponse {
  status: string;
  message: string;
  data: UserData;
  token: Tokens;
}

export interface UserData {
  id: string;
  name: string;
  imageUrl: string | null;
  role: "student" | "teacher" | "center";
  profileId: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}