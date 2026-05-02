// "use client";
// import { DOMAIN } from "@/utils/constants";
// import axios from "axios";
// import {
//   createContext,
//   Dispatch,
//   SetStateAction,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// export type ConversationsType = {
//   id: string;
//   userId: string;
//   receiverId: string; // أضفته لتسهيل التعامل مع الـ IDs
//   senderId: string;
//   active: boolean;
//   name: string;
//   time: string;
//   online: boolean;
//   unread: number;
//   studyMaterial: string;
//   lastMessage: string;
// };

// export type MessageType = {
//   id: string;
//   senderId: string;
//   receiverId: string;
//   conversationId: string;
//   isRead: boolean;
//   content: string;
//   time: string;
//   createdAt: string;
// };

// type ValueType = {
//   setOpenChat: Dispatch<SetStateAction<string>>;
//   openChat: string;
//   senderId: string;
//   AllOnline: Set<string>;
//   setAllOnline: Dispatch<SetStateAction<Set<string>>>;
//   socket: WebSocket | null;
//   conversations: ConversationsType[];
//   setConversations: Dispatch<SetStateAction<ConversationsType[]>>;
//   dataHeader: ConversationsType | null;
//   setDataHeader: Dispatch<SetStateAction<ConversationsType | null>>;
// };

// const SocketContext = createContext<ValueType | null>(null);

// export const useSocket = () => {
//   const context = useContext(SocketContext);
//   if (!context)
//     throw new Error("useSocket must be used within a SocketProvider");
//   return context;
// };

// const WsSocket = ({ children }: { children: React.ReactNode }) => {
//   const [openChat, setOpenChat] = useState<string>("");
//   const [dataHeader, setDataHeader] = useState<ConversationsType | null>(null);
//   const [senderId, setSender] = useState<string>("");
//   const [AllOnline, setAllOnline] = useState<Set<string>>(new Set());
//   const [conversations, setConversations] = useState<ConversationsType[]>([]);
//   const [socket, setSocket] = useState<WebSocket | null>(null);
//   // const socketRef = useRef<WebSocket | null>(null);

//   // 1. جلب الـ senderId من localStorage
//   useEffect(() => {
//     const savedId = localStorage.getItem("userId");
//     if (savedId) setSender(savedId);
//   }, []);

//   // 2. إعداد اتصال الـ WebSocket العالمي
//   useEffect(() => {
//     if (!senderId) return;

//     // تغيير الرابط حسب إعدادات السيرفر عندك
//     const ws = new WebSocket(`ws://localhost:3001?userId=${senderId}`);
//     setSocket(ws);

//     ws.onopen = () => console.log("✅ Connected to Socket");

//     ws.onmessage = (event) => {
//       // const data = JSON.parse(event.data);
//       // switch (data.type) {
//       //   // حالة الـ Presence (أونلاين / أوفلاين)
//       //   case "presence":
//       //   case "AllPresence": {
//       //     const targetId = data.payload.senderId || data.payload.receiverId;
//       //     const isOnline = data.payload.isOnline;
//       //     setAllOnline((prev) => {
//       //       const newSet = new Set(prev);
//       //       isOnline ? newSet.add(targetId) : newSet.delete(targetId);
//       //       return newSet;
//       //     });
//       //     break;
//       //   }
//       //   // تحديث قائمة المحادثات عند وصول رسالة جديدة
//       //   case "message": {
//       //     const newMsg = data.payload;
//       //     setConversations((prev) => {
//       //       const index = prev.findIndex((c) => c.id === newMsg.conversationId);
//       //       if (index === -1) return prev; // إذا كانت المحادثة غير موجودة في القائمة
//       //       const updated = [...prev];
//       //       const updatedConv = {
//       //         ...updated[index],
//       //         lastMessage: newMsg.content,
//       //         time: newMsg.time,
//       //       };
//       //       // نقل المحادثة للأعلى (اختياري)
//       //       updated.splice(index, 1);
//       //       return [updatedConv, ...updated];
//       //     });
//       //     break;
//       //   }
//       // }
//     };

