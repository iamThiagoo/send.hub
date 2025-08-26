import './assets/styles/global.css'

import App from "./App.vue";
import uiPlugin from '@nuxt/ui/vue-plugin'

import { createApp } from "vue";
import router from './router';
import pinia from './plugins/stores';

const app = createApp(App)

app.use(router)
app.use(uiPlugin)
app.use(pinia)
app.mount('#app')