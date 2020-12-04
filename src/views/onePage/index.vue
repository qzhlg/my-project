<template>
    <div>
        <H1>{{msg}}</H1>
        <button @click="addMethod">点击</button>
        <p>this number will {{count}}</p>
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
        }
    }
 
})
</script>

<style scoped>

</style>
