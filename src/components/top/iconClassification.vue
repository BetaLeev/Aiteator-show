<template>
  <div class="icon-class">
    <van-swipe>
      <van-swipe-item>
        <van-row type="flex"
          justify="space-between">
          <van-col span="5">
            <van-icon name='gift-card' />
            <span>众筹</span>
          </van-col>
          <van-col span="5">
            <van-icon name='goods-collect' />
            <span>限量抢购</span>
          </van-col>
          <van-col span="5">
            <van-icon name='new-arrival' />
            <span>试饮</span>
          </van-col>
          <van-col span="5">
            <van-icon name='hot-sale' />
            <span>特卖</span>
          </van-col>
        </van-row>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {};
  }
  // methods(){
  // },
};
</script>

<style lang='scss' scoped>
.icon-class {
  height: 79px;
  //   background-color: aquamarine;
  width: 95%;
  margin: 0 auto;
  border-bottom: 1px solid gray;
}
i.van-icon {
  line-height: 50px;
  font-size: 32px;
}
span {
  display: block;
}
</style>