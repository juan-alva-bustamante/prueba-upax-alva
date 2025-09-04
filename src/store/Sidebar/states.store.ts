import { ReactNode } from "react";

export type StateType = {
  isOpen: boolean;
  content: any; // puede ser un objeto tipo `User` u otro más adelante
  openSidebar: (content: ReactNode) => void;
  closeSidebar: () => void;
};

export const states = <StateType>{
  isOpen: false,
  content: null,
  openSidebar: (_content: any) => {},
  closeSidebar: () => {},
};
