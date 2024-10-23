<script setup lang="ts">
import Header from '../../components/header/Header.vue'
import {ref} from "vue";
const services = ref([

    {
        num: "01",
        title: 'Web Development',
        description: 'I have been learning and developing my skills since then.',
        href: ""
    },
    {
        num: "02",
        title: 'Mobile Development',
        description: 'I have been learning and developing my skills since then.',
        href: ""
    },
    {
        num: "03",
        title: 'UI/UX Design',
        description: 'I have been learning and developing my skills since then.',
        href: ""
    },
    {
        num: "04",
        title: 'SEO',
        description: 'I have been learning and developing my skills since then.',
        href: ""
    },
    {
        num: "05",
        title: 'Marketing',
        description: 'I have been learning and developing my skills since then.',
        href: ""
    }
])
</script>

<template lang="pug">
section#service(class="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0")
    div(class="container mx-auto")
        div(class="grid grid-cols-1 gap-12 xl:grid-cols-2")
            div(v-for="service in services"
                :key="service.num"
                class="flex flex-col flex-1 justify-center gap-6 group"
            )
                // top
                div(class="flex w-full justify-between items-center")
                    p(class="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-smooth") {{ service.num }}
                    a(:href="service.href" class="border-2 border-white w-[70px] h-[70px] rounded-full flex items-center justify-center transition-smooth hover:-rotate-45 group-hover:border-accent")
                        i(class="pi pi-arrow-down-right group-hover:text-accent transition-smooth" style="font-size: 2rem" )

                // title
                h2(class="text-[42px] font-bold text-white leading-none group-hover:text-accent transition-smooth") {{ service.title }}
                // description
                p(class="text-white/60") {{ service.description }}
                Divider

</template>

<style scoped>
.transition-smooth {
    transition: all 0.5s;
}
</style>