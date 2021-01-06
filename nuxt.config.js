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
    googleFonts: {
        families: {
            Inter: [400, 500, 600, 700, 800]
        }
    },
    head: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
        ]
    }
}