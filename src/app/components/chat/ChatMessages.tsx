// "use client";

// import { useSocket } from "@/context/WsSocket"; // تغيير السياق هنا
// import { Send, X, User } from "lucide-react";
// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";

// const ChatMessages = ({ setAllMessages, AllMessages, isTyping }: any) => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [inputValue, setInputValue] = useState("");

//   const { dataHeader, setDataHeader, senderId, AllOnline, socket }: any =
//     useSocket();
//   const [refresh, setRefresh] = useState(0);

//   const receiverId =
//     dataHeader?.receiverId === senderId
//       ? dataHeader?.senderId
//       : dataHeader?.receiverId;

//   const messages = AllMessages[dataHeader?.id] || [];

//   const getCurrentTime = () => {
//     return new Date().toLocaleTimeString("ar-EG", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   const openChat = async () => {
//     if (!dataHeader?.id || !senderId) return;
//     try {
//       const res = await fetch(
//         `http://localhost:3001/api/v1/messages?senderId=${senderId}&receiverId=${receiverId}`,
//       );
//       const data = await res.json();
//       setAllMessages((prev: any) => ({
//         ...prev,
//         [dataHeader.id]: data.data,
//       }));
//       setRefresh((prev) => prev + 1);
//     } catch (err) {
//       console.error("Error loading messages:", err);
//     }
//   };

//   useEffect(() => {
//     setInputValue("");
//     if (!dataHeader?.id) return;
//     inputRef.current?.focus();
//     if (!AllMessages[dataHeader.id]) {
//       openChat();
//     }
//   }, [dataHeader?.id]);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         top: scrollRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [messages, isTyping]);

//   const userOnline = AllOnline?.has(receiverId);
//   const typing = isTyping[receiverId] || false;

//   const sendMessage = useCallback(() => {
//     if (!inputValue.trim() || !dataHeader || !socket) return;

//     const messagePayload = {
//       type: "send_message",
//       payload: {
//         conversationId: dataHeader.id,
//         senderId: senderId,
//         receiverId: dataHeader.receiverId,
//         content: inputValue,
//       },
//     };

//     socket.send(JSON.stringify(messagePayload));
//     setInputValue("");
//   }, [inputValue, dataHeader, socket, senderId]);

//   if (!dataHeader) {
//     return (
//       <div className="flex-1 flex flex-col items-center justify-center bg-[#F5F7F9] text-gray-400">
//         <div className="p-8 rounded-full bg-white mb-4 shadow-sm">
//           <User size={48} className="opacity-20" />
//         </div>
//         <p className="font-bold text-lg">اختر محادثة للبدء</p>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="flex-1 flex flex-col bg-[#F5F7F9] h-full overflow-hidden"
//       dir="rtl"
//     >
//       {/* HEADER */}
//       <header className="p-4 bg-white border-b flex items-center justify-between shadow-sm z-10">
//         <div className="flex items-center gap-3">
//           <div className="relative">
//             <div className="size-11 rounded-full overflow-hidden border border-gray-200 bg-gradient-to-tr from-gray-50 to-gray-200 flex items-center justify-center">
//               {dataHeader?.imageUrl ? (
//                 <Image
//                   src={dataHeader.imageUrl || ""}
//                   alt=""
//                   className="object-cover size-full"
//                 />
//               ) : (
//                 <User className="text-gray-400" size={24} />
//               )}
//             </div>
//             <div
//               className={`absolute bottom-0 left-0 size-3 border-2 border-white rounded-full transition-colors duration-500 ${
//                 userOnline
//                   ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
//                   : "bg-gray-300"
//               }`}
//             />
//           </div>
//           <div className="text-right">
//             <h3 className="font-bold text-[#204658] text-[15px]">
//               {dataHeader?.name}
//             </h3>
//             <span
//               className={`text-[11px] font-medium ${userOnline ? "text-green-600" : "text-gray-400"}`}
//             >
//               {userOnline ? "متصل الآن" : "غير متصل"}
//             </span>
//           </div>
//         </div>
//         <button
//           onClick={() => setDataHeader(null)}
//           className="p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all"
//         >
//           <X size={20} />
//         </button>
//       </header>

//       <div
//         ref={scrollRef}
//         className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8F9FA] custom-scrollbar"
//       >
//         {messages.map((msg: any, index: number) => {
//           const isMe = msg.senderId === senderId;
//           return (
//             <div
//               key={msg.id || index}
//               className={`flex ${isMe ? "justify-start" : "justify-end"}`}
//             >
//               <div
//                 className={`group relative p-3 px-4 rounded-[18px] max-w-[80%] shadow-sm transition-all ${
//                   isMe
//                     ? "bg-[#204658] text-white rounded-tr-none hover:bg-[#28556b]"
//                     : "bg-white text-[#204658] rounded-tl-none border border-gray-100 hover:border-gray-200"
//                 }`}
//               >
//                 <p className="text-[14px] leading-relaxed break-words whitespace-pre-wrap">
//                   {msg.content}
//                 </p>
//                 <span
//                   className={`text-[9px] mt-1 block opacity-50 ${isMe ? "text-left" : "text-right"}`}
//                 >
//                   {msg.time || getCurrentTime()}
//                 </span>
//               </div>
//             </div>
//           );
//         })}

