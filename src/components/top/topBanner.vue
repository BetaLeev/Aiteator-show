<template>
  <div class="banner">
    <van-swipe :autoplay="3000"
      indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner"
        :key='index'>
        <img :src='item.url'
          alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
let bnr1 = require("@/assets/banner/1.jpg");
let bnr2 = require("@/assets/banner/2.jpg");
let bnr3 = require("@/assets/banner/3.jpg");
let bnr4 = require("@/assets/banner/4.jpg");

export default {
  mounted() {},
  data() {
    return {
      banner: [{ url: bnr1 }, { url: bnr2 }, { url: bnr3 }, { url: bnr4 }]
    };
  }
  //   methods() {}
};
</script>

<style lang='scss' scoped>
.banner {
  width: 100%;
  height: 200px;
  background-color: aquamarine;
}
.van-swipe {
  height: 200px;
}
.van-swipe img {
  width: 100%;
  height: 100%;
}
</style>