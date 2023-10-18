<template>
  <main>
    <div>
      <h4>The current count is...</h4>
      <h1>{{ count }}</h1>
      <button @click="subToCount">-</button>
      <button @click="addToCount">+</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const addToCount = () => {
  count.value++;
};

const subToCount = () => {
  count.value--;
};
</script>

<style scoped>
main {
  background: aliceblue;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
