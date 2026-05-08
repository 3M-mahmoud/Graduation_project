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
  const [token, setToken] = useState<string | null>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    setSenderId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    if (!senderId) return;

    const ws = new WebSocket(
      `wss://centermasrbackendgraduationproject-production-92c6.up.railway.app/api/v1/ws?userId=${
        senderId || ""
      }`,
    );
    // const ws = new WebSocket(`ws://localhost:3001?userId=${senderId}`);
    // setSocket(ws);

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