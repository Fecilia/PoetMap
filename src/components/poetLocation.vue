<script setup>

import { userStore } from '../stores/modules/user';
import { computed } from 'vue';
import VueTimeline from './VueTimeline.vue';

const store = userStore();

const poetInfo = computed(() => { return store.poetInfo });

const events = computed(() => {
  const arr = [];

  for (const item of poetInfo.value) {
    const obj = {
      name: '',
      start: null,
      end: null,
      lon: null,
      lat: null,
      year: null,
	  index: null
    };
    const start = item.start.replace('{', '').replace('}', '').split(',').map(Number) ;
    const end = item.end.replace('{', '').replace('}', '').split(',').map(Number);
    obj.name = item.Title;
    obj.start = new Date(start[0], start[1], start[2]);
    obj.end = new Date(end[0], end[1], end[2]);
    obj.lon = item.Longitude
    obj.lat = item.Latitude
    obj.year = item.year
	obj.index = item.index
    arr.push(obj);
  }
  return arr;
})

const isShow = computed(() => { return events.value.length > 0 ? true : false });

</script>

<template>
  <div v-if="isShow">
    <VueTimeline :data="events" class="timeline"/>
  </div>
</template>

<style scoped lang="sass">
  .timeline
    width: 100vw
    height: 100vh
    opacity: 75%
</style>
