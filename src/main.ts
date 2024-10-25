import { createApp } from 'vue'
import App from './App.vue'
import "./assets/tailwind.css";
import 'primeicons/primeicons.css'
import {createPinia} from "pinia";
import PrimeVue from 'primevue/config';
import {router} from "./router";
import Aura from '@primevue/themes/aura';
import { i18n } from "@/i18n";
import AOS from "aos";
import "aos/dist/aos.css";

const pinia = createPinia()
const app = createApp(App);
AOS.init()
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(AOS)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
router.isReady().then(() => {
    app.mount("#app");
})
