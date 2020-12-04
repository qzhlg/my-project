<template>
    <div>
        <H1>{{msg}}</H1>
        <button @click="addMethod">点击</button>
        <p>this number will {{count}}</p>
        <button @click="go_newPage">组件通信</button>
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
    name:'Data',
    data(){
        return {
            msg:'hello word!',
            count:0
        }
    },
    methods:{
        addMethod(){
            this.count += 1
        },
        go_newPage(){
            this.$router.push({
                path:'/cmptComuncation'
            })
        }
    }
 
})
</script>

<style scoped>

</style>
