<template>
  <div class="Titulo">
    <!-- Muestro el titulo cargado en el store.sate mediante el prop que recibe este componente -->
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Titulo',
  props: {
    msg: String,
  },
});
</script>


<style scoped>

</style>
