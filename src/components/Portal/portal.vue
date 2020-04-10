<template>
  <div class="inner">
    <el-container>
      <!-- 头部 -->
      <el-header class="header-box" style="height:.8rem">
        <portal-header></portal-header>
      </el-header>
      <!-- 主体 -->
      <el-main style="padding: .1rem .5rem;">
          <router-view></router-view>
      </el-main>
      <!-- 底部 -->
      <el-footer class="footer-box" style="height:1.5rem">
        <portal-footer></portal-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import PortalHeader from './commomView/portalHeader'
import PortalFooter from './commomView/portalFooter'
export default {
  name:'portal',
  components:{
    PortalHeader,
    PortalFooter
  }
}
</script>

<style lang="stylus" scoped>
.header-box{
  padding .1rem .5rem
  border-bottom 1px solid #efefef
 }
 .footer-box{
  padding 0
  background:#302f37
 }
</style>