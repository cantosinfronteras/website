<template>
    <div>
        <!-- Load Facebook SDK for JavaScript -->
        <div id="fb-root"></div>

        <!-- Your Chat Plugin code -->
        <div 
            class="fb-customerchat"
            attribution=setup_tool
            page_id="183956588885504"
            theme_color="#2563EB"
            logged_in_greeting="¡Hola! ¿En qué puedo ayudarte?"
            logged_out_greeting="¡Hola! ¿En qué puedo ayudarte?">
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v9.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
}
</script>
