import SidebarItemProps from "./SidebarItem.types";

export interface SidebarProps {
  logo: string;
  mobileLogo: string;
  mobileLogoAlt: string;
  items: SidebarItemProps[],
  logoAlt: string;
  className?: string;
  isHideable?: boolean;
}
