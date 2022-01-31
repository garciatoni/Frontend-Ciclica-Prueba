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
        <UserComponent />
    </div>

</template>

<style scoped>

.map-container{
    position: fixed;
    width: 100%;
    height: 80vh;
    margin: auto;

}

.loading-map{
    position: fixed;
    width: 100vw;
    height: 80vh;
}

</style>