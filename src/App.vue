<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <!-- router-link加replace不留下历史记录 -->
    <router-link replace :to="{ name: 'login' }">Login</router-link>
    <router-link replace :to="{ name: 'game' }" style="margin-left: 10px"
      >Game</router-link
    >
    <button @click="toPage('login')">Log In</button>
    <button @click="toPage('game')">Game</button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Game from "./components/game.vue";

export default defineComponent({
  components: {
    Game,
  },
  // setup() {
  //   return {
  //     router: useRouter(),
  //   };
  // },
  methods: {
    // 两种跳转路由方式
    toPage(url: string) {
      this.$router.push({ path: url });
      // 前进后退
      // this.router.go(1)
      // this.router.back(1)
      // replace不留下历史记录
      // this.router.replace(url);
    },
  },
});
</script>

<style lang="less">

* {
  margin: 0;
  padding: 0;
  // 改变盒子模型计算方式
  box-sizing: border-box;
}
body {
  font: bold 20px "Courier";
}
</style>
