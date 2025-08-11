import React from "react";
import { Button, Avatar } from "../../shared/ui";

export const HomePage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">WhatsApp Clone Demo</h1>

      {/* Avatar usage */}
      <div className="flex items-center space-x-4">
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="John Doe"
          size="md"
        />
        <Avatar fallback="JD" size="sm" />
        <Avatar size="lg" />
      </div>

      {/* Button usage */}
      <div className="space-x-3">
        <Button variant="primary" size="sm">
          Send
        </Button>
        <Button variant="secondary" size="md">
          Cancel
        </Button>
        <Button variant="outline" size="lg">
          More
        </Button>
        <Button variant="danger">Delete</Button>
      </div>
    </div>
  );
};
