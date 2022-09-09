import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {router} from "@/routers";
import '@/assets/css/common.css'

// init app
const app = createApp(App)

// plugins
app.use(ElementPlus, {size: 'small', zIndex: 3000})
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// mount app
app.mount('#app')
