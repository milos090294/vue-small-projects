<template>
  <header>
    <h4>Question {{ questionStatus }}</h4>
    <div class="bar">
      <div class="completion" :style="{ width: barPercent }"></div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

const { questionStatus, barPercent } = defineProps([
  "questionStatus",
  "barPercent",
]);
</script>

<style scoped>
header {
  margin-top: 1rem;
}

header h4 {
  font-size: 2rem;
}

.bar {
  width: 300px;
  height: 50px;
  border: 3px solid bisque;
}

.completion {
  height: 100%;
  width: 0%;
  background: bisque;
}
</style>
