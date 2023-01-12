import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 定义meta的interface 
declare module 'vue-router'{
  interface RouteMeta{
    title:string
  }
}
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    // component: Login,
    component: ()=>import("../components/login.vue"),
    // 别名
    alias:['/root','/root1','/root2'],
    children:[
      {
        path:'/game',
        components:{default:()=>import("../components/game.vue")}
        // <router-view name="aaa"> 
        // components:{aaa:()=>import("../components/aaa.vue")}
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    // component: Login,
    component: ()=>import("../components/login.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: ()=>import("../components/game.vue"),
  },
  {
    path: "/detail/:identity",
    name: "detail",
    component: ()=>import("../components/detail.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
