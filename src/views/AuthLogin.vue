<template>
  <div class="user">
    <router-link to='/'>
      <van-icon name='cross'
        class='cross'></van-icon>
    </router-link>
    <van-row class="form">
      <van-tabs animated
        @click="cgTab">
        <van-tab v-for="(item,index) in login"
          :key="index"
          :title="item.title">
        </van-tab>
      </van-tabs>
    </van-row>
    <van-row class="other"
      v-show='isQuick'>
      <quick-sign />
    </van-row>
    <van-row class="other"
      v-show='isPwd'>
      <sign />
    </van-row>

    <van-button class="btn-large"
      size="large">登陆</van-button>

    <van-row class="third-party">
      <p>第三方账户登录</p>
      <van-row gutter="20">
        <van-col span="8">
          <img :src="thirdIcon[1]"
            alt="">
        </van-col>
        <van-col span="8">
          <img :src="thirdIcon[0]"
            alt="">
        </van-col>
        <van-col span="8">
          <img :src="thirdIcon[2]"
            alt="">
        </van-col>
      </van-row>
      <p>没有账户？<router-link to='register'>立即注册</router-link>
      </p>
    </van-row>
  </div>
</template>

<script>
let sina = require("@/assets/sina.png");
let wechat = require("@/assets/wechat.png");
let qq = require("@/assets/qq.png");

import quickSign from "@/components/quickSign";
import sign from "@/components/sign";

export default {
  mounted() {},
  components: { sign, quickSign },
  data() {
    return {
      thirdIcon: [sina, wechat, qq],
      login: [{ title: "快速登录" }, { title: "密码登录" }],
      isQuick: true,
      isPwd: false
    };
  },
  methods: {
    cgTab: function(index) {
      if (index === 1) {
        (this.isPwd = true), (this.isQuick = false);
      } else if (index === 0) {
        (this.isPwd = false), (this.isQuick = true);
      }
    }
  }
};
</script>
<style>
</style>

<style lang='scss' >
.user {
  width: 90%;
  margin: 0 auto;
  margin-top: 15%;
}
.form {
  // margin-top: 40px;
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
}
.third-party {
  height: auto;
  width: 90%;
  margin: 0 auto;
  margin-top: 130px;
  left: 5%;
  // bottom: 0px;
  //   background-color: darkcyan;
}
.other {
  height: 180px;
  width: 90%;
  margin: 0 auto;
}
.cross {
  // position: absolute;
  // margin-top: -30px;
  margin-left: -80%;
  font-size: 2rem;
}

.btn-large {
  width: 80%;
  border-radius: 23px;
  background-color: gainsboro;
  color: white;
}
.van-tab {
  font-size: 1.6rem;
}
</style>