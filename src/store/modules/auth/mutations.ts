import { MutationTree } from "vuex";
import { AuthState, IAuth } from "./types";

export const mutations: MutationTree<AuthState> = {
  logined(state, payload: IAuth) {
    state.auth = payload;
    state.isAuthenticated = true;
  },
  logout(state) {
    state.auth = { username: "", password: "" };
    state.isAuthenticated = false;
  },
};
