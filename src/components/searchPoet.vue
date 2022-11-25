<script setup>
import { ref } from 'vue';
import { getPoetInfo, getPoetIntro } from '../api/user'
import { userStore } from '../stores/modules/user'
import poetLife from './poetLife.vue'
import { Search } from '@element-plus/icons-vue'
import { drawPoetLine, flyToPoint, addModel,flyToHome } from '../utils/mapUtils.js'

const store = userStore();

const poetName = ref('');

const isShow = ref(false);

const goToPoint =  () => {
  const poetInfo = store.poetInfo;
  for (const item of poetInfo) {
    flyToPoint(item.Latitude, item.Longitude);
    addModel(item.Latitude, item.Longitude);
  }
}

const getInfo = async() => {
  const obj = await getPoetInfo(poetName.value);
  obj.forEach((item,index)=>{
	  item["index"] = index;
  })
  store.setPoetInfo(obj);
  const res = await getPoetIntro(poetName.value);
  store.setPoetIntro(res[0].introduction);
  let coors = [];
  let yearTag = [];
  for(let item of obj){
	  coors.push([item.Longitude,item.Latitude]);
	  yearTag.push(item.year);
  }
  drawPoetLine(coors,yearTag);
  poetName.value = '';
  isShow.value = true;
  store.setCurrentAdressName('');
  flyToHome();
}

</script>

<template>
  <div>
    <el-row>
      <el-col>
        <el-input
          v-model="poetName"
          placeholder="请输入诗人的名字"
		      @keyup.enter.native='getInfo()'
          class=""
        >
          <template #append>
            <el-button :icon="Search" @click='getInfo()'/>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <poetLife v-show="isShow"/>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="sass">
  .el-input__inner
    width: 50%
</style>
