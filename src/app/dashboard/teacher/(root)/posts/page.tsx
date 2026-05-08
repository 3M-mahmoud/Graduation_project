"use client";
import Image from "next/image";
import {
  Plus,
  SlidersHorizontal,
  Trash2,
  PencilLine,
  MessageCircle,
  Heart,
  MessageSquare,
  Pencil,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import ButtonLikes from "@/app/components/button/ButtonLike";
import { formatDate } from "@/app/components/helper";
import { useDashboardTeacherContext } from "@/context/DashboardTeacher";

const postsData = [
  {
    id: 1,
    author: "أ. حسن علي عبدالله",
    role: "رياضيات - المرحلة الثانوية",
    time: "2 ي . الساعة 8:00 م",
    content: "غداً الثلاثاء محاضرة الجبر",
    comments: 20,
    likes: 18,
  },
  {
    id: 2,
    author: "أ. حسن علي عبدالله",
    role: "رياضيات - المرحلة الثانوية",
    time: "2 ي . الساعة 8:00 م",
    content:
      "بكره الثلاثاء 30/9 \nجاهز تفهم الرياضيات........... بكل بساطه............ يلا بينا \nمواعيد محاضراتنا إن شاء الله",
    comments: 2,
    likes: 6,
  },
];

type PostType = {
  id: number;
  author: string;
  role: string;
  time: string;
  content: string;
  comments: number;
  likes: number;
};

export default function PostsManagement() {
  const { dataProfile } = useDashboardTeacherContext();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleGetPosts = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `${DOMAIN}posts?userId=${userId}&role=teacher`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setPosts(data?.data?.data);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 lg:p-10 font-sans" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="text-right mb-8">
          <h1 className="text-[#204658] font-bold text-3xl mb-1">
            ادارة المنشورات
          </h1>
          <p className="text-gray-500 text-sm">
            انشاء وادارة منشوراتك التعليمية
          </p>
        </header>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden border border-gray-100">
              <Image
                src="/teacher-avatar.jpg"
                alt="Teacher"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#003F87] transition-colors font-medium">
              <span>منشور جديد</span>
              <Plus
                size={20}
                className="border border-dashed border-gray-300 rounded-md p-0.5"
              />
            </button>
          </div>

          <button className="flex items-center gap-2 text-gray-500 hover:text-[#003F87] transition-all bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
            <SlidersHorizontal size={18} />
            <span className="text-sm font-bold">الفلاتر</span>
          </button>
        </div>

        {posts?.length > 0 ? (
          <div className="space-y-4">
            {posts?.map((post: any) => (
              <div
                data-aos="fade-up"
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-50 overflow-hidden">
                      {dataProfile?.imageUrl && (
                        <Image
                          src={dataProfile?.imageUrl}
                          alt={dataProfile?.name}
                          width={44}
                          height={44}
                          className="w-11 h-11 object-cover"
                          unoptimized
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {dataProfile?.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                        <Clock size={12} /> {formatDate(post.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                    {post.title}
                  </p>
                </div>

                {post?.imageUrl && (
                  <div className="max-w-5xl mx-auto bg-slate-50 border-y border-slate-50">
                    <Image
                      src={post?.imageUrl}
                      alt="Post Attachment"
                      width={400}
                      height={200}
                      className="w-full object-contain mx-auto"
                      unoptimized
                    />
                  </div>
                )}

                <div className="px-4 py-3 border-t flex justify-between">
                  <div className=" flex items-center gap-6">
                    <ButtonLikes
                      isLiked={post.isLiked}
                      likesCount={post.likeCounts}
                      id={post.id}
                    />

                    <button className="flex items-center gap-2 text-slate-500 text-sm font-bold hover:text-orange-500 transition cursor-pointer">
                      <MessageCircle size={18} />
                      <span>{post.commentCounts}</span>
                    </button>
                  </div>
                  <button className="py-2 px-4 bg-[#E2F5FE] text-sm rounded-xl text-[#0F3D2E] hover:bg-[#c1e1f0] cursor-pointer">
                    إضافة تعليق
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
            <p className="text-slate-400 font-bold text-lg">
              لا توجد منشورات متاحة حالياً.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
