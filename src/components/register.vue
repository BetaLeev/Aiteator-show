<template>
  <div class="register">
    <img :src="buildImg"
      alt=""
      width="100%">
  </div>
</template>

<script>
let build = require("../assets/build.png");
export default {
  mounted() {},
  data() {
    return {
      buildImg: build
    };
  }
};
</script>

<style lang='scss' scoped>
</style>