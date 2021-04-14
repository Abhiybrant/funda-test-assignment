import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import PropertyList from './pages/properties/PropertyList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/funda' },
    { path: '/funda', component: PropertyList},
    {
      path: '/funda/:propertyId',
      component: PropertyList,
      props: true
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
