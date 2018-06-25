<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
    import DetailIntroduce from "./components/detail_introduction/detail_introduce";
    import LifestyleBrands from "./components/lifestyle_brands/lifestyle_brands";
    import Cart  from  "./components/cart/cart"
    export default {
        components: {
            DetailIntroduce,
            LifestyleBrands,
            Cart,
        }
    };
</script>
<style lang="less" scoped>
  #app {
    max-width: 18.75rem;
    margin: 0 auto;
  }
</style>
