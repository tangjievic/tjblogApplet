<template>
<code-edite moduletitle="前端性能优化" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
    <!-- <iframe ref="layzIframe" height="500px" width="100%"></iframe> -->
    <markdown-body :htmlstirng="textdata[1]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/opt/optbase3';
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
                name: 'optbase3',
                title: "代码优化",
            },
        }
    },
    methods: {},
    // mounted() {
    //     setTimeout(() => {
    //         (this.$refs.layzIframe as Element).setAttribute('src', "https://tangjietop.cn")
    //     }, 5000)
    // }
})
</script>

<style>
</style>
