<template>
  <router-link to="/" class="logo flex items-center hover:opacity-80">
    <MessageCircleMore
      class="size-7.5 -mt-1 text-[#b171fe]"
      :class="{ 'size-9 !-mt-0': !isSidebarOpen }"
    />
    <span v-if="isSidebarOpen" class="text ml-0.5 -mt-2 text-slate-300 dark:text-slate-300"
      >send.<strong>hub</strong></span
    >
  </router-link>
</template>

<script lang="ts" setup>
import { MessageCircleMore } from 'lucide-vue-next';
import { useSystemStore } from '../../stores/system';
import { computed } from 'vue';

const systemStore = useSystemStore();
const isSidebarOpen = computed(() => systemStore.sidebarOpen);
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 2.15rem;
  color: #ccc;
  gap: 8px;
}
.icon {
  width: 35px;
  height: 35px;
}
.text strong {
  color: #b171fe;
}
</style>
