import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css';
import store from './store';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.provide("store", store)
app.mount('#app')
