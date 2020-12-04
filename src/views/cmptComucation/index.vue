<template>
    <div>
        <h1>父组件</h1>
         <Son
            :str="'我是字符换'"
            :num=5
            :obj="{count:'我是对象'}"
            :func="()=>this.func()"
            :arr="arr"
            @method="speak"
            ref="son"
         ></Son>
    </div>
</template>
<script >
import Son from '@/components/Son'
import Vue from 'vue'
export default Vue.extend({
    components:{
        Son
    },
    data(){
        return {
            arr: [1,2,3]
        }
    },
    methods:{
        func () {
            console.log('this is func');
        },
    
        speak (msg) {
            console.log(msg)
        }
    },
    mounted () {
        /** 事件监听 */
        this.$refs['son'].$on('send',(msg)=>{
            console.log(msg,'msg...')
        })
    }
})
</script>
<style scoped>

</style>