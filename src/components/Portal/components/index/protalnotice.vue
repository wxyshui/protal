<template>
    <div>
        <div class="notice1" @click="jump('/portal/allnotice')">最新公告</div>
        <div class="notice-box">
        <div class="notice" v-for="item in list" :key='item.id'>
            <div class="notice-left"></div>
            <div class="notice-main">
                <span class="content">{{item.notice}}</span>
                <span class="time">{{item.time}}</span>
            </div>
            <div class="notice-right"></div>
        </div>
    </div>
    </div>
  
</template>

<script>
import { jump } from '../../../../untils/auth';
export default {
    name:'protalNotice',
    data() {
        return {
            list:[
                {
                    notice:"教育部关于2019年法治政府建设工作情况的报告",
                    time:'2019-07-22',
                    id:1
                },
                {
                    notice:"关于普通中学德语、法语和西班牙语教材编写和送审工作的公告",
                    time:'2019-07-22',
                    id:2
                },
                {
                    notice:"2019年下半年铁路机车车辆驾驶人员资格考试公告教育部 人力资源社会保障部关于2018—2019学年度中等职业教育国家奖学金获奖学生名单的",
                    time:'2019-07-22',
                    id:3
                },
                {
                    notice:"2019年下半年铁路机车车辆驾驶人员资格考试公告",
                    time:'2019-07-22',
                    id:4
                },
                {
                    notice:"2019年下半年铁路机",
                    time:'2019-07-22',
                    id:5
                },
                {
                    notice:"2019年下半年铁路机",
                    time:'2019-07-22',
                    id:6
                },
                {
                    notice:"2019年下半年铁路",
                    time:'2019-07-22',
                    id:7
                },
                {
                    notice:"2019年下半年铁路机2019年下半",
                    time:'2019-07-22',
                    id:8
                },
                {
                    notice:"2019年下半年铁路机2019年下半年铁路机",
                    time:'2019-07-22',
                    id:9
                },
                {
                    notice:"2019年下半年铁路机2019年下半年铁路机",
                    time:'2019-07-22',
                    id:10
                },

            ]
        }
    },
    methods:{
        jump
    }
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
                background-color #ffffff
                height 0.3rem
                flex 1
                line-height .3rem
                cursor pointer
                
                .time {
                    float right 
                    margin-right .2rem
                }
                .content {
                    display inline-block
                    width 4rem
                    margin-left .2rem
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                }
            }
            .notice-main:hover {
                color #0079fe
            }
            .notice-right {
                width: .15rem;
                height: .3rem;
                background-color: #0079fe;
                border-radius:  0 0.3rem 0.3rem 0;
            }
        }
        
    }

.notice1 {
    width .8rem
    height 0.3rem
    color #0079fe
    font-weight 700
    border-radius .6rem
    border .01rem solid #0079fe
    text-align center
    line-height .28rem
}
.notice1:hover {
    cursor pointer
}
</style>