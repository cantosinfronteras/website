import { DataStore } from 'aws-amplify'
import { Article } from '../../models'

export default {
    async fetchArticles({ commit }){
        try {
            const articles = await DataStore.query(Article)
            commit('setArticles', articles)
        } catch (err) {
            commit('setArticles', null)
        }
    }
}
