<template>
    <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(page, index) of pages" :key="index" class="flex-box">
            <!--循环显示的内容-->
            <div class="recom-box" v-for="item of page" :key="item.id">
              <div class="file-img">
                <img :src="item.coursewareImg" alt />
              </div>
              <div class="file-info">
                <p>{{item.title}}</p>
                <span>{{item.time}}</span>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- 箭头 -->
        <div class="swiper-button-prev swiper-button-prev1"></div>
        <div class="swiper-button-next swiper-button-next1"></div>
      </div>
</template>

<script>
export default {
    name:'protalmessage',
     data() {
    return {
      list: [
        {
          id: 1,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 2,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 3,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 4,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 5,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 6,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 7,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 8,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 9,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        },
        {
          id: 10,
          coursewareImg: require("../../../../assets/images/u33.png"),
          title: "加开“高峰线”列车畅通出行路",
          time:'2019-11-12'
        }
      ],
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: false,
        spaceBetween: 20,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        }
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        // 通过item的数量判断页码，也就是轮播图的第几张图片
        const page = Math.floor(index / 5);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
}
</script>

<style lang="stylus" scoped>
/* 内容 */
.flex-box{
    display flex
    justify-content space-between
}
.recom-box {
    width 2.2rem
}
.file-img{
    img {
        width 2rem
        border-radius .04rem
        margin-bottom .1rem
    }
    
}
.file-info {

}
/* 轮播 */
.swiper-box{
    position relative
}
.swiper-button-prev1{
    left -.4rem
    top .8rem
    color #00b087
}
.swiper-button-next1{
    right -.2rem
    top .8rem
}
</style>