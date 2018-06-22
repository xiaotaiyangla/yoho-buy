<template>
    <div class="scrollTop" @click="toTop">回到顶部<i class="iconfont icon-up"></i></div>
</template>

<script>
    export default {
        name: "scroll-to-top",
        props: {
            toBottom: {
                type: Number,
                default: 0
            }
        },
        methods: {
            toTop() {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
        },
        mounted() {
            document.querySelector('.scrollTop').style.bottom = this.toBottom;
        }
    }
</script>

<style lang="less" scoped>
    .scrollTop {
    }
</style>