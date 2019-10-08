<template>
  <div :class="className">
    <h3 class="title">管理员登录</h3>

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="text" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="bottom">
      <input class="login-btn" type="submit" value="登录" />
      <span class="register-btn" @click="register">注册</span>
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
    const generateValidate = (field, msg) => (rule, value, callback) => {
      if (value === '') {
        callback(new Error(`${msg}不能为空`))
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
        username: [{ validator: generateValidate('username', '用户名'), trigger: 'blur' }],
        password: [{ validator: generateValidate('password', '密码'), trigger: 'blur' }]
      }
    }
  },

  methods: {
    register() {
      this.$emit('switch-show-box', 'register')
    }
  }
}
</script>

<style></style>
