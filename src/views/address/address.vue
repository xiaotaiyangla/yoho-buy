<template>
    <div class="entirety">
        <div class="header">
            <i></i>
            <span>添加地址</span>
        </div>
        <p class="margin">为提高配送时效，请你尽量准确填写四级地址</p>
        <!-- <div class="wrap">
            <div class="contentwrap"> -->
            <!-- 四个地址 -->
                <!-- <div>
                    <span class="people">收 货 人 :</span>
                    <span class="space"></span>
                    <input type="text">
                </div>
                <div>
                    <span class="people">联系电话:</span>
                    <span class="space"></span>
                    <input type="text">
                </div>
                <div>
                    <span class="people">所在区域:</span>
                    <span class="space"></span>
                    <input type="text">
                </div>
                <div class="detailaddress">
                    <span class="people">详细地址:</span>
                    <span class="space"></span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div> -->
        <!-- 保存 -->
        <iframe id="iframe" src="http://www.17sucai.com/preview/869565/2017-11-08/CityPicker/example/cityPicker.html" frameborder="0"  width="100%" ></iframe>
         <!-- <button >保存</button> -->
         
    </div>
</template>

<script>
// import addaddress from "./addAddress"
export default {
  name: "addresss",
  // components: {
  //           addaddress,
  //       },
};
</script>

<style lang="less" scoped>
html,body{
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.entirety {
  background: #f0f0f0;
  height: 100%;
  overflow: hidden;
}
.header {
  height: 2.75rem;
  line-height: 2.75rem;
  background: black;
  font-size: 0.9rem;
  font-weight: 700;
  span {
    display: block;
    margin: 0 auto;
    color: white;
    width: 4rem;
  }
}
.margin {
  line-height: 1rem;
  height: 1rem;
  font-size: 0.8rem;
  text-align: center;
  background: #f0f0f0;
  color: #aeaeae;
  padding: 0.5rem 0 0  ;
}
// .wrap {
//   background: #fff;
//   .contentwrap {
//     padding-left: 0.5rem;
//     div {
//       padding: 0.5rem 0;
//           border-bottom: 1px solid #e0e0e0;
//       overflow: hidden;
//       .people {
//         float: left;
//         width: 4.6rem;
//         float: left;
//         font-size: 1rem;
//         display: block;
//         color: #d0d0d0;
//       }
//       .space {
//         float: left;
//         width: 1rem;
//         border: 1px solid #ffffff;
//         float: left;
//       }
//       input {
//         float: left;
//         width: 10rem;
//         outline: none;
//         border: none;
//         font-size: 0.9rem;
//       }
//       textarea {
//         float: left;
//         width: 10rem;
//         outline: none;
//         border: none;
//         font-size: 0.9rem;
//         height: 2.8rem;
//       }
//     }
//     .detailaddress {
//       border: none;
//     }
//   }
// }
// button {
//   margin: 0.75rem auto;
//   width: 11.75rem;
//   height: 2.2rem;
//   line-height: 2.2rem;
//   background: black;
//   color: white;
//   font-size: 0.8rem;
//   border: 1px solid;
//   display: block;
// }
  #iframe{
        // margin-top: 18px;
        height: 100%;
        
    }
</style>
