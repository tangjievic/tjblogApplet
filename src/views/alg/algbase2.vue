<template>
<code-edite moduletitle="前端算法基础" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/alg/algbase2';
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
                name: 'algbase2',
                title: "分治算法",
            },
        }
    },
    methods: {

    },
    mounted() {
        //分治算法
        function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
            let result: number;
            //先进行数组合并去重
            let num12 = nums1.concat(nums2).sort((n1, n2) => {
                return n1 - n2
            });
            if (num12.length === 0) {
                result = 0;
            } else if (num12.length % 2 === 0) {
                result = (num12[(num12.length / 2) - 1] + num12[(num12.length / 2)]) / 2
            } else {
                result = num12[(num12.length + 1) / 2 - 1];
            }
            //输出中中位数
            // console.log(result)
            return result
        }
        findMedianSortedArrays([1, 1], [1, 2])
    }
})
</script>

<style>
</style>
