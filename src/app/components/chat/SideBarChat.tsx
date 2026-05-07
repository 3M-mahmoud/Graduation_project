"use client";

import { Search, MoreVertical, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { formatDate } from "../helper";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useSocket } from "@/context/WsSocket";
import Image from "next/image";

export default function ChatSidebar({ isTyping }: any) {
  const {
    conversations,
    setConversations,
    setDataHeader,
    dataHeader,
    AllOnline,
    socket,
  }: any = useSocket();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleGetContacts = async () => {
      const token = localStorage.getItem("token");
      try {
        const {
          data: { data },
        } = await axios.get(`${DOMAIN}conversations`, {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        });
        setConversations(data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };
    handleGetContacts();
  }, [setConversations]);

  return (
    <div
      className="w-full md:w-[320px] h-full bg-white border-l border-gray-100 flex flex-col shadow-[1px_0_10px_rgba(0,0,0,0.02)]"
      dir="rtl"
    >
      <div className="p-5 pb-3">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-black text-[#204658] tracking-tight">
            المحادثات
          </h1>
          <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 transition-all active:scale-90">
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="relative group">
          <input
            value={search}
            onChange={(e) => {
              if (e.target.value.trim().length > 0) {
                return setSearch(e.target.value);
              }
              setSearch(e.target.value.trim());
            }}
            type="text"
            placeholder="بحث عن مدرس او سنتر..."
            className="w-full bg-[#F3F5F7] pr-11 pl-4 py-3 rounded-2xl border-2 border-transparent outline-none text-sm text-[#204658] placeholder-gray-400 focus:bg-white focus:border-[#204658]/10 transition-all shadow-sm"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#204658] transition-colors"
            size={18}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 space-y-1 custom-scrollbar">
        {conversations?.length > 0 ? (
          conversations
            .filter((user: any) =>
              user.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map((user: any) => {
              const active = user?.id === dataHeader?.id;

              const targetId = user?.receiverId || user?.senderId;
              const userOnline = AllOnline?.has(targetId);
              const typing = isTyping[targetId] || false;

              return (
                <div
                  key={user.id}
                  className={`relative flex items-center gap-3 p-3.5 rounded-[20px] cursor-pointer transition-all duration-300 group ${
                    active
                      ? "bg-[#D9E3E3] shadow-sm transform scale-[1.02]"
                      : "hover:bg-gray-50 border border-transparent"
                  }`}
                  onClick={() => {
                    setDataHeader(user);
                    const emitEvent = (type: string) => {
                      socket?.send(
                        JSON.stringify({
                          type,
                          payload: {
                            receiverId: targetId,
                            conversationId: user.id,
                          },
                        }),
                      );
                    };
                    emitEvent("join");
                    emitEvent("open_chat");
                  }}
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className={`size-13 rounded-full p-[2px] transition-all duration-500 ${
                        active ? "ring-2 ring-[#204658] ring-offset-2" : ""
                      }`}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white shadow-sm">
                        {user?.imageUrl ? (
                          <Image
                            src={user.imageUrl || ""}
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#204658] to-[#3a6d85] flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              {user.name?.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {userOnline && (
                      <span className="absolute bottom-0 right-0 size-3.5 bg-green-500 border-2 border-white rounded-full shadow-sm">
                        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0 text-right">
                    <div className="flex justify-between items-center mb-1">
                      <h3
                        className={`font-bold text-[14.5px] truncate ${active ? "text-[#204658]" : "text-gray-800"}`}
                      >
                        {user.name}
                      </h3>
                      <span className="text-[10px] font-medium text-gray-400">
                        {formatDate(user.lastMessageAt)}
                      </span>
                    </div>

                    <div className="h-5 flex items-center overflow-hidden">
                      {typing ? (
                        <div className="flex items-center gap-1.5 text-[#204658] animate-pulse">
                          <div className="flex gap-0.5">
                            <span className="size-1 bg-[#204658] rounded-full animate-bounce"></span>
                            <span className="size-1 bg-[#204658] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="size-1 bg-[#204658] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                          </div>
                          <span className="text-[11px] font-bold italic">
                            يكتب الآن...
                          </span>
                        </div>
                      ) : (
                        <p
                          className={`text-[12.5px] truncate transition-colors ${active ? "text-[#204658]/70" : "text-gray-400"}`}
                        >
                          {user.lastMessage || "انفر للبدء المحادثة"}
                        </p>
                      )}
                    </div>
                  </div>

                  {active && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#204658] rounded-l-full"></div>
                  )}
                </div>
              );
            })
        ) : (
          <div className="flex flex-col items-center justify-center pt-20 opacity-20">
            <MessageCircle size={48} />
            <p className="text-sm font-bold mt-2">لا توجد محادثات</p>
          </div>
        )}
      </div>
    </div>
  );
}
