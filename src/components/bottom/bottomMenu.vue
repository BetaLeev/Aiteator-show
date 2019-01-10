<template>
  <div class="footer-menu">
    <van-row type="flex"
      justify="space-between">

      <van-col span="4">
        <router-link to='/'>
          <van-icon name="shop-collect" />
          <p>首页</p>
        </router-link>
      </van-col>

      <van-col span="4">
        <router-link to='/categray'>
          <van-icon name="balance-list" />
          <p>分类</p>
        </router-link>
      </van-col>

      <van-col span="4">
        <router-link to='/discover'>
          <van-icon name="expand" />
          <p>发现</p>
        </router-link>
      </van-col>

      <van-col span="4">
        <router-link to='/cart'>
          <van-icon name="shopping-cart" />
          <p>购物车</p>
        </router-link>
      </van-col>

      <van-col span="4">
        <router-link to='/mine'>
          <van-icon name="manager" />
          <p>我的</p>
        </router-link>
      </van-col>

    </van-row>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {};
  }
  // ,
  // methods(){
  // },
};
</script>

<style lang='scss' scoped>
.footer-menu {
  position: fixed;
  width: 95%;
  margin: 0 auto;
  left: 2.5%;
  bottom: 0;
  height: 60px;
  z-index: 9;
  background-color: white;
}
p {
  margin-top: 2px;
}
.van-icon {
  margin-top: 5px;
  font-size: 29px;
  // color: black;
  color: gray;
}
p {
  color: gray;
}
.router-link-exact-active > .van-icon {
  color: red;
}
.router-link-exact-active > p {
  color: red;
}
</style>