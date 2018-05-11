import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from "@/components/hello"
import provinceCity from "@/components/provinceCity"
import lineChart from "@/pages/lineChart"
import count from "@/components/count"
import me from "@/components/me"
import Collection from "@/components/Collection"
import Trace from "@/components/Trace"
import user from "@/components/user"
import book from "@/components/book"

Vue.use(Router)
const User = {
    props: ['id'],
    template: '<div>User {{ id }}</div>'
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/hello',
          name: 'hello',
          component: hello
      },
      {
          path: '/pc',
          name: 'provinceCity',
          component: provinceCity
      },
      {
          path: '/book',
          name: 'book',
          component: book
      },
      {
          path: '/line',
          name: 'lineChart',
          component: lineChart
      },
      {
          path: '/count',
          name: 'count',
          component: count
      },
      { path: '/user/:id', component: User, props: true },

      // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
      {
          path: '/user/:id',
          components: { default: User},
          props: { default: true}
      },
      {
          path: '/me',
          name: 'me',
          component: me,
          children:[
              {
                  path:"collection",
                  name:"Collection",
                  component:Collection
              },
              {
                  path:"trace",
                  name:"Trace",
                  component:Trace
              },
              {
                  path:"",
                  name:"Default",
                  component:Collection
              },
              {
                  path:"user/:id",
                  name:"user",
                  component:user
              }
          ]
      }
  ]
})
