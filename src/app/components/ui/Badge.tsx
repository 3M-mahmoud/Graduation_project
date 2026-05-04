export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
      {children}
    </span>
  );
}
