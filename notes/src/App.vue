<template>
  <main>
    <div v-if="openModal" class="overlay">
      <div class="modal">
        <textarea
          v-model.trim="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <small>{{ error }}</small>
        <button @click="addNote">Add Note</button>
        <button @click="toggleModal" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="toggleModal">+</button>
      </header>
      <div class="cards-container">
        <div
          v-for="note in notes"
          :key="note.id"
          class="card"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">{{ note.date }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const openModal = ref(false);
const newNote = ref("");
const notes = ref([]);
const error = ref('');

function getRandomColor() {
  const color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

const addNote = () => {
  if (newNote.value.length > 9) {
    notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date().toISOString().slice(0, 10),
      backgroundColor: getRandomColor(),
    });

    openModal.value = false;
    newNote.value = "";
    error.value = "";
  }
  else 
  {
    error.value = "Note must have 10 characters!"
  }
};

const toggleModal = () => {
  openModal.value = !openModal.value;
};
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 44px;
}

header button {
  border: 0;
  width: 50px;
  height: 50px;
  padding: 10px;
  cursor: pointer;
  background: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  background: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date {
  font-size: 1rem;
  font-weight: 800;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

small 
{
  color: crimson;
}
.modal {
  width: 750px;
  background: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.close {
  background: rgb(136, 34, 110) !important;
}
</style>
