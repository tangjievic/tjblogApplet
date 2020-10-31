<template>
<code-edite moduletitle="前端性能优化" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
    <img sizes="(max-width: 360px) 340px, 128px" srcset="xxx.jpg 375w 3x,xxx1.jpg 950w 2x,xxx2.jpg 1920w 1x">
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/opt/optbase4';
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
                name: 'optbase4',
                title: "资源优化",
            },
        }
    }
})
</script>

<style>
</style>