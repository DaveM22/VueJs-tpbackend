<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      
      <td>{{ props.item.nombre }}</td>
      <td>
           <router-link v-bind:to="{ name: 'FormularioEquipo', params: { id: props.item._id } }">Edit</router-link>
          <a href="http://" target="_blank" rel="noopener noreferrer">Borrar</a>
      </td>
    </template>
  </v-data-table>
</template>

<script>
  import EquipoService from '@/services/EquipoService'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Nombre',
            align: 'center',
            sortable: true,
            value: 'nombre'
          },
          { text: 'Acciones', value: '',align: 'center' },
        ],
        desserts: []
      }
    },
    mounted (){
        this.Todos()
    },
    methods :{
        async Todos(){
            const response = await EquipoService.listaEquipos()
            this.desserts = response.data
        }
    }
  }
</script>