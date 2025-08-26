import './assets/styles/global.css'

import App from "./App.vue";
import uiPlugin from '@nuxt/ui/vue-plugin'

import { createApp } from "vue";
import router from './router';
import pinia from './plugins/stores';
import { invoke } from '@tauri-apps/api/core';

const app = createApp(App)

app.use(router)
app.use(uiPlugin)
app.use(pinia)
app.mount('#app')

function sleep(seconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

// Setup function
async function setup() {
    // Fake perform some really heavy setup task
    console.log('Performing really heavy frontend setup task...')
    await sleep(3);
    console.log('Frontend setup task complete!')
    // Set the frontend task as being completed
    await invoke('set_complete', {task: 'frontend'})
}

// Effectively a JavaScript main function
window.addEventListener("DOMContentLoaded", () => {
    setup()
});