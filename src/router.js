import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import preferential from './views/Preferential.vue'
import my from './views/my.vue'
import list from './components/list.vue'
import citys from './views/citys.vue'
import dodetails from './views/godetails.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{name:"home"}
    },
    {
      path: '/dodetails/:id',
      component:dodetails
    },
    {
      path: '/citys',
      component:citys
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:{name:"Film"},
      children:[
        {
          path: '/home/Film',
          name: 'Film',
          component: Film,
          redirect:{'name':"list"},
          children:[
            {
              path:'/home/Film/:type',
              name:'list',
              component:list

              
            }
          ]
        },
        {
          path: '/home/Cinema',
          name: 'Cinema',
          component: Cinema
        },
        {
          path: '/home/Preferential',
          name: 'preferential',
          component: preferential
        },
        {
          path: '/home/my',
          name: 'my',
          component: my
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
