<template>
  <el-row :gutter="20" type="flex" class="header-content">
    <el-col :span="7">
      <div class="grid-content bg-purple">
        <img src="../../../assets/images/logo.png" alt="logo" class="header-logo" />
      </div>
    </el-col>
    <el-col :span="9">
      <div class="grid-content bg-purple">
        <ul class="header-nav">
          <li class="header-nav-li" v-for="(item,index) in list" :key="index">
            <span @click="jump(item.path)">{{item.nav}}</span>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="search-box">
          <!-- 查询输入框 -->
          <div class="search-input">
            <!-- 下拉选择 -->
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <!-- 分割线 -->
            <div class="line"></div>
            <!-- <div class="line"></div> -->
            <el-input v-model="condition" placeholder="请输入内容" size="mini"></el-input>
          </div>
          <div class="search-btn">
            <el-button size="mini">搜索</el-button>
          </div>
        </div>
    </el-col>
    <el-col :span="2">
      <div class="grid-content bg-purple">
        
        <!-- 登录后 -->
        <ul class="header-login" v-if="LoginStatus">
          <li class="header-login-li">
            <i class="el-icon-bell icon"></i>
          </li>
          <li>
            <el-dropdown size="mini">
              <span class="el-dropdown-link">
                <el-avatar size="small" :src="photo"></el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item >用户中心</el-dropdown-item>
                <el-dropdown-item @click.native="jump('/login/changePass')">修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="onlogout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
        <!-- 登录前 -->
        <ul class="header-login" v-else>
          <li class="header-login-li" @click="jump('/login')">登录</li>
          <li class="header-login-li" @click="jump('/login/register')">注册</li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { jump,getUser,removeUser } from "../../../untils/auth";
export default {
  name: "portalHeader",
  data() {
    return {
      list: [
        {
          nav: "首页",
          path: "/portal/index"
        },
        {
          nav: "最新资讯",
          path: "/portal/latestnews"
        },
        {
          nav: "通知公告",
          path: "/portal/index"
        },
        {
          nav: "专题活动",
          path: "/portal/index"
        },
        {
          nav: "专家访谈",
          path: "/portal/index"
        },
        {
          nav: "App下载",
          path: "/portal/index"
        }
      ],
      options:[
        {
          label:'最新资讯',
          value:'1'
        },
        {
          label:'通知公告',
          value:'2'
        },
        {
          label:'专题活动',
          value:'3'
        },
        {
          label:'专家访谈',
          value:'4'
        },

      ],
      value:'',
      condition:'',
      LoginStatus:'',
      photo:require('../../../assets/images/author.png')
    }
  },
  methods: {
    jump,
    onlogout () {
      this.$confirm('确认退出登录吗', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
      })
      .then(() => {
      // 删除token
        removeUser()
        // 跳转页面
        this.$router.push('/portal')
        this.LoginStatus = false
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  },
  created() {
    if (!getUser()) {
      this.LoginStatus = false;
    } else {
      this.LoginStatus = true;
    }
  }    
}
</script>

<style lang="stylus" scoped>
.header-content {
  align-items center
}
.header-logo {
  height 0.6rem
}

.header-nav, .header-login {
  display flex
}
.header-nav-li, .header-login-li{
  flex 1
  text-align center
  cursor pointer
}
.header-nav-li:hover, .header-login-li:hover{
  color #0079fe
  font-weight 700
}


.search-box {
  border: 1px solid #0079fe;
  display: flex;
  flex-flow: row nowrap;
}

.search-input {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
}
.search-input >>> .el-input__inner {
  border: none;
}

.line {
  height: 0.28rem;
  width: 2px;
  background: #0079fe;
}

.el-button {
  border: none;
  border-radius: 0;
  background: #0079fe;
  color: #ffffff;
  line-height: 1.2;
}
.icon {
  font-weight 700
  font-size .16rem
  line-height .3rem
}
.el-dropdown-link {
  cursor pointer
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:hover {
  background-color #fff
  color #0079fe
}
</style>