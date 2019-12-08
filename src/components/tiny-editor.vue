<template>
    <editor
            :api-key='getTinyKey'
            :init="getTinyConfig"
            :disabled="readonly"
            v-model="content"
            v-on:onChange="this.update"
            v-on:onInit="this.loaded"></editor>
</template>
<script>

    import tinyConfig from "../js/tinyConfig";

    export default {
        name: 'tiny-editor',
        components: {
            editor: () => import(/* webpackChunkName: "tinymce" */ "@tinymce/tinymce-vue"),
        },
        computed: {
            getTinyConfig: function () {
                return tinyConfig.getConfig(this.type);
            },
            getTinyKey: function () {
                return tinyConfig.getAPIKey();
            }
        },
        data: function () {
            return {
                content: this.value, // default to the passed value
                editor: false
            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            readonly: {
                type: Boolean,
                required: false,
                default: false
            },
            type: {
                type: [Boolean, String],
                default: false
            }
        },
        methods: {
            loaded: function (event, editor) {

                // tiny has loaded, now say we are loaded

                // update the editor
                this.editor = editor;

                // if readonly, set state
                if (this.readonly)
                {
                    this.editor.setMode('readonly');
                }
            },
            update: function () {
                // pass updated content back to the parent
                this.$emit('input', this.content);
            }
        }
    }
</script>