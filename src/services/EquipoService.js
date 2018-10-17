import Api from '@/services/Api'

export default{
  listaEquipos () {
    return Api().get('equipos')
  },

  agregarEquipo (params) {
    return Api().post('equipos', params)
  },

  actualizarEquipo(params){
    return Api().put('equipos/'+params.id,params)
  },

  datosEquipo(params){
    return Api().get('equipo/'+ params.id)
  },

  borrarEquipo(params){
    return Api().delete('equipos/'+params.id)
  }

}
