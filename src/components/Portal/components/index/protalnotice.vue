<template>
  <div class="notice-box">
      
      <div class="notice" v-for="item in 16">
          <div class="notice-left"></div>
          <div class="notice-main">
              <span style="margin-left:.2rem">2019年下半年铁路机车车辆驾驶人员资格考试公告</span>
              <span style="margin-left:1rem">2019-07-22</span>
          </div>
          <div class="notice-right"></div>
      </div>
  </div>
</template>

<script>
export default {
    name:'protalNotice'
}
</script>


<style lang="stylus" scoped>
    .notice-box {
        padding .2rem
        display flex
        flex-wrap wrap
        justify-content space-between
        .notice {
            width 5.6rem
            margin-bottom .1rem
            display flex
            font-size .12rem
            .notice-left {
                width: .15rem;
                height: .3rem;
                background-color: #0079fe;
                border-radius: 0.3rem 0 0rem .3rem;
                
            }
            .notice-main {
                background-color #d0e17d
                height 0.3rem
                flex 1
                line-height .3rem
                cursor pointer
            }
            .notice-right {
                width: .15rem;
                height: .3rem;
                background-color: #0079fe;
                border-radius:  0 0.3rem 0.3rem 0;
            }
        }
        
    }
</style>