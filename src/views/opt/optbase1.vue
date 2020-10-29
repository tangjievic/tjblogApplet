<template>
<code-edite moduletitle="前端性能优化" :selectmenu="selectmenu" :menuarray="menudata">
    <markdown-body :htmlstirng="textdata[0]"></markdown-body>
    <markdown-body :htmlstirng="textdata[1]"></markdown-body>
</code-edite>
</template>

<script lang="ts">
import Vue from 'vue'
import CodeEdite from '../../layout/CodeEdite.vue';
import MarkdownBody from '../../components/MarkdownBody.vue';
import data from '../../markdownts/opt/optbase1';
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
                name: 'optbase1',
                title: "基本优化",
            },
        }
    },
    methods: {
        // load事件触发 可交换时间测试
        timeToInterAcrtive(){
            let timing:any = performance.getEntriesByType('navigation')[0];
            let diff = timing.domInteractive - timing.fetchStart;
            this.$message.success(`可交互时间为${Math.round(diff)}ms`)
        },
    },
    mounted() {
        // 观察长任务
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                //console.log(entry)
            }
        })
        observer.observe({entryTypes: ['longtask']})

        // 见面可见性的状态监听
        let vEvent = 'visibilitychange';
        if ((document as any).webkitHidden != undefined) {
            vEvent = 'webkitvisibilitychange';
        }
        function visibilityChanged() {
            if (document.hidden || (document as any).webkitHidden) {
                //console.log("Web page is hidden.")
            } else {
                //console.log("Web page is visible.")
            }
        }
        document.addEventListener(vEvent, visibilityChanged, false);
        //网络状态监听
        let connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
        let type = connection.effectiveType;
        //console.log(type)
        function updateConnectionStatus() {
            //console.log("Connection type changed from " + type + " to " + connection.effectiveType);
            type = connection.effectiveType;
        }
        connection.addEventListener('change', updateConnectionStatus);


        // const EventUtil = {
        //     addHandler: function(element, type, handler) {
        //         console.log(element.addEventListener("offline"),()=>{
        //             console.log("Offline ---离线工作");
        //         })
        //         if (element.addEventListener) {
        //             element.addEventListener(type, handler, false);
        //         } else if (element.attachEvent) {
        //             element.attachEvent("on" + type, handler);
        //         } else {
        //             element["on" + type] = handler;
        //         }
        //     }
        // };

        // EventUtil.addHandler(window, "online", function() {
        //     console.log("Online---正常工作");
        // });
        // EventUtil.addHandler(window, "offline", function() {
        //     console.log("Offline ---离线工作");
        // });
    }
})
</script>

<style>
</style>
