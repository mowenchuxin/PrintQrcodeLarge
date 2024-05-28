import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import print from 'vue3-print-nb'
import 'tailwindcss/tailwind.css'

createApp(App).use(store).use(print).mount('#app')
