<script setup lang="ts">
import {computed, ref} from "vue";
import project01_Image from "@/assets/project/project01.png";
import project02_Image from "@/assets/project/project02.png";
import project03_Image from "@/assets/project/project03.png";
const projects = [
    {
        num: "01",
        stack: [
            "Quarkus",
            "Vue3",
            "MongoDB TTL",
            "GCP"
        ],
        image: project01_Image,
        live: "https://www.ehanlin.com.tw/app/index.html",
    },
    {
        num: "02",
        stack: [
            "Quarkus",
            "Vue3",
            "MongoDB",
            "GCP"
        ],
        image: project02_Image,
        live: "https://hanlindigi.hle.com.tw/widget/2/214",
    },
    {
        num: "03",
        stack: [
            "Quarkus",
            "Vue3",
            "MongoDB TTL",
            "Redis",
            "Grpc",
            "GCP",
            "JWT"
        ],
        image: project03_Image,
        live: "https://www.coco-dev.com/coco-short-link/index.html#/home",
        githubs: [
            {
                name: "user-server",
                url: "https://github.com/coco40725/coco-user-bg",
            },
            {
                name: "short-link-server",
                url: "https://github.com/coco40725/coco-short-link-bg"
            },
            {
                name: "web-view",
                url: "https://github.com/coco40725/coco-short-link-frontend-view"
            }
        ]
    }
]
const currentIndex = ref(0)
const project = computed(() =>  projects[currentIndex.value])
const changeProject = (operation: number) => {
    currentIndex.value += operation
}

</script>

<template lang="pug">
section(class="container mx-auto xl:h-screen h-full" data-aos='fade-left' data-aos-delay='100'  data-aos-anchor-placement="top-bottom")
    h1(class="h1 text-center pb-20 font-thin tracking-tight text-accent") {{ $t("nav.project") }}
    div(class="flex flex-col xl:flex-row xl:gap-[30px]")
        div(class="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none")
            div(class="flex")
                // left arrow
                div(class="flex items-center justify-center p-6" v-if="currentIndex > 0")
                    i(class="pi pi-chevron-left cursor-pointer hover:text-accent" style="font-size: 2rem" @click="changeProject(-1)")

                // project content
                div(class="flex flex-col gap-[30px]")
                    // project num
                    div(class="text-8xl leading-none font-extrabold text-transparent text-outline") {{ project.num }}
                    // project title
                    h2(class="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-smooth capitalize") {{ $t(`project${project.num}.title`) }}
                    // project description
                    p(class="text-white/60")  {{ $t(`project${project.num}.desc`) }}
                    // stack tag
                    div(class="gap-4 flex flex-wrap")
                        span(v-for="s in project.stack" class="bg-secondary/80 rounded-md py-1 px-2 text-accent/60 ") {{ s }}
                    hr(class="border-white/20")
                    // button
                    div(class="flex items-center gap-4 flex-wrap" v-if="project.live || project.github")
                        a(v-if="project.live" target="_blank" :href="project.live" class="bg-white/5 w-[70px] h-[70px] rounded-full flex items-center justify-center transition-smooth hover:-rotate-45 group")
                            i(class="pi pi-arrow-down-right transition-smooth group-hover:text-accent" style="font-size: 2rem" )
                        div(class="flex gap-6 px-5" v-if="project.githubs && project.githubs.length > 0")
                            div(v-for="git in project.githubs" class="flex flex-col justify-center items-center group")
                                a(:href="git.url" target="_blank" class="bg-white/5 w-[50px] h-[50px] rounded-full flex items-center justify-center transition-smooth group")
                                    i(class="pi pi-github ransition-smooth group-hover:text-accent" style="font-size: 1.5rem")
                                p(class="text-white/60 text-center group-hover:text-accent text-wrap") {{ git.name }}
                // right arrow
                div(class="flex items-center justify-center p-6" v-if="currentIndex < projects.length - 1")
                    i(class="pi pi-chevron-right cursor-pointer hover:text-accent" style="font-size: 2rem" @click="changeProject(1)")

        div(class="w-full xl:w-[50%] xl:pb-0 xl:pl-4 pb-5 justify-center flex")
            img(:src="project.image" :alt="project.title" class="h-full object-cover rounded-xl w-[700px]")


</template>

<style scoped>
.transition-smooth {
    transition: all 0.5s;
}
.p-galleria-nav-button {
    background-color: blue;
}
</style>