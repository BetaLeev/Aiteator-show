<template>
  <div class="shop-recommend">
    <class-title :classTitle='classTitle'
      :classDes='classDes'
      :current='current' />
    <van-swipe @change="onChange"
      :show-indicators='false'>
      <van-swipe-item v-for='(shop,shopIndex) in shopRecommend'
        :key='shopIndex'>
        <img :src="shop.bannerUrl"
          alt="">
        <input class="img-btn-more"
          type="button"
          value="查看更多">
        <van-row class="product-tea"
          type="flex"
          justify="space-around">
          <van-col :span='7'
            v-for='(tea,teaIndex) in shop.tea'
            :key='teaIndex'>
            <img :src="tea.product_tea"
              alt="">
            <span class="tea-title"
              v-text="tea.teaTitle">
            </span>
            <span class="tea-price"
              v-text="tea.teaPrice"></span></van-col>
        </van-row>
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
import classTitle from "@/components/main/classTitle";
let img = require("@/assets/banner/1.jpg");
let b_tea = require("@/assets/tea/b-tea.jpg");
let tea = require("@/assets/tea/tea.jpg");
export default {
  mounted() {},
  components: {
    classTitle
  },
  data() {
    return {
      classTitle: "好店推荐",
      classDes: "寻茶造器,匠心传茶味",
      img: img,
      tea: tea,
      b_tea: b_tea,
      current: 0,
      shopRecommend: [
        {
          bannerUrl: img,
          tea: [
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥23" },
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥13" },
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥3" }
          ]
        },
        {
          bannerUrl: b_tea,
          tea: [
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥223" },
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥13" },
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥3" }
          ]
        },
        {
          bannerUrl: img,
          tea: [
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥323" },
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥13" },
            { product_tea: tea, teaTitle: "碧螺春", teaPrice: "¥3" }
          ]
        }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style lang='scss' scoped>
.shop-recommend {
  width: 95%;
  margin: 0 auto;
  //   height: 600px;
  padding-top: 10px;
  padding-bottom: 10px;
  //   background-color: orange;
}
.van-swipe-item {
  height: 600px;
  width: 100%;
}
.van-swipe-item img {
  height: 150px;
  width: 100%;
}

.van-swipe {
  border-radius: 3px;
  border: 1px solid gray;
  padding-bottom: 5px;
}
.product-tea img {
  height: 100px;
  width: 90%;
  border: 1px solid gray;
  border-radius: 8px;
}
.tea-title {
  padding-top: 8px;
  display: block;
}
.tea-price {
  color: rgb(69, 243, 185);
  padding-top: 5px;
  display: block;
}
.img-btn-more {
  position: absolute;
  background-color: none;
  border: 1px solid white;
  top: 110px;
  color: white;
  padding: 4px;
  right: 10px;
  //   bottom: 10px;
}
</style>