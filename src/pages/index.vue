<template>
  <div class="app">
    <TopBar class="topBar"></TopBar>
    <searchPoet class="search_poet" style="height: 10px;" />
    <view class="content">
      <CeisumMap class="cesium_map"></CeisumMap>
    </view>
    <poetLocation class="poetLocation" />
  </div>
</template>

<script setup>
import CeisumMap from "../components/cesiumMap.vue";
import searchPoet from "../components/searchPoet.vue";
import poetLocation from "../components/poetLocation.vue";
import TopBar from "../components/topBar.vue";
</script>

<style scoped lang="sass">

$z-index-data: 11

.content
	position: relative
	width: 100vw
	height: 100vh

.search_poet
	position: absolute
	top: 20%
	z-index: $z-index-data
	opacity: 60%
	
.poetLocation
	position: fixed
	top: 55%
	z-index: $z-index-data

.cesium_map
	z-index: $z-index-data - 1

.topBar
	z-index: $z-index-data
	position: absolute
</style>
