<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
}
.el-aside {
  background-color: #545c64;
}
.el-main {
  background-color: #e9eef3;
}
.el-container {
  min-height: 100vh;
  min-width: 1280px;
}
</style>

<template>
  <el-container>
    <el-aside>
      <app-aside />
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/app-aside.vue'
import AppHeader from './components/app-header.vue'

export default {
  name: 'LayoutIndex',
  components: {
    AppAside,
    AppHeader
  }
}
</script>
