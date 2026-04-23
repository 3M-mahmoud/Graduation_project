import { FileText, Lock, Download, FolderOpen } from "lucide-react";

const NotesTab = ({
  searchQuery,
  mode,
}: {
  searchQuery: string;
  mode: string;
}) => {
  const notes = [
    {
      id: 1,
      title: "الأعداد المركبة",
      info: "32 MB . 45 صفحة",
      date: "02 - 03 - 2026",
      isLocked: false,
    },
    {
      id: 2,
      title: "الأعداد المركبة - خواص الوحدة التخيلية",
      info: "12 MB . 21 صفحة",
      date: "09 - 03 - 2026",
      isLocked: false,
    },
    {
      id: 3,
      title: "الصورة الجبرية للعدد المركب",
      info: "احجز الحصة لفتح المذكرة",
      date: "16 - 03 - 2026",
      isLocked: true,
    },
  ];
  const homework = [
    {
      id: 1,
      title: "واجب علي الأعداد المركبة",
      info: "32 MB . 22 صفحة",
      date: "12 - 04 - 2026",
      isLocked: false,
    },
    {
      id: 2,
      title: "الأعداد المركبة - خواص الوحدة التخيلية",
      info: "12 MB . 21 صفحة",
      date: "09 - 03 - 2026",
      isLocked: false,
    },
    {
      id: 3,
      title: "الصورة الجبرية للعدد المركب",
      info: "احجز الحصة لفتح المذكرة",
      date: "16 - 03 - 2026",
      isLocked: true,
    },
  ];
  const exam = [
    {
      id: 1,
      title: "امتحان علي الأعداد المركبة",
      info: "32 MB . 45 صفحة",
      date: "22 - 02 - 2026",
      isLocked: false,
    },
    {
      id: 2,
      title: "الأعداد المركبة - خواص الوحدة التخيلية",
      info: "12 MB . 21 صفحة",
      date: "09 - 03 - 2026",
      isLocked: true,
    },
    {
      id: 3,
      title: "الصورة الجبرية للعدد المركب",
      info: "احجز الحصة لفتح المذكرة",
      date: "16 - 03 - 2026",
      isLocked: true,
    },
  ];
  const data = mode == "Notes" ? notes : mode == "homework" ? homework : exam;

  const filtered = data.filter((n) => n.title.includes(searchQuery));
  return (
    <div className="divide-y divide-[#F8FAFC]">
      {filtered.map((note) => (
        <div key={note.id} className="p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-[#9CA3AF] text-[10px] font-bold mb-1 uppercase">
                حصة
              </p>
              <p className="text-[32px] font-black text-[#9CA3AF] leading-none">
                {note.id}
              </p>
            </div>
            <div
              className={`p-5 rounded-2xl ${
                note.isLocked
                  ? "bg-[#F4F4F4] border-transparent text-[#231F20]"
                  : "bg-[#F4F4F4] text-[#000000]"
              }`}
            >
              {note.isLocked ? <Lock size={28} /> : <FileText size={28} />}
            </div>
            <div className="text-right">
              <h3 className="text-sm md:text-lg font-bold text-[#191C1D] mb-2">
                {note.title}
              </h3>
              <p className="text-[#94A3B8] text-xs font-bold tracking-wide">
                <span className="ml-2">{note.date}</span>{" "}
                {note.isLocked ? "" : note.info + " ."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {note.isLocked ? (
              <span className="text-[#94A3B8] font-bold text-sm ml-4 mt-3 md:mt-0">
                احجز الحصة لفتح{" "}
                {mode == "Notes"
                  ? "المذكرة"
                  : mode == "homework"
                  ? "الواجب"
                  : "الامتحان"}
              </span>
            ) : (
              <div className="flex gap-4">
                <button className="p-3 text-[#94A3B8] hover:text-[#1E293B] transition-colors bg-[#F8FAFC] rounded-lg border border-[#F1F5F9] cursor-pointer">
                  <FolderOpen size={20} />
                </button>
                {mode == "exam" ? (
                  ""
                ) : (
                  <button className="p-3 text-[#94A3B8] hover:text-[#1E293B] transition-colors bg-[#F8FAFC] rounded-lg border border-[#F1F5F9] cursor-pointer">
                    <Download size={20} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesTab;
