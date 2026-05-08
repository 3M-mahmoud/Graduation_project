export function OverviewSkeleton() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6 animate-pulse">
      {/* 🔵 Bio */}
      <div className="bg-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>

      <div className="max-w-6xl flex flex-col md:flex-row gap-6">
        {/* 🟢 Left */}
        <div className="flex flex-col gap-6 w-full md:w-2/5">
          {/* Qualification */}
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
              <div className="h-6 w-40 bg-gray-300 rounded"></div>
            </div>

            <div className="h-4 bg-gray-300 w-2/3 rounded"></div>
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
              <div className="h-6 w-40 bg-gray-300 rounded"></div>
            </div>

            <div className="flex gap-2 mb-4">
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
            </div>

            <div className="flex gap-2">
              <div className="h-5 w-16 bg-gray-300 rounded"></div>
              <div className="h-5 w-16 bg-gray-300 rounded"></div>
              <div className="h-5 w-16 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* 🟣 Right */}
        <div className="flex flex-col gap-3 w-full md:w-3/5">
          {/* Stats */}
          <div className="bg-white rounded-2xl p-6">
            <div className="h-6 w-40 bg-gray-300 mb-6 rounded"></div>

            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-6">
            <div className="h-6 w-40 bg-gray-300 mb-6 rounded"></div>

            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-5 w-10 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🟡 Reviews */}
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between mb-8">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 bg-gray-300 rounded"></div>
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
          </div>

          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>

        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-slate-100 p-6 rounded-2xl">
              <div className="flex gap-4 mb-3">
                <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                  <div className="h-3 w-32 bg-gray-300 rounded"></div>
                </div>
              </div>

              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
