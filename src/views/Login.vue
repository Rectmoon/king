<template>
  <div class="login" id="login-page">
    <div id="background-box"></div>
    <div class="container">
      <LoginForm
        :class="showBox === 'login' ? 'box show-box' : 'box hidden-box'"
        @switch-show-box="switchShowBox"
        :show-box="showBox"
      />
      <RegisterForm
        :class="showBox === 'register' ? 'box show-box' : 'box hidden-box'"
        @switch-show-box="switchShowBox"
        :show-box="showBox"
      />
    </div>
  </div>
</template>

<script>
import BGParticle from '@/utils/BGParticle'
import LoginForm from '@/components/form/login-form'
import RegisterForm from '@/components/form/register-form'

export default {
  components: {
    LoginForm,
    RegisterForm
  },

  data() {
    return {
      loading: true,
      showBox: 'login'
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.particle = new BGParticle('background-box')
      this.particle.init()
      this.$notify({
        dangerouslyUseHTMLString: true,
        message: `
             <ul>
          <li>初始账号：admin</li>
          <li>初始密码：admin</li>
        </ul>`,
        position: 'center-center',
        duration: 0
      })
    })
  },

  methods: {
    switchShowBox(type) {
      this.showBox = type
    }
  }
}
</script>

<style lang="stylus">
#login-page
  position fixed
  display flex
  justify-content center
  align-items center
  top 0
  left 0
  width 100%
  height 100%
  background #def3f4
  z-index 99

  #background-box
    position fixed
    left 0
    top 0
    width 100vw
    height 100vh
    background-image url('../assets/bg1.png')
    background-size 100% 100%
    // background-image url('../assets/favor.png')
    // background-size auto 100%
    // background-repeat no-repeat

  .container
    position relative
    width 240px
    height 300px
    padding 100px 40px 40px 40px
    box-sizing content-box

    .box
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      padding 90px 40px 40px 40px
      backface-visibility hidden
      background linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%)
      box-shadow -15px 15px 15px rgba(0, 0, 0, 0.4)
      transition all 1s

      &.show-box
        transform rotateY(0deg)

      &.hidden-box
        transform rotateY(180deg)

      .el-input-group__prepend
        background transparent
        padding 0
        border none
        color #fff
        opacity 0.8

      .el-input-group__prepend .iconfont
        display inline-block
        width 30px
        transition all 0.3s
        opacity 0.6

      .el-form-item
        margin-bottom 4px
        padding-bottom 20px

      .title
        padding 10px 0
        color #d3d7f7
        font-size 16px
        margin-bottom 0

      .footer
        position absolute
        bottom 20px
        left 35px
        width 250px
        color #d3d7f7
        font-size 10px

      .bottom
        display flex
        height 42px
        justify-content space-between
        align-items center

        .login-btn
          padding 10px 50px
          border 2px solid #4fa1d9
          border-radius 50px
          background transparent
          font-size 11px
          color #4fa1d9
          transition all 0.2s

          &:hover
            color white
            background #4fa1d9
            cursor pointer

        .register-btn
          color #d3d7f7

          &:hover
            color #4fa1d9
            cursor pointer

input
  color #61bfff
  border none
  outline none
  box-shadow none
  background transparent

// .login-notification
// background transparent
// border 1px solid #d3d7f7
// color #d3d7f7
// width 250px
// height 80px
// float right
// margin-right 20px

// .login-notification .ant-notification-notice-message
// color #d3d7f7

// .login-notification .ant-notification-notice-close
// color #d3d7f7
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active
  -webkit-transition-delay 99999s
  -webkit-transition color 99999s ease-out, background-color 99999s ease-out
</style>
