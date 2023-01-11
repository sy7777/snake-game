<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  // 改变盒子模型计算方式
  box-sizing: border-box;
}
body{
  font:bold 20px "Courier"
}
</style>
