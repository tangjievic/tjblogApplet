<template>
<code-edite moduletitle="前端算法基础" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/alg/algbase1';
import Menudata from './menudata';
export default Vue.extend({
    components: {
        CodeEdite,
        MarkdownBody
    },
    data() {
        return {
            textdata: data as any,
            menudata: Menudata,
            selectmenu: {
                name: 'algbase1',
                title: "常用算法思想",
            },
            nums: [1, 2, 7, 11, 8, 15],
            target: 3
        }
    },
    methods: {
        //枚举算法
        enumeration(nums: number[], target: number) {
            const saveIndex: number[] = [];
            nums.forEach((item: number, index: number) => {
                for (let i = index + 1; i < nums.length; i++) {
                    if (item + nums[i] === target) {
                        saveIndex.push(index, i)
                    }
                }
            })
            return saveIndex
        },
        //递归算法
        recursion(num: number) {
            if (num <= 1) {
                return 1
            } else {
                return num * this.recursion(num - 1)
            }
        }
    },
    mounted() {
        const enuResult = this.enumeration(this.nums, this.target);
        // console.log(enuResult)
    }
})
</script>

<style>
</style>
