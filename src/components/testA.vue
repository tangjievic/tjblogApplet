<template>
    <div>{{$attrs.testAttrs}}我是组件A:监听B得到的参数——{{params}}</div>
</template>
<script>
export default {
    data(){
        return{
            params:''
        }
    },
    mounted(){
        this.$parent.$on('bEvent',(value)=>{
            // 接受b组件带过来的值
            this.params = value
        })
    }
}
</script>