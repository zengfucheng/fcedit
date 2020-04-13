<template>
  <!--  <div class="home">-->
  <!--    <img alt="Vue logo" src="../assets/logo.png" v-show="show"/>-->
  <!--    <HelloWorld msg="Welcome to Your Vue.js App" @click.native="showClick" />-->
  <!--    <input style="border: 1px red solid"></input>-->
  <!--  </div>-->
<!--  <el-container>-->
<!--    <el-aside width="200px" style="background: red">Aside</el-aside>-->
<!--    <el-container>-->
<!--      <el-header style="background: #2c3e50">Header</el-header>-->
<!--      <el-main>-->
<!--        Main-->
<!--        <input></input>-->
<!--        <el-input prefix-icon="el-icon-date" autofocus></el-input>-->
<!--      </el-main>-->
<!--    </el-container>-->
<!--  </el-container>-->
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>
      <div>
          {{ $t('logins.names') }}
      </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/views/HelloWorld.vue";
  import modal from '@/mixins/modal';

  export default {
    name: 'home',
    mixins: [modal],
    directives: {
      focus: {
          inserted(el) {
            console.log('自动绑定焦点')
            el.focus();
          }
      }
    },
    components: {
      HelloWorld
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
      }
    },
    created() {
      console.log('进入home',this);
    },
    activated() {
      console.log('activaed home');
      this.getShow();
      console.log(this.$vnode.parent.componentInstance.cache,123)
    },
    beforeRouteLeave(to, from, next) {
      // this.$destroy();
      next();
    },
    methods: {
      getShow() {
        console.log('获取show状态: ',this.show)
        return this.show;
      }
    }
  };
</script>
