<script setup lang="ts">
import {onMounted} from "vue";
import {gsap} from "gsap";

onMounted(() => {
    gsap.fromTo(".img-container", {
        opacity: 0
    },{
        opacity: 1,
        duration: 4
    })
})
</script>

<template lang="pug">
div.img-container(class="h-full relative order-0 xl:order-2 mb-8 xl:mb-0")
    svg(class="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mx-auto circle-border")
        defs
            linearGradient#grad1
                stop(offset="0%", stop-color="#00ff99")
                stop(offset="50%", stop-color="#c5c6c7")
                stop(offset="100%", stop-color="#009966")
        circle(class="hidden xl:block c-web" r="240" stroke="url(#grad1)" stroke-width="3" fill="none" cx="50%" cy="50%")
        circle(class="xl:hidden c-phone" r="140" stroke="url(#grad1)" stroke-width="3" fill="none" cx="50%" cy="50%")
    div(class="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mx-auto mask")
        img(src="@/assets/profile.jpg" alt="profile" class="rounded-full w-full h-full object-cover")

</template>

<style scoped>
.mask {
    -webkit-mask-image: linear-gradient(black, transparent);
    mask-image: linear-gradient(black, transparent);
    padding: 17px;
}
.circle-border{
    @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}
/*
stroke-dasharray = radius * 2 * PI / (想要的條數 * 2)
stroke-dashoffset = radius * 2 * PI
*/
.c-web {
    stroke-dasharray: 251;
    animation: svgAnimationCWeb 13s linear infinite;
}

.c-phone {
    stroke-dasharray: 147;
    animation: svgAnimationCPhone 13s linear infinite;
}
@keyframes svgAnimationCWeb {
    from {
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: 1507.2;
    }
}

@keyframes svgAnimationCPhone {
    from {
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: 879.2;
    }
}
</style>