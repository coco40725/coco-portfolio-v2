<script setup lang="ts">
import {computed, defineProps, ref, toRefs} from 'vue'
const props = defineProps({
    variant: {
        type: String,
        default: 'primary', // 默認為 'primary' 樣式
        validators: (val: string) => {
            return ['primary', 'outline'].includes(val)
        }
    },
    size: {
        type: String,
        default: 'md',
        validators: (val: string) => {
            return ['sm', 'md', 'lg'].includes(val)
        }
    },
    className: {
        type: String,
        default: ''
    }
})
const { variant, className } = toRefs(props);

</script>

<template lang="pug">
div.btn(:class="variant + ' ' + className + ' ' + size")
    slot

</template>

<style scoped>
.btn {
    @apply rounded-full cursor-pointer text-center inline-block
}

.btn:hover {
    @apply bg-accent-hover
}

/* variant primary*/
.primary {
    @apply bg-accent text-primary
}
.primary:hover {
    @apply bg-accent-hover
}

/* variant outline*/
.outline {
    border-width: 0.2px;
    @apply border-accent text-accent
}
.outline:hover {
    @apply bg-accent text-primary
}
/* size */
.lg {
    @apply text-lg py-3 px-6
}
</style>