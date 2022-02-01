
<template>
  <div id="Forms">
  <!-- Un formulario sencillo de bootstrap para el titulo-->
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
    <div v-if="mensaje == 'error'" class="d-flex row container m-auto border border-danger py-2 fs-5 text-danger">
      <span>Usa "." para los decimales en vez de ",".</span>
      <span>La longitud debe tener un valor entre -180 y 180.</span>
      <span>La latitud debe tener un valor entre -90 y 90.</span>
    </div>
    <!-- Avisa si se ha guardado correctamente el usuario -->
    <div v-if="mensaje == 'usuario'" class="d-flex row container m-auto border border-success py-2 fs-5">
      <span>Usuario registrado</span>
    </div>
    <!-- Avisa si se ha guardado correctamente el nuevo titulo -->
    <div v-if="mensaje == 'titulo'" class="d-flex row container m-auto border border-success py-2 fs-5">
      <span>Titulo cambiado</span>
    </div>
  <!-- Un formulario sencillo de bootstrap para agregar usuarios-->
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
//Importo mi store y otras funcionalidades de vue.
import { ref, onMounted }  from "vue";
import { usePlacesStore } from '@/composables/usePlacesStore';

//Trabaje de dos formas: Una la tradicional con el script en el template y la otra separando el script del template. (typescript)
export default {
  setup(){
    //Cuando la vista se monta llama al comit del mensaje y lo establece en '', podria haber usado numeros o booleanos.
    onMounted(() => {
      setMensaje('')
    });

    //Declaro las constantes y commits de mi store.
    const { setTitulo, setUser, users:{value}, setMensaje, mensaje } = usePlacesStore();

    //Recojo los valores de los formularios.
    const nombre = ref('');
    const lat = ref('');
    const lng = ref('');
    const titulo = ref('');

    /*Cuando el formulario hace el submit se hace el commit: "SetTitulo", esta cambia el valor de "titulo" del state por el nuevo valor.
    Tambien hace el commit: 'setMensaje' para avisar al usuario que su cambio ha sido satisfactorio */
    const SetTitulo = () =>{
      //Pequeña validación
      if(titulo.value != ""){
        setMensaje('titulo')
        setTitulo(titulo.value)
      }
    }

    /*Funcion que llamara al commit: 'setUser' y 'setMensaje', para añadir un nuevo usuario al state y avisar al usuario. 
    En el apartado State explico por que he decidido usar esta gestión de usuarios */
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
        setMensaje('usuario')
      }else{
        setMensaje('error')
      }
    }


    
     return{
      mensaje,
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