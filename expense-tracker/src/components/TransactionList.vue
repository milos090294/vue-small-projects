<template>
    <h3>History</h3>
    <ul id="list" class="list" v-for="transaction in transactions" :key="transaction.id">
        <li v-if="transaction.amount < 0" class="minus">{{ transaction.text }} <span>$ {{ transaction.amount }}</span><button @click="removeTransaction(transaction.id)" class="delete-btn">x</button></li>
        <li v-else class="plus"> {{ transaction.text }} <span>$ {{ transaction.amount }}</span><button @click="removeTransaction(transaction.id)" class="delete-btn">x</button></li>
    </ul>
</template>

<script setup>
    	
      import { defineProps, defineEmits } from 'vue';
       
      const props = defineProps ({transactions: {
        type: Array, 
        required: true
      }})
      const emits = defineEmits(['deleteTransaction']);

      const removeTransaction = (id) => 
      {
        emits('deleteTransaction', id);
      }
      
</script>

<style lang="scss" scoped>

</style>    