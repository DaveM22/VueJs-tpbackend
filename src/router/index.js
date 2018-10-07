import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Equipos from '@/components/Equipos'
import NuevoEquipo from '@/components/NuevoEquipo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/equipos',
      name: 'Equipos',
      component: Equipos
    }
    ,
    {path: '/equipos/nuevo',
     name: 'NuevoEquipo',
     component: NuevoEquipo
    }
  ]
})
