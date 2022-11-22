import React from "react";

export interface SideMenuProps {
  children?: SideMenuItems[];
  visible?: boolean;
  title?: string;
  closeFunction: JSONValue;
}

export interface SideMenuItems {
  element: JSONValue;
  callback?: JSONValue // Catchall function that returns pretty much anything
}
