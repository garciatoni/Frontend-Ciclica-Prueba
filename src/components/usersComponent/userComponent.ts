import { usePlacesStore } from '@/composables/usePlacesStore';
import { defineComponent } from 'vue';

/**Scrip de userComponent.vue, he optado por separlo para demostrar que se trabajar de ambas maneras, a lo personal me resulta mas comoda esta forma
 * de trabajo.
 */

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