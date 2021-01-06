<template>
    <footer class="sheet p-4 text-sm z-10">
        <x-container class="flex flex-col gap-4 items-center justify-between">
            <span><x-logotype /> &copy; 2021</span>
            <nuxt-link class="text-blue-600" to="/privacidad-y-cookies">Políticas de privacidad y cookies</nuxt-link>   
            <div class="flex gap-4">
                <a class="flex gap-2 hover:bg-black hover:bg-opacity-10 items-center px-4 py-2 rounded-full" href="#" rel="nofollow" target="_blank">
                    <img src="/icons/facebook.svg" alt="Facebook" />
                    Facebook
                </a>
                <a class="flex gap-2 items-center" href="#" rel="nofollow" target="_blank">
                    <img src="/icons/instagram.svg" alt="Instagram" />
                    Instagram
                </a>
                <a class="flex gap-2 items-center" href="#" rel="nofollow" target="_blank">
                    <img src="/icons/youtube.svg" alt="YouTube" />
                    YouTube
                </a>
            </div>
        </x-container>
    </footer>
</template>