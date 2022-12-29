import { RouteName } from "@/constants";
import { RouteRecordRaw } from "vue-router";

export const HomeRoutes: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: RouteName.HOME.INDEX,
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
  },
];
