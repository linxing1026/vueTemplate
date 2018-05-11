<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}</h3>
        <div>
            <button @click="add">+</button>
            <button @click="reduce">-</button>
        </div>
    </div>
</template>
<script>
    import store from "@/store/store"
    export default{
        data(){
            return{
                msg:'Hello Vuex'

            }
        },
        store,
        computed:{
            count(){
                return this.$store.state.count
            }
        },
        methods:{
            add:function(){
                this.$store.dispatch("INC")
            },
            reduce:function(){
                this.$store.dispatch("RED")
            }
        }
    }
</script>
<style scoped>

</style>
    