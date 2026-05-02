// "use client";
// import { useState, useEffect } from "react";
// import { MessageType, useSocket } from "@/context/WsSocket";
// import ChatMessages from "@/app/components/chat/ChatMessages";
// import ChatSidebar from "@/app/components/chat/SideBarChat";

// export default function PureWSChat() {
//   const {
//     dataHeader,
//     senderId,
//     conversations,
//     setConversations,
//     setAllOnline,
//     socket,
//   }: any = useSocket();

//   const [isTyping, setIsTyping] = useState<Record<string, boolean>>({});
//   const [AllMessages, setAllMessages] = useState<Record<string, MessageType[]>>(
//     {},
//   );
//   useEffect(() => {
//     if (socket?.readyState === WebSocket.OPEN && conversations?.length > 0) {
//       socket.send(
//         JSON.stringify({
//           type: "init_conversations",
//           payload: conversations.map((c: any) => ({
//             conversationId: c.id,
//             receiverId: senderId === c.senderId ? c.receiverId : c.senderId,
//           })),
//         }),
//       );
//     }
//   }, [conversations, socket, senderId]);

//   useEffect(() => {
//     if (!socket) return;

//     const handleMessage = (event: MessageEvent) => {
//       const data = JSON.parse(event.data);
//       console.log("data", data);

//       switch (data.type) {
//         // case "AllPresence": {
//         //   const targetId = data.payload.receiverId;
//         //   const isOnline = data.payload.isOnline;

//         //   if (data.payload.senderId === senderId) {
//         //     setAllOnline((prevSet) => {
//         //       const newSet = new Set(prevSet);
//         //       if (isOnline) {
//         //         newSet.add(targetId);
//         //       } else {
//         //         newSet.delete(targetId);
//         //       }
//         //       return newSet;
//         //     });
//         //   }
//         //   break;
//         // }
//         // case "presence": {
//         //   const targetId = data.payload.senderId;
//         //   const isOnline = data.payload.isOnline;

//         //   if (data.payload.receiverId === senderId) {
//         //     setAllOnline((prevSet) => {
//         //       const newSet = new Set(prevSet);
//         //       if (isOnline) {
//         //         newSet.add(targetId);
//         //       } else {
//         //         newSet.delete(targetId);
//         //       }
//         //       return newSet;
//         //     });
//         //   }
//         //   break;
//         // }
//         case "AllPresence": {
//           const targetId = data.payload.receiverId;
//           const isOnline = data.payload.isOnline;

//           if (data.payload.senderId === senderId) {
//             setAllOnline((prevSet) => {
//               // ننشئ نسخة جديدة من الـ Set لضمان أن React يلاحظ التغيير
//               const newSet = new Set(prevSet);
//               if (isOnline) {
//                 newSet.add(targetId);
//               } else {
//                 newSet.delete(targetId);
//               }
//               return newSet; // نعيد الـ Set الجديد
//             });
//           }
//           break;
//         }

//         case "presence": {
//           const targetId = data.payload.senderId;
//           const isOnline = data.payload.isOnline;

//           // لاحظ هنا نستخدم receiverId للتحقق إذا كان التنبيه موجه لي
//           if (data.payload.receiverId === senderId) {
//             setAllOnline((prevSet) => {
//               const newSet = new Set(prevSet);
//               if (isOnline) {
//                 newSet.add(targetId);
//               } else {
//                 newSet.delete(targetId);
//               }
//               return newSet;
//             });
//           }
//           break;
//         }

//         case "new_message": {
//           const { conversationId } = data.payload;
//           setAllMessages((prev) => {
//             const oldMessages = prev[conversationId] || [];
//             return {
//               ...prev,
//               [conversationId]: [...oldMessages, data.payload],
//             };
//           });
//           setConversations((prev: any[]) => {
//             const updated = prev.map((conv) => {
//               if (conv.id !== conversationId) return conv;

//               return {
//                 ...conv,
//                 lastMessage: data.payload.content,
//                 lastMessageAt: new Date().toISOString(),
//               };
//             });

//             return updated.sort(
//               (a, b) =>
//                 new Date(b.lastMessageAt).getTime() -
//                 new Date(a.lastMessageAt).getTime(),
//             );
//           });
//           break;
//         }
//         case "typing": {
//           const { receiverId, isTyping: typing } = data.payload;

//           setIsTyping((prev) => ({
//             ...prev,
//             [receiverId]: typing,
//           }));

