<script setup>
import { userStore } from '../stores/modules/user';
import { computed } from 'vue';
import { ElPopover, ElButton } from 'element-plus';
import { Pointer } from '@element-plus/icons-vue'

const store = userStore();

// 诗人简介
const poetLife = computed(() => {
  return store.introduction;
})

</script>

<template>
  <div v-show="poetLife">
    <el-popover
      placement="right"
      title="简介"
      :width="200"
      trigger="hover"
      :content="poetLife"
      >
      <template #reference>
        <el-button type="warning" circle :icon="Pointer"></el-button>
      </template>
    </el-popover>
  </div>
</template>

<style scoped lang="sass">
</style>
