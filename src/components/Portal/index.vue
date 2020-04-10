<template>
  <div>
    <!-- 轮播图 -->
    <protal-carousel></protal-carousel>
    <!-- 最新公告 -->
    <protal-notice></protal-notice>
    <!-- 最新资讯 -->
    <protal-message></protal-message>
    <!-- 专家访谈 -->
    <protal-interview></protal-interview>
  </div>
</template>

<script>
import ProtalCarousel from './components/index/protalcarousel'
import ProtalNotice from './components/index/protalnotice'
import ProtalMessage from './components/index/protalmessage'
import ProtalInterview from './components/index/protalinterview'
export default {
  name:'portalIndex',
  components:{
    ProtalCarousel,
    ProtalNotice,
    ProtalMessage,
    ProtalInterview
  }
}
</script>

<style lang='stylus' scoped>

</style>