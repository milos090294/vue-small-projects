<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
      <div
        class="option"
        v-for="option in question.options"
        :key="option.id"
        @click="emitSelectedOption(option.isCorrect)"
      >
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<style scoped>
.question-container {
  margin-top: 1rem;
}

.question {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.option {
  display: flex;
  margin-bottom: 1rem;
  cursor: pointer;
}

.option-label {
  background: bisque;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  width: 80%;
}

.option-value p {
  font-size: 2rem;
  background: whitesmoke;
  width: 100%;
  height: 3rem;
  padding: 0 20px;
}
</style>
