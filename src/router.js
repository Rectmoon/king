import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import ItemEdit from './views/ItemEdit.vue'
import Categories from './views/Categories.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/category-operation',
          component: CategoryEdit
        },
        {
          path: '/category-operation/:id',
          component: CategoryEdit,
          props: true
        },

        {
          path: '/item-edit',
          component: ItemEdit
        },
        {
          path: '/categories',
          component: Categories
        }
      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
