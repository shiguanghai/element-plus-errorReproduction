<style lang="scss" scoped>
.aside {
  .logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #545c64;
    color: #fff;
    text-decoration: none;
    img {
      width: 40px;
      border-radius: 10px;
    }
  }
}
</style>

<template>
  <div class="aside">
    <router-link class="logo" to="/" title="Back to Home">
      <img src="https://pic.bbtkids.cn/FvBjvjO9d3j5Xdkka0Q32YQfCUo-" alt="EduBoss" />
      <h1>账号管理</h1>
    </router-link>
    <!-- 侧边菜单栏 -->
    <AppMenu />
  </div>
</template>

<script>
import AppMenu from '../../components/AppMenu/index.vue'

export default {
  name: 'AppAside',
  components: {
    AppMenu
  }
}
</script>
