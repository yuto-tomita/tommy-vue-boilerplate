import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { router } from '@/modules/router'

createApp(App)
  .use(router)
  .mount('#app')
