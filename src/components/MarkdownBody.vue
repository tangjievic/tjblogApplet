<template>
	<article class="article markdown-body" v-html="htmlstirng">
		
	</article>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props:{
		htmlstirng:String
	}
})
</script>
<style lang="less"></style>