// import { initialSideDrawerState, ISideDrawer } from "./states.store";

import { ReactNode } from "react";

export type ActionsType = {
  openSidebar: (content: ReactNode) => void;
  closeSidebar: () => void;
};

export const actions = (set: any, get: any): ActionsType => ({
  openSidebar: (content: ReactNode) => set({ isOpen: true, content }),
  closeSidebar: () => set({ isOpen: false, content: null }),
});
