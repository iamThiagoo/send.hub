<template>
  <nav
    :class="!isSidebarOpen ? 'w-16' : 'md:min-w-60'"
    class="py-5 flex fixed left-0 justify-between flex-col h-lvh border-r border-gray-200 bg-slate-800 dark:border-gray-700"
  >
    <div>
      <div class="px-5 relative -top-1">
        <Logo />
      </div>

      <UNavigationMenu
        class="mt-4 px-3"
        :highlight="true"
        :collapsed="!isSidebarOpen"
        :orientation="'vertical'"
        :color="'primary'"
        :items="[
          {
            label: 'Dashboard',
            icon: 'lucide:chart-network',
            iconSize: 'w-6 h-6',
            class: `bg-slate-800 text-gray-200 flex gap-x-3 text-lg py-2 my-2 hover:bg-slate-700 hover:text-violet-400 rounded-lg transition-colors ${!isSidebarOpen ? 'justify-center' : ''}`,
            to: '/',
            tooltip: { text: 'Ir para Home' },
          },
          {
            label: 'Notificar Clientes',
            icon: 'lucide:send',
            iconSize: 'w-6 h-6',
            class: `bg-slate-800 text-gray-200 flex gap-x-3 text-lg py-2 my-2 hover:bg-slate-600 hover:text-violet-400 rounded-lg transition-colors ${!isSidebarOpen ? 'justify-center' : ''}`,
            to: '/clients',
            tooltip: { text: 'Ir para Clientes' },
          },
          {
            label: 'Clientes',
            icon: 'lucide:users',
            iconSize: 'w-6 h-6',
            class: `bg-slate-800 text-gray-200 flex gap-x-3 text-lg py-2 my-2 hover:bg-slate-600 hover:text-violet-400 rounded-lg transition-colors ${!isSidebarOpen ? 'justify-center' : ''}`,
            to: '/clients',
            tooltip: { text: 'Ir para Clientes' },
          },
          {
            label: 'Histórico',
            icon: 'lucide:history',
            iconSize: 'w-6 h-6',
            class: `bg-slate-800 text-gray-200 flex gap-x-3 text-lg py-2 my-2 hover:bg-slate-700 hover:text-violet-400 rounded-lg transition-colors ${!isSidebarOpen ? 'justify-center' : ''}`,
            to: '/executions',
            tooltip: { text: 'Ir para Execuções' },
          },
        ]"
      />
    </div>

    <div>
      <UNavigationMenu
        class="mt-8 px-3"
        :highlight="true"
        :collapsed="!isSidebarOpen"
        :orientation="'vertical'"
        :items="[
          {
            label: 'Suporte  ',
            icon: 'lucide:headset',
            to: 'https://github.com/iamThiagoo/send.dev.git',
            target: '_blank',
            iconSize: 'w-6 h-6',
            class: `bg-slate-800 text-gray-200 flex gap-x-3 text-lg py-2 my-2 hover:bg-slate-700 hover:text-violet-400 rounded-lg transition-colors ${!isSidebarOpen ? 'justify-center' : ''}`,
            tooltip: { text: 'Ir para Github' },
          },
        ]"
      />

      <div class="mt-4 px-4">
        <button
          class="group w-full border-1 border-slate-500 bg-slate-800 cursor-pointer text-gray-200 text-lg py-1.5 hover:bg-slate-700 hover:text-violet-400 rounded-lg transition-colors flex items-center justify-center gap-x-2"
        >
          <span class="group-hover:hidden block">
            <DoorClosed class="w-6 h-6" />
          </span>
          <span class="hidden group-hover:block">
            <DoorOpen class="w-6 h-6" />
          </span>

          <span v-if="isSidebarOpen">Sair</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { DoorClosed, DoorOpen } from 'lucide-vue-next'
import { computed, watch } from 'vue'
import { useSystemStore } from '../../stores/system'

const systemStore = useSystemStore()
const isSidebarOpen = computed(() => systemStore.sidebarOpen)

watch(
  () => systemStore.sidebarOpen,
  (_newValue) => {
    // console.log(newValue)
  }
)
</script>