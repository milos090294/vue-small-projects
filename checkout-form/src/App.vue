<template>
  <div class="container">
      <PaymentInfo> </PaymentInfo>
      <OrderSummary></OrderSummary>
  </div>
</template>

<script setup>
  import PaymentInfo from './components/PaymentInfo.vue';
  import OrderSummary from './components/OrderSummary.vue';

</script>

<style scoped>

.container  
{
  width: 80%;
  height: 100vh;
  margin: auto;
  background: white;
  border-radius: 5%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

</style>