<template>
  <!--
    <div>
      <RouterLink :to="{ name: 'home' }">Lista de Pokemons</RouterLink>
      <RouterLink :to="{ name: 'pockemon-id', params: { id: 85 } }">Pockemos por ID</RouterLink>
      <RouterLink :to="{ name: 'about' }">Sobre mi</RouterLink>
    </div>
  -->
  <CustomLink 
    v-for="link in links"
    :key="link.to"
    :link="link"
  />

</template>

<script>
  import { defineAsyncComponent } from 'vue'

  export default {

    data() {
      return {
        links: [
          { to: 'pokemon-home', name: 'Pokemons' },
          { to: 'pockemon-id', name: 'Por ID', id: 151 },
          { to: 'pokemon-about', name: 'About' },
          { to: 'dbz-about', name: 'DBZ About' },
          { to: 'dbz-characters', name: 'DBZ Personajes' },
          { to: 'https://google.com', name: 'Google' },
        ]
      }
    },

    components: {
      CustomLink: defineAsyncComponent( () => import( './CustomLink.vue' ) )
    }
  }
</script>

<style scoped>

div {
  padding: 0 30px;
}

div a{
  margin-left: 10px;
  color: rgb(63, 121, 63);
  text-decoration: none;
}

.router-link-exact-active{
  color: rgb(152, 226, 145);
}
</style>