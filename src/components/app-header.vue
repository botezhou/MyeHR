<template>
  <div class="head">
    <div class="headbox flex-container">
        <div class="logo-box">        
          
        </div>
        <div>
          <div class="flex-container">
            <div class="flex-item">
              <i class="fa fa-bell"></i>
            </div>
            <div class="flex-item">
              <i class="fa fa-user-circle-o"></i>
              <span style="font-size:14px;margin: 0 15px 0 0;">欢迎登陆</span>
            </div>
            <div class="flex-item" title="全屏">
              <i class="fa" @click="handleSwitchScreen" :class="isFullScreen ? 'fa-compress' : 'fa-expand'"></i>               
            </div>
            <div class="flex-item" title="主题设置">            
               <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link">
                    <i class="fa fa-gear set"></i>   
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="theme in themes" :key="theme.name" :command="theme">{{theme.label}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>    
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import themes from './theme'

export default {
  components:{

  },
  data() {
      return {
        themes,
        isFullScreen: false
      }
  },
  methods:{
    // 全屏切换
    handleSwitchScreen() {
      if (this.isFullScreen) {
        var doc = document
        if (doc.exitFullscreen) {
          doc.exitFullscreen()
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen()
        } else if (doc.webkitCancelFullScreen) {
          doc.webkitCancelFullScreen()
        } else if (doc.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isFullScreen = false
      } else {
        var elem = document.documentElement
        if (elem.requestFullscreen) {
          elem.requestFullscreen()
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen()
        } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          // elem.msRequestFullscreen() 没有指定元素
          document.body.msRequestFullscreen()
        }
        this.isFullScreen = true
      }
    },
    handleCommand(theme) {
      this.$emit('changeTheme',theme)
    }
  }
}
</script>
<style lang="less" >
  .head{
    .flex-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:60px;
      color:#fff;
      font-size:16px;
      .flex-item{
        min-width:40px;
        cursor: pointer;
      }
    }
    .logo-box{
      width: 100px;
      .header-logo{
        height:50px;
        margin-left:20px;
      }
    }
    .set{
      font-size: 20px;
      color:#fff;
      transition: 0.5s all ease;
      &:hover{
        transform: rotateZ(180deg);
        color: #32CD32;   
      }
        
    }
  }
</style>
