<template>
    <div class="gap-8 grid grid-cols-12 py-8">
        <div class="col-span-12 flex flex-col gap-2 items-center justify-center py-8">
            <span class="font-bold text-4xl">Cómo cantar</span>
            <p class="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
        <x-article v-for="article in articles" :key="article.id" :data="article" />
    </div>
</template>

<script>
import { DataStore } from 'aws-amplify'
import { Article } from '../../models'

export default {
    async asyncData({ error }){
        try {
            const articles = await DataStore.query(Article)
            console.log('articles', articles)
            return { articles }
        } catch (err) {
            return error({ statusCode: 500, message: 'Internal server error.' })
        }
    },
}
</script>
