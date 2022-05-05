import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [
        "assets/css/style.css"
    ],
    modules: ['@nuxtjs/axios'],
    buildModules: ['@intlify/nuxt3'],
    axios: {
        proxyHeaders: false
    },
    intlify: {
        vueI18n: "scripts/i18n.mjs"
    },
    test: false
})
