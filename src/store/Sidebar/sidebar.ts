import { create } from "zustand";
import { ActionsType, actions } from "./actions.store";
import { StateType, states } from "./states.store";

export const useSidebarStore = create<StateType & ActionsType>((set, get) => ({
  ...states,
  ...actions(set, get),
}));
