<script setup lang="ts">
import { ref } from 'vue';
const { locale } = useI18n()
import {useI18n} from "vue-i18n";
const selectedCountry = ref(locale.value);
const countries = ref([
    { name: '繁體中文', code: 'zh' },
    { name: 'English', code: 'en' }
]);
const changeLanguage = (e) => {
    locale.value = e.target.value
}
</script>

<template lang="pug">
div(class="card flex justify-center")
    .card.flex.justify-center
        select(v-model="selectedCountry" class="p-1 rounded" @change="changeLanguage")
            option(v-for='country in countries' :key='country.code' :value='country.code') {{ country.name }}

</template>

<style scoped>

</style>