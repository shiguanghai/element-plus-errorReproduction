<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-dev {
    border-radius: 50px;
    background: url('https://pic.bbtkids.cn/FvBjvjO9d3j5Xdkka0Q32YQfCUo-') no-repeat center top/60px;
    .login-form {
      margin-top: 80px;
      padding: 20px;
      width: 300px;
      border-radius: 5px;
      background: #fff;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
<template>
  <div class="login">
    <div class="login-dev">
      <el-form class="login-form" label-position="top" ref="form" :model="loginForm" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="loginForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onSubmit"> 登录 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'

const useLogin = () => {
  let loginForm = reactive({
    phone: '',
    password: ''
  })

  let onSubmit = (phone, password) => {
    return console.log('submit!')
  }

  return {
    loginForm,
    onSubmit
  }
}

export default {
  name: 'LoginIndex',

  setup() {
    let { loginForm, onSubmit } = useLogin()

    return {
      loginForm,
      ...useLogin(loginForm.phone, loginForm.password)
    }
  }
}
</script>