//           break;
//         }
//       }
//     };

//     socket.addEventListener("message", handleMessage);
//     return () => socket.removeEventListener("message", handleMessage);
//   }, [socket, setAllOnline, setConversations]);

//   return (
//     <div
//       className="no-scrollbar flex h-[90vh] bg-[#F0F2F5] p-4 lg:p-8 font-sans"
//       dir="rtl"
//     >
//       <div className="max-w-7xl mx-auto w-full flex bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50">
//         <ChatSidebar isTyping={isTyping} />

//         {!dataHeader ? (
//           <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-4 bg-gray-50">
//             <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
//               <svg
//                 className="w-10 h-10 text-gray-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                 />
//               </svg>
//             </div>
//             <p className="text-lg font-medium">اختر محادثة لبدء المراسلة</p>
//           </div>
//         ) : (
//           <ChatMessages
//             setAllMessages={setAllMessages}
//             isTyping={isTyping}
//             AllMessages={AllMessages}
//           />
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import { MessageType, useSocket } from "@/context/WsSocket";
import ChatMessages from "@/app/components/chat/ChatMessages";
import ChatSidebar from "@/app/components/chat/SideBarChat";

export default function PureWSChat() {
  const {
    dataHeader,
    senderId,
    conversations,
    setConversations,
    setAllOnline,
    socket,
  }: any = useSocket();

  const [isTyping, setIsTyping] = useState<Record<string, boolean>>({});
  const [AllMessages, setAllMessages] = useState<Record<string, MessageType[]>>(
    {},
  );
  useEffect(() => {
    if (socket?.readyState === WebSocket.OPEN && conversations?.length > 0) {
      socket.send(
        JSON.stringify({
          type: "init_conversations",
          payload: conversations.map((c: any) => ({
            conversationId: c.id,
            receiverId: senderId === c.senderId ? c.receiverId : c.senderId,
          })),
        }),
      );
    }
  }, [conversations, socket, senderId]);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      console.log("data", data);

      switch (data.type) {
        case "AllPresence": {
          const targetId = data.payload.receiverId;
          const isOnline = data.payload.isOnline;

          if (data.payload.senderId === senderId) {
            setAllOnline((prevSet) => {
              const newSet = new Set(prevSet);
              if (isOnline) {
                newSet.add(targetId);
              } else {
                newSet.delete(targetId);
              }
              return newSet;
            });
          }
          break;
        }
        case "presence": {
          const targetId = data.payload.senderId;
          const isOnline = data.payload.isOnline;

          if (data.payload.receiverId === senderId) {
            setAllOnline((prevSet) => {
              const newSet = new Set(prevSet);
              if (isOnline) {
                newSet.add(targetId);
              } else {
                newSet.delete(targetId);
              }
              return newSet;
            });
          }
          break;
        }

        case "new_message": {
          const { conversationId } = data.payload;
          setAllMessages((prev) => {
            const oldMessages = prev[conversationId] || [];
            return {
              ...prev,
              [conversationId]: [...oldMessages, data.payload],
            };
          });
          setConversations((prev: any[]) => {
            const updated = prev.map((conv) => {
              if (conv.id !== conversationId) return conv;

              return {
                ...conv,
                lastMessage: data.payload.content,
                lastMessageAt: new Date().toISOString(),
              };
            });

            return updated.sort(
              (a, b) =>
                new Date(b.lastMessageAt).getTime() -
                new Date(a.lastMessageAt).getTime(),
            );
          });
          break;
        }
        case "typing": {
          const { receiverId, isTyping: typing } = data.payload;

          setIsTyping((prev) => ({
            ...prev,
            [receiverId]: typing,
          }));

          break;
        }
      }
    };

    socket.addEventListener("message", handleMessage);
    return () => socket.removeEventListener("message", handleMessage);
  }, [socket, setAllOnline, setConversations]);

  return (
    <div
      className="no-scrollbar flex h-[90vh] bg-[#F0F2F5] p-4 lg:p-8 font-sans"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto w-full flex bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50">
        <ChatSidebar isTyping={isTyping} />

        {!dataHeader ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-4 bg-gray-50">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <p className="text-lg font-medium">اختر محادثة لبدء المراسلة</p>
          </div>
        ) : (
          <ChatMessages
            setAllMessages={setAllMessages}
            isTyping={isTyping}
            AllMessages={AllMessages}
          />
        )}
      </div>
    </div>
  );
}
