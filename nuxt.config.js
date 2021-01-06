export default {
    srcDir: 'src',
    target: 'static',
    components: [
        { path: '~/components/', prefix: 'x' }
    ],
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    server: {
        host: '0.0.0.0'
    },
    plugins: [
        '~/plugins/amplify'
    ],
    build: {
        transpile: ['aws-amplify']
    },
    googleFonts: {
        families: {
            Inter: [400, 500, 600, 700, 800]
        }
    },
    head: {
        meta: [
            { name: 'charset', content: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
        ]
    }
}
