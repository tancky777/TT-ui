<template>
  <div class="layout">
    <div class="content">
      <aside class="aside">
        <!-- 去button页面 -->
        <div class="go-btn" @click="goBtn()">button组件</div>
        <!-- <router-link class="menu-item text-overflow" to="/Doc/Button">
          button组件
        </router-link> -->
      </aside>
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { onMounted } from 'vue'
import {useRoute, useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute()


onMounted(()=> {
  // console.log(route.query)
})
const goBtn = ()=> {
  router.push({path: '/Doc/Button'})
}
</script>

<style>
  .go-btn {
    cursor: pointer;
  }
</style>
