<template>
  <div class="shop-featured">
    <class-title :classTitle='title'
      :classDes='des' />
    <van-row class="main-featured">
      <img :src='teaImg1'
        alt="" />
      <b><span v-text="mainFeaturedTitle"></span></b>
      <span v-text='mainFeaturedDes'></span>
    </van-row>

    <van-row class="norm-featured"
      v-for='(ordinaryItem,index) in ordinaryFeatured'
      :key="index">
      <van-col :span='7'>
        <img :src="ordinaryItem.imgUrl"
          alt="">
      </van-col>
      <van-col :span='15'>
        <van-row>
          <span class="norm-featured-title"
            v-text="ordinaryItem.title"></span>
        </van-row>
        <span class="norm-featured-des"
          v-text="ordinaryItem.des"></span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import classTitle from "@/components/main/classTitle";
let teaMainFeautred = require("@/assets/featured/1.jpg");
let teaFeautred1 = require("@/assets/featured/2.jpg");
let teaFeautred2 = require("@/assets/featured/3.jpg");

export default {
  mounted() {},
  components: {
    classTitle
  },
  data() {
    return {
      title: "专题精选",
      des: "泡一壶茶，春天里等你",
      teaImg1: teaMainFeautred,
      teaImg2: teaFeautred1,
      teaImg3: teaFeautred2,
      mainFeaturedTitle: "【李清照】茶家生活",
      mainFeaturedDes: "[茶家]由李清照创李清照",
      ordinaryFeatured: [
        { imgUrl: teaFeautred2, title: "工艺之美", des: "工艺之美，工艺之美" },
        {
          imgUrl: teaFeautred1,
          title: "静秋河沿萧索",
          des: "新年快乐，新年快乐"
        }
      ]
    };
  }
  //   methods() {}
};
</script>

<style lang='scss' scoped>
.shop-featured {
  padding-top: 20px;
  border-top: 1px solid gray;
  width: 95%;
  margin: 0 auto;
}
.main-featured {
  width: 100%;
  height: 200px;
  padding-bottom: 25px;
  border-bottom: 1px solid gray;
}

.main-featured img {
  height: 160px;
  width: 100%;
}
.main-featured b {
  display: block;
  position: absolute;
  padding: 5px;
}
.main-featured > span {
  padding: 5px;
  display: block;
  position: absolute;
  margin-top: 20px;
}

.norm-featured {
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
}
.norm-featured img {
  height: 100px;
  width: 100%;
}
span {
  display: block;
}
.norm-featured-title {
  float: left;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 19px;
}
.norm-featured-des {
  float: left;
  padding-left: 10px;
  color: gray;
}
</style>