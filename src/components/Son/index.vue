<template>
    <div>
        子组件

        <button @click="$emit('send','子组件发送的消息1')">send_one</button>
        <div></div>
        <button @click="sendMsg">send_two</button>
    </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    props:{
            arr:Array,// 定义参数类型
            num:Number,
            str:String,
            str2:{
                type:String,
                default:"我是默认字符串"// 定义参数默认值
            },
            func:{
                type:Function,
                required:false// 定义参数是否必须值
            },
            obj:{
                type: Object,
                required:false
            }
    },
    methods:{
        /** 事件监听 */
        sendMsg () {
            this.$emit('send','我是子组件发送的消息2')
        }
    },
    created () {
            console.log(this.str);
            console.log(this.str2);
            console.log(this.num);
            console.log(this.func);
            console.log(this.arr);
            console.log(this.obj);
            this.func();
    },
    mounted () {
        this.$emit('method','子组件发送的消息！')
    }
})
</script>
<style  scoped>

</style>