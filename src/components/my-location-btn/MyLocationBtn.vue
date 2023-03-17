<template>
  <button v-if="isBtnReady" class="btn btn-primary" @click="onMyLocationClicked">
    Ir a mi ubicación
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
  name: 'MyLocationBtn',

  setup() {

    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();


    return {
      isBtnReady: computed<boolean>( () => isUserLocationReady.value && isMapReady.value ),

      onMyLocationClicked: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 15
        });
      }
    }
  }
});

</script>

<style scoped>
button{
  position: fixed;
  right: 30px;
  top: 30px;
}

</style>