import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { PlacesState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const placesModule: Module<PlacesState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

//El indice de mi store, donde defino: actions, getters, mutaciones y state
export default placesModule;