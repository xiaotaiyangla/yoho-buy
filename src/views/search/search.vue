<template>
    <div>
        <title-top></title-top>
        <div class="searchbar">
            <div class="inputwrap">
                <i class="iconfont icon-suosou"></i>
                <input type="text" v-model="searchText">
                <span class="s-text" @click="toList">搜索</span>
            </div>
        </div>
        <div class="hotsearch" ref="hsearch">
            <ul>
                <li>热搜</li>
                <li v-for="item in hotsearch" v-if="item != ''">{{item}}</li>
            </ul>
        </div>
        <div class="des">
            <div class="wrap">
                <div class="recent">
                    <p>
                        <span class="stitle">最近搜搜</span>
                        <i @click="isDelBox = !isDelBox" class="iconfont icon-shanchu"></i>
                    </p>
                    <ul v-show="isDel">
                        <li v-for="words in cookieValue">{{words}}</li>
                    </ul>
                </div>
                <div class="guss">
                    <p>
                        <span class="stitle">猜你想找</span>
                    </p>
                    <ul>
                        <li v-for="brand in gussData">{{brand}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="delete" v-show="isDelBox">
            <div class="cover" @click="isDelBox = !isDelBox"></div>
            <div class="alertbox">
                <div>
                    <span style="border:0;">您确定要删除您的最近的搜索咩?</span>
                </div>
                <div>
                    <span @click="isDelBox = !isDelBox">取消</span>
                    <span @click="toDelete" class="sure">确定</span>
                </div>
            </div>
        </div>
        {{cookieValue}}
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    import TitleTop from '../../components/common/titleTop'
    export default {
        name: "search",
        components:{
            TitleTop
        },
        data(){
            return {
                hotsearch:['beats','zippo','礼品','影音娱乐','面部护肤'],
                gussData:['速写CROQUIS','短裤','卫衣','初语','休闲裤','休闲/运动鞋','T恤','MO&CO.','HIPANDA','FUN'],
                isDelBox:false,
                isDel: true,
                searchText:'玩具',
                data:{},
                cookieValue:[]
            }
        },
        methods:{
            toDelete(){
                this.isDelBox = false;
                this.isDel = !this.isDel;
            },
            toList(){
                document.cookie = "text"+Math.floor(Math.random()*(20-1)+1)+"="+this.searchText;
                this.$http.get('/api/search',{keyword:this.searchText}).then((data)=>{
                    this.data = data;
                })
            }
        },
        mounted(){
            let hot = this.$refs.hsearch;
            this.hotScroll = new BScroll(hot,{click:true,scrollX:true,scrollY:false});
            let s = new Set();
            let keywords = document.cookie.split("; ");
            keywords.forEach((item)=>{
                let a = item.split('=');
                if(a != '') {
                    s.add(a[1]);
                }
            });
            s.forEach((data)=>{
                this.cookieValue.push(data);
            });

        }
    }
</script>

<style lang="less" scoped>
    @import "../cate/iconfont.css";
    @import "iconfont.css";
    .searchbar{
        width: 100%;
        padding: .35rem .55rem;
        background: #f8f8f8;
        height: 2.1rem;
        margin-top: 2.625rem;
        box-sizing: border-box;
    .inputwrap{
        position: relative;
        line-height: 1.4rem;
        overflow: hidden;
        width: 100%;
        height: 1.4rem;
        color:#999;
    i{
        text-align: center;
        position: absolute;
        top:0;
        left: 0;
        font-size: 20px;
        width: 2.417rem;
        height:1.4rem;
        line-height: 1.4rem;
        vertical-align: top;
    }
    input{
        vertical-align: top;
        cursor: text;
        height: 1.4rem;
        width: 14.75rem;
        border-radius: .7rem;
        padding: 0 1.3rem;
        font-size: .6rem;
        background: #fff;
        outline: none;
        border: 0;
        color: #999;
        box-sizing: border-box;
        padding-left: 2rem;
    }
        .s-text{
            margin-right:5px;
            position: absolute;
            right:0;
            color: #666;
            font-size: 15px;
            line-height: 1.4rem;
        }
    }

    }
    /*div:定宽定高 第一个元素:足够宽(超过外层div就ok)*/
    .hotsearch{
        width: 100%;
        height: 2.8rem;
        overflow: hidden;
        border-bottom: 1px solid #e0e0e0;
        ul{
            width: 25rem;
            margin-left: 5px;
            height: 2.8rem;
            display: flex;
            align-items: center;
        }
    }
    li{
        border:1px solid #e0e0e0;
        height: 1.55rem;
        line-height: 1.55rem;
        padding: 0 .5rem;
        color: #000;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: .2rem;
        font-size: .7rem;
        margin-right: .375rem;
    }
    .des{
        width: 100%;
        position:absolute;
        background: #EFF0EF;
        padding-top: .75rem;
        top: 7.575rem;
        bottom:5.75rem;
        div.wrap{
            width: 100%;
            height: 100%;
            background-color: #fff;
            padding: .75rem;
            box-sizing: border-box;
            .recent,.guss{
                padding-top: .5rem;
            }
            p{
                position: relative;
                margin-bottom: .5rem;
                .stitle{
                    color: #b0b0b0;
                    font-size: .7rem;
                    vertical-align: bottom;
                }
                .icon-shanchu{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    font-size: .9rem;
                    width: .6rem;
                    height: .65rem;
                    display: inline-block;
                    color: #b0b0b0;
                }
            }
            ul{
                overflow: hidden;
                width: 100%;
                li{
                    float: left;
                    margin-bottom: 0.8rem;
                }
            }

        }
    }
    .delete{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        .cover{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
        }
        .alertbox{
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -3.15rem;
            margin-left: -6.75rem;
            width: 13.5rem;
            height: 6.3rem;
            border-radius: .5rem;
            background: rgba(255,255,255,.84);
            font-size: .75rem;
            text-align: center;
            color: #000;
            div{
                width: 100%;
                height: 4.1rem;
                text-align: center;
                line-height: 4.1rem;
                display: flex;
                span{
                    flex: 1;
                    border-top:1px solid #ccc;
                }
                span:last-child{
                    border-left: 1px solid #ccc;
                }
                span.sure{
                    color:#d0021b;
                }
            }
            div:last-child{
                height: 2.2rem;
                line-height: 2.2rem;
            }
        }
    }
</style>