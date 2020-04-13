import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from './views/Login';

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        keepAlive: false,
        title: 'home'
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/about",
      name: "About",
      meta: {
        keepAlive: false
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path: "/test",
      name: "test",
      meta: {
        keepAlive: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import(/* webpackChunkName: "about" */ "@/views/TestPage.vue")
    }
  ]
});
