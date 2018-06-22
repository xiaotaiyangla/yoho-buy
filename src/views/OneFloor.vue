<template>
    <div class="icons-wrapper">
        <ul class="icons-list">
            <li class="icons-item" v-for="item in items">
                <router-link to="/lifestyle-new">
                <a class="imgebar" href=""><img :src="item.src" alt=""></a>
                <a class="linkbar" href="">{{item.name}}</a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "one-floor",
        data(){
            return{
                items:[
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01155cce42c22f29c305d5767dd73fe983.png?imageView2/2/w/98/h/98/q/60",
                        name:"新品到着"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/05/08/11/01fc18512be1c0103f74712eec27182a9b.png?imageView2/2/w/98/h/98/q/60",
                        name:"热销TOP"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/03/02/09/018c7c0e43d281755461e41ef07e5de089.png?imageView2/2/w/98/h/98/q/60",
                        name:"领劵中心"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/0189bc583b9c0fc55a983116b3e1c460dc.png?imageView2/2/w/98/h/98/q/60",
                        name:"全部分类"
                    },
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/014647f5d597273cca382e6a2cc8cdad08.png?imageView2/2/w/98/h/98/q/60",
                        name:"美妆馆"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/03/20/16/017cc81de99ebaa7cfa0f70aee3e4c4194.png?imageView2/2/w/98/h/98/q/60",
                        name:"玩意儿"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/05/08/11/01e60701b0835a909b269f617bdb1cf351.png?imageView2/2/w/98/h/98/q/60",
                        name:"试听盛宴"
                    },
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01f8ff4c9195b7f7f4774e911a6ea7936b.png?imageView2/2/w/98/h/98/q/60",
                        name:"折扣专区"
                    }
                ]
            }

        }
    }
</script>

<style lang="less" scoped>
    .icons-wrapper {
        overflow: hidden;
        box-sizing: border-box;
        padding: 15px 0 2px;
        background: #fff;
        background-size: 100% 100%;
        border-bottom: 1px solid #e0e0e0;
        .icons-list {
            overflow: hidden;
            .icons-item {
                float: left;
                margin-bottom: .25rem;
                width: 25%;
                height: 70px;
                text-align: center;
                .imgebar {
                display: block;
                margin: 0 auto;
                text-align: center;
                width: 40px;
                height: 40px;
                line-height: 40px;
                box-sizing: border-box;
                overflow: hidden;
                border: 1px solid #e0e0e0;
                border-radius: 50%;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    }
                }
                .linkbar {
                    display: block;
                    line-height: 22px;
                    font-size: 12px;
                    transform: scale(.9);
                    color: #444;
                }

            }

        }

    }
</style>