//         {typing && (
//           <div
//             className={`flex justify-start transition-all duration-1000 ease-in-out ${typing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
//           >
//             <div className="bg-white border border-gray-100 p-2.5 px-4 rounded-[18px] rounded-tl-none flex items-center gap-2 shadow-sm">
//               <div className="flex gap-1">
//                 <span
//                   className="size-1.5 bg-[#204658] rounded-full animate-bounce"
//                   style={{ animationDelay: "0ms" }}
//                 ></span>
//                 <span
//                   className="size-1.5 bg-[#204658] rounded-full animate-bounce"
//                   style={{ animationDelay: "150ms" }}
//                 ></span>
//                 <span
//                   className="size-1.5 bg-[#204658] rounded-full animate-bounce"
//                   style={{ animationDelay: "300ms" }}
//                 ></span>
//               </div>
//               <span className="text-[12px] text-[#204658] font-medium">
//                 يكتب الآن...
//               </span>
//             </div>
//           </div>
//         )}
//       </div>

//       <footer className="p-4 bg-white border-t border-gray-100">
//         <div className="flex items-center gap-2 max-w-4xl mx-auto bg-[#F8F9FA] p-1.5 rounded-[24px] border border-gray-200 focus-within:bg-white focus-within:border-[#204658] focus-within:ring-4 focus-within:ring-[#204658]/5 transition-all duration-300">
//           <input
//             ref={inputRef}
//             value={inputValue}
//             onChange={(e) => {
//               setInputValue(e.target.value);
//               socket?.send(
//                 JSON.stringify({
//                   type: "typing",
//                   payload: {
//                     receiverId: dataHeader.receiverId,
//                     conversationId: dataHeader.id,
//                     isTyping: true,
//                   },
//                 }),
//               );
//             }}
//             onKeyUp={() => {
//               socket?.send(
//                 JSON.stringify({
//                   type: "typing",
//                   payload: {
//                     receiverId: dataHeader.receiverId,
//                     conversationId: dataHeader.id,
//                     isTyping: false,
//                   },
//                 }),
//               );
//             }}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && inputValue.trim()) {
//                 e.preventDefault();
//                 sendMessage();
//                 setRefresh((p) => p + 1);
//               }
//             }}
//             placeholder="اكتب رسالتك هنا..."
//             className="flex-1 bg-transparent py-2.5 px-4 outline-none text-[14.5px] text-gray-800 placeholder:text-gray-400"
//           />
//           <button
//             onClick={sendMessage}
//             disabled={!inputValue.trim()}
//             className="bg-[#204658] text-white p-3 rounded-full hover:bg-[#2c5b72] active:scale-90 disabled:opacity-20 disabled:grayscale transition-all shadow-md flex-shrink-0"
//           >
//             <Send size={18} className="rotate-180" />
//           </button>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ChatMessages;

"use client";

import { useSocket } from "@/context/WsSocket"; // تغيير السياق هنا
import { DOMAIN } from "@/utils/constants";
import { Send, X, User } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { getCurrentTime } from "../helper";

