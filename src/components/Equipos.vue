<template>
<div>
                  <formulario v-bind:lista="desserts">

                  </formulario>

  

<v-container fill-height>
        <v-layout row wrap align-center>
          <v-flex class="text-xs-center">
            <v-data-table :headers="headers" :items="desserts" class="elevation-3" dark data-app>

    <template slot="items" slot-scope="props">
      <td>{{ props.item.nombre }}</td>
      <td>
           <formulario v-bind:id="props.item._id" v-bind:lista="desserts"></formulario>
          <v-btn color="blue darken-1" flat @click.native="Borrar(props.item._id)">Borrar</v-btn>
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
    props: ['id'],
    mounted (){
        this.Todos();
    },
    methods :{
        async Todos(){
            const response = await EquipoService.listaEquipos()
            this.desserts = response.data
        },

        async Borrar(idborrar){
          const response = await EquipoService.borrarEquipo({
            id: idborrar
          })
          this.Todos();
        }
    },
    components:{
      'formulario':FormularioEquipo
    }
  }
</script>