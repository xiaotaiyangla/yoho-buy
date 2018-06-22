<template>
    <div>
        <a href="/search">
            <div class="searchbar">
                <div class="inputwrap">
                    <i class="iconfont icon-suosou"></i>
                    <input type="text" placeholder="搜索商品">
                </div>

            </div>
        </a>
        <div>
            <div class="lwrap" ref="lcont">
                <ul>
                    <li class="forcolor" v-for="(item,index) in data" @click="toChoose(item,index)" :id="getClass(index)">
                        <span>{{item.primaryClass}}</span>
                    </li>
                </ul>
            </div>
            <div class="rwrap" ref="rcont">
                <div>
                    <ul v-for="(sub,index) in data" v-if="forclass==getClass(index)">
                        <li class="item-name" v-for="name in sub.secondClass">{{name}}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "cate",
        data(){
            return{
                data:[],
                forclass:"ul0"
            }

        },
        computed:{

        },
        methods:{
            toChoose(item,_index){
                //样式
                $(".forcolor").css("background-color","#F7F8F7");
                $("#ul"+_index).css("background-color","#fff");
                //切换下级内容
                this.forclass = "ul"+_index;
            },
            getClass(index1){
                return "ul"+index1;
            }
        },
        created(){
            this.$http.get('/api/list').then(({data})=>{
                this.data = data;
            })
        },
        filters:{

        }
    }
</script>

<style lang="less" scoped>
    @import './iconfont.css';
    .lwrap{
        position: absolute;
        left: 0;
        top:2.519rem;
        bottom: 2.9295rem;
        overflow: hidden;
        width: 8.4375rem;
        ul{
            height: 100%;
            background-color: #F7F8F7;
        }
    }
    li{
        box-sizing: border-box;
        width: 100%;
        height: 2.607rem;
        line-height: 2.607rem;
        padding: 0 .8rem;
        background-color: #F7F8F7;
        font-size: 14px;
    }
    .rwrap{
        position: absolute;
        right: 0;
        top:2.519rem;
        bottom: 2.9295rem;
        width: calc(100% - 8.4375rem);
        overflow: hidden;
        .item-name{
            background-color: #fff;
            border-bottom: 1px solid #e6e6e6;
        }
    }
    .searchbar{
        overflow: hidden;
        width: 100%;
        padding: .325rem .5rem;
        height: 2.519rem;
        box-sizing: border-box;
        background-color: #f8f8f8;
        .inputwrap{
            position: relative;
            line-height: 2.519rem;
            overflow: hidden;
            width: 100%;
            height: 100%;
            color:#999;
            i{
                position: absolute;
                top:0;
                left:  .8rem;
                height: 1.769rem;
                line-height: 1.769rem;
                font-size: 20px;
                z-index: 22;
                margin-right:5px;
            }
            input{
                position: absolute;
                top:0;
                left:0;
                outline: none;
                border: 0;
                color: #999;
                box-sizing: border-box;
                font-size: 12px;
                height: 100%;
                width: 100%;
                padding-left: 2rem;
                border-radius: 1.5rem;

            }
        }
    }

</style>