<script setup lang="ts">
import { onMounted, ref } from 'vue'

type Goal = {
  title: string;
  description: string;
  tasks: Task[];
}

type Task = {
  title: string;
  current: number;
  total: number;
}

const title = ref('Ведьмак')
const goalInfo = ref<Goal>({});

onMounted(() => {
  try {
    // const data = fetch('/api/goals/')
    // goalInfo.value = data
    goalInfo.value = {
      title: "Ведьмак",
      description: "Вот таков наш путь",
      task: 4,
      lal: "haha",
    }

  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-semibold">{{ title }}</h1>
    <div class="flex gap-2"></div>
    <progress class="progress progress-primary w-full" value="50" max="100"></progress>

    <div class="card w-96 bg-base-100 card-md shadow-sm">
      <div class="card-body">
        <h2 class="card-title">Последнее желание</h2>
        <progress class="progress progress-primary w-full" value="50" max="100"></progress>
      </div>
    </div>

    <button class="btn w-64 rounded-full">Button</button>
  </div>
</template>

<style scoped></style>
