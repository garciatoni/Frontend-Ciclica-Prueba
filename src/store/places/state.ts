import mapboxgl from "mapbox-gl";

export interface PlacesState {
    isLoading: boolean;
    userLocation?:[number, number];
    titulo: string;
    users: any;
    mapa: any; //Guardo el mapa en el state por si necesito usarlo en otro componente que no sea el componente del mapa
    marcadores: mapboxgl.Marker[];
    mensaje: string;
}

function state(): PlacesState {
    return {

        isLoading: true,
        userLocation: undefined,
        titulo:  "Prueba Frontend CÍCLICA",
        users:[
            {
              id: 1,
              Nombre: 'Ciclica',
              Cordenadas: [2.16,  41.39]
            },
            {
              id: 2,
              Nombre: 'Ciclica Dos',
              Cordenadas: [2.13, 41.4]
            }
          ],
        mapa: undefined,
        marcadores: [],
        mensaje: '',


    }
}

/** Defino todas mis variables del state.
 * He optado por guardar a los usuarios como un array en el store para luego mostrarlos en el mapa de manera sencila, 
 * en un proyecto que tenga que salir a produción se usaria una base de datos (mongodb, firebase, etc.).
 */


export default state;