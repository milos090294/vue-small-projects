import './assets/main.css'

import { createApp } from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
const app = createApp(App)
app.use(Vuelidate);
app.mount('#app')
