<template>
    <div class="Equipos">
            <table>
                <tr>
                    <td>Nombre</td>
                </tr>
                <tbody>
                    <tr v-for="equipo in equipos">
                        <td>{{ equipo.nombre}}</td>           
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
import EquipoService from '@/services/EquipoService'
export default {
  name: 'Equipos',
  data () {
    return {
      equipos: []
    }
  },
  mounted () {
      this.getEquipo()
  },
  methods: {
      async getEquipo () {
          const response = await EquipoService.listaEquipos()
          this.equipos = response.data
      }
  }
}
</script>
