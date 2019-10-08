<template>
  <div :class="className">
    <h3 class="title">管理员注册</h3>

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="text" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="bottom">
      <input class="login-btn" type="submit" value="注册" />
      <span class="register-btn" @click="login">登录</span>
    </div>

    <div class="footer">
      <div>欢迎登陆后台管理系统</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    showBox: {
      type: String,
      default: 'login'
    }
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入名称'))
      } else {
        callback()
      }
    }

    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },

  methods: {
    login() {
      this.$emit('switch-show-box', 'login')
    }
  }
}
</script>

<style></style>
