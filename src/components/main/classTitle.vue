<template>
  <van-row>
    <van-col :span='21'>
      <span class="title">{{classTitle}}</span>
      <span class="des">{{classDes}}</span>
    </van-col>
    <!-- <van-col :span='3'> <b>{{ current + 1 }}</b> /3 </van-col> -->
  </van-row>
</template>

<script>
export default {
  mounted() {},
  props: { classTitle: String, classDes: String, current: Number },
  data() {
    return {};
  }
  //   methods() {}
};
</script>

<style lang='scss' scoped>
span.title,
span.des {
  float: left;
  display: block;
  padding-bottom: 30px;
}
span.title {
  font-size: 16px;
  color: black;
}
span.des {
  font-size: 12px;
  color: gray;
  top: 22px;
  margin-left: -65px;
  position: relative;
}
b {
  font-size: 17px;
}
</style>