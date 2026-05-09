export default function Loading() {
  return (
    <div className="bg-slate-50 animate-pulse">
      <section className="pt-16 flex flex-col items-center px-4 text-center">
        <div className="h-10 w-2/3 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 w-1/2 bg-gray-300 rounded mb-8"></div>

        <div className="w-full max-w-5xl">
          <div className="w-full aspect-[16/8] bg-gray-300 rounded-xl"></div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16">
        <div className="h-8 w-1/3 bg-gray-300 rounded mb-4"></div>
        <div className="h-5 w-1/2 bg-gray-300 rounded mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl">
              <div className="w-14 h-14 bg-gray-300 rounded-xl mb-6"></div>
              <div className="h-5 w-2/3 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="h-8 w-1/3 bg-gray-300 rounded mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden">
              <div className="aspect-video bg-gray-300"></div>
              <div className="p-6 space-y-3">
                <div className="h-5 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>

                <div className="flex gap-3 mt-4">
                  <div className="h-10 w-full bg-gray-300 rounded"></div>
                  <div className="h-10 w-full bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="h-8 w-1/3 bg-gray-300 rounded mx-auto mb-10"></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-2xl mb-4"></div>
              <div className="h-6 w-16 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
