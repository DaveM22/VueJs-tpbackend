<template>
    <div class="FormularioEquipo">
        <label for="nombre">Nombre de equipo</label>
        <input type="text" id="nombre" v-model="nombre"/>
        <button @click="GuardarEquipo">Add</button>
        <div id="app">
  <v-app id="inspire">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
  
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-app>
</div>
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
