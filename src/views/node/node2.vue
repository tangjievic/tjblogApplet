<template>
<code-edite moduletitle="NODE.JS的使用" :selectmenu="vue2base" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
    <markdown-body :htmlstirng="textdata[1]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/node/node2';
import Menudata from './menudata';
export default Vue.extend({
    components: {
        CodeEdite,
        MarkdownBody
    },
    data() {
        return {
            textdata: data,
            menudata: Menudata,
            vue2base: {
                name: "node1",
                title: "koa"
            }
        }
    },
    methods: {

    },
    mounted() {

    }
})
</script>

<style>
</style>
