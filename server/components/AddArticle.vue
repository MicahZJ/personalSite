<template>
    <el-container>
      <el-header>
        <span class="normal-span-width">文章标题：</span>
        <el-input
          placeholder="请输入标题"
          v-model="inputTitle"
          clearable>
        </el-input>
      </el-header>
      <el-header>
        <span class="normal-span-width">作者：</span>
        <el-input
          placeholder="请输入名字"
          v-model="inputName"
          clearable>
        </el-input>
      </el-header>
      <el-header>
        <span class="normal-span-width">时间：</span>
          <!--<span class="demonstration">带快捷选项</span>-->
        <el-date-picker
            v-model="dateValue"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions1">
          </el-date-picker>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="80px">正文：</el-aside>
          <el-main style="background-color: rgba(250,250,250,0)">
            <el-input
              type="textarea"
              :autosize="{ minRows: 20, maxRows: 30}"
              placeholder="请输入内容"
              v-model="contentValue">
            </el-input>
          </el-main>
        </el-container>
        <!--<span class="normal-span-width">正文：</span>-->
      </el-main>
      <el-footer></el-footer>
    </el-container>
</template>

<script>
export default {
  name: 'add-article',
  data () {
    return {
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      dateValue: '',
      inputTitle: '',
      inputName: '',
      contentValue: ''
    }
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: rgba(250,250,250,.8);
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: rgba(250,250,250,.8);
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

  .el-input {
    width: 85%;
  }

  .normal-span-width {
    display: inline-block;
    width: 80px;
  }
</style>
