<template>
  <div
    class="dashboard-toolbar w-full border-b border-gray-200 bg-white flex items-center justify-between px-5 py-3 dark:bg-slate-800 dark:border-gray-700"
  >
    <div class="flex">
      <button
        @click="toggleSidebar"
        class="flex cursor-pointer gap-3 items-center text-gray-600 hover:text-black dark:hover:text-gray-200 transition mr-4 dark:text-gray-300"
      >
        <component :is="isSidebarOpen ? PanelRightOpen : PanelRightClose" class="w-6 h-6" />
        <h2 class="text-xl font-semibold">
          {{ capitalizedRouteName }}
        </h2>
      </button>
    </div>
    <div class="flex items-center gap-4">
      <Theme />
      <UDropdownMenu
        :items="items"
        :ui="{
          content: 'w-40',
        }"
      >
        <UAvatar
          src="https://avatars.githubusercontent.com/u/69599810?v=4"
          size="xl"
          class="cursor-pointer hover:opacity-90"
        />
      </UDropdownMenu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PanelRightOpen, PanelRightClose } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import type { DropdownMenuItem } from '@nuxt/ui';
import { useSystemStore } from '../../stores/system';
import Theme from '../button/theme.vue';

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'Thiago Ferreira',
      type: 'label',
    },
  ],
  [
    {
      label: 'Sair',
      icon: 'lucide:door-open',
      class: 'cursor-pointer',
    },
  ],
]);

const route = useRoute();
const isSidebarOpen = computed(() => systemStore.sidebarOpen);
const systemStore = useSystemStore();

const capitalizedRouteName = computed(() => {
  const name = route.name as string;
  if (!name) return '';
  if (name === 'index') return 'Home';
  if (name === 'recipients') return 'Destinatários';
  return name.charAt(0).toUpperCase() + name.slice(1);
});

const toggleSidebar = () => {
  systemStore.sidebarToggle();
};
</script>
