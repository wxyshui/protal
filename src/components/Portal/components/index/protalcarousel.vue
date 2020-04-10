<!--
 * @Author: lixiaodi
 * @Date: 2020-03-12 18:17:43
 * @LastEditors: lixiaodi
 * @LastEditTime: 2020-03-12 19:46:32
 -->
<template>
    <div style="margin-bottom:.1rem;" class="carousel">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'protalCarousel'
}
</script>
<style lang="stylus" scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 0.18rem;
    opacity: 0.75;
    line-height: 2.7rem;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .carousel >>>.el-carousel__container {
    height 2.7rem
  }
</style>