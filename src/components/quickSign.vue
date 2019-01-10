<template>
  <div class="quick-sign">
    <van-field required
      clearable
      icon="question-o"
      placeholder="请输入手机号" />

    <van-field center
      clearable
      placeholder="请输入验证码">
      <van-button slot="button"
        type="primary">获取验证码</van-button>
    </van-field>

  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.quick-sign {
  padding-top: 30px;
}
.van-field {
  font-size: 1.6rem;
}
</style>