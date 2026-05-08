const Skeleton = ({ className }: { className: string }) => (
  <div className={`bg-slate-200 animate-pulse rounded ${className}`} />
);

export default function CenterProfileSkeleton() {
  return (
    <main className="bg-[#F3F4F6] min-h-screen pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-white p-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Skeleton className="w-20 h-20 rounded-full" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-60" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white mt-4 p-4 shadow-sm flex gap-4 justify-center">
        <Skeleton className="h-8 w-24 rounded-xl" />
        <Skeleton className="h-8 w-24 rounded-xl" />
        <Skeleton className="h-8 w-24 rounded-xl" />
        <Skeleton className="h-8 w-24 rounded-xl" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <Skeleton className="h-40 w-full rounded-2xl" />
            <Skeleton className="h-40 w-full rounded-2xl" />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            <Skeleton className="h-32 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
