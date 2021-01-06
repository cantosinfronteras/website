<template>
    <div class="gap-8 grid grid-cols-12 py-8">
        <div class="col-span-12 flex flex-col gap-2 items-center justify-center py-8">
            <span class="font-bold text-4xl">Cómo cantar</span>
            <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
        <x-article v-for="post in posts" :key="post.id" :data="post" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    id: 0,
                    title: 'Cómo cantar afinado',
                    slug: 'afinado',
                    extract: 'El proceso de cantar requiere de la activación y coordinación de diversos mecanismos internos en nuestro cuerpo. El canto comienza con un pensamiento, una intención de cantar…'
                },
                {
                    id: 1,
                    title: 'Cómo cantar afinado',
                    slug: 'afinado',
                    extract: 'El proceso de cantar requiere de la activación y coordinación de diversos mecanismos internos en nuestro cuerpo. El canto comienza con un pensamiento, una intención de cantar…'
                },
                {
                    id: 2,
                    title: 'Cómo cantar afinado',
                    slug: 'afinado',
                    extract: 'El proceso de cantar requiere de la activación y coordinación de diversos mecanismos internos en nuestro cuerpo. El canto comienza con un pensamiento, una intención de cantar…'
                },
                {
                    id: 3,
                    title: 'Cómo cantar afinado',
                    slug: 'afinado',
                    extract: 'El proceso de cantar requiere de la activación y coordinación de diversos mecanismos internos en nuestro cuerpo. El canto comienza con un pensamiento, una intención de cantar…'
                },
            ]
        }
    },
}
</script>
