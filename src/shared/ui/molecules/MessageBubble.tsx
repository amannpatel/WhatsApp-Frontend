import React from "react";
import { Avatar } from "../primitives/Avatar";
import { cn } from "../../lib/utils";

interface MessageBubbleProps {
  message: string;
  senderName: string;
  senderAvatar?: string;
  isOwn?: boolean;
  time: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  senderName,
  senderAvatar,
  isOwn = false,
  time,
}) => {
  return (
    <div
      className={cn(
        "flex items-end space-x-2 max-w-[75%]",
        isOwn && "ml-auto flex-row-reverse space-x-reverse"
      )}
    >
      <Avatar
        src={senderAvatar}
        fallback={senderName.charAt(0).toUpperCase()}
        size="sm"
      />
      <div>
        <div
          className={cn(
            "rounded-lg px-3 py-2 text-sm shadow-sm",
            isOwn
              ? "bg-green-500 text-white rounded-br-none"
              : "bg-gray-200 text-gray-900 rounded-bl-none"
          )}
        >
          {message}
        </div>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
};
