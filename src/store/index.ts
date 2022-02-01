import { createStore } from 'vuex';

import placesModule from './places';
import { PlacesState } from './places/state';


export interface StateInterface {
  places: PlacesState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule
  }
});

/* He cambiado el store para adaptarlo a Typescript, en 'module-template' esta la plantilla que uso.
Tambien se utilizar la plantilla original que trae vuex, pero me parece mas comoda y completa la que se puede hacer con typescript */