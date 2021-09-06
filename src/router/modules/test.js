import Layout from '../../layout/index.vue'

// 路由配置规则
const routes = {
  path: '/',
  component: Layout,
  meta: {
    // meta 默认就是一个空对象
    requiresAuth: true, // 访问权限。自定义数据
    title: 'test'
  },
  children: [
    {
      path: '/test',
      name: 'test',
      component: () => import('../../views/test/index.vue'),
      meta: {
        // title: 'testList',
        menuId: 'test'
      }
    }
  ]
}

export default routes
