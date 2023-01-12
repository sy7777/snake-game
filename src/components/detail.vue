<template>
  <div>Detail works</div>
  <button @click="$router.back()">Back</button>
  <div>name: {{ $route.params.name }}</div>
  <div>price: {{ $route.params.price }}</div>
  <div>id: {{ $route.params.identity }}</div>
  <!-- <div>name: {{ route.query.name }}</div>
  <div>price: {{ route.query.price }}</div>
  <div>id: {{ route.query.id }}</div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Vue } from "vue-class-component";
import { useRoute,useRouter } from "vue-router";
import { data } from "./list.json";

export default defineComponent({
//   setup() {
//     return {
//       route: useRoute(),
//       router: useRouter(),
//     };
//   },
created(){
    console.log(data.find(v=>v.id === Number(this.$route.params.identity)))
},
data(){
    return{
       mydata :data.find(v=>v.id === Number(this.$route.params.identity))
    }
}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"></style>
