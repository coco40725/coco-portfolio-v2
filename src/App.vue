<script setup lang="ts">
import {onMounted} from "vue";
import { useNavStore } from "@/store/nav.store.ts"
const navStore = useNavStore()
onMounted(() => {
    const pages = document.querySelectorAll('.page')
    window.onscroll = () => {
        let current = ""
        pages.forEach(page => {
            const sectionTop = page.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = page.getAttribute("id");
                navStore.setCurrentNav(current)
            }
        })
    }
})
</script>

<template lang="pug">
Header
Home#home.page
Experience#experience.page
Project#project.page

</template>

<style scoped>

</style>
