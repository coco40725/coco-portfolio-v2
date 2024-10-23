<script setup lang="ts">
const skill = [
    {
        name: "Kotlin",
        icon: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"
    },
    {
        name: "Java",
        icon: "https://www.vectorlogo.zone/logos/java/java-icon.svg"
    },
    {
        name: "SpringBoot",
        icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
    },
    {
        name: "Quarkus",
        icon: "https://quarkus.io/assets/images/brand/quarkus_icon_default.svg"
    },
    {
        name: "TypeScript",
        icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
    },
    {
        name: "Vue",
        icon: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
    },
    {
        name: "HTML",
        icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
    },
    {
        name: "CSS",
        icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
    },
    {
        name: "Javascript",
        icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
    },
    {
        name: "MongoDB",
        icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
    },
    {
        name: "MySQL",
        icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
    },
    {
        name: "GCP",
        icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
    },
]
</script>

<template lang="pug">
div(class="border-b border-neutral-800 pb-24")
    h2(class="h2 font-light") {{ $t("skills") }}
    div(class="flex flex-wrap justify-center xl:justify-start gap-4 pt-4")
        div(v-for="s in skill" class="rounded-2xl border-4 bg-gray-800 border-neutral-800 p-4 flex items-center justify-center gap-3")
            img(:src="s.icon" height="40" width="40")
            p {{ s.name }}
</template>

<style scoped>

</style>