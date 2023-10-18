<template>
    
      <header>
        <h1>Quizes</h1>
        <input v-model.trim ="search" type="text" name="" id="" placeholder="Search...">
      </header>
      <div class="options-container">
         <Card :quizes = quizes />
      </div>
   
  </template>
  
  <script setup>
  
    import q from "../data/quizes.json"
    import Card  from "../components/Card.vue"
    import { ref, watch } from "vue";
  
    const quizes = ref(q)
    const search = ref('')
  
    watch(search, () => 
    {
      quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
    })
  
  
  </script>
  
  <style  scoped>
  
    header 
    {
      margin-bottom: 10px;
      margin-top: 30px;
      display: flex;
      align-items: center;
    }
  
    header h1 
    {
      font-weight: bold;
      margin-right: 2rem;
    }
  
    header input 
    {
      border: none;
      background-color: rgba(128, 128, 128, 0.1);
      padding: 10px;
      border-radius: 5px;
    }
  
    .options-container 
    {
      display: flex;
      flex-wrap: wrap;
      margin-top: 3rem;
    }
  
  
  
  </style>