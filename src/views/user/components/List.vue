<style lang="scss" scoped>
.el-card {
  margin-bottom: 20px;
}
</style>

<template>
  <div class="resource-list">
    <el-card class="box-card">
      <template #header>
        <span>数据筛选</span>
      </template>
      <el-form ref="form" :model="searchForm" label-width="80px" label-position="left">
        <el-form-item v-for="(search, i) in searchForm.searchCategory" :key="i" :prop="search.prop" :label="search.label">
          <el-select v-if="search.content" v-model="search.category" :placeholder="search.placeholder || ''" clearable>
            <el-option v-for="(item, i) in search.content" :key="i" :label="item.name" :value="item.name"></el-option>
          </el-select>
          <el-input v-else v-model="search.category" :placeholder="search.placeholder || ''"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" plain icon="el-icon-search" @click="onSubmit" :loading="isLoading">搜索</el-button>
          <el-button @click="onReset" :disabled="isLoading">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <span>查询结果：</span>
      </template>
      <el-table :data="searchResources.resourceList" style="width: 100%; margin-bottom: 20px" v-loading="isLoading">
        <el-table-column v-for="(info, i) in searchResources.resourceTitle" :key="i" :prop="info.prop" :label="info.label"> </el-table-column>
        <el-table-column min-width="150" label="操作">
          <template #default="scope">
            <el-button size="mini" type="success">详情</el-button>
            <el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.row)" disabled type="primary">编辑</el-button>
            <el-button size="mini" icon="el-icon-delete" disabled type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
const data1 = [
  {
    category: null, // 资源分类，null查询所有
    prop: 'uid', // 需要校验的字段名 option
    label: '用户ID', // 左侧文案
    placeholder: '请输入用户ID' // 描述信息
  },
  {
    category: null,
    prop: 'member',
    label: '会员身份',
    placeholder: '全部',
    content: [
      // 【option】 选择框
      {
        id: 0,
        name: '非会员'
      },
      {
        id: 30,
        name: '过期会员'
      },
      {
        id: 60,
        name: '季度会员'
      }
    ]
  },
  {
    category: null,
    prop: 'leval',
    label: '社群等级',
    placeholder: '全部',
    content: [
      {
        id: 0,
        name: '培训师1'
      },
      {
        id: 1,
        name: '培训师2'
      },
      {
        id: 2,
        name: '培训师3'
      }
    ]
  }
]
const data2 = [
  {
    prop: 'uid',
    label: '用户ID'
  },
  {
    prop: 'nick',
    label: '昵称'
  },
  {
    prop: 'member',
    label: '会员身份'
  },
  {
    prop: 'leval',
    label: '社群等级'
  },
  {
    prop: 'phone',
    label: '手机号'
  }
]
const data3 = [
  {
    uid: '10205072',
    nick: '我是万物官招啊',
    member: '永久会员',
    leval: '培训师',
    phone: '13444444106'
  },
  {
    uid: '10205072',
    nick: '我是万物官招啊',
    member: '永久会员',
    leval: '培训师',
    phone: '13444444106'
  }
]
import { reactive, ref, toRefs } from '@vue/reactivity'

// 初始化列表数据
const useData = () => {
  // 通过ref创建的响应式对象通过value获取值
  let isLoading = ref(false) // 加载状态

  // 复杂数据定义
  let searchForm = reactive({
    current: 1, // 默认查询第1页数据
    size: 10, // 每页大小
    searchCategory: data1 // 搜索分类
  })

  let searchResources = reactive({
    resourceTitle: data2, // 标题
    resourceList: data3 // 数据
  })

  return {
    isLoading,
    searchForm,
    searchResources
  }
}

// 搜索相关
const useSearch = isLoading => {
  // 提交
  let onSubmit = isLoading => {
    isLoading.value = true
    // isLoading.value = false
    console.log('submit!')
    return isLoading
  }
  // 重置
  let onReset = () => {
    return console.log('reset!')
  }
  return {
    onSubmit,
    onReset
  }
}

export default {
  name: 'UserList',
  setup() {
    let { isLoading, searchForm, searchResources } = useData()

    return {
      isLoading,
      searchForm,
      searchResources,
      ...useSearch(isLoading)
    }
  }
}
</script>
