<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// 引入公共css
import '@/assets/styles/common.css'
// 引入字体图标
import '@/assets/icon/iconfont.css'
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  user-select: none;
  text-decoration: none;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
