<template>
    <x-sheet class="sticky text-sm top-0 z-10" component="header">
        <nav class="flex flex-col" role="navigation">
            <x-container class="flex items-center justify-between p-4">
                <nuxt-link class="flex gap-4 items-center" to="/">
                    <img alt="Isotipo" class="h-8" src="/icons/cantosinfronteras.svg" />
                    <x-logotype />
                </nuxt-link>
                <ul class="gap-4 hidden items-center md:flex">
                    <li>
                        <nuxt-link to="/como-cantar">Blog</nuxt-link>
                    </li>
                    <li>
                        <x-button to="/sing4u">Ir a Sing4U</x-button>
                    </li>
                </ul>
                <button @click="toggleMenu()" aria-label="Abrir menú de navegación" class="duration-300 flex focus:outline-none hover:bg-black hover:bg-opacity-5 md:hidden rounded-full p-2 -m-2">
                    <img src="/icons/menu.svg" alt="Menú" />
                </button>
            </x-container>
            <x-container v-if="menu" class="border-t border-gray-200">
                <ul class="flex flex-col">
                    <li>
                        <nuxt-link class="flex py-4" to="/como-cantar">Blog</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link class="flex py-4" to="/sing4">Ir a Sing4U</nuxt-link>
                    </li>
                </ul>
            </x-container>
        </nav>
    </x-sheet>
</template>

<script>
export default {
    data() {
        return {
            menu: false
        }
    },
    methods: {
        toggleMenu(){
            this.menu = !this.menu
        }
    }
}
</script>
