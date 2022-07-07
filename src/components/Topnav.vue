<template>
    <div class="app">
        <div class="top">
            <div class="logo">
                <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                    alt="掘金">
            </div>
            <div class="nav">
                <a v-for="(item, index) in state.navList" :class="index == state.navIndex ? 'active' : ''"
                    @click="goNavigate(item.id)">{{ item.title }}</a>
                <div class="version">v0.0.1</div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
// const route = useRoute()
const a = ref(null)
const state = reactive({
    navIndex: 0,  // 导航索引
    navList: [
        {
            id: 0,
            title: '首页'
        },
        {
            id: 1,
            title: '文档'
        }
    ]

})

const goNavigate = (id: number) => {
    state.navIndex = id
    if (id == 0) {
        router.push({ path: '/Home' })
    } else {
        router.push({ path: '/Doc' })
    }
}

</script>

<style>
.app {
    margin-top: 0;
}

.top {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #efeff5;
    padding: 0 30px;
    box-sizing: border-box;
}

.nav {
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
}

.nav a {
    cursor: pointer;
    flex: 1;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
}

.nav .version {
    flex: 1;
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
}

.nav .active {
    color: #18a058;
    border-bottom: 1px solid #18a058;
}
</style>


