<template>
    <router-link :to="`/product/${category[1].name}/${category[1].id}`" >列表</router-link> 
</template>

<script>
export default {
  name: "active-router",
  data() {
    return {
      index: 0,
      category: [
        {
          id: 1021225,
          name: "dead-pool"
        },
        {
          id: 1004,
          name: "clothes"
        }
      ]
    };
  }
};
</script>

<style>
</style>
