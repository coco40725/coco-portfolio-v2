<script setup lang="ts">
import {computed, ref} from "vue";
import EventBus from "../../lib/EventBus.ts";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const TRANSITION_TYPE = "stair-transition"
import { useNavStore } from "@/store/nav.store.ts"
const navStore = useNavStore()
const navLink =["home", "experience", "project"]


const menuOpen = ref(false)
const currentPathName = computed(() => {
    return navStore.currentNav
})
const clickNav = (name: string) => {
    closeMenu()
    navStore.setCurrentNav(name)
}


const closeMenu = () => {
    menuOpen.value = false
}
const openMenu = () => {
    menuOpen.value = true
}
</script>

<template lang="pug">
div
    .menu-icon-container(class="cursor-pointer" @click="openMenu")
        i(class="pi pi-bars" style="font-size: 2em; color: #00ff99")
    Drawer(v-model:visible="menuOpen" header=" " position="top" style="height: auto")
        .item-container
            .logo-content(class="py-10")
                a(href="/")
                    h1(class="text-4xl font-semibold")
                        | Coco
                        span.text-accent .
            nav
                ul
                    li.item(v-for="link in navLink" :key="link.name"
                        :class="link === currentPathName && `active`"
                        @click="clickNav(link)")
                        a(:href="'#' + link") {{ $t(`nav.${link}`) }}
                    SelectLanguage

</template>

<style scoped>
.item-container {
    @apply flex flex-col items-center justify-center  m-0;
}
.item {
    @apply cursor-pointer capitalize font-medium hover:text-accent transition-all  text-center m-4;
}
.active {
    @apply text-accent border-accent border-b-2;
}
</style>