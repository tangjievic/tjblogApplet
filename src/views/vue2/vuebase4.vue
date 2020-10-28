<template>
	<code-edite moduletitle="关于Vue2的基础点" :selectmenu="vue2base" :menuarray="menudata">
		<markdown-body></markdown-body>
	</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/vue2/vue2base';
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
				name:"vue2base4",
				title:"vue2基本储备"
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