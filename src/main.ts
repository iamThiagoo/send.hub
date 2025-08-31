import './assets/styles/global.css';

import App from './App.vue';
import uiPlugin from '@nuxt/ui/vue-plugin';

import { createApp } from 'vue';
import router from './router';
import pinia from './plugins/stores';
import { invoke } from '@tauri-apps/api/core';

const app = createApp(App);

app.use(router);
app.use(uiPlugin);
app.use(pinia);
app.mount('#app');

function sleep(seconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function setup() {
  await sleep(3);
  await invoke('set_complete', { task: 'frontend' });
}

window.addEventListener('DOMContentLoaded', () => {
  setup();
});
