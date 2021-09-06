<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="header">
    <!-- 面包屑组件 -->
    <Breadcrumb />
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar shape="square" :size="40" src="https://public.shiguanghai.top/public/avatar.png"></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户ID</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb/index.vue'
export default {
  name: 'AppHeader',
  components: {
    Breadcrumb
  }
}
</script>
