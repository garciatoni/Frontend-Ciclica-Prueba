<script lang="ts" src="./userComponent.ts"></script>

<template>
    <div class="menuUsers d-flex ms-3 mt-2">
        <div class="scrollBar">
            <div v-for="user in users"
            :key="user.id"
            class="user-select-none user"
            :class="{ 'activada': user.id === userActive}"
            @click=" goCoords(user.Cordenadas) "
             >
                <p class="fw-bold">{{user.Nombre}}</p>
                <p>Id: {{user.id}}</p>
                <p>Lng: {{user.Cordenadas[0]}}º</p>
                <p>Lat: {{user.Cordenadas[1]}}º</p>
            </div>
        </div>
    </div>
</template>
<!-- Este componente esta separado el template del script
Aqui muestro todos los users de la app (nombres, id, cordenadas) mediante el v-for y los usuarios guardados en la store. 
Tambien doy unos estilos muy sencillos al menu de usuarios-->
<style scoped>
.menuUsers{
    z-index: 999;
    max-width: 200px;
    max-height: 70vh;
}

.scrollBar{
    direction:ltr;
    overflow: auto;
    direction: rtl;
    box-shadow: 0px 5px 5px rgb(0, 0, 0, 0.2);
}

.user{
    width: 160px;
    background-color: rgba(255, 255, 255, 0.8);
    margin-top: 2px;
    overflow-y: auto;
    max-width: 200px;
    margin-left: 2px;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
}

.user:hover{
    background-color: rgba(207, 207, 207, 0.8);
}

p{
    margin: 0;
    text-align: end;

}
</style>