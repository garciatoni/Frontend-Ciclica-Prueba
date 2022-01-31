import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

//Accion de geolocalizar al usuario que visita la web, si no es posible geolocalizar al usuario se le avisa con un error.
//Si la geolocalizacion es correcta, se guardan las cordenadas en el state.
const actions: ActionTree<PlacesState, StateInterface> = {
    getUserLocation( { commit } ) {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => commit('setLngLat', {lng: coords.longitude, lat: coords.latitude}),
            ( error ) => {
                console.log(error)
                throw new Error ('No se ha podido geolocalizar')
            }
        );
    },  
};


export default actions;