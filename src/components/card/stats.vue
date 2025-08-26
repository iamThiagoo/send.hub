<template>
  <div
    class="bg-slate-100 p-4 rounded-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700"
  >
    <div
      class="inline-block p-2 bg-primary-200 border border-primary-300 rounded-full items-center justify-center"
    >
      <component :is="icon" class="text-slate-900" />
    </div>
    <h3 class="text-base font-medium mt-1">{{ title }}</h3>
    <p class="text-2xl font-bold mt-1 dark:text-violet-400">{{ value }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
})
</script>