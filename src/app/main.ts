import '@/app/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.ts'
import { store } from '@/app/store.ts'


const app = createApp(App)

app
  .use(store)
  .use(router)
  .mount('#app')
