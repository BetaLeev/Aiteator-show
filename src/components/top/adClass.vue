<template>
  <div class="ad-class">
    <img :src="ad"
      alt="">
  </div>
</template>

<script>
let ad = require("@/assets/ad/1.jpg");
export default {
  mounted() {},
  data() {
    return {
      ad: ad
    };
  }
  // ,
  // methods(){
  // },
};
</script>

<style lang='scss' scoped>
.ad-class {
  width: 95%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 110px;
  //   background-color: beige;
}
.ad-class img {
  width: 100%;
  height: 100%;
}
</style>