//     ws.onclose = () => console.log("❌ Socket Disconnected");

//     return () => {
//       ws.close();
//     };
//   }, [senderId]);

//   const value: ValueType = {
//     setOpenChat,
//     senderId,
//     AllOnline,
//     setAllOnline,
//     socket,
//     openChat,
//     conversations,
//     setConversations,
//     dataHeader,
//     setDataHeader,
//   };

//   return (
//     <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
//   );
// };

// export default WsSocket;

"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type ConversationsType = {
  id: string;
  userId: string;
  receiverId: string; // أضفته لتسهيل التعامل مع الـ IDs
  senderId: string;
  active: boolean;
  name: string;
  time: string;
  online: boolean;
  unread: number;
  studyMaterial: string;
  lastMessage: string;
};

export type MessageType = {
  id: string;
  senderId: string;
  receiverId: string;
  conversationId: string;
  isRead: boolean;
  content: string;
  time: string;
  createdAt: string;
};

type ValueType = {
  setOpenChat: Dispatch<SetStateAction<string>>;
  openChat: string;
  senderId: string;
  AllOnline: Set<string>;
  setAllOnline: Dispatch<SetStateAction<Set<string>>>;
  socket: WebSocket | null;
  conversations: ConversationsType[];
  setConversations: Dispatch<SetStateAction<ConversationsType[]>>;
  dataHeader: ConversationsType | null;
  setDataHeader: Dispatch<SetStateAction<ConversationsType | null>>;
};

const SocketContext = createContext<ValueType | null>(null);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context)
    throw new Error("useSocket must be used within a SocketProvider");
  return context;
};

const WsSocket = ({ children }: { children: React.ReactNode }) => {
  const [openChat, setOpenChat] = useState<string>("");
  const [dataHeader, setDataHeader] = useState<ConversationsType | null>(null);
  const [senderId, setSender] = useState<string>("");
  const [AllOnline, setAllOnline] = useState<Set<string>>(new Set());
  const [conversations, setConversations] = useState<ConversationsType[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  // const socketRef = useRef<WebSocket | null>(null);

  // 1. جلب الـ senderId من localStorage
  useEffect(() => {
    const savedId = localStorage.getItem("userId");
    if (savedId) setSender(savedId);
  }, []);

  // 2. إعداد اتصال الـ WebSocket العالمي
  useEffect(() => {
    if (!senderId) return;

    // تغيير الرابط حسب إعدادات السيرفر عندك
    const ws = new WebSocket(`ws://localhost:3001?userId=${senderId}`);
    setSocket(ws);

    ws.onopen = () => console.log("✅ Connected to Socket");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      switch (data.type) {
        // حالة الـ Presence (أونلاين / أوفلاين)
        case "presence":
        case "AllPresence": {
          const targetId = data.payload.senderId || data.payload.receiverId;
          const isOnline = data.payload.isOnline;

          setAllOnline((prev) => {
            const newSet = new Set(prev);
            isOnline ? newSet.add(targetId) : newSet.delete(targetId);
            return newSet;
          });
          break;
        }

        // تحديث قائمة المحادثات عند وصول رسالة جديدة
        case "message": {
          const newMsg = data.payload;
          setConversations((prev) => {
            const index = prev.findIndex((c) => c.id === newMsg.conversationId);
            if (index === -1) return prev; // إذا كانت المحادثة غير موجودة في القائمة

            const updated = [...prev];
            const updatedConv = {
              ...updated[index],
              lastMessage: newMsg.content,
              time: newMsg.time,
            };

            // نقل المحادثة للأعلى (اختياري)
            updated.splice(index, 1);
            return [updatedConv, ...updated];
          });
          break;
        }
      }
    };

    ws.onclose = () => console.log("❌ Socket Disconnected");

    return () => {
      ws.close();
    };
  }, [senderId]);

  const value: ValueType = {
    setOpenChat,
    senderId,
    AllOnline,
    setAllOnline,
    socket,
    openChat,
    conversations,
    setConversations,
    dataHeader,
    setDataHeader,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export default WsSocket;
