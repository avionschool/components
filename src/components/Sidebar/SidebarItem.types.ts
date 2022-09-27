import React from "react";

export interface SidebarItemProps {
  link: string;
  name: React.ReactNode; 
  isActive?: boolean;
  disabled: boolean;
  icon: React.ReactNode;
  onClick?: () => void;
}
