<template>
  <div class="product-recommend">
    <class-title :classTitle='title'
      :classDes='des' />
    <van-row :gutter='20'>
      <van-col :span='12'
        v-for='(item,index) in product'
        :key='index'>
        <div class="product">
          <img :src="item.imgUrl"
            alt="">
          <van-row> <span class="introduction">{{item.introduction}}</span></van-row>
          <van-row>
            <span class="price">{{item.price}}</span>
          </van-row>
        </div>
      </van-col>

    </van-row>
  </div>
</template>

<script>
import classTitle from "@/components/main/classTitle";
let img1 = require("@/assets/product/1.jpg");
let img2 = require("@/assets/product/2.jpg");
let img3 = require("@/assets/product/3.jpg");
let img4 = require("@/assets/product/4.jpg");
let img5 = require("@/assets/product/5.jpg");
let img6 = require("@/assets/product/6.jpg");

export default {
  mounted() {},
  components: {
    classTitle
  },
  data() {
    return {
      title: "单品推荐",
      des: "书香茶器，甄选只为你",
      product: [
        { imgUrl: img1, introduction: "最新茶叶", price: "$112" },
        { imgUrl: img2, introduction: "最新茶叶", price: "$142" },
        { imgUrl: img3, introduction: "最新茶叶", price: "$132" },
        { imgUrl: img4, introduction: "最新茶叶", price: "$112" },
        { imgUrl: img5, introduction: "最新茶叶", price: "$32" },
        { imgUrl: img6, introduction: "最新茶叶", price: "$2" }
      ]
    };
  }
  //   methods() {}
};
</script>

<style lang='scss' scoped>
.product-recommend {
  width: 95%;
  height: auto;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 120px;
}

.van-col {
  //   height: 220px;
  margin-bottom: 10px;
}
.introduction {
  display: block;
  padding-bottom: 10px;
  float: left;
}
.price {
  float: left;
  display: block;
  color: aqua;
}
img {
  height: 170px;
  width: 100%;
}
.product {
  //   padding-bottom: 10px;
  height: 240px;
  //   background-color: darkcyan;
  border-bottom: 1px solid gray;
}
</style>