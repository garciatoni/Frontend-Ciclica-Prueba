import { usePlacesStore } from '@/composables/usePlacesStore';
import mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'userComponent',
    setup(){

        const { users:{value}, mapa } = usePlacesStore();
        const users = value;


        //Funcion que al activarse el evento "click" lleva al usuario al marcador de cualquier usuario registrado previamente en la app
        const goCoords = (coords: any) => {
            const [lng, lat] = coords;
            mapa.value?.flyTo({
                center: [lng, lat],
                zoom: 15
            });
        }

        return{
            users,
            goCoords
        }
    }



});