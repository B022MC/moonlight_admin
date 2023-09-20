import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia'
import router from './router';
// @ts-ignore


// @ts-ignore
import App from './App.vue'



const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(Antd)
app.use(router)
app.mount('#app')
