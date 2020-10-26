<template>
	<code-edite moduletitle="设计模式"
	selectmenu="obmod"
	:menuarray="menudata">
		<markdown-body :htmlstirng="textdata[0]"></markdown-body>
	</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/designmoe/obsmod';
import Menudata from './menudata.ts';
export default Vue.extend({
    components: {
        CodeEdite,
        MarkdownBody
    },
	data(){
		return{
			textdata:data,
			menudata:Menudata
		}
	}
})
</script>

<style>
</style>