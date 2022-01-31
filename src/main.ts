import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Importo mapboxgl y el accesToken a todo el proyecto.
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiY2ljbGljYSIsImEiOiJja3l5ZTlvaTAwM2ZoMm9vMTE0NGI3ZW50In0.7GB251LSlZLmELIJ4nayVA';
 
//Hago una comprobación para verificar que el navegador soporta la geolocalizacion
if(!navigator.geolocation){
    alert('El navegador no soporta la Geolocalizacion.')
    throw new Error('El navegador no soporta la Geolocalizacion.')
}


createApp(App).use(store).use(router).mount('#app')
