<template>
  <h1>About Page</h1>

  <h4>{{ name }}</h4>
  <button
    @click="onChangeNmae"
  >
    Cambiar nombre
  </button>
</template>

<script>
  export default {

    data() {
      return {
        name: 'Juan Pablo'
      }
    },

    methods: {

      onChangeNmae(){
        this.name = 'Luciana'
      }
    },


    beforeCreate() {
      console.log( 'beforeCreate' )
    },
    created() {
      console.log( 'created' )
    },
    beforeMount() {
      console.log( 'beforeMount' )
    },
    mounted() {
      console.log( 'mounted' )
    },
    beforeUpdate() {
      console.log( 'beforeUpdate' )
    },
    updated() {
      console.log( 'updated' )
    },
    activated() {
      console.log( 'activated' )
    },
    deactivated() {
      console.log( 'deactivated' )
    },
    unmounted() {
      console.log( 'unmounted' )
    },
    errorCaptured() {
      console.log( 'errorCaptured' )
    },
    renderTracked() {
      console.log( 'renderTracked' )
    },
    renderTriggered() {
      console.log( 'renderTriggered' )
    },
  }
</script>

<style lang="scss" scoped>

</style>