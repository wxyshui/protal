<template>
    <div>
        <div class="interview">专家访谈</div>
        <div>
            <el-row :gutter="20" v-for="(row,index) of rows" :key="index">
                <el-col :span="12" v-for="item of row" :key="item.id">
                    <div class="grid-content bg-purple">
                        <!-- 访谈信息 -->
                        <interview-box :content="item"></interview-box>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import InterviewBox from './interviewbox'
export default {
    name:'interview',
    components:{
        InterviewBox
    },
    data() {
        return {
            interviewList:[
                {
                    id:1,
                    title:'上海各个小区开始垃圾分类了，流浪大师沈先生火了',
                    auther:'王大锤',
                    time:'2011-11-22 11:15',
                    img:require('../../../../assets/images/u106.png')
                },
                {
                    id:2,
                    title:'职场专家送给迷茫中的各位应届生',
                    auther:'王大锤',
                    time:'2011-11-22 11:15',
                    img:require('../../../../assets/images/u106.png')
                },
                {
                    id:3,
                    title:'职场专家送给迷茫中的各位应届生',
                    auther:'王大锤',
                    time:'2011-11-22 11:15',
                    img:require('../../../../assets/images/u106.png')
                },
                {
                    id:4,
                    title:'职场专家送给迷茫中的各位应届生',
                    auther:'王大锤',
                    time:'2011-11-22 11:15',
                    img:require('../../../../assets/images/u106.png')
                },
                {
                    id:5,
                    title:'职场专家送给迷茫中的各位应届生',
                    auther:'王大锤',
                    time:'2011-11-22 11:15',
                    img:require('../../../../assets/images/u106.png')
                },
                {
                    id:6,
                    title:'职场专家送给迷茫中的各位应届生',
                    auther:'王大锤',
                    time:'2011-11-22 11:15',
                    img:require('../../../../assets/images/u106.png')
                },
            ]
        }
    },
    computed: {
        rows (){
        const rows = []
        this.interviewList.forEach((item,index)=>{
            const row = Math.floor(index/2)
            if(!rows[row]){
            rows[row] = []
            }
            rows[row].push(item)
        })
        return rows
        }
  },
}
</script>


<style lang="stylus" scoped>
.interview {
    width .8rem
    height 0.3rem
    color #0079fe
    font-weight 700
    border-radius .6rem
    border .01rem solid #0079fe
    text-align center
    line-height .28rem
    margin-bottom .1rem
}
</style>