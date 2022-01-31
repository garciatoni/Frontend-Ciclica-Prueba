import { defineComponent, onMounted, watch } from "vue";
import mapboxgl from "mapbox-gl";
import { usePlacesStore } from '../../composables/usePlacesStore';
import UserComponent from '@/components/usersComponent/userComponent.vue';

export default defineComponent({
    name: 'mapComponent',
    components: {
        UserComponent
    },
    setup(){

        const { isUserlocationReady, userLocation, users, setMapa, setUserMarkers, marcadores } = usePlacesStore();


        const iniciarMapa = async () => {
            //Compruebo que existen las cordenadas de la ubicacion del usuario, de lo aviso con un error.
            if ( !userLocation.value) throw new Error('No existe la localizacion del usuario');

            //Pongo esto para que la resolucion del mapa se cargue correctamente.
            await Promise.resolve();

            //Declaro el mapa de mapboxgl
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 12 // starting zoom
            });

            //Añado los marcadores dinamicos y los Popup, Cada usuario tiene un marcador con su respectivo popup que se genera dinamicamente.
            (marcadores.value).forEach(marcador => {
                marcador.addTo( map )
            });

            map.addControl(new mapboxgl.NavigationControl());

            //guardo el mapa en vuex para usarlo en otros componentes.
            setMapa( map );

        }

        //Si la ubicacion del usuario existe, carga el mapa
        onMounted(() => {
            if ( isUserlocationReady.value ) 
                iniciarMapa();
                setUserMarkers(users.value)
            
        });

        //Si la ubicacion del usuario existe, carga el mapa
        watch (isUserlocationReady, () => {
            if ( isUserlocationReady.value ) iniciarMapa();
            setUserMarkers(users.value)

        })

        return {
            isUserlocationReady          
        }
    }
});