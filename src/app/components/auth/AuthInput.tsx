import { ReactNode } from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  label: string;
  icon?: ReactNode;
  type: string;
  placeholder: string;
  register: any;
  error?: string;
}

export const AuthInput = ({
  label,
  icon,
  type,
  placeholder,
  register,
  error,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <label className="block text-sm font-bold text-[#424752] mb-2">
        {label}
      </label>
      <div className="relative text-[#6B7280]">
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
        <input
          {...register}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          autoComplete={type === "password" ? "new-password" : "off"}
          data-lpignore="true"
          className={`w-full ${
            icon ? "pr-11" : "px-4"
          } py-3 bg-[#E1E3E4] text-[16px] ${
            error ? "border-red-500" : "border-slate-200"
          } rounded-md focus:outline-none`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2E637C] transition-colors cursor-pointer"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
