<template>
    <div id="fb-root"></div>
</template>

<script>
export default {
    head(){
        return {
            script: [
                {
                    async: '',
                    defer: '',
                    crossorigin: 'anonymous',
                    src: 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v9.0&appId=383940838944699&autoLogAppEvents=1',
                    nonce: 'Ov0yE4W8'
                }
            ]
        }
    }
}
</script>
