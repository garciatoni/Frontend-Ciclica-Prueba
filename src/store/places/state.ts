import mapboxgl from "mapbox-gl";

export interface PlacesState {
    isLoading: boolean;
    userLocation?:[number, number];
    titulo: string;
    users: any;
    mapa?: mapboxgl.Map;
    marcadores: mapboxgl.Marker[];
    error: boolean;
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
        error: false,


    }
}

export default state;