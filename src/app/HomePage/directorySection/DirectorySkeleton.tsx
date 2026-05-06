export default async function DirectorySkeleton() {
  return (
    <section className="bg-slate-50 py-12 px-4 md:px-16 animate-pulse">
      <div className="max-w-7xl mx-auto">

        {/* 🔵 Centers Section */}
        <div className="bg-white rounded-2xl p-5 mb-8 flex items-center justify-between">
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-5 w-20 bg-gray-300 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
              
              {/* Image */}
              <div className="h-40 bg-gray-300 rounded mb-4"></div>

              {/* Title */}
              <div className="h-5 bg-gray-300 rounded w-2/3 mb-2"></div>

              {/* Location */}
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 🟢 Teachers Section */}
        <div className="bg-white rounded-2xl p-5 mb-8 flex items-center justify-between">
          <div className="h-6 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-5 w-20 bg-gray-300 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">

              {/* Image */}
              <div className="h-40 bg-gray-300 rounded mb-4"></div>

              {/* Name */}
              <div className="h-5 bg-gray-300 rounded w-2/3 mb-2"></div>

              {/* Subject */}
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>

              {/* Rating */}
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}