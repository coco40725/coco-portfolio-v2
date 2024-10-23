<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, reactive, ref} from "vue";
import EventBus from "@/lib/EventBus.ts";
import {i18n} from "@/i18n";

const TRANSITION_TYPE = "stair-transition"
const { t } = i18n.global

const route = useRoute()
const router = useRouter()
import { useNavStore } from "@/store/nav.store.ts"
const navStore = useNavStore()
const navLink =["home", "experience", "project"]


const currentPathName = computed(() => {
    return navStore.currentNav
})

</script>

<template lang="pug">
nav
    ul(class="items-center justify-center flex gap-8")
        li(v-for="link in navLink" :key="link.name"
            :class="link === currentPathName && `active`"
            class="cursor-pointer capitalize font-medium hover:text-accent transition-all")
            a(:href="'#' + link") {{ t(`nav.${link}`) }}
        SelectLanguage
</template>

<style scoped>
.active {
    @apply text-accent border-accent border-b-2;
}
</style>