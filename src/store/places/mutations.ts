import { MutationTree } from 'vuex';
import { PlacesState } from './state';
import mapboxgl from 'mapbox-gl';


//Mutacion del userLocation
const mutation: MutationTree<PlacesState> = {

    //Guardo la geolocalizacion del usuario en el state.
    setLngLat( state: PlacesState, {lng, lat}: {lng:number, lat: number}) {
        state.userLocation = [lng, lat];
        state.users[0].Cordenadas = [lng, lat];
        state.isLoading = false;
    },

    //Guardo el nuevo titulo al state.
    setTitulo(state, titulo: string){
        state.titulo = titulo;
    },

    setError(state, error: boolean){
        state.error = error;
    },

    //Guardo usuarios en el state
    setUsers(state, user: any){
        state.users.push(user)
    },

    //Guardo el mapa en el state
    setMapa(state, mapa: mapboxgl.Map){
        state.mapa = mapa
    },

    setUserMarkers(state, users: any){

        //Borro los marcadores antiguos
        state.marcadores.forEach( marcador => marcador.remove());
        state.marcadores = [];
        
        //Creo los nuevos marcadores con sus respectivos popups
        for (const user of users){
            const [ lng, lat ] = user.Cordenadas ;

            const Popup = new mapboxgl.Popup().setLngLat([ lng, lat ])
            .setHTML(`
            <h3>${user.Nombre}</h3>
            <h4>Id: ${user.id}</h4>
            <p>Coords: ${user.Cordenadas}</p>
            `)
            const marcador = new mapboxgl.Marker().setLngLat([ lng, lat ]).setPopup(Popup)
            state.marcadores.push( marcador );

        }
    }
}


export default mutation;