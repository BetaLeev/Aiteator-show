<template>
  <div class="pwd-sign">
    <van-field required
      clearable
      icon="question-o"
      placeholder="请输入用户名" />

    <van-field type="password"
      placeholder="请输入密码"
      required />

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
.pwd-sign {
  padding-top: 30px;
}
.van-field {
  font-size: 1.6rem;
}
</style>