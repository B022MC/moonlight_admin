import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import store from './store/index.ts';
import 'ant-design-vue/dist/reset.css';
import router from './router';
// @ts-ignore


// @ts-ignore
import App from './App.vue'



const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.use(Antd)
app.use(router)
app.mount('#app')
