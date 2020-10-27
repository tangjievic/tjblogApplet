<template>
<div id="app">
    <main-layout>
        <router-view></router-view>
    </main-layout>
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

.ant-message .anticon {
    top: -2.3px !important;
}
</style>
