/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTree } from "vuex";
import { AuthState } from "./types";
import { RootState } from "../../types";

export const actions: ActionTree<AuthState, RootState> = {
  login({ commit }, { payload }): any {
    commit("logined", payload);
  },
  logout({ commit }): any {
    commit("logout");
  },
};
