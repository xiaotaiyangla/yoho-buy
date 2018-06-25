<template>
    <!--领劵中心大图点进去，跳转到的遮罩层页-->
    <div class="text2" @click="disappear">
        <h2>此活动已结束，请关注其他更多精彩活动</h2>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        name: "b-s-c2",
        methods:{
            disappear(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less" scoped>
    .text2 {
        position: absolute;
        top:2.6rem;
        bottom:0;
        width: 100%;
        background-color: rgba(0,0,0,0.4);
        text-align: center;
        h2 {
            position: absolute;
            top: 39%;
            width: 100%;
            height: 1.5rem;
            line-height: 1.5rem;
            color: white;
            font-size: 1rem;

        }
    }
</style>