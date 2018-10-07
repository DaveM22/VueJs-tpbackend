<template>
    <div>
        <label for="nombre">Nombre de equipo</label>
        <input type="text" id="nombre" v-model="nombre"/>
        <button @click="agregarEquipo">Add</button>
    </div>
</template>

<script>
    import PostsService from '@/services/EquipoService'
export default {
  name: 'NuevoEquipo',
  data () {
    return {
      nombre: ''
    }
  },
  methods: {
    async agregarEquipo () {
      await PostsService.agregarEquipo({
          nombre : this.nombre
      })
      this.$router.push({ name: 'Equipos'})
  }
}
}
</script>
