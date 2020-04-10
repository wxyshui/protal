<template>
  <div>
    <el-row>
      <el-col :span="18">
        <div class="notice-box">
          <div class="title">全部通告</div>
          <div class="line"></div>
          <ul class='notice'>
            <li v-for="item in list" :key="item.id">
              <span class="dian"></span>
              <span class="auther"> {{item.auther}}</span>
              <span class="content">{{ item.content }}</span>
              <span class="time">{{item.time}}</span>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Allnotice',
  data() {
    return {
      list:[
        {
          id:1,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:2,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:3,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:4,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:5,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:6,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },{
          id:7,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:8,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:9,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:10,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:11,
          auther:'王大锤锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:12,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:13,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },
        {
          id:14,
          auther:'王大锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },{
          id:15,
          auther:'王锤',
          content:'关于推迟2020年面向香港、澳门、台湾地区研究生招生考试的公告',
          time:'2019-7-22'
        },

      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.notice-box {
  border .01rem solid #eee
  padding .2rem .1rem
}
.title {
  color #0079fe
  font-weight 700
}
.line {
  border .01rem solid #0079fe 
  margin-top .05rem
}
.notice {
  margin-top .2rem
  padding-left .1rem
  li {
    line-height 3
    cursor pointer
    display flex
    align-items center

  }
  li:hover {
    color #0079fe
  }
}
.dian {
  width .03rem
  height .03rem
  background-color #0079fe
  vertical-align middle
  margin-right .1rem
}
.time {
  
  padding 0 .2rem
}
.auther {
  width 1rem
  vertical-align middle
}
.content {
  flex 1
  vertical-align middle
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>