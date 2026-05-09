"use client";
import { useRouter } from "next/navigation";
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
  receiverId: string;
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
  senderId: string | null;
  setSenderId: Dispatch<SetStateAction<string | null>>;
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
  const [senderId, setSenderId] = useState<string | null>(null);
  const [AllOnline, setAllOnline] = useState<Set<string>>(new Set());
  const [conversations, setConversations] = useState<ConversationsType[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const Router = useRouter();

  useEffect(() => {
    setSenderId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    if (
      socket?.readyState === WebSocket.OPEN &&
      conversations.length > 0 &&
      senderId
    ) {
      socket?.send(
        JSON.stringify({
          type: "init_conversations",
          payload: conversations.map((c) => ({
            conversationId: c.id,
            receiverId: c.senderId === senderId ? c.receiverId : c.senderId,
          })),
        }),
      );
    }
  }, [socket, conversations, senderId]);

  useEffect(() => {
    if (!senderId) return;

    const ws = new WebSocket(
      `${process.env.NEXT_PUBLIC_WS_URL}${senderId || ""}`,
    );
    // const ws = new WebSocket(
    //   `ws://localhost:3001/api/v1/ws?userId=${senderId}`,
    // );
    setSocket(ws);

    ws.onopen = () => {
      console.log("✅ Socket Connected");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

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
      }
    };

    ws.onclose = () => {
      setTimeout(() => {
        Router.refresh();
      }, 30000);
    };
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
    setSenderId,
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
