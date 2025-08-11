import React from "react";
import { Avatar } from "../primitives/Avatar";
import { FiSearch, FiMoreVertical, FiPhone, FiVideo } from "react-icons/fi";

interface ChatHeaderProps {
  chatName: string;
  chatStatus?: string;
  chatAvatar?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  chatName,
  chatStatus = "online",
  chatAvatar,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b">
      {/* Left section: Avatar + name */}
      <div className="flex items-center space-x-3">
        <Avatar
          src={chatAvatar}
          fallback={chatName.charAt(0).toUpperCase()}
          size="sm"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{chatName}</span>
          <span className="text-xs text-gray-500">{chatStatus}</span>
        </div>
      </div>

      {/* Right section: action icons */}
      <div className="flex items-center space-x-4 text-gray-600">
        <button className="hover:text-gray-800">
          <FiVideo size={18} />
        </button>
        <button className="hover:text-gray-800">
          <FiPhone size={18} />
        </button>
        <button className="hover:text-gray-800">
          <FiSearch size={18} />
        </button>
        <button className="hover:text-gray-800">
          <FiMoreVertical size={18} />
        </button>
      </div>
    </div>
  );
};
