<template>
  <div>
    <div class="interview-box">
        <img :src="content.img" alt="">
        <div class="interview-content">
            <p>{{content.title}}</p>
            <div class="interview-content-bottom">
                <div>{{content.auther}}</div>
                <div>{{content.time}}</div>
            </div>
        </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'interviewbox',
    props:['content']
}
</script>

<style lang="stylus" scoped>
.interview-box {
    display flex
    padding .1rem
    margin-bottom .1rem
    border-bottom .01rem solid #ccc
    img {
        width 1rem
        height 1rem
    }
}
.interview-box:hover {
    background-color #d8e4fe
    cursor pointer
}
.interview-content {
    flex 1
    padding-left .2rem
    padding-right .2rem
    display flex
    flex-direction column
    justify-content space-between
    p {
        font-size .16rem
    }
}
.interview-content-bottom {
    display flex
    justify-content space-between
    color #999
}
</style>