import React from "react";
import { cn } from "../../lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string; // initials or emoji
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-16 h-16 text-lg",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = "md",
  fallback = "👤",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden bg-gray-200 flex items-center justify-center font-medium text-gray-700",
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
};
