<template>
    <div class="content">
        <h1>TinyMCE 5 Vue Integration</h1>
        <p>A working demo to help developers play with working examples of custom external plugins for TinyMCE 5.</p>

        <h2>Editor Component</h2>
        <tiny-editor v-model="data" name="MyTinyInstance"></tiny-editor>

        <h2>Content</h2>
        <div v-html="data" class="vue-demo-content"></div>
        <p class="is-size-7">The above content is back in our App.vue file. As you type above, the local data will be updated too.</p>

        <hr>

        <tiny-editor v-model="data" type="simple"></tiny-editor>

        <h2>Read-only Editor</h2>
        <tiny-editor v-model="data" type="simple" :readonly="true"></tiny-editor>

        <hr>
        <p class="is-size-7">TinyMCE is made by
            <a href="https://www.tiny.cloud/" target="_blank">Tiny</a>. This example is using the cloud-hosted testing version,
            and you will get an API Key warning unless you register for your own API Key.</p>
        <p class="is-size-7">You can use the included package.json to pull in TinyMCE 5 for local use. Just update the src of the script tag above to point to your local version.</p>
        <p class="is-size-7">Styling using the standard CDN build of
            <a href="https://bulma.io/" target="_blank">Bulma</a>.
        </p>
    </div>
</template>
<script>
    export default {
        components: {
            'tiny-editor': () => import(/* webpackChunkName: "tiny-editor" */ './components/tiny-editor.vue'),
        },
        data: function () {
            return {
                data: '<p>Hello there, how is Tiny and Vue treating you today?</p>'
            }
        }
    }
</script>
<style lang="scss">
    @import 'scss/main.scss';
</style>