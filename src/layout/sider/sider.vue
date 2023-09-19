/**
* @author  B022MC
* @date  2023/9/16 16:50
* @Software: WebStorm moonlight_admin
* @version 1.0
*/

<template>
  <div class="logo"/>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item key="1">
      <router-link to="/welcome">
        <pie-chart-outlined/>
        <span>首页</span>
      </router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <router-link to="/userlist">
        <desktop-outlined/>
        <span>用户列表</span>
      </router-link>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>
            <span>
              <user-outlined/>
              <span>用户</span>
            </span>
      </template>
      <a-menu-item key="3">Tom</a-menu-item>
      <a-menu-item key="4">Bill</a-menu-item>
      <a-menu-item key="5">Alex</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #title>
            <span>
              <team-outlined/>
              <span>Team</span>
            </span>
      </template>
      <a-menu-item key="6">Team 1</a-menu-item>
      <a-menu-item key="8">Team 2</a-menu-item>
    </a-sub-menu>
    <a-menu-item key="9">
      <file-outlined/>
      <span>File</span>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts" setup>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import {ref} from "vue";

const selectedKeys = ref<string[]>(['1']);

</script>
<style>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
