<template>
<div class="FormularioEquipo">
   <v-layout row justify-center>
     <v-dialog v-model="dialog" persistent max-width="500px">
       <v-btn slot="activator" color="primary" dark>Editar</v-btn>
          <v-card>
            <v-card-title> 
              <span class="headline"></span>
            </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-flex xs12 sm6 md6>
                    <v-text-field v-model="nombre" label="Nombre del equipo" required>
                    </v-text-field>
                  </v-flex>
                </v-container>
              </v-card-text>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="dialog = false">Cancelar</v-btn>
                   <v-btn color="blue darken-1" flat @click="GuardarEquipo">Guardar</v-btn>
              </v-card-actions>
          </v-card>
     </v-dialog>
   </v-layout>
   </div>
</template>

<script>
    import EquipoService from '@/services/EquipoService'
export default {
  name: 'FormularioEquipo',
  data () {
    return {
      nombre: '',
      dialog: false,
    }
  },
  props: ['id','lista'],
  mounted(){
     this.RealizarAccion();
  },
  methods: {
    async agregarEquipo () {
      const respuesta = await EquipoService.agregarEquipo({
          nombre : this.nombre
      })
      if(respuesta.data.success) 
        this.lista.push({nombre:this.nombre})

  },

   RealizarAccion() {
      if (this.id !== undefined) 
        this.DatosEquipo()
  },

  async GuardarEquipo(){
      this.dialog = false
      respuesta:Boolean
      this.id !== undefined? this.ActualizarEquipo() : this.agregarEquipo()

  },

  async DatosEquipo() {
       const response = await EquipoService.datosEquipo({
        id: this.id
      })

      this.nombre = response.data.nombre
     },

  async ActualizarEquipo () {
     const respuesta = await EquipoService.actualizarEquipo({
          id: this.id,
          nombre: this.nombre
      })
    if(respuesta.data.success)
        this.lista.find(x => x._id === this.id).nombre = this.nombre     
    }
}
}
</script>
