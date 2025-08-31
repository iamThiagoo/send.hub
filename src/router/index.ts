import { createRouter, createWebHistory } from 'vue-router';
import Default from '../layouts/default.vue';
import Home from '../views/Home.vue';
import Notification from '../views/Notification.vue';
import Clients from '../views/Clients.vue';
import Executions from '../views/Executions.vue';

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      { path: '', component: Home },
      { path: '/notification', component: Notification },
      { path: '/clients', component: Clients },
      { path: '/executions', component: Executions },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
