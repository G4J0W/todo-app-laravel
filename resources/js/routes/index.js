import { createRouter, createWebHistory } from 'vue-router';

// Import komponentów
import ExampleComponent from '../components/ExampleComponent.vue';
import Example2Component from '../components/Example2Component.vue';

const routes = [
  {
    path: '/ExampleComponent',
    name: 'ExampleComponent',
    component: ExampleComponent
  },
  {
    path: '/ExampleComponent2',
    name: 'ExampleComponent2',
    component: Example2Component
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
