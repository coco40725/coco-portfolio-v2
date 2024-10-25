<script setup lang="ts">
import {useI18n} from "vue-i18n";

const experience = [
    {
        num: 2,
        date: "2023/03 - 2024/07",
        desc: [
            "desc1",
            "desc2",
            "desc3",
            "desc4"
        ],
        tags: ["Quarkus", "Kotlin", "MongoDB", "GCP", "Vue3", "JS"]
    },
    {
        num: 1,
        date: "2020/07 - 2022/07",
        desc: [
            "desc1"
        ],
    }
]
</script>

<template lang="pug">
section(class="container mx-auto xl:h-screen h-full xl:pt-0 pt-10" data-aos='fade-right' data-aos-delay='100'  data-aos-anchor-placement="top-center")
    h1(class="h1 text-center pb-20 font-thin tracking-tight text-accent") {{ $t("nav.experience") }}
    div(class="border-b border-neutral-800")
        ul.timeline
            li.timeline-card(v-for="exp in experience" class="pb-10")
                .subcard
                    div(class="flex pb-1 items-center relative gap-10")
                        i(class="pi pi-circle-fill text-accent mb-[10%] absolute top-[0.5rem] -left-[1.5rem]")
                        span(class="text-4xl sm:w-[54%] text-white/90 tracking-wide font-thin ml-4") {{ $t(`experience${exp.num}.title`) }}
                        span(class="text-white/70 tracking-wide") {{ exp.date }}
                    div(class="ml-4")
                        i(class="pi pi-briefcase mr-3 text-white/70 relative")
                        span(class="text-white/70") {{ $t(`experience${exp.num}.company`) }}
                    div(class="ml-4 pb-2 pt-2")
                        ul
                            li(v-for="d in exp.desc" class="text-white/90 leading-8 font-thin") - {{ $t(`experience${exp.num}.${d}`) }}
                    div(class="gap-3 flex ml-4 flex-wrap")
                        span(v-for="tag in exp.tags" class="bg-secondary/80 rounded-md py-1 px-2 text-accent/60 ") {{ tag }}

    Stats(class="pb-32 pt-10")


</template>

<style scoped>
.timeline {
    display: block !important;
    margin-left: 0;
    padding-left: 0;
}

.timeline-card {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.timeline li:before {
    content: "";
    width: 0.2rem;
    height: 100%;
    background-color: #00ff99;
    position: absolute;
    left: 6px;
    top: 5%;
    z-index: -1;
}

@media screen and (min-width: 300px) {
    .timeline li:before {
        position: absolute;
        top: 3%;
    }
}

@media screen and (min-width: 640px) {
    .timeline li:before {
        position: absolute;
        top: 7%;
    }
}
.timeline li:first-child:before {
    height: 0%;
}
.timeline li:last-child:before {
    height: 0;
}

.subcard {
    padding: 1em 1.5em 1.5em 1.5em;
    width: -webkit-fill-available;

}

</style>