import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginInterface from 'serverAdmin/components/LoginInterface'
import AdminInterface from 'serverAdmin/components/Admin'
import AddArticle from 'serverAdmin/components/AddArticle'
import EditArticle from 'serverAdmin/components/EditArticle'
import DeleteArticle from 'serverAdmin/components/DeleteArticle'
import FrontInterface from '@/components/Front'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'LoginInterface',
      component: LoginInterface
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminInterface,
      children: [
        {
          path: 'AddArticle',
          component: AddArticle
        },
        {
          path: 'EditArticle',
          component: EditArticle
        },
        {
          path: 'DeleteArticle',
          component: DeleteArticle
        }]
    },
    {
      path: '/front',
      name: 'front',
      component: FrontInterface
    }
  ]
})
