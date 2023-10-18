<template>
  <div
    @click="navigateToQuiz(quiz.id)"
    class="card"
    v-for="quiz in quizes"
    :key="quiz.id"
  >
    <img :src="quiz.img" alt="" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["quizes"]);

const navigateToQuiz = (id) => {
  router.push(`/quiz/${id}`);
};
</script>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgb(122, 120, 120);
  margin-bottom: 2rem;
  margin-right: 1.5rem;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}
</style>
