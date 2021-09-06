<template>
  <el-menu
    default-active="/user"
    :uniqueOpened="true"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/user">
        <i class="el-icon-setting"></i>
        <span>测试账号查询</span>
      </el-menu-item>
      <el-menu-item index="/test">
        <i class="el-icon-setting"></i>
        <span>test</span>
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="2">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>其他</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

export default {
  name: 'AppMenu',
  setup() {
    return {
      handleOpen,
      handleClose
    }
  }
}
</script>
