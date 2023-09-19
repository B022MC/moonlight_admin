/**
* @author  B022MC
* @date  2023/9/19 12:41
* @Software: WebStorm moonlight_admin
* @version 1.0
*/
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout=() =>{
  // 清除token
  sessionStorage.removeItem('token');
  // 使用路由导航到登录页面
  router.push('/login');
}
</script>

<template #overlay>
  <a-dropdown :arrow="{ pointAtCenter: true }" >
    <a-space :size="20" wrap>
      <a-avatar src="src/assets/img/b022.jpg" />
    </a-space>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">个人中心</a>
        </a-menu-item>
        <a-menu-item>
          <a @click="logout">退出登录</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>

</template>

<style scoped>

</style>
