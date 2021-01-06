<template>
    <article class="article">
        <h1>{{ article.title }}</h1>
        <div class="content" v-html="article.content"></div>
        <div class="fb-comments" :data-href="url" data-width="" data-numposts="5"></div>
    </article>
</template>

<script>
import { DataStore } from 'aws-amplify'
import { Article } from '../../models'

class OpenGraphMeta {
    constructor(property, content){
        this.property = `og:${property}`
        this.content = content
    }
}

export default {
    async asyncData({ params, error }){
        try {
            const data = await DataStore.query(Article, n => n.slug('eq', params.slug))
            if(data.length){
                const article = data[0]
                return { article }
            } else {
                return error({ statusCode: 404, message: 'Page not found' })
            }
        } catch (err) {
            return error({ statusCode: 500, message: 'Internal server error' })
        }
    },
    data(){
        return {
            url: location.href
        }
    },
    head(){
        return {
            meta: [
                new OpenGraphMeta('url', this.url),
                new OpenGraphMeta('type', 'article'),
                new OpenGraphMeta('title', this.article.title),
                new OpenGraphMeta('image', this.article.featured_image)
            ]
        }
    }
}
</script>

<style lang="postcss">
.article{
    @apply mx-auto py-16;
    max-width: 48rem;
}
.article h1{
    @apply font-bold mb-8 text-4xl;
}
.article h2{
    @apply font-bold text-2xl;
}
.article h3{
    @apply font-bold text-lg;
}
.article .content{
    @apply flex flex-col gap-4;
}
.article .youtube{
    @apply h-0 relative;
    padding-bottom: 56.25%; /* 16:9 */
}
.article .youtube iframe{
    @apply absolute h-full left-0 top-0 w-full;
}
</style>
