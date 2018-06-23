<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
    import detailIntroduce from "./components/detail_introduction/detail_introduce";
    export default {
        components: {
            detailIntroduce
        }
    };
</script>
<style lang="less" scoped>
  #app {
    max-width: 18.75rem;
    margin: 0 auto;
  }
</style>
