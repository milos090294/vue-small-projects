<template>
  <div>
    <Header></Header>
    <div class="container">
      <Balance :total = +total></Balance>
      <Income :income="+income" :expense="+expense"></Income>
      <Transaction :transactions="transactions" @deleteTransaction="removeTransaction"></Transaction>
      <Add @transaction-submitted="handleTransaction"></Add>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import Income from "./components/IncomeExpence.vue";
import Transaction from "./components/TransactionList.vue";
import Add from './components/AddTransaction.vue'
import {useToast} from 'vue-toastification'
import { ref, computed } from 'vue';


const transactions = ref([]);
const toast = useToast();
const total = computed(()=> {
  return transactions.value.reduce( (acc, transaction) => 
  {
    return acc + transaction.amount;
  }, 0).toFixed(2);
}) 

const income = computed(()=> {
  return transactions.value.filter((transaction) => transaction.amount > 0)
  .reduce( (acc, transaction) => 
  {
    return acc + transaction.amount;
  }, 0).toFixed(2);
}) 


const expense = computed(()=> {
  return transactions.value.filter((transaction) => transaction.amount < 0)
  .reduce( (acc, transaction) => 
  {
    return acc + transaction.amount;
  }, 0).toFixed(2);
}) 

const handleTransaction = (value) => {
  transactions.value.push({
    id: Math.random().toString(36).substr(2, 9),
    text: value.text,
    amount: value.amount
  })

  toast.success("Transaction added.")
}

const removeTransaction = (id) => {

  
  let indexToRemove = transactions.value.findIndex(transaction => transaction.id === id)

  if(indexToRemove !== -1) 
  {
    transactions.value.splice(indexToRemove, 1);
    toast.success("Transaction removed.")
  }
  
}



</script>

<style scoped></style>
