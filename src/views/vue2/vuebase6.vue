<template>
	<code-edite moduletitle="关于Vue2的基础点" :selectmenu="vue2base" :menuarray="menudata">
		<markdown-body></markdown-body>
	</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/vue2/vue2base6';
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
			vue2base:{
				name:"vue2base6",
				title:"vue2源码分析（1）"
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