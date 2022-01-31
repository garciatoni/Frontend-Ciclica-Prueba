
<template>
  <div id="Forms">
  <!-- Un formulario muy sencillo de bootstrap -->
  <form class="container my-2 border border-dark py-3" @submit.prevent=" SetTitulo ">
    <div class="row justify-content-md-center">
      <div class="col col-12 col-lg-9 mb-1">
        <label for="setTitulo" class="form-label fs-1">Cambiar el titulo</label>
        <input v-model="titulo" placeholder="Escribe el nuevo titulo" type="text" name="setTitulo" class="form-control m-3" id="setTitulo">
      </div>
    </div>
      <button type="submit" class="btn btn-dark col col-lg-2">Cambiar</button>
  </form>
  <!-- Si hay algun error en la validacion aparece el error en pantalla -->
    <div v-if="error" class="d-flex row container m-auto border border-danger py-2 fs-5 text-danger">
      <span>Usa "." para los decimales en vez de ",".</span>
      <span>La longitud debe tener un valor entre -180 y 180.</span>
      <span>La latitud debe tener un valor entre -90 y 90.</span>
    </div>
  <form class="container my-2 border border-dark py-3" @submit.prevent=" SetUser ">
    <div class="row justify-content-md-center">
      <div class="col col-12 col-lg-9 mb-1">
        <div>
          <label for="setTitulo" class="form-label mb-5 fs-1">Añadir usuario</label>
        </div>
        <div class="d-flex row text-start">
          <label for="setNombre" class="form-label fs-3">Nombre de usuario</label>
          <input required v-model="nombre" type="text" name="setNombre" id="InputTitulo" class="form-control mb-3" placeholder="Escribe el nombre"> 
        </div>
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-end col col-5">
            <label for="setlng" class="form-label fs-3 ms-3">Lng: </label>
            <input required v-model="lng" type="text" name="setlng" id="InputTitulo" class="form-control m-3" placeholder="Escribe la longitud">
          </div>
          <div class="d-flex align-items-end col col-5">
            <label for="setlat" class="form-label fs-3 ms-3">Lat: </label>
            <input required v-model="lat" type="text" name="setlat" id="InputTitulo" class="form-control m-3" placeholder="Escribe la latitud">
          </div>
        </div>
      </div>
    </div>
      <button type="submit" class="btn btn-dark my-3 col col-lg-2">Añadir</button>
  </form>



  </div>
</template>


<script>


import { ref, onMounted }  from "vue";
import { usePlacesStore } from '@/composables/usePlacesStore';

//Hice 2 componentes: Uno tradicional y otro separando el script del template.
export default {
  setup(){
  
    onMounted(() => {
      setError(false)
    });

    //Declaro las constantes y commits de mi store.
    const { setTitulo, setUser, users:{value}, setError, error } = usePlacesStore();

    //Declaro store para posteriormente poder mutar el valor del titulo
    const nombre = ref('');
    const lat = ref('');
    const lng = ref('');
    const titulo = ref('');

    // Cuando el formulario hace el submit llamo a la función "SetTitulo", esta cambia el valor de "titulo" del state por el nuevo valor.
    const SetTitulo = () =>{

      setTitulo(titulo.value)

    }

    const SetUser = () =>{
      //Pequeña validacion del formulario.
      if (Number(lng.value) <= 180 && Number(lng.value) >=-180 && Number(lat.value) <= 90 && Number(lat.value) >=-90){
      
        const formData = {
          id: value.length + 1,
          Nombre: nombre.value,
          Cordenadas: [Number(lng.value), Number(lat.value)]
        }
        //Commit a la mutacion mediante mi store.
        setUser(formData);
        setError(false)
      }else{
        setError(true)
      }
    }


    
     return{
      error,
      nombre,
      lat,
      lng,
      SetTitulo,
      SetUser,
      titulo
     }
  }
}
</script>

<style scoped>

</style>