<template>
  <div class="results">
    <p>Your results</p>
    <h1>{{ numberOfCorrectAnswers }} / {{ numOfQuestions }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { numberOfCorrectAnswers, numOfQuestions } = defineProps([
  "numberOfCorrectAnswers",
  "numOfQuestions",
]);
</script>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
</style>
