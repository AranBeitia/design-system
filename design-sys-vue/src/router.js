import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/guidelines",
      name: "guidelines",
      // route level code-splitting
      // this generates a separate chunk (guidelines.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "guidelines" */ "./views/Guidelines.vue")
    },
    {
      path: "/components",
      name: "components",
      // route level code-splitting
      // this generates a separate chunk (components.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "components" */ "./views/Components.vue")
    }
  ]
});
