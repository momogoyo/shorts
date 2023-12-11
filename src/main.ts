import { createApp } from 'vue'
import router from '@/router'
import '@/assets/styles/index.scss'
import App from '@/App.vue'
import { mocker } from './mocks/browser'
import 'swiper/swiper-bundle.css'
import { createPinia } from 'pinia'

if (process.env.NODE_ENV === 'development') {
  mocker.start()
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')