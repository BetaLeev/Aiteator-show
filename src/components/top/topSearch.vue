<template>
  <div class="search">
    <van-row>
      <van-col :span='4'>
        <van-icon name="qr"
          color="white" />
        <van-icon name="search"
          id='search' />
      </van-col>

      <van-col :span='16'>
        <!-- <van-cell-group> -->
        <van-field placeholder="              搜索分享，商品，用户" />
        <!-- </van-cell-group> -->
      </van-col>
      <van-col :span='4'>
        <van-icon name="chat"
          info="9"
          color="white" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "topSearch",
  mounted() {},
  data() {
    return {};
  }
  //   methods() {}
};
</script>

<style lang='scss' scoped>
.search {
  z-index: 9;
  position: fixed;
  width: 100%;
  top: 15px;
  height: 30px;
}
#search {
  position: relative;
  left: 130%;
  z-index: 10;
}
.van-col {
  line-height: 45px;
  font-size: 20px;
}
.van-field {
  border-radius: 12px;
}
</style>