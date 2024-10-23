import { createApp } from 'vue'
import App from './App.vue'
import "./assets/tailwind.css";
import 'primeicons/primeicons.css'
import {createPinia} from "pinia";
import PrimeVue from 'primevue/config';
import {router} from "./router";
import Aura from '@primevue/themes/aura';
import { i18n } from "@/i18n";


const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
router.isReady().then(() => {
    app.mount("#app");
})
