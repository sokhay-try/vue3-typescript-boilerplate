import { RouteName } from "@/constants";
import { createRouter, createWebHistory } from "vue-router";
import { loadRoutes } from "./loadRoutes";
import authStore from "@/store";
const { routes } = loadRoutes();

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!authStore.getters["auth/isAuthenticated"]) {
      next({ name: RouteName.AUTH.LOGIN });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router;
