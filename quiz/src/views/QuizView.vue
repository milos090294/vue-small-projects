<template>
  <div>
    <header-comp
      :questionStatus="questionStatus"
      :barPercent="barPercent"
    ></header-comp>
    <question
      v-if="!showResults"
      :question="quiz[0].questions[currentQuestionIndex]"
      @selectOption="onOptionSelected"
    ></question>
    <results
      v-else
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
      :numOfQuestions="numOfQuestions"
    ></results>
  </div>
</template>

<script setup>
import Question from "../components/Question.vue";
import HeaderComp from "../components/Header.vue";
import Results from "../components/Result.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quizes from "../data/quizes.json";

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizes.filter((quiz) => quiz.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);
const numOfQuestions = quiz[0].questions.length;

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${quiz[0].questions.length}`;
});

const barPercent = computed(() => {
  return `${(currentQuestionIndex.value / quiz[0].questions.length) * 100}%`;
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz[0].questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<style scoped></style>
