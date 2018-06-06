<template>
  <el-container>
    <el-header>{{msg}}</el-header>
    <el-main>
      <el-row>
        <router-link to="/front">
          <el-button round>进入前台</el-button>
        </router-link>
        <router-link to="/login">
          <el-button type="primary" round>进入后台</el-button>
        </router-link>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to personal site'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.el-header {
  background-size: cover;
  /*background-image: url(/static/01d.png);*/
  background-color: rgba(255, 255, 255, .4);
  margin-top: 120px;
}

.el-header, .el-footer {
  /*background-color: #B3C0D1;*/
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /*background-color: #fffdf5;*/
  background-color: rgba(255, 255, 255, .4);
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
