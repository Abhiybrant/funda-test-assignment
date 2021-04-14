import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseButton from './components/ui/BaseButton';
import BaseLoader from './components/ui/BaseLoader.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-loader', BaseLoader);

app.mount('#app');
