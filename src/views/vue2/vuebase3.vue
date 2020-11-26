<template>
	<code-edite moduletitle="关于Vue2的基础点" :selectmenu="vue2base" :menuarray="menudata">
		<markdown-body :htmlstirng="textdata[0]"></markdown-body>
        <test-a :testAttrs="888666"></test-a>
        <test-b>
            <template v-slot:btntitle="slotProps">
                <span>{{slotProps.text}}</span>
            </template>
        </test-b>
        <markdown-body :htmlstirng="textdata[1]"></markdown-body>
	</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/vue2/vue2base3';
import Menudata from './menudata';
import testA from '../../components/testA.vue';
import testB from '../../components/testb.vue';
export default Vue.extend({
    components: {
        CodeEdite,
        MarkdownBody,
        testB,
        testA
    },
    data() {
        return {
            textdata: data,
			menudata: Menudata,
			vue2base:{
				name:"vue2base3",
				title:"vue2组件开发"
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