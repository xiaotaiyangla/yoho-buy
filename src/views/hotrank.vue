<template>
  <div>
    <tile-top title="热销排行榜"></tile-top>
    <div class="bgimg"></div>
  </div>
</template>
<script>
import TitleTop from "../conponents/common/titleTop.vue"
export default {
  components:{
    TitleTop
  }
}
</script>
<style lang="less" scoped>
.bgimg{
  width:100%;
  height: 5.8595rem;
  background: url() no-repeat;
  background-size: cover;
}
</style>

