<template>
  <main class="relative min-h-screen">
    <div
      class="absolute inset-0 z-0"
      style="
        background-image: url('/images/4.png');
        background-size: cover;
        background-position: center;
      "
    ></div>

    <div class="absolute inset-0 bg-slate-950/91 z-0"></div>

    <div
      class="relative z-10 container mx-auto flex items-center justify-center px-4 py-12 min-h-screen"
    >
      <div
        class="flex items-center absolute top-6 left-1/2 transform -translate-x-1/2 sm:top-8 sm:left-8 sm:translate-x-0 rounded-full z-20"
      >
        <div class="logo">
          <svg viewBox="0 0 24 24" class="icon">
            <path d="M2 6l10 7L22 6v12H2z" fill="#b171fe" />
          </svg>
          <span class="text text-slate-300 dark:text-slate-300">send.<strong>dev</strong></span>
        </div>
      </div>

      <div
        class="flex items-center absolute top-7 right-1/2 transform -translate-x-1/2 sm:top-10.5 sm:right-8 sm:translate-x-0 rounded-full z-20"
      >
        <p v-if="route.path === '/login'" class="text-gray-300 tracking-wide">
          Novo no send.dev?
          <router-link
            to="/register"
            class="text-violet-400 hover:text-violet-500 transition-colors"
            >Registre-se</router-link
          >
        </p>
        <p v-if="route.path === '/register'" class="text-gray-300 tracking-wide">
          Já possui uma conta?
          <router-link to="/login" class="text-violet-400 hover:text-violet-500 transition-colors"
            >Faça login</router-link
          >
        </p>
      </div>

      <UPageCard variant="subtle" class="w-full max-w-sm sm:max-w-md">
        <slot />
      </UPageCard>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>