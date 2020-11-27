<template>
<code-edite moduletitle="设计模式" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/designmoe/designmoe9';
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
                name: 'designmoe9',
                title: "迭代器模式",
            },
        }
    },
    methods: {

    },
    mounted() {
        const arrays = [1,2,3,4,5,6,'test'];
        //生成遍历器
        const arraysIterator = arrays[Symbol.iterator]();
        const arraysIndexIterator = arrays.keys();

        // console.log(arraysIterator.next());
        // console.log(arraysIterator.next())
        // console.log(arraysIterator.next())
        // console.log(arraysIterator.next())
        // console.log(arraysIterator.next())
        //console.log(this.textdata[0])
    }
})
</script>

<style>
</style>
