<template>
  <!-- <Map/> -->
  <q-layout>
    <HeaderComponent></HeaderComponent>
    <yandex-map
      :settings="settings"
      :controls="['zoomControl']"
      :scroll-zoom="true"
      zoom="16"
      :clusterOptions="{}"
      :coords="coords"
      @click="onClick"
    >
      <ymap-marker marker-id="123" :coords="coords" :icon="markerIcon"></ymap-marker>
    </yandex-map>
  </q-layout>
</template>

<script src="./SearchFood.js"></script>

<style lang="scss" src="./SearchFood.scss"></style>
