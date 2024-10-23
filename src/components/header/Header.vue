<script setup lang="ts">
</script>

<template lang="pug">
header(class="xl:py-6 py-3 text-white fixed top-0 left-0 w-full z-50 bg-neutral-900")
    div(class="container mx-auto flex justify-between items-center")
        // Logo
        a(href="/")
            h1(class="text-4xl font-semibold")
                | Coco
                span.text-accent .
        // desktop Navigation
        div(class="hidden xl:flex items-center gap-8")
            Nav
            //Button(size="small"  raised)
            //    p Hire me
        // mobile Navigation
        MobileNav(class="xl:hidden") 123

</template>

<style scoped>
Button p{
    @apply font-extrabold
}
</style>