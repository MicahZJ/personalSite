<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="3" :offset="8"><div class="grid-content bg-purple-light bg-purple">用户名：</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
        <el-input
          placeholder="请输入用户名"
          v-model="name"
          clearable>
        </el-input>
        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="3" :offset="8"><div class="grid-content bg-purple-light bg-purple">密码：</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="password"
            clearable>
          </el-input>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="7" :offset="9">
          <div class="grid-content" @click="loginEvent">
            <el-button style="width: 100%" type="primary">登录</el-button>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {getUser} from '@/api/verification'

export default {
  name: 'login-interface',
  data () {
    return {
      name: '',
      password: '',
      resStatus: '',
      resMsg: ''
    }
  },
  methods: {
    loginEvent () {
      getUser(this.name, this.password).then(res => {
        // console.log(res)
        this.resStatus = res.status
        this.resMsg = res.msg
        this.$options.methods.open(this)
      })
    },
    open (_this) {
      _this.$alert(_this.resMsg, _this.resStatus, {
        confirmButtonText: '确定',
        callback: action => {
          // 密码正确
          if (_this.resStatus === 200) {
            _this.$router.push({path: '/admin'})
          }
          // 密码失败
          if (_this.resStatus === 400) {
            _this.$router.push({path: '/login'})
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .el-main {
    /*background-color: #fffdf5;*/
    background-color: rgba(255, 255, 255, .4);
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
    margin-top: 120px;
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

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-blue {
    background: #409EFF;
    cursor: pointer;
    color: white;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
