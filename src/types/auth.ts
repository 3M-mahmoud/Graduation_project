export interface AuthResponse {
    status: string;
    message: string;
    token: string;
    data: {
      user: {
    
        newUser?: UserDetails;
        user?: UserDetails;
        userTeacherOrCenterOrStudent: {
          id: string;
          userId: string;
          educationalStage?: string;
          classRoom?: string;
        };
      };
    };
  }
  
  interface UserDetails {
    id: string;
    name: string;
    email: string;
    role: "student" | "teacher" | "center";
    phone?: string;
  }