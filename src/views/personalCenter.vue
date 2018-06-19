<template>
    <div>
        <title-top :title="登录页面"></title-top>
        <button @click="goToLast">返回🔙</button>
        <h1>个人中心</h1>
        <router-link to="/signIn">登录</router-link>
    </div>
</template>

<script>
    import TitleTop from '../components/common/titleTop'
    export default {
        name: "personalCenter",
        components:{
            TitleTop
        },
        methods:{
            goToLast(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>