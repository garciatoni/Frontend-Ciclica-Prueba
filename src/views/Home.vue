<template>
  <div class="home">
    <Titulo :msg="titulo"/>

    <div class="Mapa">
      <MapComponent /> 
    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Titulo from '@/components/titulo.vue'; // @ is an alias to /src
import { usePlacesStore } from '@/composables/usePlacesStore';
import MapComponent from '@/components/mapComponent/mapComponent.vue'



export default defineComponent({
  name: 'Home',
  components: {
    Titulo,
    MapComponent,
  },
  setup(){

    const { titulo } = usePlacesStore();

    usePlacesStore();
  
    return{
      titulo,
    }

  }
});
</script>

<style scoped>
.Mapa{
  width: full;
}
</style>
