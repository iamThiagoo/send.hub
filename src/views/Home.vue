<template>
  <section>
    <h1 class="text-3xl font-bold dark:text-violet-400">
      Bem-vindo(a) de volta Thiago, <span class="wave text-3xl">👋</span>
    </h1>
    <p class="mt-1 font-medium">
      Abaixo estão algumas informações gerais do seu uso na plataforma:
    </p>

    <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Stats :icon="MailCheck" title="Emails Enviados" :value="800" />
      <CardStats :icon="LayoutTemplate" title="Templates Criados" :value="12" />
      <CardStats :icon="Users" title="Destinatários Adicionados" :value="5" />
    </div>

  </section>
</template>

<script lang="ts" setup>
import { MailCheck, LayoutTemplate, Users } from 'lucide-vue-next'
import Stats from '../components/card/stats.vue';
</script>

<style lang="css" scoped>
.wave {
  display: inline-block;
  animation: wave-animation 2s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(14deg);
  }

  20% {
    transform: rotate(-8deg);
  }

  30% {
    transform: rotate(14deg);
  }

  40% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>