import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'primeicons/primeicons.css'

const application = createApp(App)

application.use(router)

application.mount('#app')
