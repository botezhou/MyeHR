<template>
<el-container class="app-container">
  <el-header class="app-header" height="60" :style="{background: theme.theme.headerTheme}">
    <app-header @changeTheme="switchTheme"></app-header>
  </el-header>
  <el-container style="height:100%;overflow-x: auto">
    <el-aside class="app-side" :width="isCollapse ? '64px' : '200px'"
      :style="{background: theme.theme.backgroundColor}"
      >
      <div class="flex-container showSide" :style="{background: backgroundColor}">
        <i class="fa" :class="isCollapse ? 'fa-chevron-circle-right' : 'fa-chevron-circle-left'" @click="changeSide"></i>
      </div>
      <app-sidebar :isCollapse="isCollapse" :backgroundColor="backgroundColor" :textColor="textColor" :activeColor="activeColor"></app-sidebar>
    </el-aside>
    <el-main class="app-body">
      <breadcrumb :breadcrumbColor="breadcrumbColor" :backgroundColor="headerTheme"></breadcrumb>
      <!-- <el-container class="app-content">
        <el-main class="app-page-body"> -->
          <router-view></router-view>
        <!-- </el-main>
      </el-container> -->
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import appHeader from './app-header'
import appSidebar from './app-sidebar'
import breadcrumb from './breadcrumb'

export default {
  components: {
    appHeader,
    appSidebar,
    breadcrumb
  },
  data() {
    return {
      isCollapse: false,
      hasMsg: false,
      sideWidth: 200,
      headerHeight: 60,
      theme: {theme: {}},
      backgroundColor: '#16AAD8',
      textColor: '#fff',
      activeColor: '#ffd04b',
      breadcrumbColor: 'linear-gradient(to right, #16AAD8, #16AAB8)',
      headerTheme: 'linear-gradient(to right, #16AAB8, #16AAD8)'
    }
  },
  mounted(){
   
  },

  methods:{
    switchTheme(theme) {
      this.theme = theme;
      this.backgroundColor = theme.theme.backgroundColor;
      this.textColor = theme.theme.textColor;
      this.activeColor = theme.theme.activeColor;
      this.breadcrumbColor = theme.theme.breadcrumbColor;
      this.headerTheme = theme.theme.headerTheme;
    },
    changeSide() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style lang="less">
 .app-container{
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .app-container .app-header{
    padding: 0;
    background: linear-gradient(to right, #16AAB8, #16AAD8);
    overflow: visible;
  }
  .app-container .app-side{
    width: 200px;
    overflow-x: hidden;
    transition: all 0.5s ease;
    background: #16AAD8;
  }
  .app-container .app-body{
    width:100%;
    height: 100%;
    padding:0px;
    background:#f1f1f1;
    overflow-y: auto;
    padding: 10px;
    overflow-x: hidden;
  }
  .app-content{
    height: 100%;
    // overflow: auto
  }
  .app-container .app-footer{
    background: #fff;
    border-top: solid 1px rgba(48, 54, 62, 0.14);
  }
  .app-container .app-page-body{
    width:100%;
    padding: 5px;
    min-height:100%;
    overflow: hidden;
  }
  .app-header-logo-box{
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .app-header-logo-box .header-logo{
    height: 42px;
    margin-top:6px;
    margin-left:13px;
    display: block;
  }
  .app-header-logo-box .header-logo-text{
    font-size: 20px;
    font-weight: bold;
    opacity: 1;
  }

  /*mini-side*/
  .app-container.mini-side .app-side{
    overflow: visible;
  }
  .app-container.mini-side .app-side .el-menu--collapse{
    width: 60px;
  }

  .app-container.mini-side .header-logo-text{
    opacity: 0;
  }
  /*hide-side*/
  .app-container.hide-side .app-side{
    display: none;
  }
  .flex-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height:40px;
  }
  .showSide{
    
    .fa{
      font-size:30px;
      color:#fff;
    }
  }
</style>
