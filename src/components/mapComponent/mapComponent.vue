<script lang="ts" src="./mapComponent.ts"/>

<template>

    <!-- Comprueba si se ha cargado la ubicacion del usuario, en caso de que este cargada este componente no se vera y se podra ver el mapa. -->
    <div v-if="!isUserlocationReady"
    class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere</h3>
            <span>Localizando tu ubicacion</span>
        </div>
    </div>

    <!-- Este componente solo se muestra si se ha cargado la ubicacion del usuario, pero este siempre existe debido al "v-show" -->
    <div class="d-flex">
        <div v-show="isUserlocationReady" class="map-container" id="map"/>
        <!-- cargo el userComponente que contiene toda la lista de los usuarios registrados en la app -->
        <UserComponent />

        <!-- Pequeño menu que permite selecionar las capas -->
        <div id="menu" class="d-flex mt-2 m-4 bg-light align-items-center rounded-2 opacity-75">
            <div id="opciones">
                <input id="satellite-v9" type="radio" name="rtoggle" value="satellite">
                <label for="satellite-v9">Satelite</label>
            </div>
            <div id="opciones">
                <input id="dark-v10" type="radio" name="rtoggle" value="dark">
                <label for="dark-v10">Oscuro</label>
            </div>
            <div id="opciones">
                <input id="streets-v11" type="radio" active name="rtoggle" value="streets" checked="checked">
                <label for="streets-v11">Calles</label>
            </div>
        </div>
    </div>

</template>

<style scoped>
/* Estilos basicos del menu y el mapa */
.map-container{
    position: fixed;
    width: 100%;
    height: 80vh;
    margin: auto;

}
#opciones{
    padding: 4px;
}

.loading-map{
    position: fixed;
    width: 100vw;
    height: 80vh;
}
#menu{
    z-index: 999;
    max-height: 50px;
}

</style>