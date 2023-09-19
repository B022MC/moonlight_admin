/**
* @author  B022MC
* @date  2023/9/18 15:18
* @Software: WebStorm moonlight_admin
* @version 1.0
*/
<script setup lang="ts">
import { ref } from 'vue';
import a_avatar from '../header/a_avatar.vue'
import a_badge from '../header/badge.vue'
const ghost = ref(false);
</script>

<template>
  <a-page-header
      :ghost="ghost"
      @back="() => $router.go(-1)"
  >

    <template #extra>
<!--      <a_badge/>-->
      <a_avatar/>
    </template>


  </a-page-header>
</template>

<style scoped>

</style>
