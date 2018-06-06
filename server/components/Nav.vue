<template>
  <div>
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <!--<i class="el-icon-location"></i>-->
          <span>新增</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">
            <router-link tag="li" to="/admin/addArticle">新增文章</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <!--<el-menu-item-group title="分组2">-->
        <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
        <!--</el-menu-item-group>-->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <!--<i class="el-icon-location"></i>-->
          <span>编辑</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link tag="li" to="/admin/editArticle">编辑文章</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <!--<i class="el-icon-location"></i>-->
          <span>删除</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <router-link tag="li" to="/admin/deleteArticle">删除文章</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    background-color: rgba(0,0,0,.4);
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
