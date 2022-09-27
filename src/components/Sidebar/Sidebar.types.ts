import { SidebarItemProps } from "@components/Sidebar/SidebarItem.types";

export interface SidebarProps {
  logo: string;
  mobileLogo: string;
  mobileLogoAlt: string;
  items: SidebarItemProps[],
  logoAlt: string;
  className?: string;
}