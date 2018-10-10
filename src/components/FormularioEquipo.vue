<template>
    <div>
        <label for="nombre">Nombre de equipo</label>
        <input type="text" id="nombre" v-model="nombre"/>
        <button @click="GuardarEquipo">Add</button>
    </div>


</template>

<script>
    import EquipoService from '@/services/EquipoService'
export default {
  name: 'FormularioEquipo',
  data () {
    return {
      nombre: ''
    }
  },
  mounted(){
     this.RealizarAccion();
  },
  methods: {
    async agregarEquipo () {
      await EquipoService.agregarEquipo({
          nombre : this.nombre
      })
      this.$router.push({ name: 'Equipos'})
  },

  

   RealizarAccion() {
       if(this.$router.id !== null)
       {
           this.DatosEquipo()
       }
  },

  async GuardarEquipo(){
      if(this.$router.id !== null)
       {
           this.ActualizarEquipo()
       }
       else{
           this.agregarEquipo()
       }
  },
   async DatosEquipo() {
       const response = await EquipoService.datosEquipo({
        id: this.$route.params.id
      })

      this.nombre = response.data.nombre
   },

  async ActualizarEquipo () {
      await EquipoService.actualizarEquipo({
          id: this.$route.params.id,
          nombre: this.nombre
      })
      this.$router.push({name: 'Equipos'})
  }

}
}
</script>
