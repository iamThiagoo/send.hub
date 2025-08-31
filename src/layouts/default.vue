<template>
  <main class="flex h-lvh relative">
    <DashboardSidebar />
    <div
      class="main-content w-full overflow-y-auto bg-slate-200/70 dark:bg-slate-900"
      :class="{
        'pl-60 lg:pl-72': isSidebarOpen,
        'pl-16': !isSidebarOpen,
      }"
    >
      <div>
        <DashboardToolbar />
        <UContainer class="container mx-auto pt-7 pb-6 w-11/12">
          <router-view />
        </UContainer>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useSystemStore } from '../stores/system';
import DashboardToolbar from '../components/dashboard/dashboard-toolbar.vue';
import DashboardSidebar from '../components/dashboard/dashboard-sidebar.vue';
const systemStore = useSystemStore();
const isSidebarOpen = computed(() => systemStore.sidebarOpen);
</script>
