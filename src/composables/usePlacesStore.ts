import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { StateInterface } from "@/store/index";
import mapboxgl from "mapbox-gl";


export const usePlacesStore = () =>{

    const store = useStore<StateInterface>();

    onMounted( () => {
        if ( !store.getters['places/isUserlocationReady']){
            store.dispatch('places/getUserLocation')
        }

        

    })

    return{
        //state
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocation),
        titulo: computed(() => store.state.places.titulo),
        users: computed(() => store.state.places.users),
        mapa: computed(() => store.state.places.mapa),
        marcadores: computed(() => store.state.places.marcadores),
        error: computed(() => store.state.places.error),


        //getters
        isUserlocationReady: computed<boolean>(() => store.getters['places/isUserlocationReady']),

        //Mutations
        setTitulo: (titulo: string) => store.commit('places/setTitulo', titulo),
        setUser: (user: any) => store.commit('places/setUsers', user) ,
        setMapa: ( mapa: mapboxgl.Map) => store.commit('places/setMapa', mapa),
        setUserMarkers: ( users: any) => store.commit('places/setUserMarkers', users),
        setError: (error: boolean) => store.commit('places/setError', error),


    }
}