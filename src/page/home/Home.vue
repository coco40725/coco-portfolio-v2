<script setup lang="ts">

</script>

<template lang="pug">
section(class="xl:h-screen pt-32 h-full")
    div(class="container mx-auto")
        div.profile-container
            // text and social
            div(class="text-center xl:text-left order-1")
                h1(class="h1 pb-16 font-thin tracking-tight") Coco Chang
                span(class="bg-gradient-to-r from-[#00ff99] via-[#c5c6c7] bg-[#009966] bg-clip-text text-4xl tracking-tight text-transparent") Software Developer
                p(class="max-w-[550px] mt-3 mb-3 text-white/80 font-light text-[20px]") {{ $t("introduction.title") }}
                p(class="max-w-[500px] text-white/80 font-light text-[18px]") {{ $t("introduction.item1") }}
                p(class="max-w-[500px] text-white/80 font-light text-[18px]") {{ $t("introduction.item2") }}
                p(class="max-w-[500px] mb-9 text-white/80 font-light text-[18px]") {{ $t("introduction.item3") }}
                // btn and social
                .btn-container(class="xl:flex gap-3")
                    a(:href="$t('cv')" target="_blank")
                        Button(outlined size="lg" class="my-btn up mb-8 xl:mb-0" rounded)
                            span Download CV
                            i(class="pi pi-download")
                    .social-btn(class="flex gap-5 items-center text-center justify-center mb-5 xl:mb-0")
                        a(href="https://github.com/coco40725" target="_blank")
                            Button(icon="pi pi-github" aria-label="github" rounded outlined)
                        a(href="https://www.linkedin.com/in/yu-jing-chang-bb5950235/" target="_blank")
                            Button(icon="pi pi-linkedin"  aria-label="linkedin" rounded outlined)
            // photo
            Photo
        // skill
        Skill(data-aos='zoom-in' data-aos-delay='300')

</template>

<style scoped>
.profile-container {
    @apply flex flex-col h-full xl:flex-row justify-between items-center xl:pt-8 xl:pb-24
}
</style>