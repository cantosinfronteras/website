<template>
    <nuxt-link 
        v-if="to != undefined" 
        v-bind:to="to"
        class="button"
    >
        <slot />
    </nuxt-link>
    <button 
        v-else 
        @click="$emit('click')"
        class="button"
    >
        <slot />
    </button>
</template>

<script>
export default {
    props: ['to']
}
</script>

<style lang="postcss">
.button{
    @apply
        bg-blue-600 
        duration-300 
        px-4 py-2 
        rounded 
        shadow-md 
        text-white
        whitespace-nowrap;
}
.button:hover{
    @apply 
        bg-blue-500 
        shadow-lg;
}
</style>
