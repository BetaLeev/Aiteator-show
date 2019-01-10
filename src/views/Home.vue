<template>
  <div class="home">
    <top-search />
    <top-banner />
    <iconClassification />
    <ad-class />
    <shop-recommend />
    <shop-featured />
    <productRecommend />
  </div>
</template>
<script>
import topSearch from "@/components/top/topSearch.vue";
import topBanner from "@/components/top/topBanner.vue";
import iconClassification from "@/components/top/iconClassification";
import adClass from "@/components/top/adClass";
import shopRecommend from "@/components/main/shopRecommend";
import shopFeatured from "@/components/main/shopFeatured";
import productRecommend from "@/components/main/productRecommend";
// @ is an alias to /src
export default {
  name: "home",
  components: {
    topSearch,
    topBanner,
    iconClassification,
    adClass,
    shopRecommend,
    shopFeatured,
    productRecommend
  },
  data() {
    return {
      res: ""
    };
  }
  // methods: {
  // get() {
  //   let api = "https://api.myjson.com/bins/1d7tos";
  //   this.axios.get(api).then(res => {
  //     this.res = res;
  //     // console.log("res:", res);
  //   });
  // }
  // }
};
</script>
<style lang="scss" scoped>
</style>
