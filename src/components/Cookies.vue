<template>
    <div v-if="show" class="bg-gray-800 bottom-0 fixed right-0 p-4 shadow text-white w-full">
        <x-container class="flex flex-col gap-4 md:flex-row items-start md:items-center justify-between">
            <div>
                Utilizamos cookies para mejorar la experiencia en este sitio Web. 
                <nuxt-link class="text-blue-400" to="/privacidad-y-cookies">Más información</nuxt-link>
            </div>
            <x-button @click="close()">Comprendo</x-button>
        </x-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        close(){
            this.show = false
        }
    }
}
</script>
