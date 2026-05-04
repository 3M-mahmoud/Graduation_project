import AuthForm from "@/app/components/auth/AuthForm";


export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <AuthForm mode="signup" />
    </div>
  );
}