<template>
    <div>
        test page
    </div>
</template>

<script>
    export default {
        name: "TestPage",
        components: {},
        data() {
            return {}
        },
        created() {
            console.log('进入test')
        },
        activated() {
            console.log('activated test')
        },
        beforeRouteLeave(to, from, next) {
            this.$destroy();
            console.log('销毁test组件')
            next();
        }
    }
</script>

<style scoped>

</style>