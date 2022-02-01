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

        const { isUserlocationReady, userLocation, users, setMapa, setUserMarkers, marcadores, mapa } = usePlacesStore();

        //Función que inicia el mapa
        const iniciarMapa = async () => {
            //Compruebo que existen las cordenadas de la ubicacion del usuario, de lo contrario aviso con un error.
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

            //Añado navegacion basica al mapa
            map.addControl(new mapboxgl.NavigationControl());

            //guardo el mapa en vuex para usarlo en otros componentes.
            setMapa( map );

            //Selector de capas
            const layerList = document.getElementById('menu');
            const inputs = layerList!.getElementsByTagName('input');
            for(let a=0;a<inputs.length;a++){
                inputs[a].onclick = (layer: any) => {
                    const layerId = layer.target.id;
                    map.setStyle('mapbox://styles/mapbox/' + layerId);
                };
            }
        }




        //Si la ubicacion del usuario existe, carga el mapa, junto a los marcadores de cada usuario
        onMounted(() => {
            if ( isUserlocationReady.value ) 
                iniciarMapa();
                setUserMarkers(users.value)
            
        });

        //Si la ubicacion del usuario existe, carga el mapa, junto a los marcadores de cada usuario
        watch (isUserlocationReady, () => {
            if ( isUserlocationReady.value ) iniciarMapa();
            setUserMarkers(users.value)
            

        })

        return {
            isUserlocationReady,        
        }
    }
});