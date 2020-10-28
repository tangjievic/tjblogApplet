<template>
<code-edite moduletitle="css3体系重建" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/css3/cssbase8';
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
            selectmenu: {
                name: 'cssbase8',
                title: "要点补充",
            },
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
