<script setup lang="ts">
import CountUp from 'vue-countup-v3'
import {ref} from "vue";

const stats = ref([
    {
        title: "Years of Experience",
        number: 2
    },
    {
        title: "Projects",
        number: 6
    }
])
</script>

<template lang="pug">
// stats
section(class="pt-4 pb-12 ")
    div(class="container mx-auto")
        div(class="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none")
            div(v-for="stat in stats" key="stat.title" class="flex flex-1 gap-4 items-center justify-center xl:justify-start")
                countUp(:start-val="0" :end-val="stat.number" class="text-4xl xl:text-6xl font-extrabold")
                p(:class="stat.title.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'" class="leading-snug text-white/80") {{stat.title}}
</template>

<style scoped>

</style>