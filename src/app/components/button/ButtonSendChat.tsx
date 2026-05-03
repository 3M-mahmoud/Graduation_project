"use client";
import { useSocket } from "@/context/WsSocket";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ButtonSendChat = ({ id }: { id: string }) => {
  const router = useRouter();
  const {
    setDataHeader,
    setConversations,
    conversations,
    senderId,
    socket,
  }: any = useSocket();
  const createConversation = async () => {
    console.log(id, senderId);
    const res = await fetch(`${DOMAIN}conversations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ senderId: senderId, receiverId: id }),
    });
    const data = await res.json();

    if (
      !conversations.some((item) => item.id === data.data.id) &&
      senderId !== data.data.senderId
    ) {
      setConversations((prev) => [...prev, data.data]);
    }
    setDataHeader(data.data);
    // setDataHeader(data.data);
    console.log("0000000000000", data);

    const emitEvent = (type: string) => {
      socket?.send(
        JSON.stringify({
          type,
          payload: {
            receiverId: data.data.receiverId,
            conversationId: data.data.id,
          },
        }),
      );
    };
    emitEvent("join");
    emitEvent("open_chat");
    console.log(data.data, "8888888888888888888");
    router.push("/chat");
  };

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
    <button
      onClick={() => {
        createConversation(id);
      }}
      className="flex items-center gap-2 border border-[#818181] text-[#343A40] text-sm px-6 py-2.5 rounded-xl font-bold cursor-pointer hover:bg-[#343A40] hover:text-white transition-all"
    >
      <MessageSquare size={18} /> مراسلة
    </button>
  );
};

export default ButtonSendChat;
