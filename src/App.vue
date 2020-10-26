<template>
<div id="app">
    <main-layout></main-layout>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainLayout from './layout/MainLayout.vue';
export default Vue.extend({
    components: {
        MainLayout
    }
})
</script>

<style lang="less">
@import url('./tool/code.less');
</style>
