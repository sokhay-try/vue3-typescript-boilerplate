import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { AuthState } from "./types";
import { RootState } from "../../types";

export const state: AuthState = {
  auth: undefined,
  isAuthenticated: false,
};

const namespaced = true;

export const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
