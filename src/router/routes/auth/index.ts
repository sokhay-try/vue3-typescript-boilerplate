import { RouteName } from "@/constants";
import { RouteRecordRaw } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";

export const AuthRouteDef = {
  LOGIN: {
    path: "login",
    name: RouteName.AUTH.LOGIN,
    meta: {
      title: "Login",
    },
    component: () => import("@/views/LoginView.vue"),
  },
};

export const AuthRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    redirect: {
      name: RouteName.AUTH.LOGIN,
    },
  },
  {
    path: "/auth",
    component: AuthLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "",
        redirect: {
          name: RouteName.AUTH.LOGIN,
        },
      },
      AuthRouteDef.LOGIN,
    ],
  },
];
