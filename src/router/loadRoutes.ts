import { ClientRoutes } from "@/router/routes/app";
import { RouteRecordRaw } from "vue-router";
import { AuthRoutes } from "./routes/auth";

export function loadRoutes() {
  const routes: Array<RouteRecordRaw> = [...ClientRoutes, ...AuthRoutes];

  return { routes };
}
