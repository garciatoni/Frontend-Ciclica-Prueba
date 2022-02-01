<template>
  <div class="home">

    <!-- Paso por props el titulo al componente -->
    <Titulo :msg="titulo"/>

    <!-- Llamo al componente mapa -->
    <div class="Mapa">
      <MapComponent /> 
    </div>


  </div>
</template>

<script lang="ts">

//Distintas importaciones
import { defineComponent } from 'vue';
import Titulo from '@/components/titulo.vue';
import { usePlacesStore } from '@/composables/usePlacesStore';
import MapComponent from '@/components/mapComponent/mapComponent.vue'



export default defineComponent({
  name: 'Home',
  components: {
    Titulo,
    MapComponent,
  },
  setup(){

    //Defino titulo del store
    const { titulo } = usePlacesStore();

    //Le digo a la vista home que use mi store de Typescript.
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
