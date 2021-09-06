<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="route in routerRecords" :key="route.path">{{ route.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'

const init = () => {
  const route = useRoute()
  const routerRecords = computed(() => route.matched.filter(route => route.meta.title !== undefined))
  return {
    routerRecords
  }
}

export default {
  name: 'BreadCrumb',
  setup() {
    return {
      ...init()
    }
  }
}
</script>
