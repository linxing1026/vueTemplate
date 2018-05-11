<template>
    <div>
        <book-header></book-header>
        <book-con></book-con>
        <book-footer></book-footer>
    </div>
</template>
<script>
    import bookHeader from "./bookHeader.vue";
    import bookFooter from "./bookFooter.vue";
    import bookCon from "./bookCon.vue";
    export default{
        components:{
            bookHeader,
            bookFooter,
            bookCon
        }
    }
</script>
<style>
    *{
        margin:0;
        padding:0;
    }
</style>