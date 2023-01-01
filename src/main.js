import { createApp } from 'vue'
<<<<<<< HEAD
import App from './App.vue'

import './tailwind.css'

createApp(App).mount('#app')
=======
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
>>>>>>> origin/cacl
