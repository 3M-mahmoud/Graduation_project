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
//   // conversationId: string;
//   isRead: boolean;
//   content: string;
//   time: string;
//   createdAt: string;
// };

// type ValueType = {
//   setOpenChat: Dispatch<SetStateAction<string>>;
//   openChat: string;
//   senderId: string;
//   // online: Set<string>;

//   AllOnline: Set<string>;
//   setAllOnline: Dispatch<SetStateAction<Set<string>>>;
//   socket: WebSocket | null;
//   conversations: ConversationsType[];
//   setConversations: Dispatch<SetStateAction<ConversationsType[]>>;
//   dataHeader: ConversationsType | null;
//   setDataHeader: Dispatch<SetStateAction<ConversationsType | null>>;
// };

// const MyContext = createContext<ValueType | null>(null);
// // const online = new Set<string>();

// export const useUserContext = () => useContext(MyContext);

// const MyState = ({ children }: { children: React.ReactNode }) => {
//   const [openChat, setOpenChat] = useState<string>("");
//   const [dataHeader, setDataHeader] = useState<ConversationsType | null>(null);
//   const [senderId, setSender] = useState<string>("");
//   const socket = useRef<WebSocket | null>(null);
//   // const AllOnline = new Set<string>();
//   const [AllOnline, setAllOnline] = useState<Set<string>>(new Set());

//   const [conversations, setConversations] = useState<ConversationsType[]>([]);

//   console.log(dataHeader);
//   console.log(conversations);

//   useEffect(() => {
//     setSender(localStorage.getItem("userId") || "");
//   }, []);

//   const value = {
//     setOpenChat,
//     senderId,
//     AllOnline,
//     setAllOnline,
//     // online,
//     socket,
//     openChat,
//     conversations,
//     setConversations,
//     dataHeader,
//     setDataHeader,
//   };
//   return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
// };

// export default MyState;
