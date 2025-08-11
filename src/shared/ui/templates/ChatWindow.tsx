import React, { useState } from "react";
import { MessageBubble } from "../molecules/MessageBubble";
import { Button } from "../primitives/Button";
import { ChatHeader } from "../molecules/ChatHeader";

interface Message {
  id: string;
  sender: string;
  avatar?: string;
  text: string;
  isOwn: boolean;
  time: string;
}

export const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Alice",
      text: "Hey there! 👋",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      isOwn: false,
      time: "10:30 AM",
    },
    {
      id: "2",
      sender: "Me",
      text: "Hi Alice! How are you?",
      isOwn: true,
      time: "10:31 AM",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "Me",
      text: input,
      isOwn: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md border rounded-lg overflow-hidden">
      {/* WhatsApp-like header */}
      <ChatHeader
        chatName="Alice"
        chatStatus="online"
        chatAvatar="https://randomuser.me/api/portraits/women/1.jpg"
      />

      {/* Chat messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-white">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg.text}
            senderName={msg.sender}
            senderAvatar={msg.avatar}
            isOwn={msg.isOwn}
            time={msg.time}
          />
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center p-3 border-t bg-gray-50 space-x-2">
        <input
          className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
};
