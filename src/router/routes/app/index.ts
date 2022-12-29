import ClientLayout from "@/layouts/ClientLayout.vue";
import { RouteRecordRaw } from "vue-router";
import { HomeRoutes } from "./home";
import { RouteName } from "@/constants";

export const ClientRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "root",
    redirect: {
      name: RouteName.HOME.INDEX,
    },
  },
  {
    path: "/app",
    component: ClientLayout,
    props: {},
    meta: {
      requiresAuth: true,
    },
    children: [...HomeRoutes],
  },
];
