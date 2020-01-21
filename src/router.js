import Vue from "vue";
import VueRouter from "vue-router";
import List from "./components/Stage/List";
import Test from "./components/Stage/Test";
import Article from "./components/Stage/Article";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/materials", component: List, name: "List" },
    { path: "/test", component: Test, name: "Test" },
    { path: "/materials/:id", component: Article, name: "Article" }
  ]
});
