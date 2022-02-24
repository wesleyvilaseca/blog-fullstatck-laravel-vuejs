<template>
<div>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Blog</title>
    </head>

    <body>
        <nav-bar-component />
        <slot name="page-content"></slot>
        <footer-component-vue />
    </body>
</div>
</template>

<script>
import NavBarComponent from "./Components/NavBarComponent/NavBarComponent.vue";
import FooterComponentVue from "./Components/FooterComponet/FooterComponent.vue";
export default {
    name: 'bloglayout',
    components: {
        NavBarComponent,
        FooterComponentVue
    },
    data() {
        return {
            props: {
                title: String
            }
        }
    }
}
</script>
