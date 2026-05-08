"use client";
import { DOMAIN } from "@/utils/constants";
import { MessageCircle, Clock, Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonLikes from "../button/ButtonLike";
import { formatDate } from "../helper";
export const ProfileFeed = ({
  userName,
  userImage,
  role,
  userId,
  cachePosts,
  setCachePosts,
}: any) => {
  const [page, setPage] = useState(1);

  console.log(cachePosts);
  // console.log(json);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (cachePosts?.length > 0)
      return setCachePosts((pre) => ({
        ...pre,
        posts: cachePosts,
      }));

    const getData = async () => {
      if (!userId) return;
      const res = await fetch(
        `${DOMAIN}posts?userId=${userId}&role=${role}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const json = await res.json();
      console.log(json);

      setCachePosts({
        meta: json?.data?.meta,
        data: json?.data?.data,
      });
    };
    getData();
  }, [userId]);

  return (
    <>
      {cachePosts?.data?.length > 0 ? (
        <div className="space-y-6">
          {cachePosts?.data?.map((post: any) => (
            <div
              data-aos="zoom-in"
              key={post.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-50 overflow-hidden">
                    {userImage && (
                      <Image
                        src={userImage}
                        alt="Author"
                        width={44}
                        height={44}
                        className="w-11 h-11 object-cover"
                        unoptimized
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      {userName}
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
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
          <p className="text-slate-400 font-bold text-lg">لا توجد منشورات .</p>
        </div>
      )}
    </>
  );
};
