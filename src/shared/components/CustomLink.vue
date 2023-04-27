<template>
  <a 
    v-if="isExternalLink"
    :href="link.to"
    class="normal-link"
    target="_blank"
  >
    {{ link.name }}
  </a>

  <!--// v-slot="{ href, isActive }" -->
  <router-link 
    v-else 
    :to="route"
    v-slot="{ isActive }"
  >
    <a 
      :class="isActive ? 'is-active' : 'normal-link'"
    >
      {{ link.name }}
    </a>
  </router-link>
  
</template>

<script>
import { RouterLink } from 'vue-router';

  export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith("http");
        },

        route() {
          return this.link.id === undefined
            ? { name: this.link.to }
            : { name: this.link.to, params: { id: this.link.id } }
        }
    },
    components: { RouterLink }
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

.is-active{
  color: rgb(152, 226, 145);
}

.normal-link{
  color: rgb(224, 224, 224);
}
</style>