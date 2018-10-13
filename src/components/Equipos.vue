<template>
<div>
                  <formulario></formulario>

  

<v-container fill-height>
        <v-layout row wrap align-center>
          <v-flex class="text-xs-center">
            <v-data-table :headers="headers" :items="desserts" class="elevation-3" dark data-app>

    <template slot="items" slot-scope="props">
      <td>{{ props.item.nombre }}</td>
      <td>
           <formulario v-bind:id="props.item._id"></formulario>
          <a href="http://" target="_blank" rel="noopener noreferrer">Borrar</a>
      </td>
    </template>
  </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>

</div>

</template>

<script>
  import EquipoService from '@/services/EquipoService'
  import FormularioEquipo from './FormularioEquipo.vue'
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
    props: ['rows-per-page-text'],
    mounted (){
        this.Todos();
    },
    methods :{
        async Todos(){
            const response = await EquipoService.listaEquipos()
            this.desserts = response.data
        }
    },
    components:{
      'formulario':FormularioEquipo
    }
  }
</script>