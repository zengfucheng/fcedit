<template>
    <div id="app">
        <svg-icon icon-class="bug"></svg-icon>
<!--        <img src="static/images/404.svg"/>-->
        <router-link to="/home">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/test">test</router-link>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>

    </div>
</template>

<script>
// import HelloWorld from '@/views/HelloWorld.vue';
import axios from 'axios';
import axiosApi from '@/common/api/axiosApi';
import { mapGetters, mapState } from 'vuex';
export default {
    name: 'app',
    components: {
        // HelloWorld
    },
    computed: {
        ...mapGetters({
            getToken:  'token',
            getName: 'names'
        }),
        ...mapState({
            getApp: 'app'
        })
    },
    created() {
        console.log('数据库',this.$store);
        // this.$store.commit('SET_TOKEN','zfc-names');     // 同步直接修改状态
        // this.$store.dispatch('Logins',{token:'cnm'});       // 异步修改状态
        this.$store.state.user.token = 'cam';       // 直接修改状态
        this.mesgPush();

    },
    methods: {
        mesgPush() {
            return;
            let a = axiosApi({api: '/home', method: 'get', data: JSON.stringify({name:'zfc'}), handleEvs(data){
                    console.log('返回数据',data)
                },
                errorEvs(err) {
                    console.log('返回错误',err)
                }});

        }
    }
};
</script>

<style lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    img{
        width: 20px;
    }
}
</style>
