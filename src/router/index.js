import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Equipos from '@/components/Equipos'
import FormularioEquipo from '@/components/FormularioEquipo'
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
      path: '/equipos',
      name: 'Equipos',
      component: Equipos
    }

  ]
})
