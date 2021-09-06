import Layout from '../../layout/index.vue'

// 路由配置规则
const routes = {
  path: '/',
  component: Layout,
  meta: {
    // meta 默认就是一个空对象
    requiresAuth: true, // 访问权限。自定义数据
    title: '测试账号查询'
  },
  children: [
    {
      path: '/user',
      name: 'user-list',
      component: () => import('../../views/user/index.vue'),
      meta: {
        title: '账号列表',
        menuId: 'Users'
      }
    }
  ]
}

export default routes
