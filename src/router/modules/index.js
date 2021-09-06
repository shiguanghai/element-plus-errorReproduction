import Layout from '../../layout/index.vue'
import userRoules from './user'
import testRoules from './test'

// 路由配置规则
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    meta: {
      // meta 默认就是一个空对象
      requiresAuth: true // 访问权限。自定义数据
    },
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../../views/home/index.vue'),
        meta: {
          menuId: ''
        }
      }
    ]
  },
  userRoules,
  testRoules,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../../views/error-page/404.vue')
  }
]

export default routes
