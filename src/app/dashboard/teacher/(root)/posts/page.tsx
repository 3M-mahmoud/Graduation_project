"use client";
import Image from "next/image";
import {
  Plus,
  SlidersHorizontal,
  Trash2,
  PencilLine,
  MessageCircle,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";

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
            {posts?.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative "
              >
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <button className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer">
                    <Trash2 size={18} />
                  </button>
                  <Link
                    href={`/dashboard/teacher/posts/edit/${post.id}`}
                    className="text-gray-300 hover:text-[#003F87] transition-colors cursor-pointer"
                  >
                    <PencilLine size={18} />
                  </Link>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="size-12 rounded-full overflow-hidden">
                    <Image
                      src="/teacher-avatar.jpg"
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="text-right">
                    <h4 className="text-[#204658] font-bold text-lg leading-none mb-1">
                      {post.author}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-medium">
                      {post.time}
                    </p>
                  </div>
                </div>

                <div className="pr-16 mb-8">
                  <p className="text-[#204658] text-sm md:text-base leading-relaxed whitespace-pre-line text-right font-medium">
                    {post.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-end gap-6">
                  <div className="flex items-center gap-2 text-gray-400 hover:text-[#003F87] cursor-pointer transition-colors">
                    <span className="text-sm font-bold">
                      {post.comments} تعليق
                    </span>
                    <MessageCircle size={18} />
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 hover:text-red-500 cursor-pointer transition-colors">
                    <span className="text-sm font-bold">{post.likes}</span>
                    <Heart size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="">0</div>
        )}
      </div>
    </div>
  );
}
