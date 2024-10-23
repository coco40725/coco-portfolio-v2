import { createI18n } from "vue-i18n";
import zh from "./zh.json";
import en from "./en.json";
import message from "./common.json";

const i18n =  createI18n({
    locale: "zh",
    messages: {zh, en},
    // common: messages: message,
    fallbackLocale: "zh",
});

export { i18n };