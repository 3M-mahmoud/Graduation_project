import { MessageCircle, Clock, Heart } from "lucide-react";

export const ProfileFeed = ({ posts, logo }: any) => {
  return (
    <div className="space-y-6">
      {posts.map((post: any) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-50 overflow-hidden">
                <img
                  src={logo}
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">
                  {post.author}
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                  <Clock size={12} /> {post.time}
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pb-4">
            <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>

          {post.image && (
            <div className="w-full bg-slate-50 border-y border-slate-50">
              <img
                src={post.image}
                alt="Post Attachment"
                className="w-full max-h-[500px] object-contain mx-auto"
              />
            </div>
          )}

          <div className="px-4 py-3 border-t flex justify-between">
            <div className=" flex items-center gap-6">
              <button className="flex items-center gap-2 text-slate-500 text-sm font-bold hover:text-blue-500 transition cursor-pointer">
                <Heart size={18} /> 9
              </button>
              <button className="flex items-center gap-2 text-slate-500 text-sm font-bold hover:text-orange-500 transition cursor-pointer">
                <MessageCircle size={18} /> 12
              </button>
            </div>
            <button className="py-2 px-4 bg-[#E2F5FE] text-sm rounded-xl text-[#0F3D2E] hover:bg-[#c1e1f0] cursor-pointer">
              إضافة تعليق
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
