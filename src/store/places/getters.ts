import { GetterTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<PlacesState, StateInterface> = {
    isUserlocationReady( state ) {
        return !!state.userLocation;
    },
    getTitulo( state ) {
        return state.titulo;
    },
    getUsers( state ) {
        return state.users;
    },
    getMapa(state){
        return !!state.mapa;
    }
}



export default getters;