<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in mydata" :key="item.id" border="1">
          <th>{{ item.name }}</th>
          <th>{{ item.price }}</th>
          <th><button @click="toDetail(item)">Detail</button></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Vue } from "vue-class-component";
import { useRouter } from "vue-router";
import "../less/style.less";
import { data } from "./list.json";
// json文件ctrl+alt+shift+s四个键一起生成interface
interface Item {
  name: string;
  price: number;
  id: number;
}
// type Item = {
//   name: string;
//   price: number;
//   id: number;
// }
export default defineComponent({
  data() {
    return {
      mydata: data,

    };
  },
  // setup() {
  //   return {
  //     router: useRouter(),
  //   };
  // },
  methods: {
    toDetail(item: Item) {
      // query传参用path
      // this.router.push({
      //   path: "detail",
      //   // 把参数传过去，query只接受对象
      //   query: {...item},
      // });


      // params传参用name
      this.$router.push({
        name: "detail",
        // 把参数传过去，query只接受对象
        params: {
          identity:item.id
        },
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"></style>
