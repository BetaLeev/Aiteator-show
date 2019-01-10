<template>
  <div id="app">
    <transition mode="out-in"
      :name="transitionName"
      :enter-active-class="enterClass"
      :leave-active-class="leaveClass">
      <router-view />
    </transition>
    <van-tab-bar />
  </div>
</template>
<script>
import routerAuthenticate from "./utils/routerAuthenticate";
import vanTabBar from "@/components/bottom/vanTabBar";
export default {
  data() {
    return {
      transitionName: "custom-classes-transition",
      enterClass: "animated fadeInUp",
      leaveClass: "animated fadeOutDown"
    };
  },
  components: {
    vanTabBar
  },
  mixins: [routerAuthenticate],
  // dynamically set transition based on route change
  watch: {
    $route(to, from) {
      const toPath = to.path.split("/");
      if (toPath == ",/") {
        this.$localStorage.set("active", 0);
      }
      const fromPath = from.path.split("/");
      if (toPath == ",authentication") {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
