<template>
<code-edite moduletitle="关于Vue2的基础点" :selectmenu="vue2base" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
    <markdown-body :htmlstirng="textdata[1]"></markdown-body>
    <markdown-body :htmlstirng="textdata[2]"></markdown-body>
    <test-component name="我告诉你："></test-component>
    <markdown-body :htmlstirng="textdata[3]"></markdown-body>

</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/vue2/vue2base';
import Menudata from './menudata';
import test from '../../components/test.vue';

//编程式，创建组件
Vue.component('test-component', {

    render(h) {
        return h(test)
    },
})

Vue.directive('permission', {
    inserted(el) {
        console.log(el, 'xxxx')
        if (this.role !== 'admin') {
            el.parentElement.removeChild(el)
        }
    }
})

export default Vue.extend({
    components: {
        CodeEdite,
        MarkdownBody,
    },
    data() {
        return {
            textdata: data,
            menudata: Menudata,
            role: 'admin',
            vue2base: {
                name: "vue2base",
                title: "vue2基本储备"
            }
        }
    },
    methods: {},
    mounted() {

    }
})
</script>

<style>
</style>
