import { createApp } from 'vue'
import App from './App.vue'
import VueClickAway from "vue3-click-away";
import router from './router/router';

const app = createApp(App);
app.use(router);
app.use(VueClickAway);
app.mount('#app');
