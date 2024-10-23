<script setup lang="ts">

const info = [
    {
        title: "Email",
        icon: "envelope",
        content: "s0912571225@gmail.com"
    },
    {
        title: "Address",
        icon: "home",
        content: "Taipei, Taiwan"
    }
]
const service = [
    {
        title: "Frontend",
        content: "Vue.js, React.js, TailwindCSS, SCSS, TypeScript"
    },
    {
        title: "Backend",
        content: "Node.js, Express.js, MongoDB, MySQL"
    },
    {
        title: "Fullstack",
        content: "MERN stack, MEVN stack"
    }
]
</script>

<template lang="pug">
section(class="container mx-auto pt-32")
    div(class="flex flex-col xl:flex-row gap-[30px]")
        // form
        div(class="xl:w-[54%] order-2 xl:order-none")
            form(class="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl")
                h3(class="h3 text-accent") Let's work together
                p(class="text-white/80") Looking for More Information? Contact Me Directly.
                // input
                div(class="grid grid-cols-1 md:grid-cols-2 gap-6")
                    input(type="firstname" placeholder="First Name" class="input input-info")
                    input(type="lastname" placeholder="Last Name" class="input input-info")
                    input(type="email" placeholder="Email" class="input input-info")
                    input(type="phone" placeholder="Phone number" class="input input-info")
                select(class="select-info")
                    option(value="" disabled selected) Select a service
                    option(v-for="s in service" :value="s.title") {{ s.title }}
                textarea(placeholder="Type your message here" class="textarea-info")
                // btn
                Button(size="lg" class="max-w-40")
                    span(class="font-extrabold") Send Message

        // info
        div(class="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0")
            ul(class="flex flex-col gap-10")
                li(v-for="i in info" :key="i.title" class="flex items-center gap-6")
                    div(class="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-full bg-[#27272c] text-accent rounded-md flex items-center justify-center")
                        i(:class="`pi pi-${i.icon}`")
                    div(class="flex-1")
                        p(class="text-white/60") {{ i.title }}
                        h3(class="text-xl") {{ i.content }}

</template>

<style scoped>
.input-info {
    @apply rounded-md flex h-[48px] border border-white focus:border-accent font-light bg-primary px-4 py-5 text-balance placeholder:text-white/60
    outline-none
}
.select-info {
    @apply flex  w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10
    focus:border-accent outline-none
}

.textarea-info {
    @apply flex  w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10
    focus:border-accent outline-none
}
</style>