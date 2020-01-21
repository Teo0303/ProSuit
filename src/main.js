import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import Home from "./components/Home";
import List from "./components/Stage/List";
import Test from "./components/Stage/Test";
import Article from "./components/Stage/Article";
import SignIn from "./components/Auth/SignIn";
import SignOut from "./components/Auth/SignOut";
import Portfolio from "./components/Portfolio";
import Library from "./components/Library";
import LogicalTest from "./components/Stage/LogicalTest";
import VuePlyr from "vue-plyr";
import "expose-loader?$!expose-loader?jQuery!jquery";
import select2 from "vue-select2";
import "vue-plyr/dist/vue-plyr.css"; // only if your build system can import css, otherwise import it wherever you would import your css.
import VueProgressBar from "vue-progressbar";
import Lightbox from "vue-my-photos";
import "./assets/sass/main.scss";

Vue.use(VuePlyr);
Vue.use(VueRouter);
Vue.use(VueProgressBar, {
  color: "#109cf1",
  failedColor: "red",
  height: "2px"
});
Vue.use(Lightbox);

let handleOutsideClick;
Vue.directive("closable", {
  bind(el, binding, vnode) {
    handleOutsideClick = e => {
      e.stopPropagation();
      const { handler, exclude } = binding.value;
      let clickedOnExcludedEl = false;
      exclude.forEach(refName => {
        if (!clickedOnExcludedEl) {
          const excludedEl = vnode.context.$refs[refName];
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        vnode.context[handler]();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },

  unbind() {
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  }
});

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home, name: "home", meta: { slideSide: "slide" } },
    {
      path: "/sign-in",
      component: SignIn,
      name: "sign-in",
      meta: { slideSide: "slide" }
    },
    {
      path: "/sign-out",
      component: SignOut,
      name: "sign-out",
      meta: { slideSide: "slide" }
    },
    {
      path: "/materials",
      component: List,
      name: "list",
      meta: { slideSide: "slide" }
    },
    {
      path: "/portfolio",
      component: Portfolio,
      name: "portfolio",
      meta: { slideSide: "slide" }
    },
    {
      path: "/library",
      component: Library,
      name: "library",
      meta: { slideSide: "slide" }
    },
    {
      path: "/test",
      component: Test,
      name: "test",
      meta: { slideSide: "slide" }
    },
    {
      path: "/logical-test",
      component: LogicalTest
    },
    {
      path: "/article",
      component: Article,
      name: "article"
    }
  ]
});

Vue.config.productionTip = false;

Vue.filter("two_digits", value => {
  if (value.toString().length <= 1) {
    return "0" + value.toString();
  }

  return value.toString();
});

new Vue({
  router,
  select2,
  render: h => h(App)
}).$mount("#app");
