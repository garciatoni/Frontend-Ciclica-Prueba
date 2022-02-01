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

    setMensaje(state, mensaje: string){
        state.mensaje = mensaje;
    },

    //Guardo usuarios en el state
    setUsers(state, user: any){
        state.users.push(user)
    },

    //Guardo el mapa en el state
    setMapa(state, mapa: mapboxgl.Map){
        state.mapa = mapa
    },

    /*Guardo los marcadores para cada usuario, asi nada mas entrar en la app se ven 2 marcadores (1 para cada usuario) y a medida 
    que se van añadiendo usuarios se colocan sus respectivos marcadores con sus posiciones, al clicar en un usuario se desplaza 
    automaticamente a su marcador*/
    setUserMarkers(state, users: any){

        //Borro los marcadores antiguos
        state.marcadores.forEach( marcador => marcador.remove());
        state.marcadores = [];
        
        //Creo los nuevos marcadores con sus respectivos popups
        for (const user of users){
            const [ lng, lat ] = user.Cordenadas ;

            //Creación de popup
            const Popup = new mapboxgl.Popup().setLngLat([ lng, lat ])
            .setHTML(`
            <h3>${user.Nombre}</h3>
            <h4>Id: ${user.id}</h4>
            <p>Coords: ${user.Cordenadas}</p>
            `)
            //Creación del marcador
            const marcador = new mapboxgl.Marker().setLngLat([ lng, lat ]).setPopup(Popup)
            state.marcadores.push( marcador );

        }
    }
}


export default mutation;