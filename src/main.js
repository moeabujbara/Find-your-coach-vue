import Vue ,{createApp} from 'vue'
import App from './App.vue' // this main app to load our application 
import Router from './router.js'

const app =createApp(App)
app.use(Router);
app.mount('#app');
