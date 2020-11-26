<template>
    <button class="btn btn-outline-success waves-effect waves-light" @click="handClick">
        <slot name='btntitle' :text="text"></slot>
    </button>
</template>
<script>
export default {
    data(){
        return {
            index:1,
            text:'我是组件b，我触发事件'
        }   
    },
    methods:{
        handClick(){
            this.$parent.$emit('bEvent',`我是b组件带过来的值${this.index++}`)
        }
    }
}
</script>