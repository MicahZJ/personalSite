<template>
  <div>
    <el-container>
      <el-header>
        <!--<router-link tag="li" to="/">回到后台主页</router-link>-->
        <router-link tag="li" to="/">退出登录</router-link>
      </el-header>
    </el-container>
    <el-container>
      <nav-bar></nav-bar>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
import NavBar from 'serverAdmin/components/Nav'

export default {
  name: 'admin',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    background-color: rgba(255, 255, 255, .4);
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    /*background-color: rgba(0,0,0,.4);*/
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

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    /* margin: 0 10px; */
    cursor: pointer;
    justify-content: flex-end;
  }
</style>
