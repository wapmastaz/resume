import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/styles.css'
import './assets/css/mobilemenu.css'

import './assets/js/imagesloaded.pkgd.min'
import './assets/js/isotope.pkgd.min'
import './assets/js/script'

const app = createApp(App)

app.use(router)

app.mount('#app')
