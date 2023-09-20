<template>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'ID'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import api from '../api/list.ts'
import {ElMessage} from "element-plus";


interface User {
  ID: string
  Username: string
  Mobile: string
  email: string
  CreatedAt: string
}
const data = ref<User[]>([]); // 使用 ref 声明 data 变量
let userinfo: User[];
const getUserList = async () => {
  try {
    const res = await api.getUserlistApi()
    if (res.status === 200) {
      ElMessage.success(res.data.msg)
      userinfo = res.data.data; // 将数据赋值给userinfo
      data.value = userinfo; // 更新data变量
      console.log(userinfo)
    }
  } catch (error) {
    console.error('获取用户列表失败:', error);
  }
}
onMounted(() => {
  // 在页面加载后执行 getUserList 函数
  getUserList();
});

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
    width: 80
  },
  {
    title: 'username',
    dataIndex: 'Username',
    key: 'Username',
    width: 150
  },
  {
    title: 'Mobile',
    dataIndex: 'Mobile',
    key: 'Mobile',
    width: 150,
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    ellipsis: true,
  },
  {
    title: 'CreatedAt',
    dataIndex: 'CreatedAt',
    key: 'CreatedAt',
    ellipsis: true,
    // slots: { customRender: 'CreatedAt' } // 使用 slots 渲染自定义内容
  },
];
</script>
