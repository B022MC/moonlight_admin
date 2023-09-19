/**
* @author  B022MC
* @date  2023/9/13 14:59
* @Software: WebStorm moonlight_admin
* @version 1.0
*/

<script lang="ts" setup>
import { ref } from 'vue';
import a_sider from '../../layout/sider/sider.vue'
import a_header from '../../layout/header/header.vue'
const collapsed = ref<boolean>(false);
</script>
<style scoped>
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
<template>
    <a-layout style="min-height: 100vh">
      <a-layout-sider  v-model:collapsed="collapsed" collapsible>
          <a_sider  #extra/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0; height: 80px">
          <a_header/>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
         <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
</template>
