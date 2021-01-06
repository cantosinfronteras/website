<template>
    <component :is="component != undefined ? component : 'div'" class="sheet">
        <slot />
    </component>
</template>

<script>
export default {
    props: ['component']
}
</script>

<style lang="postcss">
.sheet{
    @apply bg-white shadow;
}
</style>
