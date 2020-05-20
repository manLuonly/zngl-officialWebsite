<template>
  <div>
    <span @click="go">我是详情页</span>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    go() {
      this.$router.push({ name: "project" });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>