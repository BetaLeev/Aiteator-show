<template>
  <div class="tab-bar">
    <van-tabbar v-model="active"
      active-color="#fa1973">
      <van-tabbar-item @click='getIndex(index)'
        v-for='(item ,index ) in tabbar'
        :key='index'
        :to='item.path'
        :icon='item.icon'>{{item.des}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$localStorage.get("active")) {
      this.active = parseInt(this.$localStorage.get("active"));
    }
  },
  props: { show: Boolean },
  data() {
    return {
      tabbar: [
        { path: "/", des: "首页", icon: "home-o" },
        { path: "/category", des: "分类", icon: "balance-list-o" },
        { path: "/discover", des: "发现", icon: "expand-o" },
        { path: "/cart", des: "购物车", icon: "cart-o" },
        { path: "/mine", des: "我的", icon: "manager-o" }
      ],
      active: 0
    };
  },
  methods: {
    getIndex(index) {
      this.$localStorage.set("active", index);
    }
  },
  watch: {}
};
</script>

<style lang='scss' scoped>
.van-tabbar-item--active {
  color: #fa1973;
}

.van-tabbar-item {
  font-size: 1.1rem;
}
</style>