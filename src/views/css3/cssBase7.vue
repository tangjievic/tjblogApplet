<template>
<code-edite moduletitle="css3体系重建" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
    <div :class="['textbox_1',show?'fadeIn':'fadeOut']"></div>
    <div>
        <a-button @click="clickSH">{{!show?'点击显示':'点击隐藏'}}</a-button>
    </div>
    <markdown-body :htmlstirng="textdata[1]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/css3/cssbase7';
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
                name: 'cssbase7',
                title: "其他",
            },
            show: false
        }
    },
    methods: {
        clickSH() {
            this.show = !this.show;
        }
    },
    mounted() {

    }
})
</script>

<style lang="less" scoped>
.textbox_1 {
    background-color: pink;
    width: 200px;
    height: 200px;
    transition: visibility 0.5s ease-in, opacity 0.5s ease-in;
}

.fadeIn {
    visibility: visible;
    opacity: 1;
}

.fadeOut {
    position: absolute;
    visibility: hidden;
    opacity: 0;
}
</style>
