import './assets/layout/_topbar.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import StyleClass from 'primevue/styleclass';
import '@/assets/styles.scss';

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(createPinia())
app.directive('styleclass', StyleClass);
app.use(router)


app.mount('#app')
