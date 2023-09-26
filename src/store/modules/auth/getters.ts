import { GetterTree } from "vuex";
import { AuthState } from "./types";
import { RootState } from "../../types";

export const getters: GetterTree<AuthState, RootState> = {
  currentUser(state): string {
    return state.auth?.username || "";
  },
  isAuthenticated(state): boolean {
    return state.isAuthenticated;
  },
};
