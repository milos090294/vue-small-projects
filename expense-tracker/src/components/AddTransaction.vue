<template>
    <h3>Add new transaction</h3>
    <form @submit.prevent="onSubmit" id="form">
        <div class="form-control">
            <label for="text"> Text </label>
            <input type="text" id="text" v-model="text" placeholder="Enter text...">
        </div>
        <div class="form-control">
            <label for="amount">Amount <br> (negative - expense, positive - income)</label>
            <input type="text" id="amount" v-model="amount" placeholder="Enter amount...">
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>

<script setup>

import { ref, defineEmits } from 'vue';
import {useToast} from 'vue-toastification'


const text = ref('');
const amount = ref('');
const toast = useToast();
const emits = defineEmits(['transactionSubmitted'])

    const onSubmit = () => 
    {
       if(!text.value || !amount.value) {
            toast.error('Both fields must be filled')
            return;
       }

       const transactionData = {
        text: text.value,
        amount: parseFloat(amount.value)
       }

       emits('transactionSubmitted', transactionData);

       text.value = '';
       amount.value = '';
    }


</script>

<style lang="scss" scoped>

</style>