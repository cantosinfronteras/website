<template>
    <nuxt-link class="col-span-12 md:col-span-6 xl:col-span-4" :to="'/como-cantar/'+data.slug">
        <div class="bg-white duration-300 hover:shadow-md overflow-hidden rounded shadow">
            <div class="bg-gray-100 h-64"></div>
            <div class="flex flex-col gap-4 p-8 text-sm">
                <span class="font-bold text-xl">{{ data.title }}</span>
                <span class="text-gray-600"> 06/01/2020</span>
                <p class="text-gray-600">{{ data.extract }}</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ['data']
}
</script>
