export default function CenterCardSkeleton() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm animate-pulse">
      {/* Image */}
      <div className="h-40 bg-gray-300 rounded mb-4"></div>

      {/* Title */}
      <div className="h-5 bg-gray-300 rounded w-2/3 mb-2"></div>

      {/* Location */}
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>

      {/* Tags */}
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
        <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}