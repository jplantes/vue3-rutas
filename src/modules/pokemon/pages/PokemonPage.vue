<template>
  <h1>Pokemon Page #{{  id  }}</h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        //id: null
        pokemon: null
      }
    },

    created(){
      //const { id } = this.$route.params
      //this.id = id
      this.getPockemon()
    },

    methods: {

      async getPockemon() {

        try {
          
          const pokemon = await fetch( ` https://pokeapi.co/api/v2/pokemon/${ this.id}` ).then( r => r.json() )
          this.pokemon = pokemon
          // console.log( 'se llamo' )
        } catch (error) {
          
          this.$router.push('/')

        }
      }
    },

    watch: {
      id() {
        this.getPockemon()
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>