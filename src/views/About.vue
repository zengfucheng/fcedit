<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input style="border: 1px solid red"></input>
  </div>
</template>

<script>

  export default {
    name: 'about',
    components: {},
    data() {
      return {}
    },
    created() {
        console.log('进入about',this)
    },
    activated() {
        console.log('activated about')

        console.log(this.$vnode.parent.componentInstance.cache,123)
    },
  };
</script>

<style>

</style>