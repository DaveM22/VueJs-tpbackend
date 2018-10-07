import Api from '@/services/Api'

export default{
  listaEquipos () {
    return Api().get('equipos')
  },

  agregarEquipo (params) {
    return Api().post('equipos', params)
  }

}