const ChatMessages = ({ setAllMessages, AllMessages, isTyping }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const { dataHeader, setDataHeader, senderId, AllOnline, socket }: any =
    useSocket();
  const [refresh, setRefresh] = useState(0);
  const receiverId =
    dataHeader?.receiverId === senderId
      ? dataHeader?.senderId
      : dataHeader?.receiverId;

  const messages = AllMessages[dataHeader?.id] || [];

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("ar-EG", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const openChat = async () => {
    if (!dataHeader?.id || !senderId) return;
    try {
      const res = await fetch(
        `http://localhost:3001/api/v1/messages?senderId=${senderId}&receiverId=${receiverId}`,
      );
      const data = await res.json();
      setAllMessages((prev: any) => ({
        ...prev,
        [dataHeader.id]: data.data,
      }));
      setRefresh((prev) => prev + 1);
    } catch (err) {
      console.error("Error loading messages:", err);
    }
  };

  useEffect(() => {
    setInputValue("");
    if (!dataHeader?.id) return;
    inputRef.current?.focus();
    if (!AllMessages[dataHeader.id]) {
      openChat();
    }
  }, [dataHeader?.id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const userOnline = AllOnline?.has(receiverId);
  const typing = isTyping[receiverId] || false;

  const sendMessage = useCallback(() => {
    if (!inputValue.trim() || !dataHeader || !socket) return;

    const messagePayload = {
      type: "send_message",
      payload: {
        conversationId: dataHeader.id,
        senderId: senderId,
        receiverId: dataHeader.receiverId,
        content: inputValue,
      },
    };
    console.log("00");

    socket.send(JSON.stringify(messagePayload));
    setInputValue("");
  }, [inputValue, dataHeader, socket, senderId]);

  if (!dataHeader) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#F5F7F9] text-gray-400">
        <div className="p-8 rounded-full bg-white mb-4 shadow-sm">
          <User size={48} className="opacity-20" />
        </div>
        <p className="font-bold text-lg">اختر محادثة للبدء</p>
      </div>
    );
  }

  return (
    <div
      className="flex-1 flex flex-col bg-[#F5F7F9] h-full overflow-hidden"
      dir="rtl"
    >
      {/* HEADER */}
      <header className="p-4 bg-white border-b flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="size-11 rounded-full overflow-hidden border border-gray-200 bg-gradient-to-tr from-gray-50 to-gray-200 flex items-center justify-center">
              {dataHeader?.imageUrl ? (
                <Image
                  src={dataHeader.imageUrl || ""}
                  alt=""
                  className="object-cover size-full"
                />
              ) : (
                <User className="text-gray-400" size={24} />
              )}
            </div>
            <div
              className={`absolute bottom-0 left-0 size-3 border-2 border-white rounded-full transition-colors duration-500 ${
                userOnline
                  ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                  : "bg-gray-300"
              }`}
            />
          </div>
          <div className="text-right">
            <h3 className="font-bold text-[#204658] text-[15px]">
              {dataHeader?.name}
            </h3>
            <span
              className={`text-[11px] font-medium ${userOnline ? "text-green-600" : "text-gray-400"}`}
            >
              {userOnline ? "متصل الآن" : "غير متصل"}
            </span>
          </div>
        </div>
        <button
          onClick={() => setDataHeader(null)}
          className="p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all"
        >
          <X size={20} />
        </button>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8F9FA] custom-scrollbar"
      >
        {messages.map((msg: any, index: number) => {
          const isMe = msg.senderId === senderId;
          return (
            <div
              key={msg.id || index}
              className={`flex ${isMe ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`group relative p-3 px-4 rounded-[18px] max-w-[80%] shadow-sm transition-all ${
                  isMe
                    ? "bg-[#204658] text-white rounded-tr-none hover:bg-[#28556b]"
                    : "bg-white text-[#204658] rounded-tl-none border border-gray-100 hover:border-gray-200"
                }`}
              >
                <p className="text-[14px] leading-relaxed break-words whitespace-pre-wrap">
                  {msg.content}
                </p>
                <span
                  className={`text-[9px] mt-1 block opacity-50 ${isMe ? "text-left" : "text-right"}`}
                >
                  {msg.time || getCurrentTime()}
                </span>
              </div>
            </div>
          );
        })}
        {/* <div className="relative w-full">
          {typing && (
            <div className="absolute bottom-full left-6 mb-2 transition-all duration-500 ease-in-out z-10">
              <div className="bg-white/90 backdrop-blur-md border border-gray-100 p-2 px-4 rounded-[20px] rounded-bl-none flex items-center gap-2 shadow-lg ring-1 ring-black/5">
                <div className="flex gap-1">
                  <span
                    className="size-1.5 bg-[#204658] rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="size-1.5 bg-[#204658] rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="size-1.5 bg-[#204658] rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </div>
                <span className="text-[12px] text-[#204658] font-semibold tracking-tight">
                  يكتب الآن...
                </span>
              </div>
            </div>
          )}
        </div> */}
      </div>

      <footer className="relative p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 max-w-4xl mx-auto bg-[#F8F9FA] p-1.5 rounded-[24px] border border-gray-200 focus-within:bg-white focus-within:border-[#204658] focus-within:ring-4 focus-within:ring-[#204658]/5 transition-all duration-300">
          {typing && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 transition-all duration-500 ease-in-out z-20">
              <div className="bg-white/95 backdrop-blur-md border border-gray-200 p-2 px-5 rounded-full flex items-center gap-3 shadow-xl ring-1 ring-black/5">
                <div className="flex gap-1.5">
                  <span
                    className="size-1.5 bg-[#204658] rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="size-1.5 bg-[#204658] rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="size-1.5 bg-[#204658] rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </div>
                <span className="text-[13px] text-[#204658] font-medium tracking-tight border-r pr-3 border-gray-200">
                  {dataHeader?.name} يكتب الآن...
                </span>
              </div>
            </div>
          )}
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              socket?.send(
                JSON.stringify({
                  type: "typing",
                  payload: {
                    receiverId: dataHeader.receiverId,
                    conversationId: dataHeader.id,
                    isTyping: true,
                  },
                }),
              );
            }}
            onKeyUp={() => {
              socket?.send(
                JSON.stringify({
                  type: "typing",
                  payload: {
                    receiverId: dataHeader.receiverId,
                    conversationId: dataHeader.id,
                    isTyping: false,
                  },
                }),
              );
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputValue.trim()) {
                e.preventDefault();
                sendMessage();
                setRefresh((p) => p + 1);
              }
            }}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 bg-transparent py-2.5 px-4 outline-none text-[14.5px] text-gray-800 placeholder:text-gray-400"
          />
          <button
            onClick={sendMessage}
            disabled={!inputValue.trim()}
            className="bg-[#204658] text-white p-3 rounded-full hover:bg-[#2c5b72] active:scale-90 disabled:opacity-20 disabled:grayscale transition-all shadow-md flex-shrink-0"
          >
            <Send size={18} className="rotate-180" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatMessages;
