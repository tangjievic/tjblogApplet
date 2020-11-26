<template>
<code-edite moduletitle="css3体系重建" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/alg/algbase5';
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
                name: 'algbase5',
                title: "JS数组",
            },
        }
    },
    methods: {

    },
    mounted() {
        //console.log(this.textdata[0])
    }
})
</script>

<style>
</style>
