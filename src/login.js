import axios from "axios"
import { createApp } from 'vue'
import Login from './Login.vue'

window.axios = axios

createApp(Login).mount('#app')

