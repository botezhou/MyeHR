<template>
  <div class="sidebar">
  <el-menu
    :collapse="isCollapse"
    :default-active="$route.name"
    class="el-menu-vertical-demo"
    :background-color="backgroundColor"
    :text-color="textColor"
    router
    :active-text-color="activeColor">
    <template v-if="menus" v-for="menu in menus">
      <el-submenu v-if="menu.is_group == true" :index="menu.index">
        <template slot="title">
          <i :class="menu.class_i"></i>
          <span slot="title">{{menu.name}}</span>
        </template>
        <template v-for="menuitem in menu.children">
          <template v-if="menuitem.is_group == true">
            <el-submenu :index="menuitem.index">
              <template slot="title">
                <i :class="menuitem.class_i"></i>
                <span slot="title">{{menuitem.name}}</span>
              </template>
              <template v-for="menuitemChild in menuitem.children">
                <el-menu-item :index="menuitemChild.index">
                  <i :class="menuitemChild.class_i"></i>
                  <span :class="menuitemChild.class_span">{{menuitemChild.name}}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <el-menu-item v-else :index="menuitem.index">
            <i :class="menuitem.class_i"></i>
            <span :class="menuitem.class_span">{{menuitem.name}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :index="menu.index">
        <i :class="menu.class_i"></i>
        <span slot="title" :class="menu.class_span">{{menu.name}}</span>
      </el-menu-item>
    </template>
  </el-menu>
  </div>
</template>
<script>
    export default {
        name: "menus",
        props: {
          isCollapse: {
            type: Boolean,
            default: false
          },
          textColor: {
            type: String,
            default: '#fff'
          },
          activeColor: {
            type: String,
            default: '#ffd04b'
          },
          backgroundColor: {
            type: String,
            default: '#16AAD8'
          }
        },
        methods:{
          
        },
        data(){
          let menus = [
            {
              index:'view',
              name:'总览',
              class_i:'fa fa-tachometer',
              class_span:'sb-cn',
              is_group:false,
              children:null
            },
            {
              index:'gantt',
              name:'甘特图',
              class_i:'fa fa-life-saver ',
              class_span:'sb-cn',
              is_group:false,
              children:null
            },

            {
              index:'questionForm',
              name:'问题表单',
              class_i:'fa fa-question',
              class_span:'sb-cn',
              is_group:false,
              children:null
            },
          ];
          return{
            menus,
          }
        }
    }
</script>

<style lang="less" >
   .sidebar{
     width:200px;
     overflow: hidden;
   }
   .el-menu{
     border:none;
     i{
       font-size:18px;
       margin-right: 6px;
     }
     span{
       letter-spacing: 5px;
     }
   }
</style>
